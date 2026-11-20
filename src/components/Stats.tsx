"use client";

import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Code, Briefcase, Trophy, Users } from "lucide-react";
import { statsData, StatItem } from "@/data/stats";

interface CounterProps {
  value: string;
}

const AnimatedCounter: React.FC<CounterProps> = ({ value }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  // Parse numeric part
  const numericMatch = value.match(/[\d.]+/);
  const targetNum = numericMatch ? parseFloat(numericMatch[0]) : 0;
  const isFloat = value.includes(".");
  const suffix = value.replace(/[\d.]+/, "");

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1200; // ms
    const startTime = performance.now();

    const update = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = start + (targetNum - start) * eased;

      setDisplayValue(current);

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    };

    requestAnimationFrame(update);
  }, [isInView, targetNum]);

  return (
    <span ref={ref} className="text-2xl sm:text-3xl font-extrabold text-[#101432] tracking-tight">
      {isFloat ? displayValue.toFixed(1) : Math.round(displayValue)}
      {suffix}
    </span>
  );
};

export const Stats: React.FC = () => {
  const getStatIcon = (iconType: StatItem["icon"]) => {
    switch (iconType) {
      case "code":
        return (
          <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-extrabold text-base">
            <Code className="w-5 h-5 stroke-[2.5]" />
          </div>
        );
      case "briefcase":
        return (
          <div className="w-11 h-11 rounded-xl bg-purple-600 text-white flex items-center justify-center shadow-sm">
            <Briefcase className="w-5 h-5 stroke-[2.2]" />
          </div>
        );
      case "trophy":
        return (
          <div className="w-11 h-11 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
            <Trophy className="w-5 h-5 stroke-[2.2]" />
          </div>
        );
      case "users":
        return (
          <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <Users className="w-5 h-5 stroke-[2.2]" />
          </div>
        );
    }
  };

  return (
    <section className="relative -mt-2 sm:-mt-4 mb-16 z-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-indigo-100 shadow-xl shadow-indigo-500/5 p-4 sm:p-6 lg:py-6 lg:px-8"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 items-center">
              {statsData.map((stat, idx) => (
                  <motion.div
                key={stat.id}
              className={`flex items-center gap-3.5 sm:gap-4 p-3 sm:px-6 sm:py-2 transition-transform ${idx > 0 ? "lg:border-l lg:border-slate-200" : ""
                }`}
              >
              {getStatIcon(stat.icon)}
              <div className="flex flex-col">
                <AnimatedCounter value={stat.value} />
                <span className="text-xs sm:text-sm font-semibold text-[#555B75]">
                  {stat.label}
                </span>
              </div>
          </motion.div>
            ))}
        </div>
    </motion.div>
      </div >
    </section >
  );
};
