"use client";

import { motion } from "framer-motion";
import { CheckCircle2, PlayCircle } from "lucide-react";

export function YoutubeSection() {
  const benefits = [
    "WPLN preparation & exam guidance",
    "Singapore career and workplace information",
    "AI tools & technology tutorials",
    "CapCut and video-editing guides",
    "Practical Singapore information",
  ];

  return (
    <section className="bg-slate-50 relative overflow-hidden">
      {/* Premium Top Banner */}
      <div className="relative bg-gradient-to-b from-[#0B1E46] to-[#0f2557] text-white pt-24 pb-48 px-6 border-b border-slate-800">
        {/* Decorative background blur elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
           <div className="absolute top-10 left-[10%] w-96 h-96 bg-blue-500 rounded-full blur-[130px] opacity-20"></div>
           <div className="absolute bottom-10 right-[10%] w-96 h-96 bg-red-500 rounded-full blur-[130px] opacity-15"></div>
        </div>

        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="bg-red-500/10 p-2 rounded-full">
                <PlayCircle className="w-6 h-6 text-red-500" />
              </div>
              <h2 className="text-sm md:text-base font-extrabold uppercase tracking-[0.2em] text-red-400">
                SG Career Bangla
              </h2>
            </div>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 leading-tight tracking-tight text-white">
              Watch. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">Learn.</span> Grow.
            </h3>
            <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto font-medium">
              Practical Bangla videos about WPLN preparation, Singapore careers, workplace guidance, AI tools, technology and useful information.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content Grid (Overlapping the banner) */}
      <div className="container mx-auto px-6 relative z-20 -mt-32 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch max-w-7xl mx-auto">
          
          {/* Left: Video Container (Takes 7 columns) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col"
          >
            <div className="bg-white p-2 md:p-3 rounded-[2rem] shadow-2xl shadow-[#0B1E46]/20 border border-slate-100 h-full flex flex-col group hover:-translate-y-1 transition-transform duration-500">
              <div className="px-5 py-4 flex items-center justify-between">
                <h4 className="font-bold text-lg text-slate-800">Featured Video</h4>
                <div className="flex gap-2">
                   <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
                   <div className="w-3 h-3 rounded-full bg-amber-400/80"></div>
                   <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
                </div>
              </div>
              <div className="relative w-full aspect-video flex-grow rounded-[1.25rem] overflow-hidden shadow-inner bg-slate-900 border border-slate-100">
                <iframe
                  src="https://www.youtube.com/embed/pmPJJCtlQds?si=Qvj_h9P5Q8M6gHqC"
                  title="YouTube video player"
                  className="absolute inset-0 w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </motion.div>

          {/* Right: Info List (Takes 5 columns) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-5 flex flex-col h-full"
          >
            <div className="bg-white rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col h-full overflow-hidden relative hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
              {/* Decorative top border */}
              <div className="h-1.5 w-full bg-gradient-to-r from-red-500 to-blue-600"></div>
              
              <div className="p-8 md:p-10 flex flex-col flex-grow">
                <h4 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-8 tracking-tight">
                  Learn with <span className="text-[#0B1E46]">SG Career</span>
                </h4>
                
                <ul className="space-y-6 mb-8 flex-grow">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-4 group/item">
                      <div className="bg-blue-50 text-blue-600 rounded-full p-1 mt-0.5 group-hover/item:bg-blue-600 group-hover/item:text-white group-hover/item:shadow-md group-hover/item:scale-110 transition-all duration-300">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <span className="text-slate-600 font-medium text-lg leading-relaxed group-hover/item:text-slate-900 transition-colors">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-6 border-t border-slate-100">
                  <div className="bg-slate-50/80 rounded-2xl p-5 border border-slate-100 group-hover:bg-slate-100/50 transition-colors">
                    <p className="text-slate-600 font-medium text-sm leading-relaxed">
                      <span className="inline-block bg-red-100 text-red-600 font-bold px-2 py-0.5 rounded text-xs mr-2 uppercase tracking-wide">New</span> 
                      Practical Bangla videos are regularly added to help you learn and grow in Singapore.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
