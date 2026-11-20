"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen, CheckCircle2 } from "lucide-react";
import { educationData, certificationsData } from "@/data/education";

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 sm:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
            <span>Academics</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#101432] tracking-tight">
            Education &amp; Credentials
          </h2>
          <p className="text-sm sm:text-base text-[#555B75] mt-3 max-w-xl">
            Strong foundational computer science training backed by active certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main University Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white rounded-3xl p-7 sm:p-9 border border-indigo-100/90 shadow-md flex flex-col justify-between"
          >
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-[#101432] text-xl sm:text-2xl tracking-tight">
                      {educationData[0].institution}
                    </h3>
                    <p className="text-sm font-semibold text-indigo-600">
                      {educationData[0].degree} — {educationData[0].field}
                    </p>
                  </div>
                </div>

                <div className="px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold">
                  {educationData[0].score}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-100 text-xs sm:text-sm text-[#101432] font-semibold mb-6">
                📍 {educationData[0].location} • {educationData[0].duration}
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#101432]">
                  Key Highlights &amp; Coursework
                </h4>
                {educationData[0].highlights.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#555B75] leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-[#555B75]">
              <span>Department of Computer Science &amp; Engineering</span>
              <span className="font-bold text-indigo-600">B.Tech Honors Track</span>
            </div>
          </motion.div>

          {/* Certifications Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-gradient-to-tr from-slate-50 to-indigo-50/30 rounded-3xl p-7 sm:p-8 border border-indigo-100/90 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center border border-purple-100">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-[#101432] text-lg tracking-tight">
                    Certifications &amp; Training
                  </h3>
                  <p className="text-xs text-[#555B75]">Verified technical proficiencies</p>
                </div>
              </div>

              <div className="space-y-4">
                {certificationsData.map((cert, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-2xl bg-white border border-indigo-100/70 shadow-sm hover:border-indigo-200 transition-colors"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="font-bold text-[#101432] text-sm">
                        {cert.title}
                      </h4>
                      <span className="text-[11px] font-semibold text-indigo-600">
                        {cert.date}
                      </span>
                    </div>
                    <p className="text-xs text-[#555B75] mt-1">{cert.issuer}</p>
                    <div className="mt-2 text-[11px] font-medium text-slate-500 bg-slate-50 px-2 py-0.5 rounded-md inline-block">
                      {cert.skills}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 text-center">
              <span className="text-xs font-semibold text-[#555B75]">
                Continuously learning &amp; expanding modern engineering stack.
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
