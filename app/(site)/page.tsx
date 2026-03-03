import { createClient } from "next-sanity";
import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";

export const revalidate = 0; // Ensure demo always shows fresh data immediately

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
  // Fetch items ordered by creation date, limited to 6 for the demo
  const query = `*[_type == "menuItem"] | order(_createdAt desc)[0...6]`;
  return await client.fetch(query);
}

export default async function Home() {
  const [mood, menuItems] = await Promise.all([
    getDailyMood(),
    getMenuItems()
  ]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-start w-full bg-[var(--background)]">
      <Hero mood={mood} />
      <MenuSection items={menuItems} />

      {/* Footer / Contact Section placeholder */}
      <footer className="w-full py-12 px-6 text-center text-sm text-foreground/40">
        <p>© 2026 Alt-Café. Built with Sanity, Next.js and AI.</p>
      </footer>
    </main>
  );
}
