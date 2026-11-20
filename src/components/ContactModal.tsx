"use client";

import React, { useState } from "react";
import { X, Send, Mail, MapPin, CheckCircle, Copy, Check } from "lucide-react";
import { contactDetails } from "@/data/social";
import { profileData } from "@/data/profile";
import { SocialIcon } from "@/components/SocialIcon";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactDetails.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Simulate sending / open mailto fallback
    const mailtoUrl = `mailto:${contactDetails.email}?subject=Message from ${encodeURIComponent(
      formData.name
    )} (Portfolio)&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.open(mailtoUrl, "_self");
    setSubmitted(true);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-indigo-100 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-[#101432] hover:bg-slate-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-[#101432]">Thank You!</h3>
            <p className="text-sm text-[#555B75] mt-2 max-w-xs leading-relaxed">
              Your email client has been launched with your message. I look forward to connecting with you!
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-6 px-6 py-2.5 rounded-full bg-indigo-600 text-white font-semibold text-sm hover:bg-indigo-700 transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                Get in Touch
              </span>
              <h2
                id="contact-modal-title"
                className="text-2xl sm:text-3xl font-extrabold text-[#101432] tracking-tight"
              >
                Let&apos;s Connect
              </h2>
              <p className="text-xs sm:text-sm text-[#555B75] mt-1">
                Have a project idea, question, or opportunity? Drop me a note below.
              </p>
            </div>

            {/* Quick Contact Info with Copy button */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 p-3.5 bg-slate-50/80 rounded-2xl border border-slate-100">
              <div className="flex items-center justify-between gap-2 p-1">
                <a
                  href={`mailto:${contactDetails.email}`}
                  className="flex items-center gap-2.5 text-xs font-semibold text-indigo-600 hover:text-indigo-800 transition-colors truncate"
                >
                  <div className="w-7 h-7 rounded-lg bg-indigo-100/60 flex items-center justify-center text-indigo-600 shrink-0">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <span className="truncate">{contactDetails.email}</span>
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  title="Copy email to clipboard"
                  className="p-1 rounded-md text-slate-400 hover:text-indigo-600 transition-colors"
                >
                  {copied ? (
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

                <div className="flex items-center gap-2.5 text-xs font-semibold text-[#101432] p-1">
                  <div className="w-7 h-7 rounded-lg bg-blue-100/60 flex items-center justify-center text-blue-600 shrink-0">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <span>{contactDetails.location}</span>
                </div>
              </div>

              {/* Message Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-[#101432] uppercase tracking-wider mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Doe"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-[#101432] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#101432] uppercase tracking-wider mb-1.5">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. john@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-[#101432] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#101432] uppercase tracking-wider mb-1.5">
                    Message
                  </label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Tell me about your project or opportunity..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-[#101432] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 px-6 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-semibold text-sm shadow-md shadow-indigo-500/20 hover:shadow-indigo-500/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>
        )}
          </div>
    </div>
      );
};
