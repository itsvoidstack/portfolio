import type { Metadata } from "next";
import { Inter, Space_Grotesk, Sora, JetBrains_Mono, Caveat } from "next/font/google";

import "./globals.css";
import CustomCursor from "@/components/layout/CustomCursor";
import ScrollProgress from "@/components/layout/ScrollProgress";
import JsonLd from "@/components/seo/JsonLd";
import { siteConfig } from "@/config/site";


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

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author.name, url: siteConfig.url }],
  creator: siteConfig.author.name,
  publisher: siteConfig.author.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: siteConfig.url,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: [
      {
        url: `${siteConfig.url}/portrait.png`,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — Creative Developer & AI Enthusiast`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    creator: siteConfig.author.handle,
    images: [`${siteConfig.url}/portrait.png`],
  },
  verification: {
    google: siteConfig.googleVerification,
    ...(siteConfig.bingVerification
      ? { other: { "msvalidate.01": siteConfig.bingVerification } }
      : {}),
  },
  icons: {
    icon: [
      { url: "/logo.svg", type: "image/svg+xml" },
    ],
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${sora.variable} ${inter.variable} ${jetbrainsMono.variable} ${caveat.variable} scroll-smooth antialiased`}
    >

      <head>
        <JsonLd />
      </head>
      <body className="min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans selection:bg-[var(--accent)] selection:text-white relative overflow-x-hidden">
        <ScrollProgress />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
