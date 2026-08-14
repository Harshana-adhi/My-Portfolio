import { Project } from "./types";

export const projects: Project[] = [
  {
    title: "Task Management System",
    description:
      "A team-built task management platform for planning, assigning, and tracking work in real time, developed as part of the INTE 21323 group module. Supports secure role-based access (Admin, Project Manager, Collaborator), task workflows from To Do to Completed with priorities and deadlines, real-time notifications, comments and attachments for collaboration, and a REST API documented with Swagger/OpenAPI.",
    tech: ["React.js", "Node.js", "Express.js", "PostgreSQL", "Supabase", "JWT", "WebSockets"],
    image: "/projects/task-management-system.webp",
    githubUrl: "https://github.com/Harshana-adhi/task-management-system",
    liveUrl: "https://taskify.task-management-system.best/",
    contribution:
      "Led the team as Team Leader across the full development lifecycle — from requirements and database design to deployment — while implementing core backend and API features.",
    featured: true,
  },
  {
    title: "AI Powered Smart Resume Reviewer",
    description:
      "An AI-powered web app that analyzes resumes and CVs and returns instant, structured feedback across Clarity, Grammar, ATS-Friendliness, and Impact, with quoted excerpts from the resume and concrete fixes. Includes an OCR fallback for scanned or design-template PDFs (like Canva exports) without a real text layer, plus automatic validation that rejects non-resume content.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Groq",
      "Zod",
      "OCR (Tesseract.js)",
      "PDF Parsing",
      "React Dropzone",
      "Render",
    ],
    image: "/projects/smart-resume-reviewer.webp",
    githubUrl: "https://github.com/Harshana-adhi/ai-powered-smart-resume-cv-reviewer",
    liveUrl: "https://ai-powered-smart-resume-cv-reviewer.onrender.com/",
    contribution:
      "Built and deployed the application end-to-end, including the AI analysis pipeline, PDF/OCR text extraction, and schema-validated response handling.",
    featured: true,
  },
  {
    title: "Store Management System",
    description:
      "A Java-based store management system built around OOP principles — encapsulation, abstraction, inheritance, and polymorphism — with a layered DAO architecture for scalability and maintainability. Includes role-based dashboards for Admin, Manager, and Staff, user/employee/customer/supplier management, inventory and stock tracking, a billing system with bill generation, and advanced refund handling for partial and multiple refunds.",
    tech: ["Java", "Java Swing", "MySQL", "Object-Oriented Programming", "DAO Pattern"],
    image: "/projects/clothing-warehouse.webp",
    githubUrl: "https://github.com/Harshana-adhi/clothing_warehouse.rebuilt",
    contribution:
      "Collaborated with the team to design and implement the OOP architecture and DAO layer, along with the inventory, billing, and refund modules.",
  },
  {
    title: "Hungry Snake",
    description:
      "A classic console-based Snake game built in C++ using function-based modular programming and dynamic memory allocation without STL containers. Features multiple lives, score tracking, bonus fruit timers, and restart/exit flows, with custom console manipulation for smooth, flicker-free rendering.",
    tech: ["C++", "Object-Oriented Programming", "Console Development"],
    image: "/projects/hungry-snake-game.webp",
    githubUrl: "https://github.com/Harshana-adhi/programming-concept--final-project",
    contribution:
      "Worked with the team to implement core game logic, memory management, and console rendering.",
  },
];
