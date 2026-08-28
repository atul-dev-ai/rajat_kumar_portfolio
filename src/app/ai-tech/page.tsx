import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI & Tech",
  description: "Discover the latest insights, trends, and resources in Artificial Intelligence and modern technology.",
};

export default function AITechPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-32 pb-16 px-6">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8">AI & Tech</h1>
          <p className="text-slate-300 text-lg">Insights on AI and modern technology will be available here soon.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
