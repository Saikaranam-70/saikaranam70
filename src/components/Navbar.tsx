"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Send, Menu, X } from "lucide-react";
import { profileData } from "@/data/profile";

interface NavbarProps {
  onOpenContact: () => void;
}

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section spy
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPos = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = document.getElementById(sections[i]);
        if (sec && sec.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (href === "#contact") {
      onOpenContact();
      return;
    }

    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(targetId);
    }
  };

  return (
      <header className="fixed top-3 sm:top-5 left-0 right-0 z-50 px-4 sm:px-6">
        <nav
          aria-label="Main Navigation"
          className={`max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-2.5 rounded-full transition-all duration-300 ${scrolled
              ? "bg-white/95 backdrop-blur-md shadow-lg shadow-indigo-500/5 border border-indigo-100"
              : "bg-white/85 backdrop-blur-md shadow-sm border border-indigo-100/80"
            }`}
        >
          {/* Left: Brand Monogram & Name */}
          <Link
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center gap-2.5 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-full py-0.5"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-extrabold text-sm tracking-wider shadow-sm group-hover:scale-105 transition-transform duration-200">
              {profileData.initials}
            </div>
            <span className="font-bold text-[#101432] text-base tracking-tight group-hover:text-indigo-600 transition-colors">
              {profileData.name}
            </span>
          </Link>

          {/* Center: Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-0.5 bg-slate-50/80 p-1 rounded-full border border-slate-100">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-full transition-all duration-200 ${isActive
                      ? "bg-indigo-600 text-white shadow-sm"
                      : "text-[#555B75] hover:text-[#101432] hover:bg-white/80"
                    }`}
                >
              { item.label }
              </a>
          );
          })}
      </div>

        {/* Right: Let's Talk CTA */}
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenContact}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white text-sm font-semibold shadow-md shadow-indigo-500/20 hover:shadow-indigo-500/35 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
          >
            <span>Let&apos;s Talk</span>
            <Send className="w-3.5 h-3.5" />
          </button>

      {/* Mobile Menu Button */}
      <button
        type="button"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="lg:hidden p-2 rounded-full text-[#101432] hover:bg-slate-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
        aria-label="Toggle navigation menu"
        aria-expanded={mobileMenuOpen}
      >
        {mobileMenuOpen ? (
          <X className="w-5 h-5 text-[#101432]" />
        ) : (
          <Menu className="w-5 h-5 text-[#101432]" />
        )}
      </button>
    </div>
      </nav >

      {/* Mobile Drawer */}
              {mobileMenuOpen && (
                <div className="lg:hidden mt-2 max-w-sm mx-auto bg-white/95 backdrop-blur-lg border border-indigo-100 rounded-3xl p-4 shadow-xl shadow-indigo-500/10 transition-all duration-300">
                  <div className="flex flex-col gap-1">
                    {navItems.map((item) => {
                      const isActive = activeSection === item.href.substring(1);
                      return (
                        <a
                          key={item.label}
                          href={item.href}
                          onClick={(e) => handleNavClick(e, item.href)}
                          className={`px-4 py-2.5 rounded-2xl text-sm font-semibold transition-all ${isActive
                              ? "bg-indigo-600 text-white"
                              : "text-[#555B75] hover:bg-indigo-50 hover:text-indigo-600"
                            }`}
                        >
                          {item.label}
                        </a>
                      );
                    })}
                    <div className="pt-2 border-t border-slate-100 mt-1">
                      <button
                        onClick={() => {
                          setMobileMenuOpen(false);
                          onOpenContact();
                        }}
                        className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold shadow-md shadow-indigo-500/20"
                      >
                        <span>Let&apos;s Talk</span>
                        <Send className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
      )}
    </header>
  );
};
