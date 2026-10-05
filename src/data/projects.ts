export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle?: string;
  description: string;
  bullets?: string[];
  role: string;
  category: string;
  stack: string[];
  featured: boolean;
  highlightBadge?: string;
  demoUrl?: string;
  githubUrl?: string;
  image?: string;
}

export const featuredProject: Project = {
  id: "tessera",
  number: "01",
  title: "TESSERA",
  subtitle: "AI REPOSITORY INTELLIGENCE PLATFORM",
  description:
    "AI-assisted GitHub repository analyzer that helps developers understand a project's structure, security, quality, and code context through evidence-grounded AI insights.",
  bullets: [
    "Built an AI-powered GitHub repository analyzer for understanding unfamiliar codebases.",
    "Added interactive architecture visualization, Code Explorer, and AI Code Audit.",
    "Built project-scoped notes with search, tags, autosave, and AI-generated insights.",
    "Integrated Gemini for evidence-grounded architecture, security, quality, and onboarding analysis.",
  ],
  role: "Developer",
  category: "AI / Full Stack",
  stack: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "FastAPI",
    "Python",
    "Supabase",
    "Gemini",
    "Render",
    "GitHub API",
  ],
  featured: true,
  highlightBadge: "Built during Impact Forge: Summer 2026 Hackathon.",
  demoUrl: "https://tesseraa-app.netlify.app",
  githubUrl: "https://github.com/itsvoidstack",
  image: "/tessera.png",
};

export const moreProjects: Project[] = [
  {
    id: "chroniqx",
    number: "02",
    title: "CHRONIQX",
    subtitle: "MEDIA TRACKING PLATFORM",
    description:
      "Full-stack media tracking platform with real-time activity, automated media tracking, and personalized libraries.",
    bullets: [
      "Built and deployed a full-stack media tracking platform with real-time activity and personalized libraries.",
      "Integrated external APIs and automated media tracking to create a seamless user experience.",
    ],
    role: "Developer",
    category: "Full Stack",
    stack: ["Next.js", "React", "TypeScript", "APIs", "Vercel"],
    featured: false,
    demoUrl: "https://chroniqx.vercel.app",
    githubUrl: "https://github.com/itsvoidstack",
  },
  {
    id: "res-q-nepal",
    number: "03",
    title: "RES-Q NEPAL",
    subtitle: "SOS & EMERGENCY PLATFORM",
    description:
      "A civic emergency platform connecting users with emergency services, community support, and essential resources.",
    bullets: [
      "Designed SOS emergency workflow and real-time community assistance interfaces.",
      "Focused on high reliability, fast load times, and simple UX during critical situations.",
    ],
    role: "Developer",
    category: "Civic Tech / Web",
    stack: ["Next.js", "React", "TypeScript", "APIs", "Vercel"],
    featured: false,
    githubUrl: "https://github.com/itsvoidstack",
  },
  {
    id: "connect-grow",
    number: "04",
    title: "CONNECT-GROW",
    subtitle: "MULTI-ROLE COLLABORATION PLATFORM",
    description:
      "A multi-role platform concept connecting businesses, workers, mentors, and students through role-based experiences.",
    bullets: [
      "Created responsive interfaces with role-based dashboards and simple workflows focused on improving trust and collaboration.",
      "Developed the project as a hackathon MVP, focusing on usability, clean design, and real-world application.",
    ],
    role: "Developer",
    category: "Hackathon MVP",
    stack: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
    featured: false,
    githubUrl: "https://github.com/itsvoidstack",
  },
];
