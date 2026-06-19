import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, MapPin, Tag, Heart } from "lucide-react";

export const metadata = {
  title: "Delhi Medical Checkup Initiative | Face of Change",
  description: "Read the full story of our medical camps, health diagnostics, and essential medicine distribution in Delhi NCR's underserved slum communities.",
};

export default function DelhiProjectPage() {
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
            <span className="text-forest">Delhi Medical Initiative</span>
          </nav>

          {/* Blog Header */}
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-forest/5 border border-forest/15">
              <Heart className="w-3.5 h-3.5 text-forest fill-forest/15" />
              <span className="text-[10px] uppercase tracking-widest font-semibold text-forest">
                Healthcare Program
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-navy leading-tight max-w-4xl">
              Healing Slums: Delivering Diagnostic Care & Medicine Directly to Delhi's Marginalized
            </h1>

            {/* Article Metadata */}
            <div className="flex flex-wrap gap-4 sm:gap-6 text-xs text-navy/50 font-medium border-y border-navy/5 py-4">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-forest" />
                <span>Delhi NCR Slums, India</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-forest" />
                <span>Launched Jan 2025</span>
              </div>
              <div className="flex items-center space-x-2">
                <Tag className="w-4 h-4 text-forest" />
                <span>Diagnostics, Essential Medicine</span>
              </div>
            </div>
          </div>

          {/* Main Featured Image */}
          <div className="relative aspect-[21/9] w-full rounded-3xl overflow-hidden border border-navy/5 shadow-sm">
            <Image
              src="/assets/project_delhi_medical.png"
              alt="Delhi Medical Camp Cover"
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
                In the heart of Delhi's bustling urban sprawl, hundreds of informal settlements (slums) house families living in severe congestion with minimal access to primary healthcare. For a daily wage laborer, missing a day of work to visit a crowded government hospital is an unaffordable luxury. As a result, treatable infections and chronic illnesses go unchecked until they reach critical stages.
              </p>
              <p>
                The <strong>Delhi Medical Checkup Initiative</strong> was launched by Face of Change to bridge this gap. Rather than asking patients to travel, we bring the hospital directly to their doorstep. By setting up temporary diagnostic camps in narrow alleys and community centers, we make premium medical consultations and diagnostics completely free and accessible.
              </p>
            </div>

            {/* Section 2: Text on Left, Photo on Right (Side-by-side on desktop, stack on mobile) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <p>
                  Every diagnostic camp is fully equipped with portable test kits, allowing for rapid testing of blood glucose, hemoglobin, and vital markers. In addition, experienced general physicians, pediatricians, and gynecologists volunteer their time to offer specialized attention to the residents.
                </p>
                {/* Quote Block */}
                <blockquote className="border-l-4 border-forest pl-6 py-2 bg-forest/5 rounded-r-2xl">
                  <p className="font-serif italic text-sm sm:text-base text-navy leading-relaxed">
                    "Our mission is simple: eliminate the barrier of distance and cost. When healthcare comes to the community, prevention becomes possible."
                  </p>
                  <cite className="text-xs font-semibold text-navy/60 not-italic block mt-2">
                    — Dr. A. Sharma, Program Lead
                  </cite>
                </blockquote>
              </div>
              <div className="lg:col-span-5 space-y-2">
                <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-navy/5 shadow-sm">
                  <Image
                    src="/assets/delhi_medical_doctor.png"
                    alt="Doctor checking child at Delhi camp"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-[11px] text-center text-navy/40 italic">
                  Volunteer doctor conducting health checkups for children.
                </p>
              </div>
            </div>

            {/* Section 3: Photo on Left, Text on Right (Side-by-side on desktop, stack on mobile) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-5 space-y-2 order-last lg:order-first">
                <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-navy/5 shadow-sm">
                  <Image
                    src="/assets/delhi_medical_pharmacy.png"
                    alt="Medicine distribution counter at Delhi camp"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-[11px] text-center text-navy/40 italic">
                  Our medicine counter offering free prescription drugs.
                </p>
              </div>
              <div className="lg:col-span-7 space-y-6">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-navy">
                  Beyond Diagnostics: Providing the Cure
                </h3>
                <p>
                  Diagnosing an illness is only the first step. Many families diagnosed with chronic conditions like hypertension or diabetes struggle to afford prescribed treatments. Recognizing this, our camps operate a fully stocked, mobile pharmacy. Patients walk out of their consultation directly to our distribution desk where they receive high-grade, essential medicines, vitamins, and supplements at zero cost.
                </p>
                <p>
                  Furthermore, we maintain electronic health records of patients with critical readings, ensuring that our team can follow up during subsequent visits. By partnering with local municipal clinics, patients requiring advanced secondary surgery or specialized therapy are smoothly referred and fast-tracked to the correct public care facilities.
                </p>
              </div>
            </div>

            {/* Section 4: Bottom Text & Outcomes */}
            <div className="max-w-3xl space-y-6 pt-4 border-t border-navy/5">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-navy">
                Measurable Outcomes
              </h3>
              <p>
                Since its inception in early 2025, the program has yielded major community impacts:
              </p>
              <ul className="list-disc pl-6 space-y-2.5">
                <li>Over <strong>20,000+</strong> individual patient consultations.</li>
                <li>More than <strong>100+</strong> diagnostic camps organized across 50 distinct slum clusters.</li>
                <li>Successful detection and early treatment of anemia in over 2,500 children and pregnant women.</li>
                <li>Regular healthcare monitoring and free drug supplies provided for 800+ diabetic and hypertensive patients.</li>
              </ul>
            </div>

          </div>

          {/* CTA & Next Steps */}
          <div className="bg-white border border-navy/5 rounded-3xl p-8 sm:p-12 space-y-6 shadow-sm text-center">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy">
              Help Us Expand Our Medical Reach
            </h2>
            <p className="text-navy/60 text-sm max-w-xl mx-auto leading-relaxed">
              Every diagnostic camp costs approximately ₹45,000 ($550) to run, providing complete checkups and medicine to over 200 residents. Partner with us to sponsor a clinic in an underserved area.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-navy text-white font-semibold text-sm transition-transform duration-300 hover:scale-105 shadow-md"
              >
                Sponsor A Health Camp
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
