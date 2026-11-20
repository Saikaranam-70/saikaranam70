export interface SkillItem {
  name: string;
  category: "backend" | "frontend" | "database";
  iconName: string;
  color: string;
  bgColor?: string;
}

export const skillsData: SkillItem[] = [
  {
    name: "Java",
    category: "backend",
    iconName: "java",
    color: "#E76F00",
    bgColor: "#FFF4ED",
  },
  {
    name: "Spring Boot",
    category: "backend",
    iconName: "springboot",
    color: "#6DB33F",
    bgColor: "#F0F9EB",
  },
  {
    name: "Python",
    category: "backend",
    iconName: "python",
    color: "#3776AB",
    bgColor: "#EFF6FF",
  },
  {
    name: "Django",
    category: "backend",
    iconName: "django",
    color: "#092E20",
    bgColor: "#EDF7F2",
  },
  {
    name: ".NET",
    category: "backend",
    iconName: "dotnet",
    color: "#512BD4",
    bgColor: "#F5F2FF",
  },
  {
    name: "React",
    category: "frontend",
    iconName: "react",
    color: "#087EA4",
    bgColor: "#EEF9FD",
  },
  {
    name: "Angular",
    category: "frontend",
    iconName: "angular",
    color: "#DD0031",
    bgColor: "#FDF2F4",
  },
  {
    name: "Node.js",
    category: "backend",
    iconName: "nodejs",
    color: "#339933",
    bgColor: "#EFFBF2",
  },
  {
    name: "MongoDB",
    category: "database",
    iconName: "mongodb",
    color: "#47A248",
    bgColor: "#F0FAF0",
  },
  {
    name: "PostgreSQL",
    category: "database",
    iconName: "postgresql",
    color: "#336791",
    bgColor: "#F1F7FC",
  },
];
