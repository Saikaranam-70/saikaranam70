export interface EducationItem {
  institution: string;
  degree: string;
  field: string;
  duration: string;
  score: string;
  location: string;
  highlights: string[];
}

export const educationData: EducationItem[] = [
  {
    institution: "Aditya University",
    degree: "Bachelor of Technology",
    field: "Computer Science & Engineering",
    duration: "2025 – 2028 (3rd Year Student)",
    score: "8.5 CGPA",
    location: "Visakhapatnam, India",
    highlights: [
      "Core Coursework: Data Structures & Algorithms, DBMS, OOP, Web Technologies, Software Engineering",
      "Active participant in technical symposiums, coding hackathons, and collaborative open-source builds",
      "Consistently maintaining a strong academic record (8.5 CGPA) alongside active production freelance projects",
    ],
  },
];

export const certificationsData = [
  {
    title: "Full Stack Web Development",
    issuer: "Aditya Tech Excellence",
    date: "2025",
    skills: "React, Node.js, Express, MongoDB",
  },
  {
    title: "Core Java & Spring Boot Architecture",
    issuer: "Developer Certification Program",
    date: "2025",
    skills: "Java, Spring Boot, REST APIs, JPA",
  },
  {
    title: "Python & Backend Systems",
    issuer: "Software Engineering Guild",
    date: "2024",
    skills: "Python, Django, PostgreSQL, Git",
  },
];
