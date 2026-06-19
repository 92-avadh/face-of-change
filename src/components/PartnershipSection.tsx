"use client";

import React from "react";
import { GraduationCap, HeartHandshake, ShieldAlert, SunDim, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function PartnershipSection() {
  const partnersOptions = [
    {
      title: "Sponsor A Classroom",
      desc: "Provide modern desks, learning materials, and infrastructural upgrades for a village school.",
      icon: GraduationCap,
    },
    {
      title: "Support Child's Education",
      desc: "Fund learning kits, textbooks, and tutoring support to keep vulnerable students in school.",
      icon: HeartHandshake,
    },
    {
      title: "Healthcare Support",
      desc: "Sponsor diagnostic kits, doctors, and medical camps in low-income community clusters.",
      icon: ShieldAlert,
    },
    {
      title: "Renewable Energy Projects",
      desc: "Partner to install high-efficiency solar microgrids and power clean community water projects.",
      icon: SunDim,
    },
  ];

  return (
    <section id="partnership" className="bg-[#FAF9F5] text-navy py-20 border-b border-navy/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Detail */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-semibold tracking-widest text-forest uppercase block">
              Be The Change
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-navy leading-tight">
              Partner With Us To Build A Better Tomorrow.
            </h2>
            <p className="text-navy/60 text-sm sm:text-base leading-relaxed">
              We collaborate with corporates, CSR foundations, and global donors to execute certified, high-impact projects. Align your corporate social responsibility goals with our measurable local initiatives.
            </p>

            <div className="pt-4">
              {/* Forest Button Become a Partner */}
              <a
                href="#contact"
                className="inline-flex items-center justify-between px-6 py-3.5 rounded-full bg-forest text-white font-semibold text-sm transition-all duration-300 hover:scale-105 shadow-[0_4px_14px_rgba(22,101,52,0.2)]"
              >
                <span>Become a Partner</span>
                <ArrowRight className="w-4 h-4 ml-3 text-white" />
              </a>
            </div>
          </div>

          {/* Right Partnership Items Grid (layout from image reference 1 bottom) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {partnersOptions.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white border border-navy/5 rounded-2xl p-6 hover:border-forest/20 shadow-sm transition-all"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-forest/10 text-forest flex items-center justify-center border border-forest/10">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif font-bold text-base text-navy">{item.title}</h3>
                  </div>
                  <p className="text-navy/60 text-xs leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
