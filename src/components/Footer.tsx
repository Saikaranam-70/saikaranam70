"use client";

import React from "react";
import { Heart } from "lucide-react";
import { profileData } from "@/data/profile";
import { socialLinks } from "@/data/social";
import { SocialIcon } from "@/components/SocialIcon";

export const Footer: React.FC = () => {
  return (
    <footer className="py-8 sm:py-10 border-t border-indigo-100/70 bg-white relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright notice */}
          <div className="text-xs sm:text-sm text-[#555B75] text-center sm:text-left">
            © 2026 {profileData.name}. All rights reserved.
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target={social.url.startsWith("mailto:") ? "_self" : "_blank"}
                rel="noopener noreferrer"
                aria-label={social.ariaLabel}
                className="w-8 h-8 rounded-full bg-slate-50 hover:bg-indigo-50 text-[#555B75] hover:text-indigo-600 flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
              >
                <SocialIcon name={social.icon} size={15} />
              </a>
            ))}
          </div>

          {/* Built with tech badge */}
          <div className="text-xs sm:text-sm text-[#555B75] inline-flex items-center gap-1.5">
            <span>Built with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>using Next.js</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
