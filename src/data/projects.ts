export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle?: string;
  description: string;
  bullets?: string[];
  role?: string;
  category: string;
  stack: string[];
  featured: boolean;
  highlightBadge?: string;
  demoUrl?: string;
  githubUrl?: string;
  image?: string;
  addressBarUrl?: string;
}

export const tesseraProject: Project = {
  id: "tessera",
  number: "01",
  title: "TESSERA",
  subtitle: "AI REPOSITORY INTELLIGENCE PLATFORM",
  description:
    "AI-assisted GitHub repository analyzer that helps developers understand a project's structure, security, quality, and code context through evidence-grounded AI insights.",
  bullets: [
    "Built an AI-powered GitHub repository analyzer for understanding unfamiliar codebases.",
    "Added interactive architecture visualization, Code Explorer, and AI Code Audit.",
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
  ],
  featured: true,
  highlightBadge: "Built during Impact Forge: Summer 2026 Hackathon",
  demoUrl: "https://tesseraa-app.netlify.app",
  githubUrl: "https://github.com/itsvoidstack/tessera",
  image: "/tessera.png",
  addressBarUrl: "https://tesseraa-app.netlify.app",
};

export const chroniqxProject: Project = {
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
  category: "Media Tracking Platform",
  stack: ["Next.js", "React", "TypeScript", "APIs", "Vercel"],
  featured: true,
  demoUrl: "https://chroniqx.vercel.app",
  githubUrl: "https://github.com/itsvoidstack/chroniq",
  image: "/chroniqx.png",
  addressBarUrl: "https://chroniqx.vercel.app",
};

export const featuredProjects: Project[] = [tesseraProject, chroniqxProject];

export const repositoryProjects: Project[] = [
  {
    id: "res-q-nepal",
    number: "01",
    title: "ResQ-Nepal",
    subtitle: "SOS & EMERGENCY PLATFORM",
    description:
      "A civic emergency platform connecting users with emergency services, community support, and essential resources.",
    role: "Developer",
    category: "Civic Tech / Web",
    stack: ["Next.js", "React", "TypeScript", "APIs", "Vercel"],
    featured: false,
    githubUrl: "https://github.com/itsvoidstack/ResQ-Nepal",
  },
  {
    id: "connect-grow",
    number: "02",
    title: "connect-grow",
    subtitle: "MULTI-ROLE COLLABORATION PLATFORM",
    description:
      "A multi-role platform concept connecting businesses, workers, mentors, and students through role-based experiences.",
    role: "Developer",
    category: "Hackathon MVP",
    stack: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
    featured: false,
    githubUrl: "https://github.com/itsvoidstack/connect-grow",
  },
];

// Backwards compatibility exports
export const featuredProject: Project = tesseraProject;
export const moreProjects: Project[] = [chroniqxProject, ...repositoryProjects];
