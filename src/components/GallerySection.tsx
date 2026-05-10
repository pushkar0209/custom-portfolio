"use client";

import { motion } from "framer-motion";
import { ExternalLink, Terminal, Database, Layers, Monitor, Cpu } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="section-label mb-4">
    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
    {children}
  </div>
);

export function GallerySection() {
  return (
    <section id="archives" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[#070710]/40 -z-10" />
      
      {/* Background Decorative Element */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 blur-[120px] rounded-full" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/5 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <SectionLabel>// neural_archives // repository</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Project <span className="gradient-text-primary">Logs</span> & Neural Archives
          </h2>
          <p className="text-white/45 max-w-2xl">
            A comprehensive catalog of experimental modules, deployed systems, and technical research components developed across various AI domains.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative bg-white/[0.02] border border-white/5 rounded-2xl p-6 hover:bg-white/[0.04] transition-all hover:border-primary/20"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  {project.category.includes("AI") ? <Cpu className="text-primary" /> : <Monitor className="text-accent" />}
                </div>
                <div className="flex gap-2">
                  <a href={project.github} className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <Terminal size={16} className="text-white/40 group-hover:text-white" />
                  </a>
                  <a href={project.link} className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <ExternalLink size={16} className="text-white/40 group-hover:text-white" />
                  </a>
                </div>
              </div>

              <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-white/40 text-sm mb-6 line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.slice(0, 3).map((t, j) => (
                  <span key={j} className="text-[10px] font-mono px-2 py-1 bg-white/5 rounded border border-white/5 text-white/50">
                    {t}
                  </span>
                ))}
              </div>

              <div className="pt-4 border-t border-white/5 flex justify-between items-center">
                <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">{project.year} // RELEASE</span>
                <span className="text-[10px] font-mono text-primary font-bold uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity">
                  INITIALIZE_MODULE &gt;
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
