export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  features: string[];
  gradient: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "fullstack-dev",
    title: "Full Stack Web Apps",
    tagline: "End-to-end modern web applications",
    description:
      "Architecting scalable frontend and backend systems with React, Next.js, Node.js, Spring Boot, and Python Django.",
    icon: "code",
    features: [
      "Custom responsive UI with Tailwind & Framer Motion",
      "RESTful API & GraphQL backend integration",
      "Robust state management and real-time updates",
    ],
    gradient: "from-blue-600 to-indigo-600",
  },
  {
    id: "backend-api",
    title: "Backend & Cloud Architecture",
    tagline: "High-performance, secure server logic",
    description:
      "Building resilient microservices, secure authentication flows, database schemas with MongoDB & PostgreSQL, and serverless logic.",
    icon: "database",
    features: [
      "Role-based access control & JWT authentication",
      "Database design, indexing & ORM optimization",
      "Third-party API & webhook integrations",
    ],
    gradient: "from-indigo-600 to-purple-600",
  },
  {
    id: "performance-seo",
    title: "Performance & SEO Optimization",
    tagline: "Lightning-fast page speeds (90+ PageSpeed)",
    description:
      "Fine-tuning Core Web Vitals, optimizing bundle sizes, implementing SSR/SSG caching, and maximizing search engine discoverability.",
    icon: "zap",
    features: [
      "90+ Google PageSpeed & Lighthouse scores",
      "SEO metadata, OpenGraph tags & sitemaps",
      "Image compression, lazy loading & asset caching",
    ],
    gradient: "from-purple-600 to-pink-600",
  },
  {
    id: "healthcare-biz",
    title: "Healthcare & Digital Solutions",
    tagline: "Tailored portals for clinics & businesses",
    description:
      "Crafting high-converting digital portals for healthcare professionals and local businesses through Kolors Digital Services.",
    icon: "shield",
    features: [
      "Appointment booking & patient contact systems",
      "WhatsApp Business API messaging workflows",
      "Clean, accessible, HIPAA/compliant UI layouts",
    ],
    gradient: "from-blue-600 to-cyan-600",
  },
];
