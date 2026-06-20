"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, Heart, MapPin, Sun, Users, Home, Activity, Sparkles, Navigation, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { indiaMapPaths } from "@/lib/indiaMapData";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface RegionInfo {
  id: string;
  name: string;
  project: string;
  description: string;
  stats: string;
  anchor: string;
  stateKey: string;
}

export default function InteractiveMap() {
  const [activeRegion, setActiveRegion] = useState<RegionInfo | null>(null);
  const [hoveredState, setHoveredState] = useState<string | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const router = useRouter();

  const regions: RegionInfo[] = [
    {
      id: "delhi",
      name: "Delhi NCR",
      project: "Delhi Medical Checkup Initiative",
      description:
        "Free health checkups and medical support for underserved communities in Delhi and nearby areas.",
      stats: "20,000+ Beneficiaries | 100+ Health Camps",
      anchor: "#project-delhi",
      stateKey: "INDL",
    },
    {
      id: "odisha",
      name: "Odisha (Mayurbhanj)",
      project: "Odisha Solar Plant Project",
      description:
        "Providing clean, sustainable and affordable energy to rural communities through solar power.",
      stats: "15,000+ Lives Impacted | 5MW+ Solar Capacity",
      anchor: "#project-odisha",
      stateKey: "INOR",
    },
  ];

  // SimpleMaps configurations
  const defaultStateColor = "#E8ECEF";
  const defaultStateHoverColor = "#DBE1E6";
  const borderSize = 1.2;
  const borderColor = "#FFFFFF";

  const stateConfigs: Record<string, { color?: string; hover_color?: string; name: string }> = {
    INDL: {
      name: "Delhi",
      color: "#D1E7DD",
      hover_color: "#A3CFBB",
    },
    INOR: {
      name: "Odisha",
      color: "#FFE69C",
      hover_color: "#FFDA6A",
    },
  };

  const handlePinClick = (anchor: string) => {
    const el = document.querySelector(anchor);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setTooltipPos({
      x: e.clientX - rect.left + 15,
      y: e.clientY - rect.top + 15,
    });
  };

  const getPathColor = (key: string, isHovered: boolean) => {
    // Map Dadra/Nagar Haveli & Daman/Diu merged config
    const lookupKey = (key === "INDN" || key === "INDD") ? "INDH" : key;
    const config = stateConfigs[lookupKey];

    if (config) {
      return isHovered ? (config.hover_color || defaultStateHoverColor) : (config.color || defaultStateColor);
    }
    return isHovered ? defaultStateHoverColor : defaultStateColor;
  };

  const getStateName = (key: string) => {
    const lookupKey = (key === "INDN" || key === "INDD") ? "INDH" : key;
    return stateConfigs[lookupKey]?.name || indiaMapPaths[key]?.name || key;
  };

  const isDelhiActive = activeRegion?.id === "delhi";
  const isOdishaActive = activeRegion?.id === "odisha";

  return (
    <section id="impact" className="bg-[#FAF9F5] pt-32 pb-16 overflow-hidden border-b border-navy/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* 2-Column Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Column 1: Header, Legend & Info Card */}
          <div className="lg:col-span-4 space-y-6">
            {/* Breadcrumbs */}
            <nav className="flex space-x-2 text-xs font-semibold uppercase tracking-wider text-navy/40 mb-2">
              <Link href="/" className="hover:text-forest transition-colors">Home</Link>
              <span>&gt;</span>
              <Link href="/projects" className="hover:text-forest transition-colors">Our Projects</Link>
              <span>&gt;</span>
              <span className="text-forest">Projects Across India</span>
            </nav>
            
            <div className="space-y-3">
              <span className="text-[10px] font-bold tracking-[0.25em] text-forest uppercase block">
                Our Work. Across India.
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-navy leading-tight">
                Change Lives. One Community At A Time.
              </h1>
              <p className="text-navy/60 text-xs sm:text-sm leading-relaxed font-sans">
                Explore the regions where we are working to build a better, healthier, and brighter India. Toggle active states on our digital map dashboard.
              </p>
            </div>

            {/* Pins Legend Card (vertical list) */}
            <div className="bg-white rounded-2xl border border-navy/5 p-4 space-y-3.5 shadow-sm">
              <div className="flex items-center space-x-3">
                <div className="w-2.5 h-2.5 rounded-full bg-forest animate-pulse block" />
                <span className="text-xs font-semibold text-navy/80">Active Projects</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2.5 h-2.5 rounded-full bg-gold block" />
                <span className="text-xs font-semibold text-navy/80">Featured Projects</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2.5 h-2.5 rounded-full bg-navy/20 block" />
                <span className="text-xs font-semibold text-navy/80">Upcoming Projects</span>
              </div>
            </div>

            {/* Impact note */}
            <div className="bg-white border border-navy/5 rounded-2xl p-4 flex items-start space-x-3 shadow-sm">
              <div className="w-8 h-8 rounded-lg bg-forest/10 flex items-center justify-center text-forest flex-shrink-0">
                <Heart className="w-4 h-4 fill-forest" />
              </div>
              <p className="text-[11px] text-navy/60 leading-normal font-sans">
                Every location represents real people whose lives we are transforming together.
              </p>
            </div>
          </div>

          {/* Column 2: SVG Map Column */}
          <div className="lg:col-span-8 relative bg-white rounded-3xl border border-navy/5 p-4 md:p-6 shadow-sm flex flex-col justify-between" onMouseMove={handleMouseMove}>
            {/* Explore India Floating Badge */}
            <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm border border-navy/5 shadow-sm rounded-xl p-2.5 flex items-center space-x-2.5 pointer-events-none z-20">
              <div className="text-navy flex flex-col text-right">
                <span className="text-[9px] font-bold text-navy uppercase tracking-wider leading-none">Explore India</span>
                <span className="text-[8px] text-navy/50 font-medium leading-none mt-1">Click on a state to see projects</span>
              </div>
              <div className="w-6 h-6 rounded-lg bg-[#FAF9F5] border border-navy/5 flex items-center justify-center text-forest">
                <Navigation className="w-3.5 h-3.5 rotate-45 fill-forest text-forest" />
              </div>
            </div>

            {/* The India SVG Map */}
            <div className="relative w-full max-w-md mx-auto p-2">
              <svg
                viewBox="0 0 612 696"
                className="w-full h-auto select-none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {Object.entries(indiaMapPaths).map(([key, state]) => {
                  const isHovered = hoveredState === getStateName(key);
                  const isDelhi = key === "INDL";
                  const isOdisha = key === "INOR";
                  const hasProject = isDelhi || isOdisha;

                  return (
                    <path
                      key={key}
                      d={state.path}
                      fill={getPathColor(key, isHovered)}
                      stroke={borderColor}
                      strokeWidth={borderSize}
                      className={`transition-all duration-300 ${
                        hasProject ? "cursor-pointer stroke-white hover:brightness-95" : "pointer-events-all"
                      }`}
                      onMouseEnter={() => {
                        setHoveredState(getStateName(key));
                        if (isDelhi) setActiveRegion(regions[0]);
                        if (isOdisha) setActiveRegion(regions[1]);
                      }}
                      onMouseLeave={() => setHoveredState(null)}
                      onClick={() => {
                        if (isDelhi) router.push("/projects/delhi");
                        if (isOdisha) router.push("/projects/odisha");
                      }}
                    />
                  );
                })}

                {/* Delhi Green Pin */}
                <g
                  className="cursor-pointer"
                  onClick={() => router.push("/projects/delhi")}
                  onMouseEnter={() => {
                    setActiveRegion(regions[0]);
                    setHoveredState("Delhi");
                  }}
                  onMouseLeave={() => setHoveredState(null)}
                >
                  <circle cx="186.3" cy="210.4" r="14" fill="#166534" fillOpacity="0.08" stroke="#166534" strokeWidth="0.5" strokeOpacity="0.3">
                    <animate attributeName="r" from="10" to="18" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" from="0.5" to="0" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="186.3" cy="210.4" r="8" fill="#166534" fillOpacity="0.12" stroke="#166534" strokeWidth="0.5" strokeOpacity="0.2" />
                  <image href="/images/pin-green.png" x={186.3 - 10} y={210.4 - 24} width="20" height="24" />
                </g>

                {/* Delhi Label */}
                <g className="cursor-pointer" onClick={() => router.push("/projects/delhi")}>
                  <rect x={186.3 + 12} y={210.4 - 8} width="46" height="15" rx="3" fill="#1E293B" />
                  <text x={186.3 + 35} y={210.4 + 2} textAnchor="middle" fill="#fff" fontSize="7" fontWeight="700" fontFamily="Inter, sans-serif" letterSpacing="0.5">
                    Delhi
                  </text>
                </g>

                {/* Odisha Gold/Green Pin */}
                <g
                  className="cursor-pointer"
                  onClick={() => router.push("/projects/odisha")}
                  onMouseEnter={() => {
                    setActiveRegion(regions[1]);
                    setHoveredState("Odisha");
                  }}
                  onMouseLeave={() => setHoveredState(null)}
                >
                  <circle cx="340.1" cy="405.2" r="14" fill="#F59E0B" fillOpacity="0.1" stroke="#F59E0B" strokeWidth="0.5" strokeOpacity="0.3">
                    <animate attributeName="r" from="10" to="18" dur="2.2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" from="0.5" to="0" dur="2.2s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="340.1" cy="405.2" r="8" fill="#F59E0B" fillOpacity="0.12" stroke="#F59E0B" strokeWidth="0.5" strokeOpacity="0.2" />
                  <image href="/images/pin-green.png" x={340.1 - 10} y={405.2 - 24} width="20" height="24" />
                </g>

                {/* Odisha Label */}
                <g className="cursor-pointer" onClick={() => router.push("/projects/odisha")}>
                  <rect x={340.1 + 12} y={405.2 - 8} width="52" height="15" rx="3" fill="#1E293B" />
                  <text x={340.1 + 38} y={405.2 + 2} textAnchor="middle" fill="#fff" fontSize="7" fontWeight="700" fontFamily="Inter, sans-serif" letterSpacing="0.5">
                    Odisha
                  </text>
                </g>
              </svg>
            </div>

            {/* "More Impact Coming Soon" strip */}
            <div className="w-full mt-4 bg-[#FAF9F5] rounded-2xl border border-navy/5 p-4 shadow-inner">
              <span className="text-[9px] font-bold tracking-wider text-navy/40 uppercase block mb-2">
                More Impact Coming Soon
              </span>
              <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-1">
                {[
                  { name: "Rajasthan", tag: "Upcoming" },
                  { name: "Maharashtra", tag: "Upcoming" },
                  { name: "Karnataka", tag: "Upcoming" },
                  { name: "Uttar Pradesh", tag: "Upcoming" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-1.5 bg-white px-3 py-1.5 rounded-lg border border-navy/5 flex-shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-navy/20" />
                    <span className="text-[10px] font-bold text-navy/70">{item.name}</span>
                    <span className="text-[8px] px-1 py-0.2 bg-navy/5 text-navy/40 font-semibold rounded">{item.tag}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Cursor Tooltip */}
            <AnimatePresence>
              {hoveredState && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.1 }}
                  style={{ left: tooltipPos.x, top: tooltipPos.y }}
                  className="absolute bg-white/95 backdrop-blur-sm text-navy px-3 py-1.5 rounded-lg shadow-md border border-navy/10 text-xs font-semibold pointer-events-none z-50 transition-all duration-75"
                >
                  {hoveredState}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* ─── Bottom Full-Width Statistics Banner ─── */}
        <div className="bg-[#FAF8F2] rounded-3xl border border-navy/5 overflow-hidden shadow-sm p-6 sm:p-8 mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Quote Left */}
            <div className="lg:col-span-6 border-l-2 border-forest pl-5 py-1">
              <blockquote className="space-y-2">
                <p className="font-serif italic text-base sm:text-lg text-navy leading-relaxed">
                  "Our reach may be across India, but our focus is always on transforming lives."
                </p>
                <cite className="text-xs font-semibold text-navy/55 not-italic block">
                  — Face of Change
                </cite>
              </blockquote>
            </div>

            {/* Stats Grid Right */}
            <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-4 gap-4 items-center pl-0 lg:pl-6">
              {[
                { value: "2", label: "States Supported" },
                { value: "70+", label: "Active Projects" },
                { value: "50,000+", label: "Lives Impacted" },
                { value: "150+", label: "Communities" },
              ].map((stat, idx) => (
                <div key={idx} className="space-y-0.5 pl-3 border-l border-navy/10 first:border-0 first:pl-0">
                  <div className="text-xl sm:text-2xl font-black font-serif text-navy leading-none">
                    {stat.value}
                  </div>
                  <div className="text-[9px] text-navy/50 font-bold uppercase tracking-wider leading-snug">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
