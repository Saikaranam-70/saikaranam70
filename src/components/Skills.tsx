"use client";

import React from "react";
import { motion } from "framer-motion";
import { skillsData } from "@/data/skills";
import { TechIcon } from "@/components/TechIcon";
import { SpotlightCard } from "@/components/SpotlightCard";

export const Skills: React.FC = () => {
  return (
      <section id="skills" className="py-20 sm:py-24 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
            <div className="flex flex-col items-center text-center mb-12 sm:mb-14">
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                <span>My Skills</span>
              </div>

                <h2 className="text-3xl sm:text-5xl font-extrabold text-[#101432] tracking-tight">
                  Technologies I Work With
                </h2>
                <p className="text-sm sm:text-base text-[#555B75] mt-2 max-w-lg">
                  Core tech stack and tools powering scalable, full-stack production systems.
                </p>
            </div>

            {/* Skills Cards Grid with Spotlight and Spring hover */}
            <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-3 sm:gap-3.5">
                  {skillsData.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -6, scale: 1.04 }}
            >
              <SpotlightCard className="h-full bg-white rounded-2xl border border-indigo-100/90 py-4 px-2 flex flex-col items-center justify-center gap-2 shadow-sm hover:shadow-lg hover:border-indigo-300 transition-all duration-200 cursor-default">
                <div className="w-10 h-10 flex items-center justify-center transition-transform duration-200">
                  <TechIcon name={skill.iconName} size={32} />
                </div>
                <span className="text-xs font-bold text-[#101432] text-center tracking-tight transition-colors">
                  {skill.name}
                </span>
              </SpotlightCard>
            </motion.div>
          ))}
          </div>
        </div>
      </section>
      );
};
