"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";

export function FreeResourcesSection() {
  const resources = [
    {
      icon: "📚",
      title: "WPLN Resources",
      description: "Preparation guides, official information and learning materials for WPLN candidates.",
      buttonText: "WPLN Resources",
      buttonColor: "bg-red-600 hover:bg-red-700 text-white",
    },
    {
      icon: "🔗",
      title: "Official Singapore Resources",
      description: "Quick access to trusted Singapore government and official information sources.",
      buttonText: "Explore Resources",
      buttonColor: "bg-red-600 hover:bg-red-700 text-white",
    },
    {
      icon: "🎥",
      title: "Video Learning",
      description: "Watch practical Bangla tutorials and guides from SG Career Bangla.",
      buttonText: "Watch on YouTube",
      buttonColor: "bg-slate-900 hover:bg-slate-800 text-white",
    }
  ];

  return (
    <section className="py-24 bg-white text-slate-900">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Free Resources</h2>
          <h3 className="text-2xl font-bold text-slate-800 mb-6">Useful Resources to Help You Learn & Grow</h3>
          <p className="text-lg text-slate-600 max-w-4xl">
            Access practical learning materials, official information, preparation resources and useful links for WPLN, careers and everyday life in Singapore.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {resources.map((resource, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col h-full"
            >
              <h4 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="text-3xl">{resource.icon}</span> {resource.title}
              </h4>
              <p className="text-slate-600 text-lg mb-8 flex-grow">
                {resource.description}
              </p>
              <div>
                <Button className={`${resource.buttonColor} px-6 h-12 text-base rounded-md font-medium transition-colors`}>
                  {resource.buttonText}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
