"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Heart, ArrowUp, Cpu, Activity, Database } from "lucide-react";

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="w-full py-12 border-t border-accent/10 bg-[#0e0e10] relative z-20 cursor-crosshair px-6 md:px-12">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="font-mono text-xs uppercase text-white/30 tracking-[0.3em]">
            © {new Date().getFullYear()} CORE_STUB // PSM_OS_V1.0
          </div>
          <div className="flex items-center gap-2 text-[10px] font-mono text-primary/40 uppercase">
            <Cpu size={10} />
            Integrated Architecture: Verified
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-8 font-mono text-[10px] uppercase tracking-widest text-white/40">
          <span className="hover:text-accent transition-colors flex items-center gap-2 cursor-pointer group">
            <Activity size={12} className="text-accent group-hover:animate-pulse" />
            System_Status: OK
          </span>
          <span className="hover:text-accent transition-colors cursor-pointer">Latency: 24ms</span>
          <span className="hover:text-accent transition-colors text-primary">Node: 0x7DF4FF</span>
        </div>

        <button 
          onClick={scrollToTop}
          className="p-4 bg-white/[0.03] border border-white/5 rounded-full text-white/30 hover:text-primary hover:border-primary/50 transition-all shadow-2xl group"
        >
          <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>

      {/* Decorative Scanline */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-accent/20"></div>
    </footer>
  );
}
