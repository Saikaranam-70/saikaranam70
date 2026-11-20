import React from "react";

interface TechIconProps {
  name: string;
  className?: string;
  size?: number;
}

export const TechIcon: React.FC<TechIconProps> = ({ name, className = "", size = 32 }) => {
  const normalized = name.toLowerCase();

  switch (normalized) {
    case "java":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          {/* Java cup and steam */}
          <path
            d="M10 9C12 7 13.5 5.5 12 4C14 5 14.5 7.5 12.5 9.5"
            stroke="#E76F00"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M15 9.5C17.5 7.5 19 6 17.5 4.5C19.5 5.5 20 8 18 10"
            stroke="#EA2D2E"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M20 9C21.5 7.5 22.5 6.5 21.5 5.5C23 6.2 23.5 8 22 9.5"
            stroke="#E76F00"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M7 13H21C21 17.5 18 20 14 20C10 20 7 17.5 7 13Z"
            fill="#5382A1"
          />
          <path
            d="M21 14C23 14 24.5 15 24.5 16.5C24.5 18 23 19 21 19"
            stroke="#5382A1"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M6 23C10 24.5 18 24.5 22 23"
            stroke="#E76F00"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="M8 26C11 27 17 27 20 26"
            stroke="#5382A1"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );

    case "springboot":
    case "spring boot":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          {/* Spring Boot Leaf */}
          <circle cx="16" cy="16" r="14" fill="#F0FDF4" />
          <path
            d="M22.5 9.5C18 9 12 12.5 10 17C9 19.5 9.5 22 11 23.5C12.5 25 15 25.5 17.5 24.5C22 22.5 25.5 16.5 25 12C24.8 10.5 23.8 9.7 22.5 9.5Z"
            fill="#6DB33F"
          />
          <path
            d="M11 23.5C15 21 18.5 16.5 21 12"
            stroke="#FFFFFF"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );

    case "python":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          {/* Python dual snakes */}
          <path
            d="M15.8 4C11.5 4 10.3 5.8 10.3 7.6V9.8H16V10.6H8.2C6.4 10.6 5 12.2 5 14.5C5 17.1 6.3 18.5 8.2 18.5H10V16.3C10 14 11.9 12.2 14.2 12.2H18.2C19.7 12.2 21 10.9 21 9.4V6.7C21 5.2 19.7 4 15.8 4ZM13.3 6C13.9 6 14.4 6.5 14.4 7.1C14.4 7.7 13.9 8.2 13.3 8.2C12.7 8.2 12.2 7.7 12.2 7.1C12.2 6.5 12.7 6 13.3 6Z"
            fill="#3776AB"
          />
          <path
            d="M16.2 28C20.5 28 21.7 26.2 21.7 24.4V22.2H16V21.4H23.8C25.6 21.4 27 19.8 27 17.5C27 14.9 25.7 13.5 23.8 13.5H22V15.7C22 18 20.1 19.8 17.8 19.8H13.8C12.3 19.8 11 21.1 11 22.6V25.3C11 26.8 12.3 28 16.2 28ZM18.7 26C18.1 26 17.6 25.5 17.6 24.9C17.6 24.3 18.1 23.8 18.7 23.8C19.3 23.8 19.8 24.3 19.8 24.9C19.8 25.5 19.3 26 18.7 26Z"
            fill="#FFD43B"
          />
        </svg>
      );

    case "django":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          {/* Django dj badge */}
          <rect width="32" height="32" rx="8" fill="#092E20" />
          <path
            d="M17.5 7H20.5V21.5C20.5 24.5 19 25.8 16.5 25.8C15 25.8 13.8 25.3 13.2 24.7L14.4 22.4C14.8 22.8 15.5 23.1 16.2 23.1C17.2 23.1 17.5 22.3 17.5 21V7Z"
            fill="white"
          />
          <path
            d="M13.5 14.5V17C13 16.7 12.3 16.5 11.6 16.5C9.8 16.5 8.7 17.9 8.7 19.9C8.7 21.9 9.8 23.2 11.6 23.2C12.3 23.2 13 23 13.5 22.7V25C12.8 25.5 11.7 25.8 10.6 25.8C7.5 25.8 5.7 23.6 5.7 19.9C5.7 16.2 7.7 14 10.8 14C11.8 14 12.8 14.2 13.5 14.5Z"
            fill="white"
          />
        </svg>
      );

    case ".net":
    case "dotnet":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          {/* .NET purple badge */}
          <rect width="32" height="32" rx="8" fill="#512BD4" />
          <circle cx="9" cy="22" r="2" fill="white" />
          <path
            d="M13 10H15.5L19.5 17.5V10H22V22H19.5L15.5 14.5V22H13V10Z"
            fill="white"
          />
        </svg>
      );

    case "react":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          {/* React atom */}
          <circle cx="16" cy="16" r="2.8" fill="#087EA4" />
          <ellipse
            cx="16"
            cy="16"
            rx="11"
            ry="4.5"
            stroke="#087EA4"
            strokeWidth="1.8"
          />
          <ellipse
            cx="16"
            cy="16"
            rx="11"
            ry="4.5"
            transform="rotate(60 16 16)"
            stroke="#087EA4"
            strokeWidth="1.8"
          />
          <ellipse
            cx="16"
            cy="16"
            rx="11"
            ry="4.5"
            transform="rotate(120 16 16)"
            stroke="#087EA4"
            strokeWidth="1.8"
          />
        </svg>
      );

    case "angular":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          {/* Angular Shield */}
          <path
            d="M16 4L5 8L6.8 22.5L16 28L25.2 22.5L27 8L16 4Z"
            fill="#DD0031"
          />
          <path
            d="M16 4V28L25.2 22.5L27 8L16 4Z"
            fill="#C3002F"
          />
          <path
            d="M16 8L10 21.5H12.5L13.8 18.5H18.2L19.5 21.5H22L16 8ZM14.8 16.2L16 13.2L17.2 16.2H14.8Z"
            fill="white"
          />
        </svg>
      );

    case "nodejs":
    case "node.js":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          {/* Node.js Hexagon */}
          <path
            d="M16 4L26 9.8V22.2L16 28L6 22.2V9.8L16 4Z"
            fill="#339933"
          />
          <path
            d="M16 7L23.5 11.3V20.7L16 25L8.5 20.7V11.3L16 7Z"
            fill="#215732"
          />
          <path
            d="M16 10L19.5 12V18L16 20L12.5 18V12L16 10Z"
            fill="#689F38"
          />
          <path
            d="M14 13.5V17L16 18L18 17V14.5"
            stroke="white"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );

    case "mongodb":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          {/* MongoDB leaf */}
          <path
            d="M16 3C15.5 5 11 9 11 16C11 22 15 26.5 16 29C17 26.5 21 22 21 16C21 9 16.5 5 16 3Z"
            fill="#47A248"
          />
          <path
            d="M16 3V29C17 26.5 21 22 21 16C21 9 16.5 5 16 3Z"
            fill="#3FA037"
          />
          <path
            d="M16 10V26"
            stroke="#A0D468"
            strokeWidth="1.2"
          />
        </svg>
      );

    case "postgresql":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          {/* PostgreSQL Elephant */}
          <circle cx="16" cy="16" r="14" fill="#EBF4FA" />
          <path
            d="M23 13C23 10 20.5 8 17 8C13 8 10 11 10 15C10 19 12 21 14 21.5L14 24C14 24.5 14.5 25 15 25H16.5L16.5 21.8C18.5 21.6 20 20.5 21 19C22 17.5 23 15 23 13Z"
            fill="#336791"
          />
          <path
            d="M10 15C10 13 8.5 12 7.5 12C6.5 12 6 12.8 6 13.5C6 15 7.5 16.5 9 17L10 15Z"
            fill="#336791"
          />
          <circle cx="15.5" cy="12.5" r="1.2" fill="white" />
        </svg>
      );

    default:
      return (
        <div
          className={`flex items-center justify-center font-bold text-sm bg-indigo-50 text-indigo-600 rounded-lg ${className}`}
          style={{ width: size, height: size }}
        >
          {name.slice(0, 2).toUpperCase()}
        </div>
      );
  }
};
