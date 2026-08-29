"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight, BookOpen } from "lucide-react";
import Image from "next/image";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number], // Custom easing for premium feel
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-slate-950">
      {/* Background gradients for premium feel */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950"></div>
      <div className="absolute -top-[300px] -left-[300px] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="max-w-2xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
          <motion.div variants={itemVariants} className="mb-4">
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-blue-300 text-sm font-semibold tracking-wider uppercase backdrop-blur-md">
              SG Career Bangla
            </span>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl font-extrabold text-white leading-tight tracking-tight mb-6"
          >
            Build Your Career.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">
              Improve Your Skills.
            </span><br />
            Grow in Singapore.
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed"
          >
            Practical Bangla guides for WPLN preparation, Singapore careers, technology, AI and video editing — all in one place.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white rounded-full px-8 h-14 text-base font-medium transition-all hover:scale-105 active:scale-95 group">
              Start Learning WPLN
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-base font-medium border-white/20 text-black hover:bg-white/10 transition-all hover:text-white group">
              <BookOpen className="mr-2 w-5 h-5" />
              Explore Career Guides
            </Button>
          </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-[500px] mx-auto">
              {/* Decorative background glow behind the image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-teal-400/20 rounded-[3rem] blur-3xl"></div>
              
              <Image 
                src="/hero.png" 
                alt="SG Career Bangla Hero" 
                fill 
                className="object-contain relative z-10 drop-shadow-2xl hover:scale-105 hover:-rotate-1 transition-transform duration-700" 
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Animated Waves */}
      <svg className="hero-waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none">
        <defs>
          <path id="wave-path" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"></path>
        </defs>
        <g className="wave-group">
          <use href="#wave-path" x="50" y="3" fill="rgba(255,255,255, .1)" className="wave1"></use>
          <use href="#wave-path" x="50" y="0" fill="rgba(255,255,255, .2)" className="wave2"></use>
          <use href="#wave-path" x="50" y="9" fill="#fff" className="wave3"></use>
        </g>
      </svg>
    </section>
  );
}
