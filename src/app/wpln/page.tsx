import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function WPLNPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-32 pb-16 px-6">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8">WPLN</h1>
          <p className="text-slate-300 text-lg">Detailed information about WPLN will be available here soon.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
