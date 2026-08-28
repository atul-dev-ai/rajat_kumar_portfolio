import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources",
  description: "Download helpful templates, guides, and tools to boost your career and life in Singapore.",
};

export default function ResourcesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-32 pb-16 px-6">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8">Resources</h1>
          <p className="text-slate-300 text-lg">Helpful resources and downloads will be available here soon.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
