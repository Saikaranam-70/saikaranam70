"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote, CheckCircle } from "lucide-react";
import { testimonialsData } from "@/data/testimonials";

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 sm:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
            <span>Testimonials</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#101432] tracking-tight">
            Client &amp; Collaborator Feedback
          </h2>
          <p className="text-sm sm:text-base text-[#555B75] mt-3 max-w-xl">
            Real feedback from clients, mentors, and project partners who have worked with Sai.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonialsData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-3xl p-7 border border-indigo-100/90 shadow-sm hover:shadow-xl hover:border-indigo-300 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between relative"
            >
              {/* Quote Mark */}
              <div className="absolute top-6 right-6 text-indigo-100 group-hover:text-indigo-200 transition-colors">
                <Quote className="w-8 h-8 fill-current" />
              </div>

              <div>
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                  <span className="text-xs font-bold text-[#101432] ml-1.5">5.0</span>
                </div>

                {/* Review Body */}
                <p className="text-sm text-[#555B75] leading-relaxed italic">
                  &ldquo;{item.content}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-6 pt-5 border-t border-slate-100 flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-extrabold text-sm flex items-center justify-center shadow-sm shrink-0">
                  {item.avatarText}
                </div>
                <div className="flex flex-col min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="font-extrabold text-[#101432] text-sm truncate">
                      {item.name}
                    </span>
                    <CheckCircle className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  </div>
                  <span className="text-xs text-indigo-600 font-semibold truncate">
                    {item.role}
                  </span>
                  <span className="text-[11px] text-[#555B75] truncate">
                    {item.companyOrOrg}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
