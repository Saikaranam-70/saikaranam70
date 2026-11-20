export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  duration: string;
  location: string;
  type: "Full-time" | "Part-time" | "Internship" | "Contract" | "Co-Founder";
  description: string;
  highlight: string;
  achievements: string[];
  skills: string[];
  period: string;
}

export const experienceData: ExperienceItem[] = [
  {
    id: "kolors-digital-services",
    role: "Co-Founder & Full Stack Developer",
    company: "Kolors Digital Services",
    duration: "2025 – Present",
    period: "Ongoing",
    location: "Visakhapatnam, India",
    type: "Co-Founder",
    description:
      "Building healthcare websites and digital solutions for doctors, clinics, and businesses, focusing on high-converting interfaces, performance, and user experience.",
    highlight: "Delivered 5+ production healthcare platforms with 90+ PageSpeed scores.",
    achievements: [
      "Engineered tailored websites for doctors and clinics, driving a 60%+ increase in patient online inquiries.",
      "Achieved 90+ Google PageSpeed and Core Web Vitals scores using modern Next.js static and server rendering.",
      "Integrated WhatsApp Business automation and custom appointment scheduling workflows for client practices.",
      "Spearheaded UI/UX design, client discovery, architecture, deployment, and ongoing technical maintenance.",
    ],
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "SEO", "WhatsApp API", "Performance Optimization"],
  },
  {
    id: "bhuma-infotech",
    role: "Software Developer Intern",
    company: "Bhuma Infotech",
    duration: "4 Months",
    period: "4 Months (2025)",
    location: "Visakhapatnam, India",
    type: "Internship",
    description:
      "Contributed to real-world software development projects, implemented features, and gained practical experience working with production applications.",
    highlight: "Contributed to real-world software projects and learned at enterprise scale.",
    achievements: [
      "Developed and tested full-stack features using React, Node.js, and database integrations for client web portals.",
      "Refactored API endpoints to optimize database query performance and reduce response latency by 25%.",
      "Collaborated in Agile sprints, code reviews, and Git version control workflows alongside senior developers.",
      "Assisted in debugging production bugs and writing modular, reusable frontend UI components.",
    ],
    skills: ["React", "Node.js", "Express", "REST APIs", "Git", "Agile Sprints", "Database Management"],
  },
];
