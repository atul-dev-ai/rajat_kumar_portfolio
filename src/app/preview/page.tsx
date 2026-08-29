import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

export default async function PreviewPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const params = await searchParams;
  const url = params.url as string;

  if (!url) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">No URL provided for preview</h1>
          <Link href="/" className="text-blue-600 hover:underline">Return Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-slate-100">
      {/* Preview Header */}
      <header className="h-16 bg-[#0B1E46] text-white flex items-center justify-between px-6 shadow-md flex-shrink-0 z-10">
        <div className="flex items-center gap-4">
          <Link 
            href="/" 
            className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-medium text-sm">Back to Home</span>
          </Link>
        </div>
        <div className="hidden md:block truncate max-w-xl text-sm text-slate-300">
          Previewing: <span className="text-white font-medium">{url}</span>
        </div>
        <div className="flex items-center gap-4">
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20"
            title="Open in new tab if the website blocks iframes"
          >
            <span className="font-medium text-sm hidden sm:inline">Open in New Tab</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </header>

      {/* Iframe Container */}
      <main className="flex-grow w-full relative bg-white">
        <iframe 
          src={url} 
          className="absolute inset-0 w-full h-full border-0"
          title="Website Preview"
        />
      </main>
    </div>
  );
}
