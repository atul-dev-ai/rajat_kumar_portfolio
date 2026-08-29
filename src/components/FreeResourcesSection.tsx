"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { BookOpen, Link2, Youtube, ArrowRight } from "lucide-react";

export function FreeResourcesSection() {
  const resources = [
    {
      icon: <BookOpen className="w-10 h-10 text-blue-600 group-hover:scale-110 transition-transform duration-300" />,
      iconBg: "bg-blue-50",
      title: "WPLN Resources",
      description: "Preparation guides, official information and learning materials for WPLN candidates.",
      buttonText: "WPLN Resources",
      buttonColor: "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/30",
    },
    {
      icon: <Link2 className="w-10 h-10 text-teal-600 group-hover:scale-110 transition-transform duration-300" />,
      iconBg: "bg-teal-50",
      title: "Official Singapore Resources",
      description: "Quick access to trusted Singapore government and official information sources.",
      buttonText: "Explore Resources",
      buttonColor: "bg-teal-600 hover:bg-teal-700 text-white shadow-lg shadow-teal-600/30",
    },
    {
      icon: <Youtube className="w-10 h-10 text-red-600 group-hover:scale-110 transition-transform duration-300" />,
      iconBg: "bg-red-50",
      title: "Video Learning",
      description: "Watch practical Bangla tutorials and guides from SG Career Bangla.",
      buttonText: "Watch on YouTube",
      buttonColor: "bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-600/30",
    }
  ];

  return (
    <section className="relative py-32 bg-slate-50 overflow-hidden">
      {/* Premium Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal-400/10 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/4"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1.5 px-5 rounded-full bg-blue-100/50 border border-blue-200 text-blue-700 text-sm font-bold tracking-widest uppercase mb-6 shadow-sm backdrop-blur-md">
              Unlock Your Potential
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Free Resources</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              Access curated learning materials, official guides, and practical video tutorials to accelerate your career growth in Singapore.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {resources.map((resource, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group bg-white rounded-[2.5rem] p-8 lg:p-12 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-slate-300/60 border border-slate-100 hover:-translate-y-2 transition-all duration-500 flex flex-col h-full relative overflow-hidden cursor-pointer"
            >
              {/* Premium Card Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>

              <div className="relative z-10 flex flex-col h-full">
                <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mb-8 ${resource.iconBg} group-hover:bg-white group-hover:shadow-lg group-hover:shadow-slate-200/50 transition-all duration-500`}>
                  {resource.icon}
                </div>
                
                <h4 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-900 transition-colors">
                  {resource.title}
                </h4>
                
                <p className="text-slate-600 text-lg mb-10 flex-grow leading-relaxed group-hover:text-slate-700 transition-colors">
                  {resource.description}
                </p>
                
                <div className="mt-auto pt-8 border-t border-slate-100 group-hover:border-slate-200 transition-colors">
                  <Button className={`${resource.buttonColor} w-full py-6 text-lg rounded-2xl font-semibold group/btn transition-all duration-300 hover:scale-[1.02]`}>
                    {resource.buttonText}
                    <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1.5 transition-transform" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
