"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "./ui/button";

export function WPLNSection() {
  return (
    <section className="py-24 bg-slate-50 text-slate-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-sm font-bold tracking-widest text-slate-500 uppercase mb-4">
              WPLN Learning Centre
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
              Preparing for Your WPLN Test?
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Learn WPLN with simple explanations, practical guidance and useful preparation resources designed to help you understand each module with confidence.
            </p>
            <p className="text-base text-slate-500 font-medium mb-8">
              Numeracy &bull; Listening &bull; Reading &bull; Speaking &bull; Writing
            </p>
            
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white rounded-md px-8 h-12 text-base font-medium transition-all hover:-translate-y-1 hover:shadow-lg">
              Start WPLN Learning
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-full rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image src="/Wpln_learning.png" alt="WPLN Learning" width={1200} height={800} className="w-full h-auto" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
