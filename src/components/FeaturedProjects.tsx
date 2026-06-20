"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, Sun, Users, Activity, Globe, Zap, Heart } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MagneticText } from "@/components/ui/morphing-cursor";

function AnimatedReadMoreButton({ href }: { href: string }) {
  const [isClicked, setIsClicked] = useState(false);
  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isClicked) return;
    setIsClicked(true);
    setTimeout(() => {
      router.push(href);
    }, 500); // 500ms delay to let the animation complete
  };

  return (
    <button
      onClick={handleClick}
      className="relative w-44 h-12 bg-navy text-white rounded-full p-1.5 overflow-hidden flex items-center justify-start shadow-md hover:scale-[1.03] transition-transform duration-300 group/btn cursor-pointer"
    >
      {/* Circle Arrow */}
      <motion.div
        animate={{ x: isClicked ? 122 : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="w-9 h-9 rounded-full bg-white text-navy flex items-center justify-center z-20 flex-shrink-0"
      >
        <ArrowRight className="w-4 h-4" />
      </motion.div>

      {/* Text */}
      <motion.span
        animate={{ x: isClicked ? -44 : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="absolute right-6 font-semibold text-sm select-none z-10"
      >
        Read More
      </motion.span>
    </button>
  );
}

export default function FeaturedProjects({ isOverview = false }: { isOverview?: boolean }) {
  const getProjectLink = (id: string) => {
    if (id === "project-delhi") return "/projects/delhi";
    if (id === "project-odisha") return "/projects/odisha";
    return "/projects";
  };

  const projects = [
    {
      id: "project-odisha",
      title: "Odisha Solar Plant Project",
      location: "Odisha",
      description:
        "Providing clean, sustainable and affordable energy to rural tribal communities through localized solar micro-grids. We light up households, schools, and health centers, paving the way for economic activity after sunset.",
      image: "/assets/project_odisha_solar.png",
      meta: [
        { label: "Villages", value: "50+", icon: Globe },
        { label: "Solar Capacity", value: "5MW+", icon: Zap },
        { label: "Lives Impacted", value: "15,000+", icon: Users },
      ],
      tags: ["Renewable Energy", "Infrastructure", "Sustainability"],
    },
    {
      id: "project-delhi",
      title: "Delhi Medical Checkup Initiative",
      location: "Delhi",
      description:
        "Free health checkups, diagnostics, expert consultations, and essential medicine distribution for underserved urban slum communities in Delhi and nearby suburban clusters.",
      image: "/assets/project_delhi_medical.png",
      meta: [
        { label: "Beneficiaries", value: "20,000+", icon: Heart },
        { label: "Health Camps", value: "100+", icon: Activity },
        { label: "Communities", value: "50+", icon: Globe },
      ],
      tags: ["Healthcare", "Community Development", "Emergency Relief"],
    },
  ];

  return (
    <section id="projects" className="bg-beige/40 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="space-y-4 max-w-2xl">
            <span className="text-xs font-semibold tracking-widest text-forest uppercase block">
              Our Initiatives
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-navy leading-tight">
              Featured Projects Making Real{" "}
              <MagneticText
                text="Difference."
                hoverText="Impact."
                className="inline-flex cursor-none select-none text-forest align-baseline"
                textClassName="font-serif text-forest text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
                hoverTextClassName="font-serif text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
                circleClassName="bg-forest"
              />
            </h2>
          </div>
          <p className="text-navy/60 text-sm sm:text-base max-w-xs mt-4 md:mt-0 leading-relaxed">
            Focused on building clean energy foundations and providing critical healthcare checkups directly where resources are scarce.
          </p>
        </div>

        {/* Large Storytelling Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              id={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="bg-white rounded-3xl overflow-hidden border border-navy/5 shadow-[0_15px_40px_rgba(15,23,42,0.02)] hover:shadow-[0_30px_70px_rgba(15,23,42,0.06)] transition-all duration-500 flex flex-col justify-between group"
            >
              <div>
                {/* Image Container with Overlays */}
                <div className="relative aspect-[16/10] overflow-hidden w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-transparent" />
                  
                  {/* Overlay Badges Container */}
                  <div className="absolute top-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2 pointer-events-none">
                    {/* Location Badge (from image reference 1) */}
                    <span className="bg-white/95 backdrop-blur-sm text-navy text-[10px] uppercase font-bold tracking-widest px-3 py-1.5 rounded-full shadow-sm pointer-events-auto">
                      📍 {project.location}
                    </span>

                    {/* Corner tags overlays (from image reference 3 style) */}
                    <div className="flex flex-wrap gap-1.5 justify-end pointer-events-auto">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-forest/80 backdrop-blur-sm text-white text-[9px] font-semibold tracking-wider px-2 py-1 rounded-full uppercase"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-8 sm:p-10 space-y-6">
                  <h3 className="font-serif font-bold text-2xl md:text-3xl text-navy group-hover:text-forest transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-navy/70 text-sm leading-relaxed font-sans">
                    {project.description}
                  </p>

                  {/* Horizontal Meta stats dividers (from image reference 1) */}
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-navy/5">
                    {project.meta.map((item, mIdx) => {
                      const Icon = item.icon;
                      return (
                        <div key={mIdx} className="space-y-1">
                          <div className="flex items-center text-forest space-x-1.5">
                            <Icon className="w-3.5 h-3.5 stroke-[2]" />
                            <span className="font-serif font-bold text-navy text-sm sm:text-base leading-none">
                              {item.value}
                            </span>
                          </div>
                          <span className="text-[9px] uppercase tracking-wider text-navy/40 font-semibold block">
                            {item.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Card Footer: Premium Black Pill Button with sliding animation */}
              <div className="px-8 pb-8 sm:px-10 sm:pb-10 pt-2">
                <AnimatedReadMoreButton href={getProjectLink(project.id)} />
              </div>

            </motion.div>
          ))}
        </div>

        {/* View All Projects Button centered at bottom */}
        {isOverview && (
          <div className="text-center mt-16">
            <Link
              href="/projects"
              className="inline-flex items-center space-x-3 px-8 py-3.5 rounded-full bg-forest text-white font-semibold text-sm transition-colors duration-300 hover:bg-forest/90 shadow-md"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}
