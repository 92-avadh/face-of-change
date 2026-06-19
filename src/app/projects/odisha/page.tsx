import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, MapPin, Tag, Sun } from "lucide-react";

export const metadata = {
  title: "Odisha Solar Plant Project | Face of Change",
  description: "Learn about our solar micro-grids installation bringing clean energy, electricity, and economic growth to Mayurbhanj's tribal communities.",
};

export default function OdishaProjectPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow bg-[#FAF9F5] pt-32 pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Breadcrumbs & Navigation */}
          <nav className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-navy/40">
            <Link href="/" className="hover:text-forest transition-colors">Home</Link>
            <span>/</span>
            <Link href="/projects" className="hover:text-forest transition-colors">Projects</Link>
            <span>/</span>
            <span className="text-forest">Odisha Solar Project</span>
          </nav>

          {/* Blog Header */}
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-forest/5 border border-forest/15">
              <Sun className="w-3.5 h-3.5 text-forest animate-pulse" />
              <span className="text-[10px] uppercase tracking-widest font-semibold text-forest">
                Renewable Energy Program
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-navy leading-tight max-w-4xl">
              Empowering Odisha: Lighting Up Tribal Villages with Sustainable Solar Micro-Grids
            </h1>

            {/* Article Metadata */}
            <div className="flex flex-wrap gap-4 sm:gap-6 text-xs text-navy/50 font-medium border-y border-navy/5 py-4">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-forest" />
                <span>Mayurbhanj, Odisha, India</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-forest" />
                <span>Launched Mar 2024</span>
              </div>
              <div className="flex items-center space-x-2">
                <Tag className="w-4 h-4 text-forest" />
                <span>Clean Grid, Rural Development</span>
              </div>
            </div>
          </div>

          {/* Main Featured Image */}
          <div className="relative aspect-[21/9] w-full rounded-3xl overflow-hidden border border-navy/5 shadow-sm">
            <Image
              src="/assets/project_odisha_solar.png"
              alt="Odisha Solar Project Cover"
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Article Body */}
          <div className="text-navy/80 font-sans text-sm sm:text-base leading-relaxed space-y-16">
            
            {/* Section 1: Intro Text */}
            <div className="max-w-3xl space-y-6">
              <p className="font-medium text-navy text-base sm:text-lg leading-relaxed">
                Mayurbhanj district in Odisha is known for its breathtaking natural beauty, ancient forests, and rich tribal heritage. Yet, for decades, many rural habitations nestled deep within the valleys had never experienced grid electricity. Life paused at sundown, leaving students in darkness, forcing residents to rely on polluting kerosene lamps, and limiting local cottage industries.
              </p>
              <p>
                In March 2024, Face of Change rolled out the <strong>Odisha Solar Plant Project</strong>, a systematic rural intervention to bring green, reliable, and localized electricity to underserved tribal hamlets. Rather than waiting for heavy centralized infrastructure, we designed and built high-efficiency community-owned solar micro-grids.
              </p>
            </div>

            {/* Section 2: Text on Left, Photo on Right (Side-by-side on desktop, stack on mobile) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <p>
                  Each hamlet receives a central solar plant with battery backups, linked through underground or overhead cables directly to individual households, streetlights, and the local school. This decentralized solution ensures that even in remote forested terrains, power supply is uninterrupted, weatherproof, and clean.
                </p>
                {/* Quote Block */}
                <blockquote className="border-l-4 border-forest pl-6 py-2 bg-forest/5 rounded-r-2xl">
                  <p className="font-serif italic text-sm sm:text-base text-navy leading-relaxed">
                    "We aren't just deploying technology; we are setting up an eco-friendly foundation for education, health, and economic independence."
                  </p>
                  <cite className="text-xs font-semibold text-navy/60 not-italic block mt-2">
                    — Sunita Murmu, Village Committee President
                  </cite>
                </blockquote>
              </div>
              <div className="lg:col-span-5 space-y-2">
                <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-navy/5 shadow-sm">
                  <Image
                    src="/assets/odisha_solar_installation.png"
                    alt="Solar panels installation in Mayurbhanj, Odisha"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-[11px] text-center text-navy/40 italic">
                  Installation of solar micro-grids by villagers and technicians.
                </p>
              </div>
            </div>

            {/* Section 3: Photo on Left, Text on Right (Side-by-side on desktop, stack on mobile) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-5 space-y-2 order-last lg:order-first">
                <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-navy/5 shadow-sm">
                  <Image
                    src="/assets/odisha_solar_home.png"
                    alt="Rural home lit by solar energy"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-[11px] text-center text-navy/40 italic">
                  Sustainable LED lights powering education long after sundown.
                </p>
              </div>
              <div className="lg:col-span-7 space-y-6">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-navy">
                  The Night Stays Alive: Education & Safety
                </h3>
                <p>
                  The most profound impact of solar electrification is seen on the lives of children. Previously, studying after sunset meant squinting under the faint glow of kerosene fumes, which caused respiratory issues and eye strain. Today, schools and homes are equipped with bright, sustainable LED lighting.
                </p>
                <p>
                  Beyond education, solar streetlights have transformed safety. Tribal villagers can now walk around their neighborhoods safely at night, protecting their community from wild animal incursions and reducing accidents on rural dirt tracks. Local clinics now utilize solar-powered refrigerators to store life-saving vaccines and basic medical tools.
                </p>
              </div>
            </div>

            {/* Section 4: Bottom Text & Technical Specs */}
            <div className="max-w-3xl space-y-6 pt-4 border-t border-navy/5">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-navy">
                Technical Specifications & Sustainability
              </h3>
              <p>
                The installation is designed for long-term viability:
              </p>
              <ul className="list-disc pl-6 space-y-2.5">
                <li>Cumulative solar capacity exceeding <strong>5 MegaWatts (5MW+)</strong>.</li>
                <li>Robust Lithium Iron Phosphate (LiFePO4) storage batteries ensuring <strong>48 hours of autonomous operation</strong> during cloudy monsoons.</li>
                <li>A dedicated <em>Village Solar Committee</em> formed in every village to collect small maintenance fees (₹100/month per home) to ensure replacement reserves.</li>
                <li>Training of two local youths per village as certified solar maintenance operators.</li>
              </ul>
              <p>
                By ensuring local ownership and maintenance capability, we guarantee that these solar grids will continue to illuminate Mayurbhanj for decades to come, proving that sustainable renewable energy is the fastest route to rural progress.
              </p>
            </div>

          </div>

          {/* CTA & Next Steps */}
          <div className="bg-white border border-navy/5 rounded-3xl p-8 sm:p-12 space-y-6 shadow-sm text-center">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy">
              Bring Light to More Villages
            </h2>
            <p className="text-navy/60 text-sm max-w-xl mx-auto leading-relaxed">
              Our goal is to cover another 30 off-grid villages by the end of 2026. A donation of ₹1,50,000 ($1,800) funds an entire community storage backup system. Partner with us to illuminate lives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-navy text-white font-semibold text-sm transition-transform duration-300 hover:scale-105 shadow-md"
              >
                Fund A Village Solar Grid
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-navy/20 bg-white text-navy font-semibold text-sm transition-transform duration-300 hover:scale-105 shadow-sm"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Projects
              </Link>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
