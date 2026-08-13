import { Project } from "./types";

export const projects: Project[] = [
  {
    title: "Task Management System",
    description:
      "A web-based task management system designed to help teams create, organize, assign, and track tasks within projects. The system supports different user roles and provides functionality for managing projects, tasks, members, comments, attachments, and notifications.",
    tech: ["React.js", "Node.js", "Express.js", "PostgreSQL", "Supabase"],
    image: "/projects/placeholder-1.svg",
    contribution:
      "Worked as team leader and contributed to system design, backend development, database design, API development, and project coordination.",
    featured: true,
  },
  {
    title: "Store Management System",
    description:
      "A Java-based store management system with dashboards, inventory tracking, billing, and refunds, built with Swing for the interface and MySQL for data storage.",
    tech: ["Java", "Java Swing", "MySQL", "OOP"],
    image: "/projects/placeholder-2.svg",
    githubUrl:
      "https://github.com/Harshana-adhi/clothing_warehouse_OOPProject-year-1-sem-2",
    contribution:
      "Designed and implemented the full application, including the dashboard, inventory, billing, and refund modules.",
    featured: true,
  },
  {
    title: "Console Snake Game",
    description:
      "A console-based Snake game built in C++ with a modular design, dynamic memory management, multiple lives, and bonus fruit mechanics.",
    tech: ["C++", "OOP", "Console Development"],
    image: "/projects/placeholder-3.svg",
    githubUrl: "https://github.com/Harshana-adhi/programming-concept--finalproject",
    contribution:
      "Designed and implemented the full game, including game logic, memory management, and gameplay mechanics.",
  },
  {
    title: "[Project Four — Coming Soon]",
    description:
      "[A new project will be added here. This card can later be replaced with another academic, personal, or professional project.]",
    tech: ["[Technology 1]", "[Technology 2]", "[Technology 3]"],
    image: "/projects/placeholder-1.svg",
    contribution: "[My individual contribution.]",
  },
];
