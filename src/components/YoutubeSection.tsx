"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export function YoutubeSection() {
  const benefits = [
    "WPLN preparation & exam guidance",
    "Singapore career and workplace information",
    "AI tools & technology tutorials",
    "CapCut and video-editing guides",
    "Practical Singapore information",
  ];

  return (
    <section className="bg-white">
      {/* Top Dark Banner */}
      <div className="bg-[#0B1E46] text-white py-16 px-6">
        <div className="container mx-auto text-center max-w-5xl">
          <h2 className="text-lg md:text-xl font-bold uppercase tracking-widest mb-6 text-white">
            SG CAREER BANGLA ON YOUTUBE
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">
            Watch. Learn. Grow
          </h3>
          <p className="text-slate-200 text-sm md:text-base leading-relaxed max-w-4xl mx-auto">
            Practical Bangla videos about WPLN preparation, Singapore careers, workplace guidance, AI tools, technology and useful information for living and working in Singapore.
          </p>
        </div>
      </div>

      {/* Content Grid */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-8 items-stretch max-w-6xl mx-auto">
          
          {/* Left: Video */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col h-full"
          >
            <div className="bg-[#d4cfcd] p-4 text-center font-bold text-xl text-slate-900 mb-0">
              Featured Videos
            </div>
            <div className="relative w-full aspect-video flex-grow overflow-hidden shadow-md">
              <iframe
                src="https://www.youtube.com/embed/pmPJJCtlQds?si=Qvj_h9P5Q8M6gHqC"
                title="YouTube video player"
                className="absolute inset-0 w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>

          {/* Right: Info List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-6 h-full"
          >
            <div className="flex flex-col flex-grow">
              <div className="bg-[#a89e9a] text-white p-4 font-bold text-xl">
                Learn with SG Career Bangla
              </div>
              <div className="p-6 md:p-8 bg-[#f5f3f2] flex-grow">
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-slate-800 flex-shrink-0 mt-1" strokeWidth={3} />
                      <span className="text-slate-800 font-medium text-[15px]">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-[#f5f3f2] p-6 md:p-8">
              <p className="text-[#3b4b6b] text-[15px] font-medium leading-relaxed">
                New practical Bangla videos are regularly added to help you learn and grow in Singapore.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
