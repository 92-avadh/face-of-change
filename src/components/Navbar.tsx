"use client";

import React, { useState, useEffect } from "react";
import { Heart, Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Projects", href: "/projects" },
    { name: "Impact", href: "/impact" },
    { name: "Media", href: "/media" },
    { name: "Contact", href: "/contact" },
  ];

  const isHome = pathname === "/";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isHome
            ? isScrolled
              ? "bg-navy/90 backdrop-blur-xl border-b border-white/10 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.25)]"
              : "bg-gradient-to-b from-navy/60 to-transparent py-5"
            : isScrolled
              ? "bg-white/95 backdrop-blur-xl border-b border-navy/10 py-2.5 shadow-[0_8px_32px_rgba(15,23,42,0.06)]"
              : "bg-[#FAF9F5]/90 backdrop-blur-md border-b border-navy/5 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className={`w-10 h-10 rounded-full bg-forest flex items-center justify-center text-white border transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] ${isHome ? "border-white/20" : "border-navy/10"}`}>
                  <Heart className="w-5 h-5 fill-white transition-transform duration-300 group-hover:scale-110" />
                </div>
                {/* Pulse ring on hover */}
                <div className="absolute inset-0 rounded-full bg-forest/30 animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
              <div className="flex flex-col">
                <span className={`font-serif text-lg font-bold tracking-wide transition-all duration-400 group-hover:tracking-wider ${
                  isHome
                    ? "text-white group-hover:text-gold"
                    : "text-navy group-hover:text-forest"
                }`}>
                  Face of Change
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onMouseEnter={() => setHoveredLink(link.name)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className="relative px-4 py-2 group"
                  >
                    {/* Link text */}
                    <span
                      className={`text-sm font-medium transition-all duration-300 ease-out relative z-10 ${
                        isActive
                          ? isHome ? "text-gold" : "text-forest"
                          : isHome
                            ? "text-white/75 group-hover:text-white"
                            : "text-navy/70 group-hover:text-navy"
                      }`}
                    >
                      {link.name}
                    </span>

                    {/* Hover background glow */}
                    <motion.div
                      className={`absolute inset-0 rounded-lg ${isHome ? "bg-white/[0.06]" : "bg-navy/[0.04]"}`}
                      initial={false}
                      animate={{
                        opacity: hoveredLink === link.name ? 1 : 0,
                        scale: hoveredLink === link.name ? 1 : 0.92,
                      }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                    />

                    {/* Animated underline */}
                    <motion.div
                      className={`absolute bottom-0 left-1/2 h-[2px] rounded-full ${
                        isHome
                          ? "bg-gradient-to-r from-gold/0 via-gold to-gold/0"
                          : "bg-gradient-to-r from-forest/0 via-forest to-forest/0"
                      }`}
                      initial={false}
                      animate={{
                        width: hoveredLink === link.name || isActive ? "70%" : "0%",
                        x: "-50%",
                        opacity: hoveredLink === link.name || isActive ? 1 : 0,
                      }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    />

                    {/* Active dot indicator */}
                    {isActive && (
                      <motion.div
                        className={`absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full ${isHome ? "bg-gold" : "bg-forest"}`}
                        layoutId="activeNavDot"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Donate CTA button & Mobile toggle */}
            <div className="flex items-center space-x-4">
              <Link
                href="/contact"
                className={`hidden lg:flex items-center space-x-2 px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-400 ease-out hover:scale-105 active:scale-[0.98] group/donate relative overflow-hidden ${
                  isHome
                    ? "bg-gold text-navy hover:shadow-[0_6px_24px_rgba(245,158,11,0.45)]"
                    : "bg-forest text-white hover:shadow-[0_6px_24px_rgba(22,101,52,0.3)]"
                }`}
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 -translate-x-full group-hover/donate:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
                <span className="relative z-10">Donate Now</span>
                <Heart className={`w-4 h-4 relative z-10 transition-transform duration-300 group-hover/donate:scale-125 group-hover/donate:animate-pulse ${
                  isHome ? "fill-navy text-navy" : "fill-white text-white"
                }`} />
              </Link>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`md:hidden p-2 rounded-lg transition-all duration-300 active:scale-90 ${
                  isHome ? "text-white hover:bg-white/10" : "text-navy hover:bg-navy/5"
                }`}
                aria-label="Toggle navigation menu"
                id="mobile-menu-toggle"
              >
                <motion.div
                  animate={{ rotate: mobileMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  {mobileMenuOpen ? (
                    <X className="w-6 h-6" />
                  ) : (
                    <Menu className="w-6 h-6" />
                  )}
                </motion.div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className={`fixed inset-x-0 top-[60px] z-40 md:hidden px-4 shadow-2xl overflow-hidden backdrop-blur-xl border-b ${
              isHome
                ? "bg-navy/95 border-white/10"
                : "bg-white/95 border-navy/10"
            }`}
          >
            <div className="py-6 flex flex-col space-y-1">
              {navLinks.map((link, idx) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-lg font-medium py-3 px-4 rounded-xl flex items-center justify-between transition-all duration-300 ${
                        isActive
                          ? isHome
                            ? "bg-white/10 text-gold"
                            : "bg-navy/5 text-forest"
                          : isHome
                            ? "text-white/90 hover:bg-white/5 hover:text-gold hover:pl-6"
                            : "text-navy/90 hover:bg-navy/5 hover:text-forest hover:pl-6"
                      }`}
                    >
                      <span>{link.name}</span>
                      {isActive && (
                        <div className={`w-1.5 h-1.5 rounded-full ${isHome ? "bg-gold" : "bg-forest"}`} />
                      )}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: navLinks.length * 0.05 }}
                className="pt-3"
              >
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-center space-x-2 w-full py-3.5 rounded-full font-semibold transition-all duration-300 active:scale-[0.98] ${
                    isHome
                      ? "bg-gold text-navy hover:shadow-[0_4px_20px_rgba(245,158,11,0.4)]"
                      : "bg-forest text-white hover:shadow-[0_4px_20px_rgba(22,101,52,0.25)]"
                  }`}
                >
                  <span>Donate Now</span>
                  <Heart className={`w-4 h-4 ${isHome ? "fill-navy text-navy" : "fill-white text-white"}`} />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

