"use client";

import React from "react";
import { AlertCircle, Zap, ShieldCheck, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { MagneticText } from "@/components/ui/morphing-cursor";

export default function WhyWeExist() {
  const steps = [
    {
      title: "The Problem",
      description:
        "Millions of children and families lack access to quality education, basic healthcare, clean water, and stable electricity in remote villages across India, holding back their human potential.",
      icon: AlertCircle,
      color: "bg-red-50 text-red-600 border-red-100",
      iconColor: "text-red-600",
      stepNum: "01",
    },
    {
      title: "Our Action",
      description:
        "We implement holistic, sustainable projects locally—renovating classrooms, holding medical checkup initiatives, installing solar power plants, and building community-led programs.",
      icon: Zap,
      color: "bg-emerald-50 text-emerald-600 border-emerald-100",
      iconColor: "text-emerald-600",
      stepNum: "02",
    },
    {
      title: "The Impact",
      description:
        "We create a lasting ecosystem that empowers children to dream, supports healthy livelihoods, preserves natural environments, and builds resilient, self-sufficient communities.",
      icon: ShieldCheck,
      color: "bg-amber-50 text-amber-600 border-amber-100",
      iconColor: "text-amber-600",
      stepNum: "03",
    },
  ];

  return (
    <section id="why-we-exist" className="bg-beige py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Layout: Side Header + Text */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-20 items-end">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-semibold tracking-widest text-forest uppercase block">
              Why We Exist
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-navy leading-tight">
              We{" "}
              <MagneticText
                text="Envision"
                hoverText="Empower"
                className="inline-flex cursor-none select-none text-navy align-baseline"
                textClassName="font-serif text-navy text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
                hoverTextClassName="font-serif text-gold text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
                circleClassName="bg-navy"
              />{" "}
              An India Where Every Child Has The Chance To{" "}
              <MagneticText
                text="Dream"
                hoverText="Fly"
                className="inline-flex cursor-none select-none text-forest align-baseline"
                textClassName="font-serif text-forest text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
                hoverTextClassName="font-serif text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
                circleClassName="bg-forest"
              />{" "}
              And Achieve.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-navy/70 text-base leading-relaxed">
              For generations, lack of basic needs has created barriers for remote communities. We believe that by solving education, healthcare, and energy gaps simultaneously, we trigger permanent, generational transformation.
            </p>
          </div>
        </div>

        {/* Problem → Action → Impact Narrative Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: idx * 0.15 }}
                className="bg-white rounded-3xl border border-navy/5 p-8 relative flex flex-col justify-between hover:shadow-[0_20px_50px_rgba(15,23,42,0.05)] transition-all duration-500 group"
              >
                {/* Dotted Connection Arrow (Desktop only) */}
                {idx < 2 && (
                  <div className="hidden md:block absolute top-[52px] left-[calc(100%-20px)] w-[calc(100%-80px)] z-0 pointer-events-none">
                    <svg className="w-full h-8" fill="none" viewBox="0 0 100 20">
                      <path
                        d="M0,10 Q25,18 50,10 T100,10"
                        stroke="#166534"
                        strokeWidth="1.5"
                        strokeDasharray="4,4"
                        fill="none"
                        className="opacity-40"
                      />
                      <polygon points="98,10 93,7 93,13" fill="#166534" className="opacity-40" />
                    </svg>
                  </div>
                )}

                <div className="space-y-6">
                  {/* Step Card Header */}
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${step.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-4xl font-bold font-serif text-navy/10 group-hover:text-gold/20 transition-colors duration-300">
                      {step.stepNum}
                    </span>
                  </div>

                  {/* Step Title & Details */}
                  <div className="space-y-3">
                    <h3 className="font-serif font-bold text-2xl text-navy">{step.title}</h3>
                    <p className="text-navy/70 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>

                <Link href="/about" className="pt-8 flex items-center text-xs font-semibold uppercase tracking-wider text-forest group-hover:text-gold transition-colors duration-300">
                  <span>Explore approach</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
