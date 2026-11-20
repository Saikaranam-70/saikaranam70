export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  ariaLabel: string;
}

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/saikaranam", // Replace with your actual GitHub profile
    icon: "github",
    ariaLabel: "Visit Sai Karanam's GitHub profile",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/saikaranam", // Replace with your actual LinkedIn profile
    icon: "linkedin",
    ariaLabel: "Visit Sai Karanam's LinkedIn profile",
  },
  {
    name: "YouTube",
    url: "https://youtube.com/@saikaranam", // Replace with your actual YouTube channel or omit
    icon: "youtube",
    ariaLabel: "Visit Sai Karanam's YouTube channel",
  },
  {
    name: "Email",
    url: "mailto:saikaranam.dev@gmail.com", // Replace with your actual email address
    icon: "mail",
    ariaLabel: "Send an email to Sai Karanam",
  },
];

export const contactDetails = {
  email: "saikaranam.dev@gmail.com",
  location: "Visakhapatnam, India",
  phone: "+91 98765 43210", // Placeholder for user customization
  availability: "Available for Opportunities",
  resumePath: "/assets/Sai_Karanam_Resume.pdf",
};
