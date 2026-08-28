import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Career",
  description: "Explore career opportunities, advice, and comprehensive guides for working professionals in Singapore.",
};

export default function CareerPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-32 pb-16 px-6">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8">Career</h1>
          <p className="text-slate-300 text-lg">Detailed career guides and resources will be available here soon.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
