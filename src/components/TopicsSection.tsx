"use client";

import { motion } from "framer-motion";
import { Calculator, Headphones, BookOpen, Mic, Pencil, Type, Clock, ClipboardList, TrendingUp, CheckCircle, Users, Target, GraduationCap } from "lucide-react";

export function TopicsSection() {
  const modules = [
    {
      title: "WPLN Numeracy",
      description: "Learn math concepts, calculator skills and practice questions.",
      icon: <Calculator className="w-8 h-8 text-white" />,
      color: "bg-[#1d4ed8]", // Blue
      borderColor: "border-b-[#1d4ed8]",
    },
    {
      title: "WPLN Listening",
      description: "Improve listening skills and understand conversations better.",
      icon: <Headphones className="w-8 h-8 text-white" />,
      color: "bg-[#dc2626]", // Red
      borderColor: "border-b-[#dc2626]",
    },
    {
      title: "WPLN Reading",
      description: "Enhance reading comprehension and understand texts.",
      icon: <BookOpen className="w-8 h-8 text-white" />,
      color: "bg-[#1d4ed8]",
      borderColor: "border-b-[#1d4ed8]",
    },
    {
      title: "WPLN Speaking",
      description: "Develop speaking confidence and express your ideas clearly.",
      icon: <Mic className="w-8 h-8 text-white" />,
      color: "bg-[#dc2626]",
      borderColor: "border-b-[#dc2626]",
    },
    {
      title: "WPLN Writing",
      description: "Improve writing skills and communicate effectively.",
      icon: <Pencil className="w-8 h-8 text-white" />,
      color: "bg-[#1d4ed8]",
      borderColor: "border-b-[#1d4ed8]",
    },
    {
      title: "Grammar & Vocabulary",
      description: "Build strong grammar and vocabulary foundation.",
      icon: <Type className="w-8 h-8 text-white" />,
      color: "bg-[#dc2626]",
      borderColor: "border-b-[#dc2626]",
    },
  ];

  return (
    <div className="flex flex-col mt-16">
      {/* Singapore Merlion Banner */}
      <div className="relative w-full h-[250px] md:h-[350px] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1920&q=80" 
          alt="Singapore Merlion" 
          className="w-full h-full object-cover object-[center_30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E46]/80 via-transparent to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center lg:justify-start lg:pl-32">
           <h2 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-2xl tracking-tight">WPLN <span className="text-red-500">LEARNING</span> CENTRE</h2>
        </div>
      </div>

      <section className="relative bg-[#0B1E46] pt-16 pb-24">
        {/* Curve top */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180 transform -translate-y-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-[#0B1E46]"></path>
          </svg>
        </div>

      <div className="container mx-auto px-4 relative z-10 -mt-24 md:-mt-28">
        {/* Top Info Bar (Floating over curve) */}
        <div className="bg-white rounded-xl shadow-xl p-4 mb-8 hidden md:block border-b-4 border-slate-200">
          <div className="grid grid-cols-4 divide-x divide-slate-200">
            <div className="flex items-center space-x-3 px-4">
              <div className="flex-shrink-0"><Clock className="w-8 h-8 text-[#0B1E46]"/></div>
              <p className="text-[#0B1E46] text-xs font-bold leading-tight uppercase">Understand<br/><span className="text-slate-600 font-semibold capitalize">All WPLN Modules</span></p>
            </div>
            <div className="flex items-center space-x-3 px-4">
              <div className="flex-shrink-0"><BookOpen className="w-8 h-8 text-[#dc2626]"/></div>
              <p className="text-[#0B1E46] text-xs font-bold leading-tight uppercase">Step-by-Step<br/><span className="text-slate-600 font-semibold capitalize">Preparation Guides</span></p>
            </div>
            <div className="flex items-center space-x-3 px-4">
              <div className="flex-shrink-0"><ClipboardList className="w-8 h-8 text-[#0B1E46]"/></div>
              <p className="text-[#0B1E46] text-xs font-bold leading-tight uppercase">Practical Tips &<br/><span className="text-slate-600 font-semibold capitalize">Test Strategies</span></p>
            </div>
            <div className="flex items-center space-x-3 px-4">
              <div className="flex-shrink-0"><TrendingUp className="w-8 h-8 text-[#dc2626]"/></div>
              <p className="text-[#0B1E46] text-xs font-bold leading-tight uppercase">Improve Skills<br/><span className="text-slate-600 font-semibold capitalize">With Confidence</span></p>
            </div>
          </div>
        </div>

        <div className="flex justify-center mb-12">
          <div className="bg-[#0B1E46] text-white px-10 py-4 rounded-full shadow-2xl border-4 border-white text-xl md:text-2xl font-bold inline-block z-20 text-center">
            Explore All WPLN Modules
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
          {modules.map((mod, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-white rounded-2xl p-6 text-center shadow-xl border-b-4 ${mod.borderColor} hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center h-full cursor-pointer`}
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${mod.color} shadow-md`}>
                {mod.icon}
              </div>
              <h3 className="text-[13px] font-extrabold text-[#0B1E46] uppercase mb-3 leading-snug">
                {mod.title}
              </h3>
              <p className="text-[13px] text-slate-600 leading-relaxed flex-grow">
                {mod.description}
              </p>
            </motion.div>
          ))}
        </div>
        {/* Bottom Info Bar */}
        <div className="mt-10 bg-[#081638] rounded-xl shadow-inner border border-white/5 py-5 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-white/10">
            <div className="flex items-center space-x-4 lg:justify-center px-4">
              <div className="bg-[#dc2626] rounded-full p-2 flex-shrink-0"><CheckCircle className="text-white w-5 h-5"/></div>
              <p className="text-white text-[13px] font-semibold leading-tight">Trusted Guides<br/><span className="text-slate-400 font-normal">by SG Career Bangla</span></p>
            </div>
            <div className="flex items-center space-x-4 lg:justify-center px-4">
              <div className="bg-[#1d4ed8] rounded-full p-2 flex-shrink-0"><Users className="text-white w-5 h-5"/></div>
              <p className="text-white text-[13px] font-semibold leading-tight">For All Candidates<br/><span className="text-slate-400 font-normal">Jobs in Singapore</span></p>
            </div>
            <div className="flex items-center space-x-4 lg:justify-center px-4">
              <div className="bg-[#dc2626] rounded-full p-2 flex-shrink-0"><Target className="text-white w-5 h-5"/></div>
              <p className="text-white text-[13px] font-semibold leading-tight">Structured Preparation<br/><span className="text-slate-400 font-normal">Better Results</span></p>
            </div>
            <div className="flex items-center space-x-4 lg:justify-center px-4">
              <div className="bg-[#1d4ed8] rounded-full p-2 flex-shrink-0"><GraduationCap className="text-white w-5 h-5"/></div>
              <p className="text-white text-[13px] font-semibold leading-tight">Learn • Practice • Succeed<br/><span className="text-slate-400 font-normal">Your WPLN Journey Starts Here!</span></p>
            </div>
          </div>
        </div>

      </div>
    </section>
    </div>
  );
}
