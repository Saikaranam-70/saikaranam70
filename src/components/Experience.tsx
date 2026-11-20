"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2, Award, Rocket, ArrowRight } from "lucide-react";
import { experienceData } from "@/data/experience";
import { profileData } from "@/data/profile";

interface ExperienceProps {
  onOpenContact: () => void;
}

export const Experience: React.FC<ExperienceProps> = ({ onOpenContact }) => {
  return (
      <section id="experience" className="py-20 sm:py-28 relative">
        {/* Decorative ambient background blur */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 left-0 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl -z-10"
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Section Header */}
              <div className="flex flex-col items-start mb-12 sm:mb-14">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                  <span>My Journey</span>
                </div>

                <h2 className="text-3xl sm:text-5xl font-extrabold text-[#101432] tracking-tight">
                  Work Experience &amp; Leadership
                </h2>
                <p className="text-sm sm:text-base text-[#555B75] mt-2 max-w-2xl">
                  Real-world impact across entrepreneurial client platforms and fast-paced engineering teams.
                </p>
              </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                      {/* Left Column: Visual Vertical Timeline with Both Roles */}
                      <div className="lg:col-span-7 flex flex-col space-y-6">
                        {experienceData.map((exp, index) => (
                          <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative bg-white rounded-3xl p-6 sm:p-7 border border-indigo-100/90 shadow-sm hover:shadow-xl hover:border-indigo-300 transition-all duration-300 hover:-translate-y-1"
                          >
                            {/* Role Header */}
                            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                              <div className="flex items-center gap-3.5">
                                <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-indigo-50 to-purple-50 border border-indigo-100/80 flex items-center justify-center text-indigo-600 group-hover:scale-110 transition-transform duration-200 shrink-0">
                                  <Briefcase className="w-5 h-5" />
                                </div>
                                <div>
                                  <h3 className="font-extrabold text-[#101432] text-lg sm:text-xl tracking-tight group-hover:text-indigo-600 transition-colors">
                                    {exp.role}
                                  </h3>
                                  <p className="text-sm font-semibold text-indigo-600">
                                    {exp.company}
                                  </p>
                                </div>
                              </div>

                                <div className="flex items-center gap-2">
                                  <span className="px-3 py-1 rounded-full bg-slate-50 border border-slate-200/80 text-xs font-semibold text-[#555B75]">
                                    {exp.type}
                                  </span>
                                  <span className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold">
                                    {exp.duration}
                                  </span>
                                </div>
                              </div>

                            {/* Highlight Callout */}
                            <div className="mt-3.5 p-3 rounded-2xl bg-indigo-50/50 border border-indigo-100/70 flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#101432]">
                              <Award className="w-4 h-4 text-amber-500 shrink-0" />
                              <span>{exp.highlight}</span>
                            </div>

                            {/* Achievements List */}
                            <div className="mt-4 space-y-2">
                              {exp.achievements.map((item, i) => (
                                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#555B75] leading-relaxed">
                                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                  <span>{item}</span>
                                </div>
                              ))}
                            </div>

                            {/* Skill Pills */}
                            <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
                              {exp.skills.map((skill) => (
                                <span
                                  key={skill}
                                  className="px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200/60 text-[11px] font-semibold text-[#555B75]"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </motion.div>
                        ))}
                      </div>

                          {/* Right Column: "Let's Work Together!" Gradient CTA Card */}
                          <div className="lg:col-span-5 flex">
                            <motion.div
                              initial={{ opacity: 0, scale: 0.96 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true, amount: 0.1 }}
                              transition={{ duration: 0.5 }}
                              className="w-full bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white rounded-3xl p-8 sm:p-10 relative overflow-hidden shadow-2xl shadow-indigo-500/25 flex flex-col justify-between"
                            >
                              {/* White Spark Lines doodle at top-right (///) */}
                              <div
                                aria-hidden="true"
                                className="absolute top-6 right-8 flex items-center gap-1.5 rotate-12 pointer-events-none opacity-90"
                              >
                                <span className="w-1.5 h-6 bg-white rounded-full transform -skew-x-12" />
                                <span className="w-1.5 h-7 bg-white rounded-full transform -skew-x-12 translate-y-1" />
                                <span className="w-1.5 h-5 bg-white rounded-full transform -skew-x-12 translate-y-2" />
                              </div>

                              {/* Decorative radial blur in card */}
                              <div
                                aria-hidden="true"
                                className="absolute -bottom-10 -right-10 w-48 h-48 bg-purple-400/30 rounded-full blur-2xl pointer-events-none"
                              />

                              {/* Card Header with Rocket Icon */}
                              <div>
                                <motion.div
                                  animate={{ y: [0, -5, 0] }}
                                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                  className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white mb-6 border border-white/25 shadow-md"
                                >
                                  <Rocket className="w-7 h-7" />
                                </motion.div>

                                <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                                  {profileData.cta.collaborateHeading}
                                </h3>

                                <p className="text-indigo-100 text-sm sm:text-base mt-3 max-w-md leading-relaxed">
                                  {profileData.cta.collaborateSub}
                                </p>

                                {/* Highlights */}
                                <div className="mt-6 space-y-2.5">
                                  <div className="flex items-center gap-2 text-xs sm:text-sm text-indigo-100 font-medium">
                                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                                    <span>Open for Full-time Developer Roles</span>
                                  </div>
                                  <div className="flex items-center gap-2 text-xs sm:text-sm text-indigo-100 font-medium">
                                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                                    <span>Fast Prototyping &amp; Production Architecture</span>
                                  </div>
                                  <div className="flex items-center gap-2 text-xs sm:text-sm text-indigo-100 font-medium">
                                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                                    <span>High Code Quality &amp; Modern TypeScript Stack</span>
                                  </div>
                                </div>
                              </div>

                              {/* Action Button */}
                              <div className="mt-8 pt-4">
                                <button
                                  onClick={onOpenContact}
                                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-white hover:bg-slate-50 text-indigo-700 font-bold text-base shadow-xl shadow-indigo-950/20 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
                                >
                                  <span>{profileData.cta.collaborateCta}</span>
                                  <ArrowRight className="w-4 h-4 text-indigo-700" />
                                </button>
                              </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
    </section>
              );
};
