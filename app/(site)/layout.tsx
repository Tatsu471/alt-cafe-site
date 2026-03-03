import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import { createClient } from "next-sanity";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alt-Café | 旬の感性を、AIと共に。",
  description: "あなたの今の気分や天気に完璧にシンクロする「一期一会」のカフェ体験。",
};

// Sanity Client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false, // For demo, always get fresh data
  apiVersion: '2024-03-03',
});

// Fetch latest mood
async function getDailyMood() {
  const query = `*[_type == "dailyMood"] | order(date desc)[0]`;
  return await client.fetch(query);
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const mood = await getDailyMood();

  // Apply dynamic theme tokens, fallback to defaults if not present
  const primaryColor = mood?.uiThemeTokens?.primaryColor || "#5F4F4D";
  const isSerif = mood?.uiThemeTokens?.fontStyle === "serif";
  const dynamicFont = isSerif ? "var(--font-playfair)" : "var(--font-geist-sans)";

  // We inject the CSS variables so Tailwind and our globals.css can pick them up dynamically.
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased min-h-screen`}
        style={{
          "--ai-primary": primaryColor,
          "--ai-font": dynamicFont,
        } as React.CSSProperties}
      >
        {children}
      </body>
    </html>
  );
}
