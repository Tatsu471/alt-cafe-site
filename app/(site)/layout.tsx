import type { Metadata } from "next";
import { createClient } from "next-sanity";
import "../globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Alt-Café | 旬の感性を、AIと共に。",
  description: "あなたの今の気分や天気に完璧にシンクロする「一期一会のカフェ体験」。AIが店主の感性を翻訳します。",
};

// Sanity Client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  apiVersion: '2024-03-03',
});

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

  const primaryColor = mood?.uiThemeTokens?.primaryColor || "#C084FC";
  const secondaryColor = mood?.uiThemeTokens?.secondaryColor || "#F472B6";
  const isSerif = mood?.uiThemeTokens?.fontStyle === "serif" || true; // Default to serif for cafe feel
  const dynamicFont = isSerif ? '"Shippori Mincho", serif' : '"Inter", sans-serif';

  return (
    <html lang="ja">
      <body
        className="antialiased min-h-screen relative flex flex-col"
        suppressHydrationWarning
        style={{
          "--ai-primary": primaryColor,
          "--ai-secondary": secondaryColor,
          "--ai-font": dynamicFont,
        } as React.CSSProperties}
      >
        {/* AI Aura Motif */}
        <div className="ai-aura top-[-10%] left-[-10%]" />
        <div className="ai-aura bottom-[-10%] right-[-10%] scale-150 opacity-10" />

        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
