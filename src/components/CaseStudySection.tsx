"use client";

import { motion } from "framer-motion";
import { Shield, Brain, Zap, BarChart3, Database, Code, ArrowRight, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="section-label mb-4">
    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
    {children}
  </div>
);

export function CaseStudySection() {
  return (
    <section id="case-study" className="relative py-28 bg-[#070710]/40">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Header & Overview */}
          <div className="lg:col-span-12 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <SectionLabel>// case_study // 01</SectionLabel>
              <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
                AI <span className="gradient-text-primary">Fraud Detection</span> Architecture
              </h2>
              <div className="flex flex-wrap gap-3 mb-8">
                <Badge variant="accent">FINTECH</Badge>
                <Badge variant="outline">HYBRID_ML</Badge>
                <Badge variant="secondary">REAL_TIME</Badge>
              </div>
            </motion.div>
          </div>

          {/* Problem & Solution */}
          <div className="lg:col-span-8 space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-2xl border border-white/5"
            >
              <h3 className="font-display text-2xl font-bold mb-4 flex items-center gap-3">
                <Shield className="text-primary" /> The Challenge
              </h3>
              <p className="text-white/60 leading-relaxed">
                Conventional fraud detection systems rely on static rule-sets that fail to identify novel attack vectors. In a high-frequency financial environment, false positives lead to customer friction, while false negatives result in significant revenue leakage. The objective was to build a system that identifies both known patterns and anomalous behaviors with sub-200ms latency.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Brain className="text-primary" size={20} />
                </div>
                <h4 className="font-display text-xl font-bold mb-2">Hybrid Engine</h4>
                <p className="text-white/40 text-sm">
                  XGBoost for supervised classification (92% F1) paired with Isolation Forest for unsupervised anomaly discovery.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Zap className="text-accent" size={20} />
                </div>
                <h4 className="font-display text-xl font-bold mb-2">FastAPI Inference</h4>
                <p className="text-white/40 text-sm">
                  Optimized REST endpoints serving model predictions with high-throughput handling using Redis as a feature store.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-black/40 border border-primary/20 p-8 rounded-2xl relative overflow-hidden"
            >
              <div className="absolute right-0 top-0 p-4 opacity-10">
                <Code size={120} className="text-primary" />
              </div>
              <h4 className="font-mono text-primary text-sm mb-4 uppercase tracking-widest">Inference_Core.py</h4>
              <pre className="font-mono text-xs text-white/70 overflow-x-auto">
                <code>{`def process_transaction(data):
    # Feature Engineering
    vec = engineer_features(data)
    
    # Supervised Check (Known Patterns)
    prob = model_xgb.predict_proba(vec)
    
    # Unsupervised Check (Anomalies)
    score = model_iso.decision_function(vec)
    
    if prob > 0.85 or score < -0.6:
        return ACTION_BLOCK
    return ACTION_ALLOW`}</code>
              </pre>
            </motion.div>
          </div>

          {/* Metrics & Results */}
          <div className="lg:col-span-4 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-6 rounded-2xl border border-white/5"
            >
              <h4 className="font-label text-white/40 uppercase tracking-widest text-[10px] mb-4">Performance_Metrics</h4>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-xs font-mono mb-2">
                    <span className="text-white/60">F1 SCORE</span>
                    <span className="text-primary">0.92</span>
                  </div>
                  <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[92%]" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs font-mono mb-2">
                    <span className="text-white/60">LATENCY (P99)</span>
                    <span className="text-accent">145ms</span>
                  </div>
                  <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-accent w-[75%]" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs font-mono mb-2">
                    <span className="text-white/60">THROUGHPUT</span>
                    <span className="text-white">1.2k req/s</span>
                  </div>
                  <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-white/30 w-[60%]" />
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-primary/5 border border-primary/20 p-6 rounded-2xl"
            >
              <h4 className="font-display font-bold text-primary mb-4">Key Outcomes</h4>
              <ul className="space-y-3">
                {[
                  "Eliminated 95% of rule-based blind spots",
                  "Reduced false positives by 22%",
                  "Sub-200ms end-to-end processing",
                  "Automated feature extraction pipeline"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-white/70">
                    <CheckCircle2 size={16} className="text-primary mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <button className="w-full py-4 bg-white/5 border border-white/10 rounded-xl font-mono text-xs hover:bg-white/10 transition-all flex items-center justify-center gap-2 group">
              VIEW_SOURCE_CODE <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
