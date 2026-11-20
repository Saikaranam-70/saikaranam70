"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ExternalLink, X, CheckCircle } from "lucide-react";
import { projectsData, ProjectItem } from "@/data/projects";
import { SocialIcon } from "@/components/SocialIcon";
import { SpotlightCard } from "@/components/SpotlightCard";

interface ProjectsProps {
  onOpenContact: () => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onOpenContact }) => {
  const [previewProject, setPreviewProject] = useState<ProjectItem | null>(null);

  return (
            <section id="projects" className="py-20 sm:py-28 relative">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-14">
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold mb-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                      <span>Real-World Client Work</span>
                    </div>

                  <h2 className="text-3xl sm:text-5xl font-extrabold text-[#101432] tracking-tight">
                    Featured Client Projects
                  </h2>
                  <p className="text-sm sm:text-base text-[#555B75] mt-2 max-w-xl">
                    Production healthcare platforms engineered and deployed through Kolors Digital Services for leading doctors and medical practices.
                  </p>
                </div>

                  <a
            href="https://github.com/saikaranam"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-sm font-bold text-indigo-600 hover:text-indigo-700 transition-colors self-start sm:self-auto"
          >
                <span>View All Repositories</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
          </div>

        {/* 3-Column Desktop Grid for the 3 Real Healthcare Platforms */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              whileHover={{ y: -6 }}
              className="h-full"
            >
              <SpotlightCard className="h-full bg-white rounded-3xl border border-indigo-100/90 shadow-sm hover:shadow-xl hover:border-indigo-300 transition-all duration-300 flex flex-col justify-between overflow-hidden">
                <div>
                  {/* Project Screenshot Banner with Zoom */}
                  <div
                    onClick={() => setPreviewProject(project)}
                    className="relative w-full h-52 bg-slate-50 border-b border-indigo-50 overflow-hidden cursor-zoom-in group/img"
                  >
                    <Image
                      src={project.image}
                      alt={`${project.title} Preview`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-top group-hover/img:scale-108 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <span className="text-xs font-semibold text-white bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full">
                        Click to enlarge screenshot
                      </span>
                    </div>

                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md border border-indigo-100 text-indigo-700 text-[11px] font-bold px-3 py-1 rounded-full shadow-sm">
                      🩺 Kolors Healthcare
                    </div>
                  </div>

                  {/* Project Body */}
                  <div className="p-6 sm:p-7">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="font-extrabold text-[#101432] text-xl tracking-tight hover:text-indigo-600 transition-colors">
                          {project.title}
                        </h3>
                        {project.clientOrOrg && (
                          <p className="text-xs font-semibold text-indigo-600 mt-0.5">
                            {project.clientOrOrg}
                          </p>
                        )}
                      </div>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open project ${project.title}`}
                          className="p-2 rounded-xl text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>

                    {/* Metrics Callout */}
                    {project.metrics && (
                      <div className="mt-3.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-50 border border-emerald-100 text-emerald-800 text-xs font-semibold">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{project.metrics}</span>
                      </div>
                    )}

                    <p className="text-xs sm:text-sm text-[#555B75] mt-3.5 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Tech Tags and Links */}
                <div className="p-6 sm:p-7 pt-0">
                  <div className="pt-4 border-t border-slate-100 flex flex-col gap-3.5">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 rounded-md bg-slate-50 border border-slate-200/70 text-[11px] font-semibold text-[#555B75]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-xs pt-1">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-slate-500 hover:text-indigo-600 font-medium transition-colors"
                        >
                          <SocialIcon name="github" size={14} />
                          <span>Code</span>
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-indigo-600 hover:text-indigo-700 font-bold transition-colors ml-auto"
                        >
                          <span>Live Website</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        {/* Full Image Preview Modal */ }
  <AnimatePresence>
    {previewProject && (
      <div
        role="dialog"
        aria-modal="true"
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/70 backdrop-blur-md"
        onClick={() => setPreviewProject(null)}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-4xl w-full bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-indigo-100 overflow-hidden flex flex-col max-h-[90vh]"
        >
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div>
              <h3 className="text-xl font-bold text-[#101432]">
                {previewProject.title}
              </h3>
              <p className="text-xs text-[#555B75] mt-0.5">
                {previewProject.subtitle}
              </p>
            </div>
            <button
              onClick={() => setPreviewProject(null)}
              aria-label="Close preview"
              className="p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-[#101432] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

                  <div className="relative w-full h-[55vh] mt-4 rounded-2xl overflow-hidden border border-slate-100 bg-slate-50">
                    <Image
                      src={previewProject.image}
                      alt={previewProject.title}
                      fill
                      className="object-contain"
                    />
                  </div>

                  <div className="mt-4 pt-3 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      {previewProject.technologies.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-700 text-xs font-semibold"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

{
  previewProject.liveUrl && (
    <a
      href={previewProject.liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-semibold shadow-md"
    >
      <span>Visit Live Website</span>
      <ExternalLink className="w-3.5 h-3.5" />
    </a>
  )
}
                </div >
              </motion.div >
            </div >
          )}
        </AnimatePresence >
      </div >
    </section >
  );
};
