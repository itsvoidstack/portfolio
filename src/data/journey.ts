export interface HackathonEntry {
  id: string;
  number: string;
  title: string;
  eventSubtitle?: string;
  venue: string;
  location?: string;
  dates: string;
  format: "In-Person" | "Online";
  role: string;
  teamInfo?: string;
  achievement: string;
  achievementBadge: string;
  isPlacement?: boolean;
  description: string;
  projectBuilt?: string;
  projectUrl?: string;
  highlights: string[];
}

export const hackathonJourney: HackathonEntry[] = [
  {
    id: "hack4impact-1",
    number: "01",
    title: "HACK4IMPACT",
    eventSubtitle: "PCPS College Innovation Hackathon",
    venue: "PCPS College",
    location: "Kupondole, Lalitpur",
    dates: "June 4–6, 2026",
    format: "In-Person",
    role: "Developer",
    teamInfo: "Team of 5",
    achievement: "5th Position",
    achievementBadge: "5TH PLACE",
    isPlacement: true,
    description:
      "A fast-paced 3-day hackathon at PCPS College. Focused on rapid ideation, problem solving under time constraints, and building practical software with a team of 5.",
    highlights: [
      "Rapid prototyping under tight deadlines",
      "5-person developer team collaboration",
      "5th Place overall placement",
    ],
  },
  {
    id: "hack4impact-2",
    number: "02",
    title: "HACK4IMPACT 2.0 × SAJHA ENTRANCE",
    eventSubtitle: "PCPS College Innovation Hackathon 2.0",
    venue: "PCPS College",
    location: "Kupondole, Lalitpur",
    dates: "June 11–13, 2026",
    format: "In-Person",
    role: "Developer",
    teamInfo: "Team of 5",
    achievement: "3rd Position",
    achievementBadge: "3RD PLACE",
    isPlacement: true,
    description:
      "Returned for the second iteration at PCPS College with refined execution. Developed Sajha Entrance — a targeted digital solution — securing a 3rd place podium finish.",
    projectBuilt: "Sajha Entrance",
    highlights: [
      "Built Sajha Entrance digital solution",
      "Enhanced full-stack & system execution",
      "3rd Place podium achievement",
    ],
  },
  {
    id: "impact-forge-2026",
    number: "03",
    title: "IMPACT FORGE — SUMMER 2026",
    eventSubtitle: "48-Hour Global Hackathon",
    venue: "Online",
    location: "Devpost Virtual Event",
    dates: "August 14–16, 2026",
    format: "Online",
    role: "Developer",
    teamInfo: "Solo / Lead Developer",
    achievement: "Participant · Tessera AI Built",
    achievementBadge: "48-HR ONLINE HACKATHON",
    isPlacement: false,
    description:
      "An intensive 48-hour online hackathon. Conceived and built Tessera — an AI-assisted GitHub repository intelligence analyzer using Next.js, FastAPI, Supabase, and Gemini.",
    projectBuilt: "Tessera AI Platform",
    projectUrl: "#work",
    highlights: [
      "Architected & built Tessera in 48 hours",
      "Integrated Gemini AI repository analysis",
      "Online competitive experience",
    ],
  },
];
