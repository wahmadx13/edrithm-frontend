import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/features/landing/HeroSection";

export default function Home() {
  return (
    <div className="bg-background relative flex min-h-screen flex-col">
      <Navbar />
      <main className="flex w-full flex-1 flex-col items-center">
        <HeroSection />
      </main>
    </div>
  );
}
