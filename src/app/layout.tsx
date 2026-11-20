import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Caveat } from "next/font/google";
import "./globals.css";

  const jakarta = Plus_Jakarta_Sans({
    subsets: ["latin"],
    variable: "--font-sans",
    display: "swap",
    weight: ["400", "500", "600", "700", "800"],
  });

    const caveat = Caveat({
      subsets: ["latin"],
      variable: "--font-handwriting",
      display: "swap",
      weight: ["500", "600", "700"],
    });

    export const metadata: Metadata = {
      title: "Sai Karanam | Full Stack Developer & Problem Solver",
      description:
        "Portfolio of Sai Karanam — Full Stack Developer & Problem Solver. Building scalable web applications, exploring new technologies, and turning ideas into reality.",
      keywords: [
        "Sai Karanam",
        "Full Stack Developer",
        "Software Engineer",
        "React",
        "Next.js",
        "Java",
        "Spring Boot",
        "Python",
        "Visakhapatnam",
      ],
      authors: [{ name: "Sai Karanam" }],
      creator: "Sai Karanam",
      icons: {
        icon: "/favicon.ico",
      },
      openGraph: {
        title: "Sai Karanam | Full Stack Developer & Problem Solver",
        description:
          "I build scalable web applications, explore new technologies, and turn ideas into reality.",
        url: "https://saikaranam.dev",
        siteName: "Sai Karanam Portfolio",
        type: "website",
      },
    };

    export default function RootLayout({
      children,
    }: {
      children: React.ReactNode;
    }) {
    return(
    <html
      lang = "en"
      className = {`${jakarta.variable} ${caveat.variable} h-full antialiased`}
  >
      <body className="min-h-full flex flex-col bg-white text-[#101432]">
        {children}
      </body>
    </html >
  );
}
