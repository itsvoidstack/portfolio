import type { Metadata } from "next";
import { Space_Grotesk, Sora, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/layout/CustomCursor";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Shivam Shah — Creative Developer & AI Enthusiast",
  description: "Computer Science student interested in artificial intelligence, full-stack development, and building digital products with real purpose.",
  keywords: ["Shivam Shah", "Creative Developer", "AI Enthusiast", "Full Stack Developer", "TypeScript", "Next.js", "Tessera"],
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${sora.variable} ${inter.variable} ${jetbrainsMono.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans selection:bg-[var(--accent)] selection:text-white relative overflow-x-hidden">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}

