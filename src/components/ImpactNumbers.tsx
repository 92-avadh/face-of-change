"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

function AnimatedCounter({ value, duration = 2 }: { value: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-IN").format(Math.floor(latest));
      }
    });
  }, [springValue]);

  return <span ref={ref}>0</span>;
}

export default function ImpactNumbers() {
  const stats = [
    { label: "Lives Impacted", target: 25000, suffix: "+", description: "Individuals empowered across various programs" },
    { label: "Villages Reached", target: 100, suffix: "+", description: "Rural habitations connected and supported" },
    { label: "Students Educated", target: 15000, suffix: "+", description: "Children receiving quality, modern education" },
    { label: "Healthcare Beneficiaries", target: 8000, suffix: "+", description: "Received free medical diagnostic & checkups" },
  ];

  return (
    <section id="impact" className="relative bg-forest text-white py-20 overflow-hidden">
      {/* Dynamic Background Pattern */}
      <div className="absolute inset-0 opacity-5 select-none pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-semibold tracking-widest text-gold uppercase block">
            Measurable Change
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Our Work in Numbers
          </h2>
          <p className="text-white/80 text-sm sm:text-base">
            Every statistic represents a human life touched, a student empowered, or a village lit. We verify our metrics independently to ensure clean, transparent accountability.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 text-center backdrop-blur-sm flex flex-col justify-between"
            >
              <div>
                <div className="text-4xl md:text-5xl font-bold font-serif text-gold mb-3 flex items-center justify-center">
                  <AnimatedCounter value={stat.target} />
                  <span>{stat.suffix}</span>
                </div>
                <h3 className="font-sans font-semibold text-lg text-white mb-2">{stat.label}</h3>
              </div>
              <p className="text-white/60 text-xs md:text-sm mt-2 leading-relaxed">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
