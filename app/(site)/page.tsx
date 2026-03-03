import { createClient } from "next-sanity";
import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import ConceptSection from "@/components/ConceptSection";
import FeaturesSection from "@/components/FeaturesSection";
import NewsPreviewSection from "@/components/NewsPreviewSection";

export const revalidate = 0;

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

async function getMenuItems() {
  const query = `*[_type == "menuItem"] | order(_createdAt desc)[0...6]`;
  return await client.fetch(query);
}

export default async function Home() {
  const [mood, menuItems] = await Promise.all([
    getDailyMood(),
    getMenuItems()
  ]);

  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero: 第一印象 */}
      <Hero mood={mood} />

      {/* 2. Concept: なぜAIを導入したのか */}
      <ConceptSection />

      {/* AI Aura Motifs */}
      <div className="relative">
        <div className="ai-aura top-[10%] right-[-5%] opacity-10" />
        <div className="ai-aura top-[50%] left-[-5%] opacity-10 scale-125" />

        {/* 3. Features: カフェの3大特徴 (交互レイアウト) */}
        <FeaturesSection />
      </div>

      {/* 4. Menu Preview: AIおすすめメニュー */}
      <MenuSection items={menuItems} />

      {/* 5. News Preview: 最新情報 */}
      <NewsPreviewSection />

      {/* 6. CTA: 公式LINE */}
      <section className="py-24 px-6 text-center mx-6 mb-24 rounded-3xl space-y-8 relative overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 glass rounded-3xl" />
        <div className="absolute inset-0 rounded-3xl opacity-20"
          style={{
            background: "radial-gradient(ellipse at 50% 100%, var(--ai-secondary) 0%, transparent 70%)"
          }}
        />
        <div className="relative z-10 space-y-8">
          <h2 className="text-[10px] uppercase tracking-widest text-[var(--ai-primary)]">Official LINE</h2>
          <p className="text-2xl md:text-4xl font-serif">AIがあなたの今日の気分を診断。<br />公式LINEで「今日の一皿」をチェック。</p>
          <button className="px-12 py-4 bg-white text-black rounded-full text-xs uppercase tracking-widest hover:scale-105 hover:bg-[var(--ai-primary)] hover:text-white transition-all duration-300">
            Register for LINE
          </button>
        </div>
      </section>
    </div>
  );
}
