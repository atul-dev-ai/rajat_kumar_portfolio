"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

export function LatestResourcesSection() {
  const resources = [
    {
      title: "WPLN Numeracy Test Singapore 2026: Complete Preparation Guide",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800", 
      link: "#",
      tag: "Numeracy Guide",
    },
    {
      title: "WPLN Test Singapore 2026: Complete Guide for Beginners",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
      link: "#",
      tag: "Beginner Guide",
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-50 rounded-full blur-[100px] pointer-events-none opacity-80"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50 rounded-full blur-[100px] pointer-events-none opacity-80"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B1E46] mb-5 tracking-tight">
              Latest Guides & Resources
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Explore our latest WPLN tips, Singapore career guides, technology tutorials and practical resources.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {resources.map((resource, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group bg-white rounded-3xl p-5 md:p-6 border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-slate-300/60 hover:-translate-y-1.5 transition-all duration-300 flex flex-col sm:flex-row items-center gap-6 md:gap-8 cursor-pointer"
            >
              <div className="w-full sm:w-2/5 flex-shrink-0 relative overflow-hidden rounded-2xl aspect-video sm:aspect-[4/3] shadow-inner">
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img 
                  src={resource.image} 
                  alt={resource.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute bottom-3 left-3 z-20">
                  <span className="bg-red-600 text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                    {resource.tag}
                  </span>
                </div>
              </div>

              <div className="w-full sm:w-3/5 flex flex-col justify-center py-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
                  <BookOpen className="w-4 h-4 text-red-500" />
                  <span>5 Min Read</span>
                </div>
                
                <Link href={resource.link} className="block mb-6">
                  <h3 className="text-[#dc2626] group-hover:text-[#b91c1c] text-xl md:text-2xl font-extrabold leading-snug decoration-2 underline-offset-[6px] group-hover:underline transition-all duration-300">
                    {resource.title}
                  </h3>
                </Link>

                <div className="flex items-center text-slate-800 font-bold text-sm uppercase tracking-wider group-hover:text-red-600 transition-colors mt-auto">
                  Read Article
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
