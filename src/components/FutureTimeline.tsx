"use client";

import React from "react";
import { Laptop, Cpu, BookOpen, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function FutureTimeline() {
  const steps = [
    {
      year: "2025-26",
      title: "Digital Learning Initiative",
      description:
        "Deploying solar-powered tablets, internet hotspots, and offline learning tools to 50 rural classrooms, introducing modern digital literacy early.",
      icon: Laptop,
      color: "bg-amber-50 text-amber-600 border-amber-100",
    },
    {
      year: "2026-27",
      title: "STEM Education Programs",
      description:
        "Building hands-on science and engineering mini-labs in regional centers, training teachers to run activity-based experimental science lessons.",
      icon: Cpu,
      color: "bg-emerald-50 text-emerald-600 border-emerald-100",
    },
    {
      year: "2027-28",
      title: "Rural Library Development",
      description:
        "Setting up community libraries stocked with multilingual literature, reference journals, and group studying facilities open to all.",
      icon: BookOpen,
      color: "bg-sky-50 text-sky-600 border-sky-100",
    },
  ];

  return (
    <section id="timeline" className="bg-beige/40 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-20 space-y-4">
          <span className="text-xs font-semibold tracking-widest text-forest uppercase block">
            Future Education Initiatives
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-navy leading-tight">
            Building The Future
          </h2>
          <p className="text-navy/70 text-sm leading-relaxed">
            Our vision is long-term. Here is our structural blueprint to scale educational equity and community sustainability over the next three years.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Central Line (Desktop only) */}
          <div className="hidden lg:block absolute top-[52px] left-8 right-8 h-[2px] bg-navy/10 z-0" />

          {/* Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className="bg-white rounded-3xl border border-navy/5 p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-500 group"
                >
                  <div className="space-y-6">
                    {/* Header: Year Badge + Icon */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 bg-navy/5 text-navy/70 rounded-full">
                        {step.year}
                      </span>
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${step.color}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-2">
                      <h3 className="font-serif font-bold text-xl text-navy group-hover:text-forest transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-navy/60 text-xs sm:text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Footer roadmap link */}
                  <div className="pt-6 mt-6 border-t border-navy/5 flex items-center text-xs font-semibold text-forest uppercase tracking-wider group-hover:text-gold transition-colors duration-300">
                    <span>Learn roadmap</span>
                    <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-0.5" />
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Vision Statement */}
        <div className="mt-16 text-center max-w-lg mx-auto">
          <p className="text-xs font-semibold text-navy/40 uppercase tracking-widest">
            Upcoming vision roadmap | Verified by CSR board
          </p>
        </div>

      </div>
    </section>
  );
}
