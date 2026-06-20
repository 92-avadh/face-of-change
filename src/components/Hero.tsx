"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight, Play, BookOpen, Sun, Activity, Home, Sparkles, Users } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { MagneticText } from "@/components/ui/morphing-cursor";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  // Raw (target) and current (smoothed/rendered) cursor position.
  // We lerp between these every frame so the glow glides instead of snapping.
  const targetPos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });
  const rafId = useRef<number | null>(null);
  const isHovering = useRef(false);

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

    // rAF loop: smoothly interpolates the rendered spotlight position toward
    // the real cursor position every frame. This decouples the glow from
    // raw mousemove events (which can be jumpy) and keeps it visually glued
    // to the cursor even while the parallax image is mid-transform.
    const tick = () => {
      const ease = 0.18; // lower = laggier/smoother, higher = snappier
      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * ease;
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * ease;

      if (spotlightRef.current) {
        spotlightRef.current.style.setProperty("--mouse-x", `${currentPos.current.x}px`);
        spotlightRef.current.style.setProperty("--mouse-y", `${currentPos.current.y}px`);
      }

      rafId.current = requestAnimationFrame(tick);
    };
    rafId.current = requestAnimationFrame(tick);

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  // Mouse Tracking Event Handlers
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    // We track against imageRef's bounding box so the glow lines up with the
    // image even though imageRef itself is being transformed by GSAP's
    // parallax (yPercent). getBoundingClientRect() already accounts for
    // the current transform, so this stays accurate while scrolling.
    if (!imageRef.current) return;

    const rect = imageRef.current.getBoundingClientRect();
    targetPos.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };

    // On first move after entering, snap the "current" position instantly
    // so the glow doesn't fly in from the last spot (e.g. center/corner).
    if (!isHovering.current) {
      currentPos.current = { ...targetPos.current };
      isHovering.current = true;
    }
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    if (!imageRef.current || !spotlightRef.current) return;

    // Prime the position immediately on enter (covers the case where the
    // cursor enters and the very first mousemove hasn't fired yet).
    const rect = imageRef.current.getBoundingClientRect();
    const pos = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    targetPos.current = pos;
    currentPos.current = pos;
    isHovering.current = true;

    spotlightRef.current.style.opacity = "1";
  };

  const handleMouseLeave = () => {
    isHovering.current = false;
    if (spotlightRef.current) {
      spotlightRef.current.style.opacity = "0";
    }
  };

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
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-navy text-white pt-24"
    >
      {/* Parallax Background Container */}
      <div
        ref={imageRef}
        className="absolute inset-0 w-full h-[115%] -top-[7%] z-0 bg-navy pointer-events-none"
      >
        {/* --- LAYER 1: BASE BLACK & WHITE IMAGE --- */}
        <Image
          src="/assets/hero_child_second.png"
          alt="Indian child studying in a bright, modern classroom (B&W)"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right md:object-[right_25%] select-none opacity-80"
        />

        {/* --- LAYER 2: HEAVY OVERLAYS --- 
            These are placed OVER the B&W image but UNDER the color spotlight.
            This ensures your text is readable by default, but the color pops vibrantly on hover. */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent z-10" />

        {/* --- LAYER 3: COLOR SPOTLIGHT REVEAL --- */}
        <div
          ref={spotlightRef}
          className="absolute inset-0 z-20 w-full h-full transition-opacity duration-500 ease-out spotlight-mask"
          style={{
            opacity: 0,
          }}
        >
          <Image
            src="/assets/hero_child.png"
            alt="Indian child studying in a bright, modern classroom"
            fill
            priority
            sizes="100vw"
            className="object-cover object-right md:object-[right_25%] select-none opacity-100"
          />
          {/* Faint overlay inside the spotlight so white text doesn't disappear against the bright image */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy/50 to-transparent z-10" />
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow flex flex-col justify-center w-full py-12 md:py-20 pointer-events-none">
        
        {/* Wrapper to re-enable pointer events for clickable inner content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full items-center flex-grow pointer-events-auto">
          
          <div ref={contentRef} className="lg:col-span-7 space-y-6 md:space-y-8">
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-gold animate-pulse" />
              <span className="text-xs uppercase tracking-widest font-semibold text-white/90">
                Together, We Can
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6.5xl font-bold leading-[1.1] tracking-wide text-shadow-md">
              Lighting Lives. <br />
              Transforming Communities. <br />
              Creating{" "}
              <MagneticText
                text="Futures."
                hoverText="Changes."
                className="inline-flex cursor-none select-none text-gold align-baseline"
                textClassName="font-serif text-gold text-4xl sm:text-5xl md:text-6.5xl font-bold leading-[1.1] tracking-wide"
                hoverTextClassName="font-serif text-navy text-4xl sm:text-5xl md:text-6.5xl font-bold leading-[1.1] tracking-wide"
                circleClassName="bg-gold"
              />
            </h1>

            <p className="text-base sm:text-lg text-white/80 max-w-xl font-normal leading-relaxed text-shadow-sm font-sans">
              We work in education, healthcare, renewable energy and community development to build a better, brighter and equitable India.
            </p>
          </div>

          <div className="hidden lg:block lg:col-span-5" />
        </div>

        {/* CTA Buttons & Stats Box Row */}
        <div className="mt-10 md:mt-16 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 pt-8 border-t border-white/10 w-full z-40 pointer-events-auto">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 flex-shrink-0">
            <a
              href="#projects"
              className="inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-full bg-white text-navy font-semibold text-sm transition-all duration-300 hover:bg-white/95 hover:scale-105 shadow-lg group/btn"
            >
              <span>Explore Our Impact</span>
              <ArrowRight className="w-4 h-4 text-navy transition-transform duration-300 group-hover/btn:translate-x-1" />
            </a>

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

      {/* Spotlight mask: separated from inline styles so it can use a
          smooth multi-stop falloff (hard 2-stop radial gradients read as a
          flat disc with a smeared edge) and a responsive radius via clamp().
          Disabled entirely on touch devices, where there's no real cursor
          and a finger-triggered spotlight just looks like a glitch. */}
      <style jsx>{`
        .spotlight-mask {
          --spotlight-radius: clamp(180px, 28vw, 420px);
          -webkit-mask-image: radial-gradient(
            circle var(--spotlight-radius) at var(--mouse-x, 50%) var(--mouse-y, 50%),
            black 0%,
            black 12%,
            rgba(0, 0, 0, 0.85) 30%,
            rgba(0, 0, 0, 0.45) 55%,
            rgba(0, 0, 0, 0.12) 78%,
            transparent 100%
          );
          mask-image: radial-gradient(
            circle var(--spotlight-radius) at var(--mouse-x, 50%) var(--mouse-y, 50%),
            black 0%,
            black 12%,
            rgba(0, 0, 0, 0.85) 30%,
            rgba(0, 0, 0, 0.45) 55%,
            rgba(0, 0, 0, 0.12) 78%,
            transparent 100%
          );
        }

        @media (hover: none) and (pointer: coarse) {
          .spotlight-mask {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}