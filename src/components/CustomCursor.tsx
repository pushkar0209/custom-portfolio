"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const dotX = useSpring(0, { stiffness: 1000, damping: 50 });
  const dotY = useSpring(0, { stiffness: 1000, damping: 50 });
  
  const ringX = useSpring(0, { stiffness: 150, damping: 30 });
  const ringY = useSpring(0, { stiffness: 150, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      dotX.set(e.clientX - 4);
      dotY.set(e.clientY - 4);
      ringX.set(e.clientX - 20);
      ringY.set(e.clientY - 20);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" || 
        target.tagName === "BUTTON" || 
        target.closest("button") || 
        target.getAttribute("role") === "button"
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [dotX, dotY, ringX, ringY]);

  return (
    <>
      <motion.div
        style={{
          x: dotX,
          y: dotY,
        }}
        className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full z-[9999] pointer-events-none"
      />
      <motion.div
        style={{
          x: ringX,
          y: ringY,
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          borderColor: isHovering ? "var(--primary)" : "rgba(255, 255, 255, 0.2)",
        }}
        className="fixed top-0 left-0 w-10 h-10 border border-white/20 rounded-full z-[9998] pointer-events-none"
      />
    </>
  );
}
