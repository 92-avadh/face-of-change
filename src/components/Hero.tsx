"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight, Play, BookOpen, Sun, Activity, Home, Sparkles, Users } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Parallax scrolling using GSAP
    if (imageRef.current && containerRef.current) {
      gsap.to(imageRef.current, {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }

    // GSAP fade in for content
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.2,
          ease: "power3.out",
        }
      );
    }
  }, []);

  const stats = [
    { label: "Lives Impacted", value: "25,000+", icon: Users, color: "text-amber-500" },
    { label: "Villages Reached", value: "100+", icon: Home, color: "text-emerald-500" },
    { label: "Education Initiatives", value: "50+", icon: BookOpen, color: "text-sky-500" },
    { label: "Renewable Energy Projects", value: "10+", icon: Sun, color: "text-yellow-500" },
  ];

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-navy text-white pt-24"
    >
      {/* Parallax Background Image - starts Black and White, hovers to Color */}
      <div
        ref={imageRef}
        className="absolute inset-0 w-full h-[115%] -top-[7%] z-0"
      >
        <Image
          src="/assets/hero_child.png"
          alt="Indian child studying in a bright, modern classroom"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right md:object-[right_25%] select-none opacity-80"
        />
        {/* Contrast Overlays for legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/60 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent z-10" />
      </div>

      {/* Hero Content - Grid-based to prevent text from overlapping child's face */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow flex flex-col justify-center w-full py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full items-center flex-grow">
          
          <div ref={contentRef} className="lg:col-span-7 space-y-6 md:space-y-8">
            {/* Tag */}
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-gold animate-pulse" />
              <span className="text-xs uppercase tracking-widest font-semibold text-white/90">
                Together, We Can
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6.5xl font-bold leading-[1.1] tracking-wide text-shadow-md">
              Lighting Lives. <br />
              Transforming Communities. <br />
              Creating <span className="text-gold">Futures.</span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-white/80 max-w-xl font-normal leading-relaxed text-shadow-sm font-sans">
              We work in education, healthcare, renewable energy and community development to build a better, brighter and equitable India.
            </p>
          </div>

          {/* Right empty side to make sure text never overlays the child's face */}
          <div className="hidden lg:block lg:col-span-5" />

        </div>

        {/* CTA Buttons & Stats Box Row */}
        <div className="mt-10 md:mt-16 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 pt-8 border-t border-white/10 w-full z-30">
          {/* CTA Buttons - Matching reference button style */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 flex-shrink-0">
            {/* Primary: White pill button with black text and arrow */}
            <a
              href="#projects"
              className="inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-full bg-white text-navy font-semibold text-sm transition-all duration-300 hover:bg-white/95 hover:scale-105 shadow-lg group/btn"
            >
              <span>Explore Our Impact</span>
              <ArrowRight className="w-4 h-4 text-navy transition-transform duration-300 group-hover/btn:translate-x-1" />
            </a>

            {/* Secondary: Outline button with play icon */}
            <a
              href="#projects"
              className="inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-full border border-white/40 bg-transparent text-white font-semibold text-sm transition-all duration-300 hover:bg-white/10 hover:border-white/60 hover:scale-105 group/btn2"
            >
              <span>View Projects</span>
              <Play className="w-3.5 h-3.5 fill-white text-white transition-transform duration-300 group-hover/btn2:scale-110" />
            </a>
          </div>

          {/* Stats Box */}
          <div className="w-full lg:w-auto bg-[#121212]/85 backdrop-blur-md border border-white/15 py-4 px-6 rounded-2xl shadow-xl lg:max-w-2xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 items-center">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="flex items-center space-x-3 pl-2 first:pl-0 md:border-l md:border-white/10 md:first:border-0 md:pl-4"
                  >
                    <div className={`p-2 rounded-xl bg-white/5 border border-white/10 ${stat.color} flex-shrink-0`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-lg sm:text-xl font-bold tracking-tight font-serif text-white leading-none mb-1">
                        {stat.value}
                      </div>
                      <div className="text-[9px] text-white/50 font-semibold uppercase tracking-wider leading-snug truncate">
                        {stat.label}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}