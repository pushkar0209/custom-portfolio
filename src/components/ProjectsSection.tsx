"use client";

import { motion } from "framer-motion";
import { ExternalLink, Terminal, Database, Bolt, Eye, ArrowRight } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { ThreeDWrapper } from "@/components/ui/ThreeDWrapper";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12">
      {/* Header */}
      <header className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_10px_rgba(195,244,0,0.8)]"></div>
          <span className="font-mono text-xs text-accent uppercase tracking-[0.2em]">System Online // Log Access Granted</span>
        </div>
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-6xl text-primary drop-shadow-[0_0_15px_rgba(0,219,233,0.4)] tracking-tighter"
        >
          Project_Logs
        </motion.h2>
        <p className="font-body text-lg text-white/50 mt-6 max-w-2xl leading-relaxed">
          High-fidelity module deployments and experimental algorithms. Architecture optimized for scale and precision.
        </p>
      </header>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {portfolioData.projects.map((project, i) => {
          // Determine grid span based on index to fill 12-column grid perfectly (8+4, 4+8 pattern)
          const isLarge = i % 2 === (Math.floor(i / 2) % 2);
          const spanClass = isLarge ? "md:col-span-8" : "md:col-span-4";
          
          return (
            <motion.article 
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "glass-card rounded-xl p-8 flex flex-col relative overflow-hidden group border border-white/5",
                spanClass,
                isLarge && "border-t-primary/20 border-l-primary/20"
              )}
            >
              {/* Highlight Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/4 pointer-events-none group-hover:bg-primary/10 transition-all duration-700"></div>
              
              <div className="flex justify-between items-start border-b border-white/5 pb-6 mb-8">
                <div>
                  <h3 className="font-display text-2xl md:text-3xl text-white font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="font-mono text-[10px] text-white/30 mt-2 uppercase tracking-widest">
                    Classification: {i % 2 === 0 ? "Critical" : "Utility"} // {project.category}
                  </p>
                </div>
                <Badge variant={project.featured ? "glow" : "accent"} className="font-mono text-[9px] px-3 py-1">
                  {project.featured ? "FEATURED" : "DEPLOYED"}
                </Badge>
              </div>

              <div className={cn("flex-grow flex flex-col gap-8", isLarge ? "md:flex-row" : "flex-col")}>
                <div className={cn("flex flex-col justify-between", isLarge ? "md:w-1/2" : "w-full")}>
                  <p className="font-body text-base text-white/60 mb-8 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((t) => (
                      <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 text-white/40 font-mono text-[10px] uppercase rounded hover:border-primary/30 hover:text-primary/70 transition-all">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Visual Representation */}
                <div className={cn(
                  "bg-[#0e0e10] rounded-lg relative overflow-hidden border border-white/5 flex items-center justify-center",
                  isLarge ? "md:w-1/2 min-h-[280px]" : "w-full h-48"
                )}>
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity group-hover:opacity-50 group-hover:scale-110 transition-all duration-1000"
                    style={{ backgroundImage: `url(${(project as any).image || 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000'})` }}
                  ></div>
                  <div className="relative z-10 font-mono text-[10px] text-primary/60 text-center space-y-1">
                    <div>&gt; SYSTEM_METRICS</div>
                    <div>&gt; STABILITY: 99.8%</div>
                    <div>&gt; LATENCY: &lt; 12ms</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 flex justify-end gap-4">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 border border-white/10 text-white/50 rounded-full hover:border-primary hover:text-primary transition-all"
                >
                  <Terminal size={18} />
                </a>
                <button className="flex items-center gap-3 px-6 py-3 border border-primary text-primary font-mono text-[10px] uppercase tracking-widest hover:bg-primary/10 transition-all rounded group/btn">
                  <span>LAUNCH_MODULE</span>
                  <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.article>
          );
        })}
      </div>

      {/* Project Archive Section */}
      <section className="mt-24">
        <h3 className="font-display text-2xl md:text-3xl text-white/40 border-b border-white/10 pb-4 mb-10 tracking-widest uppercase">Project Archive</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "NLP Sentiment Parser", desc: "Lightweight script for extracting sentiment trends from raw server logs. Open-sourced utility.", cmd: "> python -m sentiment_parse" },
            { title: "RESTful Geo-Mapper", desc: "API endpoint wrapper for rapid plotting of geospatial data coordinates. Cached for high throughput.", cmd: "> endpoint: /v1/map/plot" },
            { title: "DataStream Optimizer", desc: "Pandas memory profiling tool. Detects inefficient dataframe allocations during ETL processes.", cmd: "> import ds_opt" }
          ].map((item, i) => (
            <div key={i} className="glass-card rounded-lg p-6 flex flex-col border border-white/5 hover:border-primary/20 transition-all">
              <div className="flex justify-between items-start mb-4">
                <Terminal className="text-white/20" size={20} />
                <ExternalLink className="text-white/20 hover:text-primary cursor-pointer transition-colors" size={16} />
              </div>
              <h4 className="font-display text-lg text-white mb-3">{item.title}</h4>
              <p className="font-body text-sm text-white/40 mb-6 flex-grow">{item.desc}</p>
              <div className="font-mono text-[10px] text-primary/40 italic">{item.cmd}</div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
