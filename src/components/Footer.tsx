"use client";

import React, { useState } from "react";
import { Heart, Send, Loader2 } from "lucide-react";
import { subscribeToNewsletter } from "@/app/actions";
import Link from "next/link";

// Custom SVG Icons because recent lucide-react versions do not export brand icons.
const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const YoutubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
  </svg>
);

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<{ type: "idle" | "loading" | "success" | "error"; message: string }>({
    type: "idle",
    message: "",
  });

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus({ type: "loading", message: "" });
    try {
      const response = await subscribeToNewsletter(email);
      if (response.success) {
        setStatus({ type: "success", message: response.message });
        setEmail("");
      } else {
        setStatus({ type: "error", message: response.message });
      }
    } catch (err) {
      setStatus({ type: "error", message: "Failed to subscribe. Please try again." });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Logo & Description */}
          <div className="lg:col-span-2 flex flex-col space-y-6">
            <Link href="/" className="flex items-center space-x-2.5">
              <div className="w-10 h-10 rounded-full bg-forest flex items-center justify-center text-white border border-white/20">
                <Heart className="w-5 h-5 fill-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold tracking-wide text-white">
                  Face of Change
                </span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm">
              Working towards a better India through education, healthcare, clean energy, and community development. Together, we build sustainable and equitable futures.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4">
              {[
                { icon: FacebookIcon, href: "https://facebook.com", id: "footer-fb" },
                { icon: InstagramIcon, href: "https://instagram.com", id: "footer-ig" },
                { icon: TwitterIcon, href: "https://twitter.com", id: "footer-tw" },
                { icon: YoutubeIcon, href: "https://youtube.com", id: "footer-yt" },
              ].map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    id={social.id}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/80 hover:bg-forest hover:text-white transition-all duration-300"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>


          {/* Quick Links */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-serif font-semibold text-lg text-white">Quick Links</h3>
            <ul className="space-y-2.5 text-sm text-white/60">
              <li><Link href="/" className="hover:text-gold transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-gold transition-colors">About Us</Link></li>
              <li><Link href="/projects" className="hover:text-gold transition-colors">Our Projects</Link></li>
              <li><Link href="/impact" className="hover:text-gold transition-colors">Impact</Link></li>
              <li><Link href="/media" className="hover:text-gold transition-colors">Media Coverage</Link></li>
              <li><Link href="/contact" className="hover:text-gold transition-colors">Donate & Partner</Link></li>
            </ul>
          </div>

          {/* Stay Connected (Newsletter) */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-serif font-semibold text-lg text-white">Stay Connected</h3>
            <p className="text-white/60 text-sm">Subscribe to our newsletter for impact reports and stories.</p>
            <form onSubmit={handleSubscribe} className="relative mt-2" id="footer-newsletter-form">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-5 pr-12 text-sm text-white placeholder-white/40 focus:outline-none focus:border-forest focus:ring-1 focus:ring-forest transition-colors"
                id="footer-email-input"
              />
              <button
                type="submit"
                disabled={status.type === "loading"}
                className="absolute right-1.5 top-1.5 w-9 h-9 rounded-full bg-forest flex items-center justify-center text-white hover:bg-forest/80 transition-colors disabled:opacity-50"
                id="footer-newsletter-submit"
                aria-label="Subscribe"
              >
                {status.type === "loading" ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Send className="w-4 h-4" />
                )}
              </button>
            </form>
            {status.message && (
              <p className={`text-xs mt-1 ${status.type === "success" ? "text-green-400" : "text-red-400"}`}>
                {status.message}
              </p>
            )}
            <p className="text-[11px] text-white/40 italic">We respect your privacy.</p>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-white/50">
          <p>© {currentYear} Face of Change. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#privacy" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-gold transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
