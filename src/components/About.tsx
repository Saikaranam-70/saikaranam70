"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, MapPin, GraduationCap, Star, Heart } from "lucide-react";
import { profileData } from "@/data/profile";

interface AboutProps {
  onOpenContact: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenContact }) => {
  return (
    <section id="about" className="py-16 sm:py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Workspace image with purple corner accents */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Top-left decorative purple rounded square */}
            <div
              aria-hidden="true"
              className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-16 h-16 bg-indigo-400/50 rounded-2xl -z-10"
            />
            {/* Bottom-right decorative purple rounded square */}
            <div
              aria-hidden="true"
              className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-18 h-18 bg-purple-400/40 rounded-2xl -z-10"
            />

            {/* Workspace Image Container */}
            <div className="relative w-full max-w-[400px] rounded-3xl overflow-hidden shadow-md border border-indigo-100 bg-white">
              <Image
                src="/assets/workspace.png"
                alt="Sai Karanam Workspace and Development Setup"
                width={700}
                height={460}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Center Column: Bio and CTA */}
          <div className="lg:col-span-4 flex flex-col items-start">
            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
              <span>About Me</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101432] tracking-tight leading-tight">
              Passionate Developer on a Journey to{" "}
              <span className="text-indigo-600 underline decoration-indigo-300 decoration-wavy underline-offset-4">
                Excel
              </span>
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base text-[#555B75] mt-4 leading-relaxed font-normal">
              {profileData.bio}
            </p>

            {/* Know More CTA Button */}
            <button
              onClick={onOpenContact}
              className="mt-6 inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold shadow-md shadow-indigo-500/20 hover:shadow-indigo-500/30 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>{profileData.cta.knowMoreText}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right Column: Profile quick facts card */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-indigo-100/90 shadow-md shadow-indigo-500/5 flex flex-col gap-6">
              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-[#555B75] font-medium">Location</span>
                  <span className="text-sm font-bold text-[#101432]">
                    {profileData.info.location}
                  </span>
                </div>
              </div>

              {/* Education */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-[#555B75] font-medium">Education</span>
                  <span className="text-sm font-bold text-[#101432]">
                    {profileData.info.education}
                  </span>
                </div>
              </div>

              {/* CGPA */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                  <Star className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-[#555B75] font-medium">Academics</span>
                  <span className="text-sm font-bold text-[#101432]">
                    CGPA: {profileData.info.cgpa}
                  </span>
                </div>
              </div>

              {/* Status */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center shrink-0">
                  <Heart className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-[#555B75] font-medium">Status</span>
                  <span className="text-sm font-bold text-[#101432]">
                    {profileData.info.status}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
