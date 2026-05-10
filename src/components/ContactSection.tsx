"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Power, Terminal, FileText, ArrowRight, Download, CheckCircle2, Link } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export function ContactSection() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL ? `${process.env.NEXT_PUBLIC_API_URL}/contact` : '/api/contact';
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setStatus("success");
        setFormState({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12">
      {/* Page Header */}
      <header className="mb-16 border-b border-white/10 pb-8 flex flex-col md:flex-row justify-between items-end gap-6">
        <div>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-6xl text-white tracking-tighter"
          >
            SECURE_TERMINAL
          </motion.h2>
          <div className="font-mono text-xs text-primary mt-4 flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_10px_rgba(0,219,233,0.8)] animate-pulse"></span>
            CONNECTION: ENCRYPTED & ACTIVE
          </div>
        </div>
        <div className="text-right font-mono text-[10px] text-white/30 hidden md:block space-y-1">
          <p>NODE_ID: 0x7DF4FF</p>
          <p className="text-accent">UPTIME: 99.999%</p>
        </div>
      </header>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Transmission Form */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:col-span-8 bg-[#1c1b1d]/40 backdrop-blur-3xl border border-white/5 p-8 md:p-12 relative overflow-hidden group rounded-xl"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
          <h3 className="font-display text-2xl text-primary mb-8 border-b border-accent/20 pb-4 tracking-widest">TRANSMIT_DATA</h3>
          
          {status === "success" ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-12 text-center"
            >
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-6 border border-accent/50 shadow-[0_0_20px_rgba(195,244,0,0.3)]">
                <CheckCircle2 className="text-accent" size={32} />
              </div>
              <h4 className="text-2xl font-display text-white mb-2">TRANSMISSION_COMPLETE</h4>
              <p className="text-white/40 font-mono text-xs">Awaiting return frequency synchronization.</p>
              <button 
                onClick={() => setStatus("idle")}
                className="mt-8 px-6 py-2 border border-white/10 text-white/40 hover:text-white hover:border-white transition-all font-mono text-[10px] uppercase tracking-widest"
              >
                New_Transmission
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="block font-mono text-[10px] text-white/30 uppercase tracking-[0.3em]">Identity Signal [Name]</label>
                  <input 
                    required
                    type="text"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full bg-[#131315] border border-white/5 text-white font-mono text-sm px-5 py-4 focus:outline-none focus:border-primary transition-all placeholder:text-white/10"
                    placeholder="> Enter identifier..."
                  />
                </div>
                <div className="space-y-2">
                  <label className="block font-mono text-[10px] text-white/30 uppercase tracking-[0.3em]">Return Frequency [Email]</label>
                  <input 
                    required
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full bg-[#131315] border border-white/5 text-white font-mono text-sm px-5 py-4 focus:outline-none focus:border-primary transition-all placeholder:text-white/10"
                    placeholder="> Establish return vector..."
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="block font-mono text-[10px] text-white/30 uppercase tracking-[0.3em]">Transmission Data [Message]</label>
                <textarea 
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full bg-[#131315] border border-white/5 text-white font-mono text-sm px-5 py-4 focus:outline-none focus:border-primary transition-all placeholder:text-white/10 resize-none"
                  placeholder="> Encode payload here..."
                ></textarea>
              </div>
              
              <button 
                disabled={status === "sending"}
                className="w-full md:w-auto px-10 py-4 bg-transparent border border-primary text-primary font-mono text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-primary/10 hover:shadow-[0_0_20px_rgba(0,219,233,0.4)] transition-all flex items-center justify-center gap-4 disabled:opacity-50"
              >
                {status === "sending" ? "TRANSMITTING..." : "EXECUTE_TRANSMIT"}
                <Send size={14} className={status === "sending" ? "animate-pulse" : ""} />
              </button>
            </form>
          )}
        </motion.div>

        {/* Sidecar Info */}
        <div className="md:col-span-4 flex flex-col gap-6">
          {/* Telemetry Cell */}
          <div className="bg-[#1c1b1d]/40 backdrop-blur-3xl border border-white/5 p-8 rounded-xl shadow-2xl">
            <h4 className="font-mono text-[10px] text-white/30 uppercase tracking-[0.3em] border-b border-white/5 pb-4 mb-6">TELEMETRY</h4>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MapPin className="text-primary mt-1" size={20} />
                <div>
                  <p className="font-mono text-[10px] text-white/40 uppercase tracking-widest mb-1">CURRENT_LOC</p>
                  <p className="font-display text-lg text-white">{portfolioData.personal.location}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Power className="text-accent mt-1" size={20} />
                <div>
                  <p className="font-mono text-[10px] text-white/40 uppercase tracking-widest mb-1">AVAILABILITY</p>
                  <p className="font-display text-lg text-accent">ACCEPTING_CONNECTIONS</p>
                </div>
              </div>
            </div>
          </div>

          {/* External Vectors */}
          <div className="bg-[#1c1b1d]/40 backdrop-blur-3xl border border-white/5 p-8 rounded-xl flex-1 shadow-2xl">
            <h4 className="font-mono text-[10px] text-white/30 uppercase tracking-[0.3em] border-b border-white/5 pb-4 mb-6">EXTERNAL_VECTORS</h4>
            <div className="flex flex-col gap-3">
              {[
                { label: "LinkedIn_Protocol", icon: Link, href: portfolioData.personal.linkedin },
                { label: "GitHub_Repository", icon: Terminal, href: portfolioData.personal.github },
                { label: "Download_Resume.pdf", icon: FileText, href: "#", download: true }
              ].map((link, i) => (
                <a 
                  key={i}
                  href={link.href}
                  target={link.download ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-white/[0.03] border border-white/5 hover:border-primary/50 hover:bg-primary/5 transition-all group rounded"
                >
                  <div className="flex items-center gap-4">
                    <link.icon size={18} className="text-white/30 group-hover:text-primary transition-colors" />
                    <span className="font-mono text-xs text-white/70 group-hover:text-white">{link.label}</span>
                  </div>
                  {link.download ? <Download size={14} className="text-white/20 group-hover:text-primary" /> : <ArrowRight size={14} className="text-white/20 group-hover:text-primary opacity-0 group-hover:opacity-100 transition-all" />}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
