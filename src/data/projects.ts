import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: 1,
    title: "Kuro — Enterprise AI Dev Companion",
    category: "Full Stack",
    year: "2026",
    image: "/images/kuro.jpg",
    description: "Native desktop productivity tool for enterprise developers. Local-first SQLite storage, optional Supabase cloud sync.",
    challenge: "Create a native app with local-first architecture and optional cloud integration, powered by local LLM inference.",
    solution: "Electron + React 19 with Groq (Llama 3.3-70b) for near-instant AI responses. Integrated Error Decoder, Permission Advisor with Oracle RBAC/Salesforce mapping, Knowledge Hub.",
    results: "Shipped production app with secure credential storage (Electron safeStorage) and audit logging.",
    technologies: ["Electron", "React 19", "Vite", "Tailwind CSS v4", "Framer Motion", "SQLite", "Supabase", "Groq API"],
    links: {
      github: "https://github.com/SujalMatolia0/",
      live: null
    },
    highlights: [
      "Desktop application architecture",
      "Local-first data design",
      "AI integration",
      "Security (credential storage)"
    ]
  },
  {
    id: 2,
    title: "ArtCraft Marketplace",
    category: "Full Stack",
    year: "2025",
    image: "/images/artcraft.jpg",
    description: "Custom e-commerce platform for original artwork. Modular system design with seamless user, artwork, and payment interactions.",
    challenge: "Build a scalable marketplace where artworks, users, and payments interact seamlessly with type-safe interactions.",
    solution: "Next.js frontend with adaptive UI (Mantine). Supabase backend with event-driven logic and transaction hooks. Razorpay for payments.",
    results: "Production platform handling artwork listings, user profiles, and secure payments.",
    technologies: ["Next.js", "Mantine", "Supabase", "Razorpay", "PostgreSQL"],
    links: {
      github: "https://github.com/SujalMatolia0/ArtCraft-marketplace",
      live: null
    },
    highlights: [
      "E-commerce architecture",
      "Payment integration",
      "Dynamic UI states",
      "Scalable backend"
    ]
  },
  {
    id: 3,
    title: "Locus — Hackathon Hosting Platform",
    category: "Full Stack",
    year: "2025",
    image: "/images/locus.jpg",
    description: "Git-integrated system for code submissions, scoring, and user roles syncing in real-time.",
    challenge: "Synchronize code submissions from GitHub, score them automatically, and manage participant certifications at scale.",
    solution: "GitHub OAuth integration, PostgreSQL for event data. Next.js + Mantine for responsive UI. Automated certification pipelines.",
    results: "Platform managing multiple hackathons with real-time submission syncing and certification automation.",
    technologies: ["Next.js", "Mantine", "GitHub OAuth", "PostgreSQL", "Automation pipelines"],
    links: {
      github: "https://github.com/SujalMatolia0/locus-hack",
      live: null
    },
    highlights: [
      "OAuth integration",
      "Real-time data sync",
      "Automation & pipelines",
      "Type-safe architecture"
    ]
  },
  {
    id: 4,
    title: "Neocosmicx Quantum Computing Platform",
    category: "Research",
    year: "2024-2025",
    image: "/images/neocosmicx.jpg",
    description: "Core APIs powering real-time quantum circuit simulations. Full Stack: backend API design + animated web UI.",
    challenge: "Translate complex quantum computing concepts and real-time simulation results into accessible, interactive web experiences.",
    solution: "AdonisJS + Lucid ORM backend with tRPC APIs for type-safe communication. Next.js + Mantine + Framer Motion frontend for dynamic content.",
    results: "Production quantum computing research platform enabling researchers to run simulations and visualize results.",
    technologies: ["AdonisJS", "Lucid ORM", "PostgreSQL", "TypeScript", "Next.js", "Mantine", "tRPC", "Prisma", "Framer Motion"],
    links: {
      github: undefined,
      live: null
    },
    highlights: [
      "Research platform",
      "Real-time data",
      "Complex backend",
      "High-performance UI"
    ]
  },
  {
    id: 5,
    title: "IOTX IoT Platform Automation",
    category: "Enterprise",
    year: "2025-Present",
    image: "/images/iotx.jpg",
    description: "Enterprise workflow automation using Oracle Fusion and Oracle Visual Builder Studio. Python backend services for IoT device data.",
    challenge: "Design scalable workflows for enterprise IoT automation with real-time device data integration.",
    solution: "Oracle Fusion for workflows, Oracle VBS for UI. Python REST APIs interfacing with live IoT data streams. Modular service design.",
    results: "Production enterprise system managing complex IoT device integrations and workflow automation.",
    technologies: ["Oracle Fusion", "Oracle VBS", "Python", "REST APIs", "IoT protocols"],
    links: {
      github: undefined,
      live: null
    },
    highlights: [
      "Enterprise architecture",
      "IoT integration",
      "Real-time systems",
      "System design decisions"
    ]
  },
  {
    id: 6,
    title: "Melody Mix — Music Streaming App",
    category: "Full Stack",
    year: "2023",
    image: "/images/melody-mix.jpg",
    description: "State-driven music streaming application. Seamless playlist, playback, and persistence across sessions.",
    challenge: "Design a responsive music app with latency-aware playback and seamless persistence.",
    solution: "Prisma ORM for data persistence, modular audio APIs. Next.js + Mantine for responsive UI.",
    results: "Functional music streaming app with state management and playback controls.",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Mantine"],
    links: {
      github: undefined,
      live: null
    },
    highlights: [
      "State management",
      "Audio APIs",
      "Responsive design"
    ]
  }
];
