"use client"

import { MagneticText } from "@/components/ui/morphing-cursor"

export default function CursorDemoPage() {
  return (
    <main className="min-h-screen bg-navy text-white flex flex-col items-center justify-center gap-12 p-8 relative overflow-hidden">
      {/* Background subtle light effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="text-center space-y-4 max-w-xl z-10">
        <span className="text-xs font-semibold tracking-widest text-gold uppercase block">
          Interactive Components
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold leading-tight">
          Cursor Follower & Magnetic Text
        </h1>
        <p className="text-white/60 text-sm sm:text-base leading-relaxed font-sans">
          This playground showcases both components. Hover over the large text below to trigger the magnetic reveal mask, or hover over the link button to see the outer cursor expand.
        </p>
      </div>

      <div className="flex flex-col items-center gap-10 z-10">
        <div className="flex flex-col items-center gap-6">
          <span className="text-[10px] text-white/40 uppercase tracking-widest font-semibold">
            Magnetic Text Hover Effect
          </span>
          <div className="flex flex-col items-center gap-6">
            <MagneticText
              text="CREATE"
              hoverText="ELEVATE"
              className="inline-flex cursor-none select-none text-white font-serif"
              textClassName="font-serif text-white text-5xl sm:text-6xl font-bold tracking-wide"
              hoverTextClassName="font-serif text-navy text-5xl sm:text-6xl font-bold tracking-wide"
              circleClassName="bg-white"
            />
            <MagneticText
              text="VISION"
              hoverText="DESIGN"
              className="inline-flex cursor-none select-none text-gold font-serif"
              textClassName="font-serif text-gold text-5xl sm:text-6xl font-bold tracking-wide"
              hoverTextClassName="font-serif text-navy text-5xl sm:text-6xl font-bold tracking-wide"
              circleClassName="bg-gold"
            />
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 mt-4">
          <span className="text-[10px] text-white/40 uppercase tracking-widest font-semibold">
            Cursor Follower Trigger Target
          </span>
          <a
            href="#"
            className="px-8 py-4 bg-gold text-navy font-semibold rounded-full shadow-lg hover:bg-gold/90 transition-all duration-300 hover:scale-105"
          >
            Hover Over Me
          </a>
        </div>
      </div>
    </main>
  )
}
