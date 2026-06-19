import React from "react";
import Navbar from "@/components/Navbar";
import WhyWeExist from "@/components/WhyWeExist";
import BeneficiaryStories from "@/components/BeneficiaryStories";
import FutureTimeline from "@/components/FutureTimeline";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Sparkles } from "lucide-react";

export const metadata = {
  title: "About Us | Face of Change",
  description: "Learn about why we exist, our values, our team, and the timeline of our initiatives across India.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow bg-beige/25">
        
        {/* Page Header */}
        <div className="bg-[#FAF9F5] text-navy pt-36 pb-20 relative overflow-hidden border-b border-navy/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 space-y-4">
            {/* Breadcrumbs */}
            <nav className="flex space-x-2 text-xs font-semibold uppercase tracking-wider text-navy/40">
              <Link href="/" className="hover:text-forest transition-colors">Home</Link>
              <span>/</span>
              <span className="text-navy">About Us</span>
            </nav>
            
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-forest/5 border border-forest/15 backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-forest" />
              <span className="text-[10px] uppercase tracking-widest font-semibold text-forest">
                Our Vision & Mission
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold leading-none tracking-wide text-navy">
              Who We <span className="text-forest">Are</span>
            </h1>
            <p className="text-navy/60 text-sm sm:text-base max-w-2xl leading-relaxed font-sans">
              Face of Change is dedicated to driving grassroot changes through sustainable initiatives in education, healthcare, and renewable energy.
            </p>
          </div>
        </div>

        {/* Content sections */}
        <WhyWeExist />
        <BeneficiaryStories />
        <FutureTimeline />
      </main>
      <Footer />
    </>
  );
}
