"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Newspaper, ExternalLink, Calendar, ChevronDown, Video, Globe, BookOpen, ArrowRight, Loader2, Send } from "lucide-react";
import { motion } from "framer-motion";
import { subscribeToNewsletter } from "@/app/actions";
import Link from "next/link";

function NewspaperLogo({ name, className = "" }: { name: string; className?: string }) {
  const normName = name.toUpperCase().replace(/\s+/g, " ").trim();

  if (normName === "THE HINDU") {
    return (
      <span className={`font-serif font-black italic tracking-tighter text-navy border-y border-navy/30 py-0.5 px-3 text-[13px] leading-none uppercase select-none ${className}`}>
        THE HINDU
      </span>
    );
  }
  if (normName === "THE TIMES OF INDIA") {
    return (
      <div className={`flex flex-col items-center justify-center text-center font-serif text-navy select-none ${className}`}>
        <div className="border-y border-navy/30 py-0.5 px-2">
          <span className="text-[7px] font-bold tracking-[0.18em] block uppercase leading-none mb-0.5">THE TIMES OF</span>
          <span className="text-xs font-black tracking-wider block uppercase leading-none">INDIA</span>
        </div>
      </div>
    );
  }
  if (normName === "THE INDIAN EXPRESS" || normName === "THE INDIAN EXPRESS") {
    return (
      <div className={`flex flex-col items-center justify-center text-center font-serif text-navy select-none ${className}`}>
        <div className="border-y border-navy/20 py-0.5 px-2">
          <span className="text-[7px] italic font-bold tracking-[0.1em] block uppercase leading-none mb-0.5">THE INDIAN</span>
          <span className="text-xs italic font-black tracking-[0.15em] block uppercase leading-none">EXPRESS</span>
        </div>
      </div>
    );
  }
  if (normName === "दैनिक जागरण" || normName === "DAINIK JAGRAN") {
    return (
      <span className={`font-sans font-bold text-slate-700 text-xs md:text-sm tracking-wide select-none ${className}`}>
        दैनिक जागरण
      </span>
    );
  }
  if (normName === "अमर उजाला" || normName === "AMAR UJALA") {
    return (
      <span className={`font-sans font-extrabold text-[#E11D48] text-xs md:text-sm tracking-wide select-none ${className}`}>
        अमर उजाला
      </span>
    );
  }
  if (normName === "BUSINESS STANDARD") {
    return (
      <div className={`flex flex-col items-center justify-center text-center font-serif text-slate-800 select-none ${className}`}>
        <span className="text-[8px] font-extrabold tracking-wider block uppercase leading-none mb-0.5">BUSINESS</span>
        <span className="text-xs font-black tracking-widest block uppercase leading-none">STANDARD</span>
      </div>
    );
  }
  if (normName === "HINDUSTAN TIMES") {
    return (
      <span className={`font-serif font-bold italic tracking-tight text-[11px] md:text-[12px] text-navy uppercase border-b border-navy/25 pb-0.5 px-1 select-none ${className}`}>
        HINDUSTAN TIMES
      </span>
    );
  }
  if (normName === "THE ECONOMIC TIMES") {
    return (
      <div className={`flex flex-col items-center justify-center text-center font-serif text-slate-800 select-none ${className}`}>
        <div className="border-y border-slate-300 py-0.5 px-2">
          <span className="text-[7px] font-bold tracking-[0.15em] block uppercase leading-none mb-0.5">THE ECONOMIC</span>
          <span className="text-xs font-black tracking-[0.12em] block uppercase leading-none">TIMES</span>
        </div>
      </div>
    );
  }
  if (normName === "NDTV") {
    return (
      <span className={`font-sans font-black text-[#E11D48] text-sm tracking-tighter select-none ${className}`}>
        NDTV
      </span>
    );
  }

  return (
    <span className={`font-serif font-bold text-xs uppercase tracking-wider text-navy select-none ${className}`}>
      {name}
    </span>
  );
}

