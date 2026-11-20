"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Testimonials } from "@/components/Testimonials";
import { Education } from "@/components/Education";
import { ContactModal } from "@/components/ContactModal";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { CustomCursor } from "@/components/CustomCursor";

export default function Home() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const handleOpenContact = () => {
    setContactModalOpen(true);
  };

  const handleCloseContact = () => {
    setContactModalOpen(false);
  };

  return (
      <div className="relative min-h-screen bg-white text-[#101432] selection:bg-indigo-100 selection:text-indigo-700">
        {/* 1. Scroll Progress Bar at very top */}
        <ScrollProgress />

        {/* 2. Fluid Interactive Custom Cursor on Desktop */}
        <CustomCursor />

          {/* 3. Background Ambient Floating Gradient Accents */}
          <div
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 overflow-hidden -z-10"
          >
            <div className="absolute -top-40 right-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-b from-purple-100/50 via-indigo-50/40 to-transparent blur-3xl" />
            <div className="absolute top-10 left-[20%] w-[500px] h-[500px] rounded-full bg-gradient-to-b from-blue-100/40 via-sky-50/30 to-transparent blur-3xl" />
            <div className="absolute top-[35%] -left-32 w-[550px] h-[550px] rounded-full bg-purple-50/50 blur-3xl" />
            <div className="absolute top-[65%] -right-32 w-[550px] h-[550px] rounded-full bg-indigo-50/45 blur-3xl" />
            <div className="absolute bottom-10 right-[-5%] w-[600px] h-[600px] rounded-full bg-indigo-50/50 blur-3xl" />
          </div>

          {/* 4. Floating Header Navigation */}
          <Navbar onOpenContact={handleOpenContact} />

          {/* 5. Main Content */}
          <main className="flex flex-col">
            {/* Hero Section */}
            <Hero onOpenContact={handleOpenContact} />

            {/* Stats Glass Card with Animated Counters */}
            <Stats />

            {/* About Me Section */}
            <About onOpenContact={handleOpenContact} />

            {/* Services & Solutions with Spotlight Glow Cards */}
            <Services onOpenContact={handleOpenContact} />

            {/* Technologies & Skills Grid */}
            <Skills />

            {/* Featured Projects with Animated Category Filter */}
            <Projects onOpenContact={handleOpenContact} />

          {/* Experience & Let's Work Together Card */}
          <Experience onOpenContact={handleOpenContact} />

          {/* Client & Collaborator Testimonials */}
          <Testimonials />

      {/* Education & Credentials */}
      <Education />
    </main>

      {/* 6. Footer */ }
  <Footer />

  {/* 7. Interactive Contact Modal */ }
  <ContactModal
    isOpen={contactModalOpen}
    onClose={handleCloseContact}
  />
    </div >
  );
}
