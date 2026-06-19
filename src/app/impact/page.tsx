import React from "react";
import Navbar from "@/components/Navbar";
import InteractiveMap from "@/components/InteractiveMap";
import ImpactNumbers from "@/components/ImpactNumbers";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Sparkles } from "lucide-react";

export const metadata = {
  title: "Our Impact | Face of Change",
  description: "View our real-time interactive reach map showing supported states, active communities, and lives transformed.",
};

export default function ImpactPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow bg-beige/25">
        
        {/* Content sections */}
        <InteractiveMap />
        <ImpactNumbers />
      </main>
      <Footer />
    </>
  );
}