export default function MediaCoverage({ isOverview = false }: { isOverview?: boolean }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<{ type: "idle" | "loading" | "success" | "error"; message: string }>({
    type: "idle",
    message: "",
  });

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus({ type: "loading", message: "" });
    try {
      const response = await subscribeToNewsletter(email);
      if (response.success) {
        setStatus({ type: "success", message: response.message });
        setEmail("");
      } else {
        setStatus({ type: "error", message: response.message });
      }
    } catch (err) {
      setStatus({ type: "error", message: "Failed to subscribe. Please try again." });
    }
  };

  const categories = [
    "All Coverage",
    "Newspaper Articles",
    "TV Coverage",
    "Online Articles",
    "Magazine Features",
  ];
  const [activeCategory, setActiveCategory] = useState("All Coverage");

  const articles = [
    {
      masthead: "THE HINDU",
      headline: "Solar Power, Brighter Futures: Transforming Rural Odisha",
      date: "12 May 2024",
      excerpt: "Solar power brings new hope to 500+ families in rural Odisha.",
      badge: "Odisha",
      badgeColor: "bg-orange-50 text-orange-700 border-orange-100/50",
      link: "https://thehindu.com",
    },
    {
      masthead: "THE TIMES OF INDIA",
      headline: "Health for All: Free Medical Camps in Delhi's Communities",
      date: "05 May 2024",
      excerpt: "Medical checkup initiative reaches 20,000+ people across Delhi.",
      badge: "Delhi",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-100/50",
      link: "https://timesofindia.com",
    },
    {
      masthead: "दैनिक जागरण",
      headline: "बेहतर शिक्षा के लिए बदलते क्लासरूम, बदलते बच्चों के सपने",
      date: "20 Apr 2024",
      excerpt: "Classroom transformation program improving education in government schools.",
      badge: "Education",
      badgeColor: "bg-sky-50 text-sky-700 border-sky-100/50",
      link: "https://jagran.com",
    },
    {
      masthead: "The Indian EXPRESS",
      headline: "NGO's Solar Initiative Lights Up 50+ Villages in Odisha",
      date: "15 Apr 2024",
      excerpt: "Sustainable energy projects empowering rural communities with clean power.",
      badge: "Odisha",
      badgeColor: "bg-orange-50 text-orange-700 border-orange-100/50",
      link: "https://indianexpress.com",
    },
    {
      masthead: "अमर उजाला",
      headline: "दिल्ली में मुफ्त स्वास्थ्य जांच शिविरों से लोगों को मिला बड़ा लाभ",
      date: "10 Apr 2024",
      excerpt: "Free medical camps make healthcare accessible for all.",
      badge: "Delhi",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-100/50",
      link: "https://amarujala.com",
    },
    {
      masthead: "Hindustan Times",
      headline: "Education Support Program Transforms Young Lives",
      date: "02 Apr 2024",
      excerpt: "Supporting education today for a brighter tomorrow.",
      badge: "Education",
      badgeColor: "bg-sky-50 text-sky-700 border-sky-100/50",
      link: "https://hindustantimes.com",
    },
    {
      masthead: "Business Standard",
      headline: "CSR Partnerships Driving Meaningful Change on Ground",
      date: "28 Mar 2024",
      excerpt: "Collaborative efforts creating lasting impact in communities.",
      badge: "CSR",
      badgeColor: "bg-amber-50 text-amber-700 border-amber-100/50",
      link: "https://business-standard.com",
    },
    {
      masthead: "THE ECONOMIC TIMES",
      headline: "How Community Projects are Building a Better India",
      date: "18 Mar 2024",
      excerpt: "Community-driven projects that are shaping a stronger India.",
      badge: "Impact",
      badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-100/50",
      link: "https://economictimes.com",
    },
  ];

  const publicationLogos = [
    { name: "THE HINDU", style: "font-serif font-black italic tracking-tighter" },
    { name: "THE TIMES OF INDIA", style: "font-serif font-extrabold tracking-tight" },
    { name: "The Indian EXPRESS", style: "font-serif italic font-bold" },
    { name: "दैनिक जागरण", style: "font-sans font-bold" },
    { name: "अमर उजाला", style: "font-sans font-extrabold text-red-600" },
    { name: "Business Standard", style: "font-serif font-extrabold" },
    { name: "Hindustan Times", style: "font-serif font-bold italic" },
    { name: "THE ECONOMIC TIMES", style: "font-serif font-bold tracking-widest text-[9px]" },
    { name: "NDTV", style: "font-sans font-black text-red-600 tracking-tighter text-base" },
  ];

  return (
    <section id="media" className="bg-[#FAF9F5] py-24 md:py-32 border-b border-navy/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Tag & Description Row */}
        <div className="space-y-3 mb-10">
          <span className="text-[10px] font-bold tracking-[0.25em] text-forest uppercase block">
            Media That Recognizes Change
          </span>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5.5xl font-bold text-navy leading-tight">
              News & Media Coverage
            </h2>
            <p className="text-navy/60 text-sm max-w-xl leading-relaxed">
              From local stories to national headlines — see how our work is creating real impact across India.
            </p>
          </div>
        </div>



        {/* Category filters bar & Sorting Dropdown */}
        {!isOverview && (
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-10 pb-6 border-b border-navy/5">
            <div className="flex flex-wrap gap-2.5">
              {categories.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold border transition-all duration-300 ${
                      isActive
                        ? "bg-forest text-white border-forest shadow-sm"
                        : "bg-[#F1EFEA] text-navy/70 border-transparent hover:border-forest/30"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            <div className="flex items-center space-x-3.5">
              <div className="inline-flex items-center space-x-2 bg-[#F1EFEA] px-4 py-2 rounded-full border border-navy/5 text-xs text-navy/75 font-semibold cursor-pointer hover:border-forest/20">
                <span>Newest First</span>
                <ChevronDown className="w-3.5 h-3.5 text-navy/50" />
              </div>
              <div className="p-2.5 rounded-full bg-[#F1EFEA] border border-navy/5 text-navy/75 hover:border-forest/20 cursor-pointer">
                <Calendar className="w-4 h-4" />
              </div>
            </div>
          </div>
        )}

        {/* Grid Column Layout - Sidebar on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Area: Article Cards Grid (lg:col-span-8 or lg:col-span-12 in overview) */}
          <div className={`${isOverview ? "lg:col-span-12" : "lg:col-span-8"} space-y-12`}>
            <div className={`grid grid-cols-1 md:grid-cols-2 ${isOverview ? "lg:grid-cols-3" : ""} gap-6 md:gap-8`}>
              {(isOverview ? articles.slice(0, 3) : articles).map((article, idx) => (
                <motion.article
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="bg-white border border-navy/5 rounded-2xl p-6 hover:shadow-[0_15px_40px_rgba(15,23,42,0.04)] hover:border-navy/10 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Publication masthead header */}
                    <div className="border-b border-navy/10 pb-4 mb-4 flex items-center justify-center h-10">
                      <NewspaperLogo name={article.masthead} />
                    </div>

                    {/* Article Info */}
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2 text-[10px] text-navy/40 font-semibold uppercase tracking-wider">
                        <Calendar className="w-3 h-3" />
                        <span>{article.date}</span>
                        <span className="text-navy/15">•</span>
                        <span>{article.masthead}</span>
                      </div>

                      <h3 className="font-serif font-bold text-base text-navy leading-snug hover:text-forest transition-colors">
                        {article.headline}
                      </h3>

                      <div className="flex items-center gap-2 pt-1">
                        <span className={`px-2 py-0.5 rounded text-[9px] font-bold border uppercase ${article.badgeColor}`}>
                          {article.badge}
                        </span>
                        <p className="text-navy/60 text-xs leading-relaxed line-clamp-2">
                          {article.excerpt}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Read Full Coverage */}
                  <div className="pt-4 border-t border-navy/5 mt-4">
                    <a
                      href={article.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 text-[10px] font-bold text-forest uppercase tracking-wider hover:text-gold transition-colors"
                    >
                      <span>Read Full Article</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Action Button */}
            <div className="flex justify-center">
              {isOverview ? (
                <Link
                  href="/media"
                  className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-full bg-forest text-white font-semibold text-xs uppercase tracking-wider hover:bg-forest/90 transition-colors shadow-sm group"
                >
                  <span>View All Media Coverage</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              ) : (
                <button className="inline-flex items-center space-x-2 px-6 py-3 rounded-full border border-navy/10 bg-white text-navy font-semibold text-xs uppercase tracking-wider hover:border-forest/40 transition-colors shadow-sm">
                  <span>Load More Articles</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Right Area: Sidebar Panels (lg:col-span-4) */}
          {!isOverview && (
            <div className="lg:col-span-4 space-y-6">
              
              {/* Panel 1: In the Spotlight Quote */}
              <div className="bg-[#F3F5F0] rounded-3xl border border-navy/5 p-8 relative overflow-hidden shadow-sm">
                <span className="text-[9px] font-bold tracking-[0.2em] text-forest uppercase block mb-4">
                  In the Spotlight
                </span>
                <div className="text-forest/20 absolute right-6 top-8">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-4.995 3.161-4.995 5.848h5v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-5 3.161-5 5.848h5v10h-9.996z" />
                  </svg>
                </div>
                <blockquote className="space-y-4">
                  <p className="font-serif italic text-base text-navy leading-relaxed relative z-10">
                    "Real change is not just seen in numbers, but in the smiles we create every day."
                  </p>
                  <cite className="text-xs font-semibold text-navy/70 not-italic block">
                    — Face of Change
                  </cite>
                </blockquote>
                
                {/* Subtle organic leaves vector in bg */}
                <div className="absolute right-0 bottom-0 opacity-15 pointer-events-none select-none">
                  <svg width="100" height="100" viewBox="0 0 100 100" fill="currentColor" className="text-forest">
                    <path d="M100 100 C 60 100, 30 70, 30 30 C 50 30, 80 60, 100 100 Z" />
                    <path d="M100 100 C 80 70, 70 30, 50 0 C 70 20, 90 60, 100 100 Z" />
                  </svg>
                </div>
              </div>

              {/* Panel 2: Impact metrics */}
              <div className="bg-white rounded-3xl border border-navy/5 p-6 sm:p-8 shadow-sm">
                <span className="text-[9px] font-bold tracking-[0.2em] text-forest uppercase block mb-6">
                  Our Impact In News
                </span>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { value: "150+", label: "Media Mentions", icon: Newspaper, color: "text-forest" },
                    { value: "25+", label: "TV Features", icon: Video, color: "text-amber-500" },
                    { value: "300+", label: "Online Articles", icon: Globe, color: "text-sky-500" },
                    { value: "10+", label: "Magazine Features", icon: BookOpen, color: "text-emerald-500" },
                  ].map((stat, idx) => {
                    const Icon = stat.icon;
                    return (
                      <div key={idx} className="space-y-1 bg-[#FAF9F5] p-3.5 rounded-xl border border-navy/5">
                        <Icon className={`w-4 h-4 mb-1 ${stat.color}`} />
                        <div className="text-xl font-bold font-serif text-navy leading-none">
                          {stat.value}
                        </div>
                        <div className="text-[9px] text-navy/50 font-bold uppercase tracking-wider leading-tight">
                          {stat.label}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Panel 3: As seen in mastheads list */}
              <div className="bg-white rounded-3xl border border-navy/5 p-6 sm:p-8 shadow-sm">
                <span className="text-[9px] font-bold tracking-[0.2em] text-forest uppercase block mb-6">
                  As Seen In
                </span>
                <div className="grid grid-cols-3 gap-y-6 gap-x-3 items-center justify-items-center opacity-65">
                  {publicationLogos.map((pub, idx) => (
                    <div key={idx} className="w-full flex items-center justify-center min-h-[32px] border-b border-navy/5 pb-2">
                      <NewspaperLogo name={pub.name} className="scale-90" />
                    </div>
                  ))}
                </div>
              </div>

              {/* View All button */}
              <Link href="/media" className="w-full py-3 rounded-full bg-forest text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 hover:bg-forest/90 transition-colors shadow-md group">
                <span>View All Media Coverage</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

            </div>
          )}

        </div>

        {/* Subscribe Banner at bottom of section */}
        {!isOverview && (
          <div className="mt-20 bg-forest rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-lg">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.08),transparent_50%)] pointer-events-none" />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-7 space-y-3">
                <h3 className="font-serif font-bold text-2xl sm:text-3xl leading-snug">
                  Stay Updated With Our Journey
                </h3>
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed max-w-lg">
                  Subscribe to our newsletter for project reports, impact stories, and news releases directly in your inbox.
                </p>
              </div>
              <div className="lg:col-span-5 w-full">
                <form onSubmit={handleSubscribe} className="relative w-full" id="media-newsletter-form">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-full py-4 pl-6 pr-14 text-xs text-white placeholder-white/40 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all shadow-inner"
                  />
                  <button
                    type="submit"
                    disabled={status.type === "loading"}
                    className="absolute right-2 top-2 w-10 h-10 rounded-full bg-gold text-navy flex items-center justify-center hover:bg-gold/90 transition-colors disabled:opacity-50"
                    aria-label="Subscribe"
                  >
                    {status.type === "loading" ? (
                      <Loader2 className="w-4 h-4 animate-spin text-navy" />
                    ) : (
                      <Send className="w-4 h-4 text-navy fill-navy" />
                    )}
                  </button>
                </form>
                {status.message && (
                  <p className={`text-xs mt-2 font-medium ${status.type === "success" ? "text-gold" : "text-red-300"}`}>
                    {status.message}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

