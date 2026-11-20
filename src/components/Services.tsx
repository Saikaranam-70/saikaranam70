"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, Database, Zap, Shield, CheckCircle2, ArrowRight } from "lucide-react";
import { servicesData } from "@/data/services";
import { SpotlightCard } from "@/components/SpotlightCard";

interface ServicesProps {
  onOpenContact: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenContact }) => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "code":
        return <Code className="w-6 h-6" />;
      case "database":
        return <Database className="w-6 h-6" />;
      case "zap":
        return <Zap className="w-6 h-6" />;
      case "shield":
        return <Shield className="w-6 h-6" />;
      default:
        return <Code className="w-6 h-6" />;
    }
  };

  return (
    <section id="services" className="py-20 sm:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
            <span>What I Do</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#101432] tracking-tight">
            Services &amp; Solutions
          </h2>
          <p className="text-sm sm:text-base text-[#555B75] mt-3 max-w-xl">
            From initial product design and database architecture to lightning-fast frontend delivery.
          </p>
        </div>

        {/* Services Grid with Spotlight Effects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="h-full"
            >
                <SpotlightCard className="h-full bg-white rounded-3xl p-6 sm:p-7 border border-indigo-100/90 shadow-sm hover:shadow-xl hover:border-indigo-300 transition-all duration-300 flex flex-col justify-between">
                  <div>
                    {/* Icon with gradient background */}
                    <div
                      className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${service.gradient} text-white flex items-center justify-center shadow-md shadow-indigo-500/20 mb-6`}
                    >
                      {getServiceIcon(service.icon)}
                    </div>

                    <h3 className="font-extrabold text-[#101432] text-xl tracking-tight group-hover:text-indigo-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs font-semibold text-indigo-600 mt-1">
                      {service.tagline}
                    </p>

                    <p className="text-xs sm:text-sm text-[#555B75] mt-3 leading-relaxed">
                      {service.description}
                    </p>

                      {/* Features list */}
                      <div className="mt-5 space-y-2 pt-4 border-t border-slate-100">
                        {service.features.map((feat, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-[#555B75]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  <div className="mt-6 pt-2">
                    <button
                      onClick={onOpenContact}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-800 transition-colors cursor-pointer"
                    >
                      <span>Discuss Project</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
