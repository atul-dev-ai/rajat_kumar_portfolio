import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TopicsSection } from "@/components/TopicsSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TopicsSection />
      </main>
    </>
  );
}
