import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyWeExist from "@/components/WhyWeExist";
import ImpactNumbers from "@/components/ImpactNumbers";
import FeaturedProjects from "@/components/FeaturedProjects";
import MediaCoverage from "@/components/MediaCoverage";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Map } from "lucide-react";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        {/* 1. Hero Section (Floating Stats Card sits on bottom edge) */}
        <Hero />
        
        {/* 2. Mission Statement Overview */}
        <WhyWeExist />
        
        {/* 3. High-level Impact Metrics Numbers */}
        <ImpactNumbers />
        
        {/* 4. Projects Grid Preview (isOverview={true} only shows featured projects and view all link) */}
        <FeaturedProjects isOverview={true} />

        {/* 5. Interactive Map Invitation Banner */}
        <section className="bg-navy text-white py-24 relative overflow-hidden">
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
            <div className="max-w-2xl space-y-6">
              <span className="text-xs font-semibold tracking-widest text-gold uppercase block">
                Interactive Reach Map
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                Explore Our Project Footprint Across India
              </h2>
              <p className="text-white/70 text-sm sm:text-base leading-relaxed font-sans">
                Visualize where Face of Change installs solar micro-grids, hosts community diagnostic clinics, and reforms classrooms. Toggle active states on our digital map dashboard.
              </p>
              <div className="pt-2">
                <Link
                  href="/impact"
                  className="inline-flex items-center space-x-2.5 px-8 py-3.5 rounded-full bg-gold text-navy font-semibold text-sm transition-transform duration-300 hover:scale-105 hover:bg-gold/90 shadow-[0_4px_14px_rgba(245,158,11,0.3)]"
                >
                  <span>Open Interactive Map</span>
                  <Map className="w-4 h-4 text-navy fill-navy" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Media Articles Preview (isOverview={true} only shows 3 news cards and view all link) */}
        <MediaCoverage isOverview={true} />

        {/* 7. Corporate Partnerships & Volunteer Contact Overview */}
        <section className="bg-beige/40 py-24 border-t border-b border-navy/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <span className="text-xs font-semibold tracking-widest text-forest uppercase block">
              Join Our Journey
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-navy leading-tight">
              Partner with us to create sustainable, lasting change.
            </h2>
            <p className="text-navy/60 text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-sans">
              Whether you are a corporation looking for CSR projects, an institution looking to sponsor classrooms, or an individual contributor — let's build a better India together.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-between px-8 py-3.5 rounded-full bg-navy text-white font-semibold text-sm transition-transform duration-300 hover:scale-105 shadow-md group/cbtn"
              >
                <span>CSR & General Inquiry</span>
                <ArrowRight className="w-4 h-4 text-white ml-2 transition-transform duration-300 group-hover/cbtn:translate-x-1" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-navy/20 bg-white text-navy font-semibold text-sm transition-transform duration-300 hover:scale-105 shadow-sm"
              >
                <span>Learn More About Us</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
