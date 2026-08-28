import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TopicsSection } from "@/components/TopicsSection";
import { WPLNSection } from "@/components/WPLNSection";
import { Footer } from "@/components/Footer";

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
