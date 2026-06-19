import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import MediaCoverage from "@/components/MediaCoverage";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Sparkles } from "lucide-react";

export const metadata = {
  title: "News & Media Coverage | Face of Change",
  description: "Read national and local newspaper articles, tv features, and online mentions covering our projects across India.",
};

export default function MediaPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow bg-beige/25">
        
        {/* Page Header with newspaper background image */}
        <div className="bg-[#FAF9F5] text-navy pt-36 pb-20 relative overflow-hidden border-b border-navy/5">
          {/* Background newspaper image */}
          <div className="absolute top-0 right-0 bottom-0 w-full md:w-1/2 z-0">
            <Image
              src="/assets/newspaper_background.png"
              alt="Newspapers and reading glasses"
              fill
              sizes="(max-w-768px) 100vw, 50vw"
              priority
              className="object-cover object-right opacity-65 md:opacity-80"
            />
            {/* Blend gradients to fade to the left background color */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#FAF9F5] via-[#FAF9F5]/55 to-transparent" />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 space-y-4">
            {/* Breadcrumbs */}
            <nav className="flex space-x-2 text-xs font-semibold uppercase tracking-wider text-navy/40">
              <Link href="/" className="hover:text-forest transition-colors">Home</Link>
              <span>/</span>
              <span className="text-navy">Media Coverage</span>
            </nav>
            
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-forest/5 border border-forest/15 backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-forest" />
              <span className="text-[10px] uppercase tracking-widest font-semibold text-forest">
                News & Press Releases
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold leading-none tracking-wide text-navy">
              News & Media <span className="text-forest">Coverage</span>
            </h1>
            <p className="text-navy/60 text-sm sm:text-base max-w-xl leading-relaxed font-sans">
              Explore our footprint in national headlines, tv features, and digital news portals across India.
            </p>
          </div>
        </div>

        {/* Content sections */}
        <MediaCoverage isOverview={false} />
      </main>
      <Footer />
    </>
  );
}

