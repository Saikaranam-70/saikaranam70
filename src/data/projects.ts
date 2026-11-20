export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  technologies: string[];
  clientOrOrg?: string;
  metrics?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export const projectsData: ProjectItem[] = [
  {
    id: "dr-rakesh-vamsi",
    title: "Dr. G. Rakesh Vamsi",
    subtitle: "Consultant Urologist & Andrologist (KIMS Hospital, Nellore).",
    description:
      "A high-performance medical practice portal engineered for Dr. G. Rakesh Vamsi with online appointment booking, treatment showcases (ED Management, Penile Implants, Male Infertility, Robotic Urology), video library, and direct WhatsApp patient integration.",
    image: "/assets/project-rakesh-vamsi.jpg",
    technologies: ["Next.js", "React", "Tailwind CSS", "WhatsApp API", "SEO"],
    clientOrOrg: "KIMS Hospital, Nellore",
    metrics: "95+ PageSpeed • 60%+ Inquiries",
    liveUrl: "https://drrakeshvamsi.com",
    githubUrl: "https://github.com/saikaranam/dr-rakesh-vamsi",
    featured: true,
  },
  {
    id: "dr-sahithi-priya",
    title: "Dr. B. Sahithi Priya",
    subtitle: "Endocrine & Oncoplastic Breast Surgeon in Nellore.",
    description:
      "Modern healthcare website for Dr. B. Sahithi Priya (Double Gold Medalist, M.Ch Endocrine Surgery). Features appointment booking, treatment service catalogs, patient education blogs, and responsive doctor-patient communication.",
    image: "/assets/project-sahithi-priya.jpg",
    technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript", "SEO"],
    clientOrOrg: "Endocrine & Breast Oncology",
    metrics: "High-Converting Patient Flow",
    liveUrl: "https://drsahithipriya.com",
    githubUrl: "https://github.com/saikaranam/dr-sahithi-priya",
    featured: true,
  },
  {
    id: "dr-bammidi-sandeep",
    title: "Dr. Bammidi Sandeep",
    subtitle: "The FIRST Cancer Surgeon in Srikakulam & Uddanam Region.",
    description:
      "Comprehensive surgical oncology consultation platform designed and developed by Kolors Digital Services. Brings tertiary cancer care awareness, online consultation booking, and patient recovery resources closer to patients in the region.",
    image: "/assets/project-bammidi-sandeep.jpg",
    technologies: ["Next.js", "React", "Tailwind CSS", "Cloudflare", "SEO"],
    clientOrOrg: "Designed & Developed By Kolors",
    metrics: "Regional Cancer Care Platform",
    liveUrl: "https://drbammidisandeep.com",
    githubUrl: "https://github.com/saikaranam/dr-bammidi-sandeep",
    featured: true,
  },
];
