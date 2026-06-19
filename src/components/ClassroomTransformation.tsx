"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Building, GraduationCap, Flame, ArrowLeftRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ClassroomTransformation() {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0-100)
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchend", handleMouseUp);
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, []);

  const stats = [
    { label: "Classrooms Transformed", value: "120+" },
    { label: "Students Benefited", value: "35,000+" },
    { label: "Schools Upgraded", value: "25+" },
    { label: "Districts Impacted", value: "15" },
  ];

  const highlights = [
    { title: "Better Infrastructure", icon: Building, desc: "Desks, smart-boards, leakage proof roofing, clean paint." },
    { title: "Improved Learning", icon: GraduationCap, desc: "Modern activitykits, science labs, high-quality reference books." },
    { title: "Bright Futures", icon: Flame, desc: "A positive environment that cuts dropout rates by 80%." },
  ];

  return (
    <section id="classroom-transformation" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left Text Detail */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-semibold tracking-widest text-forest uppercase block">
                Classroom Transformation
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-navy leading-tight">
                Changing Classrooms. Changing Lives.
              </h2>
              <p className="text-navy/70 text-sm sm:text-base leading-relaxed">
                We transform dark, under-resourced state schools into safe, modern, colorful and inspiring learning spaces for children to grow, study and learn.
              </p>
            </div>

            {/* Highlights List */}
            <div className="space-y-4">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-start space-x-4 p-4 rounded-2xl border border-navy/5 bg-beige/10">
                    <div className="p-2 rounded-xl bg-forest/10 text-forest mt-0.5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-navy text-base">{item.title}</h4>
                      <p className="text-xs text-navy/60 leading-relaxed mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Slider UI */}
          <div className="lg:col-span-7 space-y-4">
            <div
              ref={containerRef}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              onMouseDown={() => setIsDragging(true)}
              onTouchStart={() => setIsDragging(true)}
              className="relative aspect-[16/10] w-full rounded-3xl overflow-hidden border border-navy/10 shadow-lg cursor-ew-resize select-none"
            >
              {/* After Image (Full Background) */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src="/assets/classroom_after.png"
                  alt="Modern transformed classroom with bright desks and paint"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <span className="absolute bottom-4 right-4 bg-emerald-600/90 text-white text-[9px] uppercase font-bold tracking-widest px-2.5 py-1 rounded">
                  After
                </span>
              </div>

              {/* Before Image (Clipping Path based on slider position) */}
              <div
                className="absolute inset-0 w-full h-full"
                style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
              >
                <Image
                  src="/assets/classroom_before.png"
                  alt="Dilapidated old school classroom before renovations"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <span className="absolute bottom-4 left-4 bg-red-600/90 text-white text-[9px] uppercase font-bold tracking-widest px-2.5 py-1 rounded">
                  Before
                </span>
              </div>

              {/* Slider Drag Bar */}
              <div
                className="absolute top-0 bottom-0 w-[2px] bg-white z-20 cursor-ew-resize"
                style={{ left: `${sliderPosition}%` }}
              >
                {/* Drag Handle Button */}
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white text-navy flex items-center justify-center shadow-lg border border-navy/10 active:scale-95 transition-transform">
                  <ArrowLeftRight className="w-4 h-4 text-forest" />
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center text-[10px] uppercase font-semibold text-navy/40 tracking-wider px-2">
              <span>← Drag Slider to Compare →</span>
              <span>Visual Progress</span>
            </div>
          </div>

        </div>

        {/* Lower Metrics Grid (From image reference 1 layout) */}
        <div className="border-t border-navy/10 pt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center md:text-left">
                <div className="font-serif font-bold text-3xl sm:text-4xl text-forest mb-1">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-xs text-navy/50 font-bold uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
