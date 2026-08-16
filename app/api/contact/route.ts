import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/contact-schema";
import { profile } from "@/data";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid submission.", issues: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const { name, email, message } = parsed.data;
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    // No API key configured yet — see README for Resend setup instructions.
    return NextResponse.json(
      {
        error:
          "Email sending isn't configured yet. Set RESEND_API_KEY in .env.local (see README) to enable the contact form.",
      },
      { status: 503 }
    );
  }

  const resend = new Resend(apiKey);

  const escapedName = escapeHtml(name);
  const escapedMessage = escapeHtml(message).replace(/\n/g, "<br />");

  try {
    const { error } = await resend.emails.send({
      from: "Harshana Praveen Portfolio <contact@harshanapraveen.best>",
      to: `${profile.name} <${profile.email}>`,
      replyTo: email,
      subject: `New portfolio message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 560px; margin: 0 auto; color: #1a1a1a;">
          <h2 style="font-size: 18px; margin-bottom: 4px;">New message from your portfolio</h2>
          <p style="color: #555; margin-top: 0;">
            <strong>${escapedName}</strong> (${escapeHtml(email)}) sent you a message:
          </p>
          <div style="background: #f5f5f5; border-radius: 8px; padding: 16px; line-height: 1.6;">
            ${escapedMessage}
          </div>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json({ error: "Failed to send message." }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }
}
