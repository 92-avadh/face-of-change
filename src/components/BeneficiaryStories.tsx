"use client";

import React from "react";
import Image from "next/image";
import { Quote, ArrowRight, Heart } from "lucide-react";
import { motion } from "framer-motion";

export default function BeneficiaryStories() {
  const stories = [
    {
      quote:
        "We got electricity for the first time in our village through the solar micro-grid. Now I don't have to stop studying when the sun sets. I can prepare for my exams at night and achieve my dreams of becoming a teacher.",
      author: "Sunita",
      role: "Student",
      location: "Mayurbhanj, Odisha",
      image: "/assets/student_sunita.png",
      tag: "Education & Energy",
    },
  ];

  return (
    <section id="stories" className="bg-beige py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-semibold tracking-widest text-forest uppercase block">
            Stories of Change
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-navy leading-tight">
            Real People. Real Impact.
          </h2>
          <p className="text-navy/70 text-sm leading-relaxed">
            The true measure of our work lies in the transformed realities of rural families. Here are the voices of those whose lives have changed.
          </p>
        </div>

        {/* Story Card Panel */}
        {stories.map((story, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl border border-navy/5 overflow-hidden shadow-sm hover:shadow-[0_20px_50px_rgba(15,23,42,0.04)] transition-all duration-500 max-w-4xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-12">
              
              {/* Photo Side */}
              <div className="md:col-span-5 relative min-h-[300px] md:min-h-full">
                <Image
                  src={story.image}
                  alt={`${story.author}, beneficiary from ${story.location}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 35vw"
                  className="object-cover"
                />
                
                {/* Corner Label overlay */}
                <div className="absolute top-4 left-4">
                  <span className="bg-navy text-white text-[9px] uppercase font-bold tracking-widest px-3 py-1.5 rounded-full shadow-sm flex items-center space-x-1">
                    <Heart className="w-3 h-3 fill-gold text-gold" />
                    <span>{story.tag}</span>
                  </span>
                </div>
              </div>

              {/* Text / Quote Side */}
              <div className="md:col-span-7 p-8 sm:p-12 md:p-16 flex flex-col justify-between space-y-8 relative">
                
                {/* Decorative Quotation Symbol */}
                <div className="absolute top-6 right-8 text-slate-100 pointer-events-none select-none">
                  <Quote className="w-24 h-24 stroke-[1px] fill-current" />
                </div>

                <div className="space-y-6 relative z-10">
                  <div className="w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center text-forest">
                    <Quote className="w-5 h-5 fill-current" />
                  </div>

                  <blockquote className="text-navy/80 font-serif italic text-lg sm:text-xl leading-relaxed">
                    &ldquo;{story.quote}&rdquo;
                  </blockquote>
                </div>

                {/* Author Metadata */}
                <div className="flex items-center justify-between border-t border-navy/5 pt-6 relative z-10">
                  <div>
                    <cite className="font-serif font-bold text-navy text-lg not-italic block">
                      — {story.author}
                    </cite>
                    <span className="text-xs text-navy/50 font-medium">
                      {story.role}, {story.location}
                    </span>
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center space-x-2 text-xs font-bold text-forest uppercase tracking-wider hover:text-gold transition-colors"
                  >
                    <span>Read all stories</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

              </div>

            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
}
