"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function HUDOverlay() {
  const [metrics, setMetrics] = useState({
    cpu: 12,
    ram: 4.2,
    uptime: "00:00:00",
    network: 124
  });

  useEffect(() => {
    const start = Date.now();
    const interval = setInterval(() => {
      const now = Date.now();
      const diff = now - start;
      const h = Math.floor(diff / 3600000).toString().padStart(2, "0");
      const m = Math.floor((diff % 3600000) / 60000).toString().padStart(2, "0");
      const s = Math.floor((diff % 60000) / 1000).toString().padStart(2, "0");
      
      setMetrics(prev => ({
        ...prev,
        cpu: Math.floor(Math.random() * 15) + 5,
        ram: (4.1 + Math.random() * 0.4).toFixed(1) as any,
        uptime: `${h}:${m}:${s}`,
        network: Math.floor(Math.random() * 200) + 50
      }));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-24 left-12 z-40 pointer-events-none hidden lg:block">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex flex-col gap-4 font-mono text-[9px] text-white/30 uppercase tracking-[0.2em]"
      >
        <div className="flex items-center gap-4">
          <div className="w-1 h-8 bg-primary/20" />
          <div className="space-y-1">
            <p>System_Metrics</p>
            <div className="flex items-center gap-2">
              <div className="w-20 h-1 bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-primary"
                  animate={{ width: `${(metrics.cpu / 20) * 100}%` }}
                />
              </div>
              <span className="text-primary">{metrics.cpu}%</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-1 h-8 bg-accent/20" />
          <div className="space-y-1">
            <p>Memory_Buffer</p>
            <div className="flex items-center gap-2">
              <div className="w-20 h-1 bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-accent"
                  animate={{ width: `${(metrics.ram / 8) * 100}%` }}
                />
              </div>
              <span className="text-accent">{metrics.ram} GB</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-1 h-8 bg-white/10" />
          <div className="space-y-1">
            <p>Network_Latency</p>
            <p className="text-white/60">{metrics.network} MS // TCP_STABLE</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-1 h-8 bg-white/10" />
          <div className="space-y-1">
            <p>Node_Uptime</p>
            <p className="text-white/60">{metrics.uptime}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
