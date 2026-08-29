"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function LatestResourcesSection() {
  // You can add more resources here later
  const resources = [
    {
      title: "WPLN Numeracy Test Singapore 2026: Complete Preparation Guide",
      image: "/placeholder-thumbnail-1.jpg", 
      link: "#",
    },
    {
      title: "WPLN Test Singapore 2026: Complete Guide for Beginners",
      image: "/placeholder-thumbnail-2.jpg",
      link: "#",
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1E46] mb-4">Latest Guides & Resources</h2>
          <p className="text-slate-600">
            Explore our latest WPLN tips, Singapore career guides, technology tutorials and practical resources.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {resources.map((resource, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center gap-6 group"
            >
              <div className="w-1/3 flex-shrink-0">
                {/* Placeholder thumbnail - Replace the img src later */}
                <div className="relative w-full aspect-video bg-slate-100 rounded overflow-hidden border border-slate-200 flex items-center justify-center">
                   <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Image Placeholder</span>
                </div>
              </div>
              <div className="w-2/3">
                <Link href={resource.link} className="text-[#dc2626] hover:text-red-700 underline text-2xl md:text-3xl font-bold leading-tight decoration-2 underline-offset-4">
                  {resource.title}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
