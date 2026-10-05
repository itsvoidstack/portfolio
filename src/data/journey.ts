export interface JourneyItem {
  id: string;
  year: string;
  milestone: string;
  description: string;
  badge?: string;
  isCurrent?: boolean;
}

export const journeyTimeline: JourneyItem[] = [
  {
    id: "journey-2024",
    year: "2024",
    milestone: "Foundations & Exploration",
    description:
      "Started exploring Computer Science, web development, and foundational software engineering principles.",
  },
  {
    id: "journey-2025",
    year: "2025",
    milestone: "Full-Stack & AI Systems",
    description:
      "Shifted towards modern TypeScript full-stack applications, Python APIs, and practical AI integrations.",
  },
  {
    id: "journey-2026",
    year: "2026",
    milestone: "Tessera & Impact Forge Hackathon",
    description:
      "Developed Tessera — an AI-assisted GitHub repository analyzer during the Impact Forge: Summer 2026 Hackathon.",
    badge: "Impact Forge 2026",
    isCurrent: true,
  },
];
