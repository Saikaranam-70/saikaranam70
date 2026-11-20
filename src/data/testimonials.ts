export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  companyOrOrg: string;
  avatarText: string;
  content: string;
  rating: number;
  badge: string;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: "dr-rakesh-vamsi",
    name: "Dr. G. Rakesh Vamsi",
    role: "Consultant Urologist & Andrologist",
    companyOrOrg: "KIMS Hospital, Nellore",
    avatarText: "RV",
    content:
    "Sai and Kolors Digital Services delivered our medical portal with exceptional craftsmanship. The site loads instantly with 95+ PageSpeed, patients find treatment information and appointment booking seamless, and our online patient inquiries increased by over 60%.",
    rating: 5,
    badge: "Verified Client Partner",
  },
  {
    id: "dr-bammidi-sandeep",
    name: "Dr. Bammidi Sandeep",
    role: "First Cancer Surgeon in Srikakulam",
    companyOrOrg: "Surgical Oncology Practice",
    avatarText: "BS",
    content:
      "Kolors built a dedicated digital platform that truly bridges the gap between tertiary cancer care and patients in the Srikakulam and Uddanam regions. Sai's attention to performance, clarity, and compassionate UX made all the difference.",
    rating: 5,
    badge: "Healthcare Client",
  },
  {
    id: "bhuma-lead",
    name: "Engineering Team",
    role: "Technical Lead",
    companyOrOrg: "Bhuma Infotech",
    avatarText: "BI",
    content:
    "During his software developer internship, Sai demonstrated impressive architectural thinking and speed. He adapted rapidly to our production stack, optimized backend API latencies, and collaborated seamlessly with our engineering team.",
    rating: 5,
    badge: "Internship Lead",
  },
];
