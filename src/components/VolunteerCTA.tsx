"use client";

import React, { useState } from "react";
import { UserCheck, MessageSquare, CheckCircle, Loader2 } from "lucide-react";
import { submitVolunteerForm, submitContactOrPartnerForm } from "@/app/actions";

export default function VolunteerCTA() {
  // Volunteer Form State
  const [volName, setVolName] = useState("");
  const [volEmail, setVolEmail] = useState("");
  const [volPhone, setVolPhone] = useState("");
  const [volInterests, setVolInterests] = useState<string[]>([]);
  const [volMessage, setVolMessage] = useState("");
  const [volStatus, setVolStatus] = useState<{ type: "idle" | "loading" | "success" | "error"; message: string }>({
    type: "idle",
    message: "",
  });

  // Contact Form State
  const [contactName, setContactName] = useState("");
  const [contactOrg, setContactOrg] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [contactArea, setContactArea] = useState("Education");
  const [contactMessage, setContactMessage] = useState("");
  const [contactStatus, setContactStatus] = useState<{ type: "idle" | "loading" | "success" | "error"; message: string }>({
    type: "idle",
    message: "",
  });

  const handleInterestChange = (interest: string) => {
    if (volInterests.includes(interest)) {
      setVolInterests(volInterests.filter((i) => i !== interest));
    } else {
      setVolInterests([...volInterests, interest]);
    }
  };

  const handleVolunteerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!volName || !volEmail || !volPhone) {
      setVolStatus({ type: "error", message: "Please fill in all required fields." });
      return;
    }

    setVolStatus({ type: "loading", message: "" });
    try {
      const res = await submitVolunteerForm({
        name: volName,
        email: volEmail,
        phone: volPhone,
        interests: volInterests,
        message: volMessage,
      });

      if (res.success) {
        setVolStatus({ type: "success", message: res.message });
        setVolName("");
        setVolEmail("");
        setVolPhone("");
        setVolInterests([]);
        setVolMessage("");
      } else {
        setVolStatus({ type: "error", message: res.message });
      }
    } catch (err) {
      setVolStatus({ type: "error", message: "Failed to submit application. Please try again." });
    }
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName || !contactEmail || !contactMessage) {
      setContactStatus({ type: "error", message: "Please fill in all required fields." });
      return;
    }

    setContactStatus({ type: "loading", message: "" });
    try {
      const res = await submitContactOrPartnerForm({
        name: contactName,
        organization: contactOrg,
        email: contactEmail,
        phone: contactPhone,
        projectArea: contactArea,
        message: contactMessage,
      });

      if (res.success) {
        setContactStatus({ type: "success", message: res.message });
        setContactName("");
        setContactOrg("");
        setContactEmail("");
        setContactPhone("");
        setContactArea("Education");
        setContactMessage("");
      } else {
        setContactStatus({ type: "error", message: res.message });
      }
    } catch (err) {
      setContactStatus({ type: "error", message: "Failed to submit message. Please try again." });
    }
  };

  return (
    <section id="contact" className="bg-beige/20 py-24 md:py-32 border-b border-navy/5">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contact & CSR Column */}
        <div className="bg-white rounded-3xl border border-navy/5 p-8 sm:p-10 shadow-[0_15px_40px_rgba(15,23,42,0.02)]">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gold/10 text-gold flex items-center justify-center">
              <MessageSquare className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-amber-600 block">
                Support Our Projects
              </span>
              <h3 className="font-serif font-bold text-2xl text-navy">General Inquiry & CSR Partnerships</h3>
            </div>
          </div>

          <p className="text-navy/60 text-xs sm:text-sm leading-relaxed mb-8">
            Discuss corporate partnerships, classroom sponsorships, solar initiatives, or write general inquiries. Our partnership desk responds within 2 business days.
          </p>

          <form onSubmit={handleContactSubmit} className="space-y-4" id="contact-form">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="contact-name" className="text-xs font-semibold text-navy/60 uppercase tracking-wider block mb-1">
                  Contact Name *
                </label>
                <input
                  type="text"
                  id="contact-name"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  required
                  placeholder="Name"
                  className="w-full bg-beige/30 border border-navy/5 rounded-xl py-3 px-4 text-sm text-navy placeholder-navy/30 focus:outline-none focus:border-forest focus:ring-1 focus:ring-forest transition-colors"
                />
              </div>
              <div>
                <label htmlFor="contact-org" className="text-xs font-semibold text-navy/60 uppercase tracking-wider block mb-1">
                  Organization / Company
                </label>
                <input
                  type="text"
                  id="contact-org"
                  value={contactOrg}
                  onChange={(e) => setContactOrg(e.target.value)}
                  placeholder="Company Name"
                  className="w-full bg-beige/30 border border-navy/5 rounded-xl py-3 px-4 text-sm text-navy placeholder-navy/30 focus:outline-none focus:border-forest focus:ring-1 focus:ring-forest transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="contact-email" className="text-xs font-semibold text-navy/60 uppercase tracking-wider block mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="contact-email"
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  required
                  placeholder="name@email.com"
                  className="w-full bg-beige/30 border border-navy/5 rounded-xl py-3 px-4 text-sm text-navy placeholder-navy/30 focus:outline-none focus:border-forest focus:ring-1 focus:ring-forest transition-colors"
                />
              </div>
              <div>
                <label htmlFor="contact-phone" className="text-xs font-semibold text-navy/60 uppercase tracking-wider block mb-1">
                  Phone (Optional)
                </label>
                <input
                  type="tel"
                  id="contact-phone"
                  value={contactPhone}
                  onChange={(e) => setContactPhone(e.target.value)}
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full bg-beige/30 border border-navy/5 rounded-xl py-3 px-4 text-sm text-navy placeholder-navy/30 focus:outline-none focus:border-forest focus:ring-1 focus:ring-forest transition-colors"
                />
              </div>
            </div>

            <div>
              <label htmlFor="contact-area" className="text-xs font-semibold text-navy/60 uppercase tracking-wider block mb-1">
                Area of Interest *
              </label>
              <select
                id="contact-area"
                value={contactArea}
                onChange={(e) => setContactArea(e.target.value)}
                className="w-full bg-beige/35 border border-navy/5 rounded-xl py-3 px-4 text-sm text-navy focus:outline-none focus:border-forest focus:ring-1 focus:ring-forest transition-colors"
              >
                <option value="Education">Classroom Sponsor & Education</option>
                <option value="Healthcare">Healthcare Support & Diagnostics</option>
                <option value="Renewable Energy">Renewable Solar Grids</option>
                <option value="General">General Inquiry & Donations</option>
              </select>
            </div>

            <div>
              <label htmlFor="contact-message" className="text-xs font-semibold text-navy/60 uppercase tracking-wider block mb-1">
                Message / Details *
              </label>
              <textarea
                id="contact-message"
                rows={4}
                value={contactMessage}
                onChange={(e) => setContactMessage(e.target.value)}
                required
                placeholder="Tell us details about your CSR requirements or donation inquiry..."
                className="w-full bg-beige/30 border border-navy/5 rounded-xl py-3 px-4 text-sm text-navy placeholder-navy/30 focus:outline-none focus:border-forest focus:ring-1 focus:ring-forest transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={contactStatus.type === "loading"}
              className="w-full py-3 rounded-full bg-gold text-navy font-semibold text-sm transition-colors duration-300 hover:bg-gold/90 flex items-center justify-center space-x-2 disabled:opacity-50 shadow-md"
              id="contact-submit-btn"
            >
              {contactStatus.type === "loading" ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Sending Inquiry...</span>
                </>
              ) : (
                <span>Send Inquiry Message</span>
              )}
            </button>

            {contactStatus.message && (
              <div className={`p-4 rounded-xl text-xs flex items-center space-x-2 ${contactStatus.type === "success" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}>
                {contactStatus.type === "success" && <CheckCircle className="w-4 h-4 flex-shrink-0" />}
                <span>{contactStatus.message}</span>
              </div>
            )}
          </form>
        </div>

      </div>
    </section>
  );
}
