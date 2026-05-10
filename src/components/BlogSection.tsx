"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Clock, ArrowRight, Terminal, BookOpen, Rss } from "lucide-react";
import { ThreeDWrapper } from "@/components/ui/ThreeDWrapper";

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="section-label mb-4">
    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
    {children}
  </div>
);

const blogPosts = [
  {
    title: "Optimizing Transformer Attention Mechanisms",
    excerpt: "A deep dive into reducing O(N²) complexity in standard self-attention layers. Implementing sparse attention patterns and hardware-aware kernel optimizations to handle 100k+ token contexts efficiently in production environments.",
    category: "AI Concepts",
    version: "v2.4.1",
    readTime: "14 Min Read",
    codeSnippet: "def sparse_attention(q, k, v, mask=None):\n    # Initialize block-sparse pattern\n    blocks = get_block_mask(q.shape, sparsity=0.8)\n    scores = torch.matmul(q, k.transpose(-2, -1)) / math.sqrt(d_k)\n    return apply_mask(scores, blocks)",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop",
    color: "primary"
  },
  {
    title: "Distributed Cache Coherency",
    excerpt: "Resolving race conditions in multi-region Redis clusters using vector clocks and CRDTs.",
    category: "System Design",
    readTime: "8 Min Read",
    color: "secondary"
  },
  {
    title: "CUDA Kernel Optimization",
    excerpt: "From PyTorch high-level ops to writing custom C++ CUDA kernels for 40% performance gains.",
    category: "Learning Journeys",
    readTime: "12 Min Read",
    color: "primary"
  }
];

export function BlogSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="blog" className="relative py-28 bg-[#070710]/20">
      <div className="max-w-7xl mx-auto px-4 md:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-14"
        >
          <SectionLabel>// system_logs // blog</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text-primary">Intelligence</span> Feed
          </h2>
          <p className="text-white/45 max-w-2xl text-lg leading-relaxed border-l-2 border-primary/30 pl-4">
            Documenting signal processing, neural architecture, and system design in high-availability environments. Data streams updated asynchronously.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Featured Post */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="lg:col-span-8 group relative glass-card rounded-2xl border border-white/5 overflow-hidden"
          >
            <div className="h-64 w-full relative overflow-hidden bg-surface-dim">
              <img 
                src={blogPosts[0].image} 
                alt={blogPosts[0].title}
                className="w-full h-full object-cover opacity-40 mix-blend-screen group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070710] to-transparent" />
              <div className="absolute bottom-4 left-4 flex gap-2">
                <span className="px-2 py-1 bg-primary text-black font-mono text-[10px] font-bold rounded-sm uppercase tracking-tighter">
                  {blogPosts[0].category}
                </span>
                <span className="px-2 py-1 bg-white/5 text-white/50 border border-white/10 font-mono text-[10px] rounded-sm">
                  {blogPosts[0].version}
                </span>
              </div>
            </div>
            
            <div className="p-8">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                {blogPosts[0].title}
              </h3>
              <p className="text-white/50 mb-6 line-clamp-3 leading-relaxed">
                {blogPosts[0].excerpt}
              </p>

              {/* Code Snippet Preview */}
              <div className="bg-black/40 rounded-lg border border-white/5 p-4 mb-6 relative overflow-hidden group/code">
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-primary/50" />
                <pre className="font-mono text-xs text-white/70 overflow-x-auto">
                  <code>{blogPosts[0].codeSnippet}</code>
                </pre>
              </div>

              <div className="flex justify-between items-center mt-4 pt-4 border-t border-white/5">
                <div className="flex items-center gap-2 text-white/30 font-mono text-xs">
                  <Clock size={14} />
                  {blogPosts[0].readTime}
                </div>
                <button className="text-primary font-mono text-xs hover:text-white flex items-center gap-2 group/link">
                  READ_FILE <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.article>

          {/* Sidebar Posts */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {blogPosts.slice(1).map((post, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="bg-white/[0.02] backdrop-blur-xl border border-white/5 rounded-2xl p-6 relative group hover:bg-white/[0.04] transition-all"
              >
                <div className={`absolute left-0 top-6 w-1 h-8 ${post.color === 'secondary' ? 'bg-accent' : 'bg-primary'} rounded-r`} />
                <div className="flex justify-between items-start mb-4 pl-3">
                  <span className={`px-2 py-0.5 bg-white/5 text-[10px] font-mono border ${post.color === 'secondary' ? 'border-accent/30 text-accent' : 'border-primary/30 text-primary'} rounded-sm`}>
                    {post.category}
                  </span>
                </div>
                <h3 className="font-display text-lg font-bold text-white mb-2 pl-3 group-hover:text-primary transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-white/40 text-sm mb-4 pl-3 line-clamp-2">
                  {post.excerpt}
                </p>
                <button className={`pl-3 ${post.color === 'secondary' ? 'text-accent' : 'text-primary'} font-mono text-xs hover:text-white flex items-center gap-1`}>
                  EXECUTE_READ <ArrowRight size={12} />
                </button>
              </motion.article>
            ))}

            {/* Newsletter */}
            <div className="bg-primary/5 backdrop-blur-xl border border-primary/10 rounded-2xl p-6 mt-auto">
              <h4 className="font-display text-lg font-bold text-primary mb-2 flex items-center gap-2">
                <Rss size={18} /> Initialize Feed
              </h4>
              <p className="text-white/40 text-xs mb-4">
                Subscribe to raw telemetry data and periodic transmission logs.
              </p>
              <div className="flex flex-col gap-3">
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 font-mono text-[10px] text-white/30">&gt;</span>
                  <input 
                    type="email" 
                    placeholder="enter_endpoint@node.local"
                    className="w-full bg-black/40 border border-white/10 rounded-lg px-8 py-2 font-mono text-xs text-primary focus:border-primary/50 focus:outline-none transition-all placeholder:text-white/20"
                  />
                </div>
                <button className="w-full py-2 bg-primary/10 border border-primary/30 text-primary hover:bg-primary hover:text-black rounded-lg font-mono text-[10px] font-bold tracking-widest transition-all duration-300">
                  SUBSCRIBE_PORT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
