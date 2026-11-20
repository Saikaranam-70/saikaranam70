export interface StatItem {
  id: string;
  value: string;
  label: string;
  icon: "code" | "briefcase" | "trophy" | "users";
  color: string;
}

export const statsData: StatItem[] = [
  {
    id: "projects",
    value: "5+",
    label: "Projects",
    icon: "code",
    color: "#2563EB",
  },
  {
    id: "experience",
    value: "1+ Year",
    label: "Experience",
    icon: "briefcase",
    color: "#7C3AED",
  },
  {
    id: "cgpa",
    value: "8.5",
    label: "CGPA",
    icon: "trophy",
    color: "#4F46E5",
  },
  {
    id: "dedication",
    value: "100%",
    label: "Dedication",
    icon: "users",
    color: "#4F46E5",
  },
];
