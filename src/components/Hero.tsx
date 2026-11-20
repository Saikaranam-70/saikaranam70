"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { profileData } from "@/data/profile";
import { socialLinks, contactDetails } from "@/data/social";
import { SocialIcon } from "@/components/SocialIcon";

interface HeroProps {
  onOpenContact: () => void;
}

const dynamicRoles = [
  "Full Stack Developer & Problem Solver",
  "React & Next.js Architecture Specialist",
  "Java & Spring Boot Backend Engineer",
  "High-Performance Web Solutions Creator",
];

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % dynamicRoles.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative pt-24 sm:pt-32 pb-8 sm:pb-12 overflow-hidden"
    >
        {/* Animated fluid ambient background blobs */}
      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          x: [0, 20, 0],
          y: [0, -15, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
        className="pointer-events-none absolute top-10 left-1/4 -translate-x-1/2 w-[520px] h-[520px] bg-blue-100/50 rounded-full blur-3xl z-0"
      />
        <motion.div
        animate={{
          scale: [1, 1.08, 1],
          x: [0, -25, 0],
          y: [0, 20, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
        className="pointer-events-none absolute top-14 right-5 w-[560px] h-[560px] bg-purple-100/50 rounded-full blur-3xl z-0"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          {/* Left Column: Introductions & Animated CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start text-left pt-2 lg:pt-0"
          >
            {/* Availability Badge */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-50/90 border border-emerald-200/70 shadow-sm mb-6 cursor-default"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span className="text-xs sm:text-sm font-semibold text-emerald-800 tracking-tight">
                  {contactDetails.availability}
                </span>
          </motion.div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-[74px] font-extrabold text-[#101432] tracking-tight leading-[1.05]">
            Hi, I&apos;m <br />
            <span className="text-[#101432]">Sai </span>
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Karanam
            </span>
          </h1>

          {/* Subtitle with Smooth Animated Cycling Role */}
          <div className="h-9 sm:h-10 mt-5 overflow-hidden flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={roleIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="flex items-center gap-2"
              >
                <Sparkles className="w-5 h-5 text-indigo-600 shrink-0" />
                <span className="text-xl sm:text-2xl font-bold text-[#101432] tracking-tight">
                  {dynamicRoles[roleIndex]}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Description */}
            <p className="text-base sm:text-lg text-[#555B75] max-w-lg mt-3.5 leading-relaxed font-normal">
              {profileData.description}
            </p>

            {/* Primary & Secondary Action CTAs with Micro-animations */}
            <div className="flex flex-wrap items-center gap-4 mt-8 w-full sm:w-auto">
                <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-semibold text-base shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-200 cursor-pointer"
              >
                <span>{profileData.cta.primaryText}</span>
                <ArrowRight className="w-4 h-4" />
            </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={profileData.cta.secondaryTarget}
              download="Sai_Karanam_Resume.pdf"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-white hover:bg-slate-50 border border-slate-200 text-[#101432] font-semibold text-base shadow-sm hover:border-indigo-200 transition-all duration-200 cursor-pointer"
            >
              <span>{profileData.cta.secondaryText}</span>
              <Download className="w-4 h-4 text-[#555B75]" />
          </motion.a>
        </div>

        {/* Social Icons Row with Staggered Hover */}
        <div className="flex items-center gap-3 mt-8">
          {socialLinks.map((social) => (
              <motion.a
                  key={social.name}
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.9 }}
              href={social.url}
              target={social.url.startsWith("mailto:") ? "_self" : "_blank"}
              rel="noopener noreferrer"
              aria-label={social.ariaLabel}
              className="w-10 h-10 rounded-full bg-white border border-slate-200/90 text-[#555B75] hover:text-indigo-600 hover:border-indigo-300 hover:bg-indigo-50/40 flex items-center justify-center shadow-sm transition-colors duration-200"
            >
              <SocialIcon name={social.icon} size={18} />
                </motion.a>
              ))}
      </div>
    </motion.div>

          {/* Right Column: Hero Portrait, Orbital Ring & Doodles */ }
  <div className="lg:col-span-5 relative flex items-center justify-center mt-8 lg:mt-0 min-h-[480px] sm:min-h-[550px]">
    {/* Background Soft Purple/Lavender Organic Backdrop */}
      <motion.div
              animate={{ rotate: [1, 2, 1] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      aria-hidden="true"
      className="absolute w-[360px] sm:w-[450px] h-[410px] sm:h-[490px] rounded-[52px] bg-gradient-to-tr from-purple-200/70 via-indigo-100/60 to-blue-100/50 z-0 pointer-events-none shadow-sm"
    />

    {/* Thin Tilted Orbital Ellipse with 3D Float */}
    <motion.div
      animate={{
        rotate: [-18, -16, -18],
        y: [0, -5, 0],
      }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none z-[5] flex items-center justify-center"
    >
      <div className="w-[520px] sm:w-[600px] h-[240px] sm:h-[270px] border-[2px] border-indigo-500/40 rounded-[50%]" />
    </motion.div>

    {/* Blue Doodle Rays above Sai's head on the left (///) */}
    <motion.div
      animate={{ y: [0, -3, 0], scale: [1, 1.05, 1] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      aria-hidden="true"
      className="absolute top-1 left-8 sm:left-14 z-20 pointer-events-none"
    >
      <svg width="42" height="34" viewBox="0 0 42 34" fill="none">
        <line x1="8" y1="28" x2="16" y2="6" stroke="#2563EB" strokeWidth="3" strokeLinecap="round" />
        <line x1="20" y1="30" x2="26" y2="8" stroke="#2563EB" strokeWidth="3" strokeLinecap="round" />
        <line x1="32" y1="32" x2="36" y2="12" stroke="#2563EB" strokeWidth="3" strokeLinecap="round" />
      </svg>
    </motion.div>

    {/* Handwritten Doodle on top-right: "Dream Bigger, Build Better" */}
    <motion.div
      animate={{ y: [0, -4, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      aria-hidden="true"
      className="absolute top-2 -right-2 sm:-right-8 z-20 pointer-events-none flex flex-col items-center rotate-3 select-none"
    >
      <span className="font-handwriting text-2xl sm:text-3xl font-bold text-[#101432] leading-tight text-center tracking-normal">
        Dream Bigger, <br />
        <span className="pl-4">Build Better</span>
      </span>
      <svg
        width="110"
        height="16"
        viewBox="0 0 110 16"
        fill="none"
        className="text-[#101432] mt-0.5"
      >
        <path
          d="M4 11C28 3 75 2 106 8"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </svg>
    </motion.div>

    {/* Wooden Railing Bar below Sai's arm */}
    <div
      aria-hidden="true"
      className="absolute bottom-6 right-[-20px] sm:right-[-30px] w-[360px] sm:w-[440px] h-6 rounded-full bg-gradient-to-r from-[#BA8459] via-[#9F673E] to-[#7B4925] shadow-md z-[8] border-t border-[#dfab84] pointer-events-none opacity-90"
    />

    {/* Sai Karanam's Actual Portrait Cutout with subtle breathing scale */}
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative w-full max-w-[400px] sm:max-w-[460px] h-[460px] sm:h-[540px] z-10 flex items-end justify-center sm:-translate-x-3"
    >
      <Image
        src="/assets/sai-portrait-transparent.png"
        alt="Sai Karanam - Full Stack Developer"
        width={802}
        height={1003}
        priority
        className="object-contain object-bottom max-h-[540px] w-auto drop-shadow-md select-none transition-transform duration-300 hover:scale-[1.02]"
      />
    </motion.div>
  </div>
        </div >
      </div >
    </section >
  );
};
