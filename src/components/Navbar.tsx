"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, Terminal, Settings2 } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Bio_Scan", href: "#identity" },
  { name: "Neural_Net", href: "#neural-core" },
  { name: "System_Arch", href: "#architecture" },
  { name: "Latent_Space", href: "#playground" },
  { name: "Project_Logs", href: "#projects" },
  { name: "Vision_Feed", href: "#vision" },
  { name: "Intel_Feed", href: "#blog" },
  { name: "Contact_Init", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 30);
  });

  useEffect(() => {
    const sections = ["home", "identity", "neural-core", "skills", "architecture", "experience", "playground", "projects", "vision", "blog", "contact"];
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: "-40% 0px -40% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          "bg-[#131315]/40 backdrop-blur-[40px] border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
        )}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 h-[72px] flex items-center justify-between">
          {/* Logo */}
          <div className="flex-1 flex items-center">
            <a href="#home" className="flex items-center gap-3 group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="font-display font-bold text-lg xl:text-2xl text-primary drop-shadow-[0_0_10px_rgba(0,219,233,0.5)] tracking-tighter">
                PSM_CORE_V1.0
              </div>
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center justify-center">
            <ul className="flex items-center gap-2 xl:gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={cn(
                      "font-mono text-[10px] xl:text-xs uppercase tracking-[0.15em] transition-all duration-300 py-2 px-2 xl:px-3 rounded hover:bg-primary/10 hover:text-primary active:scale-95",
                      activeSection === link.href.slice(1) ? "text-primary bg-primary/5" : "text-white/50"
                    )}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right side: Icons & Status */}
          <div className="flex-1 flex items-center justify-end gap-6">
            <div className="hidden xl:flex items-center gap-4 pl-6 border-l border-white/10 text-primary/60">
              <Settings2 size={16} className="cursor-pointer hover:text-primary transition-colors" />
              <Terminal size={16} className="cursor-pointer hover:text-primary transition-colors" />
            </div>
            
            {/* Mobile toggle */}
            <button
              className="lg:hidden p-2 text-white/70 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 left-0 w-[280px] z-[60] bg-[#131315]/90 backdrop-blur-3xl border-r border-white/5 shadow-2xl md:hidden flex flex-col py-8 px-6"
          >
            <div className="mb-10">
              <h1 className="font-display text-2xl font-bold text-primary tracking-tighter">P.S. MADHURI</h1>
              <p className="font-mono text-[10px] text-accent mt-2 tracking-widest uppercase">STATUS: ENCRYPTED</p>
            </div>

            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "flex items-center gap-4 px-4 py-3 font-mono text-xs uppercase tracking-widest transition-all rounded-lg",
                    activeSection === link.href.slice(1)
                      ? "bg-primary/20 text-primary border-l-4 border-primary"
                      : "text-white/60 hover:bg-white/5 hover:text-white"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Terminal size={14} />
                  {link.name}
                </a>
              ))}
            </nav>

            <button 
              className="mt-auto w-full py-3 border border-primary text-primary font-mono text-xs uppercase tracking-widest hover:bg-primary/10 transition-all rounded"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              INITIATE_CONTACT
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsMobileMenuOpen(false)}
          className="fixed inset-0 z-[55] bg-black/60 backdrop-blur-sm md:hidden"
        />
      )}
    </>
  );
}
