export interface SkillCategory {
  id: string;
  category: string;
  codeLabel: string;
  iconName: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "ai",
    category: "AI & AGENTIC AI",
    codeLabel: "GROUP 01 // AI",
    iconName: "Cpu",
    skills: ["Prompt Engineering", "LangChain", "RAG", "Google Gemini"],
  },
  {
    id: "dev",
    category: "DEVELOPMENT",
    codeLabel: "GROUP 02 // DEV",
    iconName: "Code",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "Python",
      "FastAPI",
      "Tailwind CSS",
      "Supabase",
    ],
  },
  {
    id: "tools",
    category: "DEPLOYMENT & TOOLS",
    codeLabel: "GROUP 03 // TOOLS",
    iconName: "Terminal",
    skills: ["Vercel", "Netlify", "Render", "Git", "GitHub"],
  },
  {
    id: "integrations",
    category: "INTEGRATIONS",
    codeLabel: "GROUP 04 // APIS",
    iconName: "Layers",
    skills: ["GitHub REST API", "Google Gemini API"],
  },
];
