import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TopicsSection } from "@/components/TopicsSection";
import { WPLNSection } from "@/components/WPLNSection";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Complete career guide and resources for Bengalis in Singapore, covering WPLN, tech, and more.",
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TopicsSection />
        <WPLNSection />
      </main>
      <Footer />
    </>
  );
}
