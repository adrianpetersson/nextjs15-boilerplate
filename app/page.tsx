import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <main className="flex flex-col gap-8 sm:items-start">
        <Hero />
      </main>
    </div>
  );
}

