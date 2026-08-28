import Image from "next/image";
import Link from "next/link";
import { Code, Globe, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand Info */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="text-2xl font-bold tracking-tight text-white">
              SG Career Bangla
            </Link>
            <p className="text-slate-400 leading-relaxed max-w-xs">
              Practical guides and resources to help you learn, build your career and succeed in Singapore.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                  WPLN Learning
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                  Singapore Career Guides
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                  AI & Technology
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                  Video Editing
                </Link>
              </li>
            </ul>
          </div>

          {/* Developer Box */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-white">Developed By</h3>
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-slate-700 group-hover:border-blue-500 transition-colors">
                <Image 
                  src="/atul.jpg" 
                  alt="Atul - Developer" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-medium text-lg">Atul</span>
                <span className="text-slate-400 text-sm">Full Stack Developer</span>
                <div className="flex gap-3 mt-2">
                  <a href="https://github.com/atul-dev-ai" target="_blank" className="text-slate-500 hover:text-white transition-colors">
                    <Code className="w-4 h-4" />
                  </a>
                  <a href="https://atulpaul.vercel.app" target="_blank" className="text-slate-500 hover:text-blue-400 transition-colors">
                    <Globe className="w-4 h-4" />
                  </a>
                  <a href="#" className="text-slate-500 hover:text-blue-400 transition-colors">
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500 font-medium">
            Copyright &copy; {new Date().getFullYear()} SG Career Bangla. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-slate-500">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
