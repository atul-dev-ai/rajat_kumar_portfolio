"use client";

import { motion } from "framer-motion";
import { BookOpen, Briefcase, Cpu, Video } from "lucide-react";

const topics = [
  {
    title: "WPLN Preparation",
    description: "Complete guide to pass the WPLN exam with flying colors.",
    icon: <BookOpen className="w-8 h-8 text-blue-400" />,
    color: "from-blue-500/20 to-transparent",
  },
  {
    title: "Singapore Careers",
    description: "Insights, tips, and strategies for building a career in Singapore.",
    icon: <Briefcase className="w-8 h-8 text-emerald-400" />,
    color: "from-emerald-500/20 to-transparent",
  },
  {
    title: "AI & Technology",
    description: "Stay updated with the latest in AI and tech trends.",
    icon: <Cpu className="w-8 h-8 text-purple-400" />,
    color: "from-purple-500/20 to-transparent",
  },
  {
    title: "Video Editing",
    description: "Learn professional video editing techniques step-by-step.",
    icon: <Video className="w-8 h-8 text-red-400" />,
    color: "from-red-500/20 to-transparent",
  },
];

export function TopicsSection() {
  return (
    <section className="py-32 bg-slate-950 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Explore Our Main Topics
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-slate-400"
          >
            Practical guides and resources to help you learn, build your career and succeed in Singapore.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {topics.map((topic, index) => (
            <motion.div
              key={topic.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`p-8 rounded-2xl bg-gradient-to-b ${topic.color} border border-white/5 hover:border-white/20 transition-all bg-slate-900/50 backdrop-blur-sm group cursor-pointer`}
            >
              <div className="mb-6 p-4 bg-slate-950/50 rounded-xl inline-block group-hover:scale-110 transition-transform">
                {topic.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{topic.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {topic.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
