import { FaReact, FaAngular, FaGitAlt, FaAws, FaNpm } from "react-icons/fa6";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiJest,
  SiNestjs,
  SiTailwindcss,
  SiCypress,
  SiSelenium,
  SiGoogleanalytics,
  SiFigma,
  SiDocker,
  SiPostgresql,
  SiStorybook,
  SiExpo,
  SiAzuredevops,
  SiJirasoftware,
} from "react-icons/si";
import { TechnologyItemProps } from "./custom/TechnologiesGrid/custom/TechnologyItem/technology-item.component";

export const FAVORITE_FRAMEWORKS: TechnologyItemProps[] = [
  {
    name: "Reactjs",
    icon: FaReact,
    description:
      "Extensive experience in building dynamic and responsive user interfaces with React. Developed and maintained the second version of the PeerBR web application, focusing on performance and user experience improvements.",
  },
  {
    name: "React Native",
    icon: FaReact,
    description:
      "Proficient in creating cross-platform mobile applications with React Native. Contributed to the development, deployment, and maintenance of the PeerBR mobile app, ensuring a seamless user experience on both iOS and Android.",
  },
  {
    name: "Nextjs",
    icon: TbBrandNextjs,
    description:
      "Skilled in building server-side rendered and static web applications using Next.js. Played a key role in developing the second version of the PeerBR website, optimizing for performance and SEO.",
  },
  {
    name: "Nestjs",
    icon: SiNestjs,
    description:
      "Experienced in creating scalable and efficient server-side applications with NestJS. Implemented and managed the second version of the PeerBR REST API, integrating it with PostgreSQL and ensuring robust performance.",
  },
  {
    name: "Angular",
    icon: FaAngular,
    description:
      "Background in developing comprehensive web applications using Angular. Gained valuable experience through freelancing projects, delivering high-quality and maintainable code to clients.",
  },
];
export const OTHER_TECHNOLOGIES: TechnologyItemProps[] = [
  {
    name: "Jest",
    icon: SiJest,
    description: "JavaScript testing framework for ensuring code correctness.",
  },
  {
    name: "Storybook",
    icon: SiStorybook,
    description:
      "UI component explorer for building and testing components in isolation.",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    description: "Utility-first CSS framework for rapid UI development.",
  },
  {
    name: "NPM",
    icon: FaNpm,
    description:
      "Package manager for JavaScript, enabling easy management of dependencies.",
  },
  {
    name: "Expo",
    icon: SiExpo,
    description:
      "Framework for building cross-platform mobile apps with React Native.",
  },
  {
    name: "Git",
    icon: FaGitAlt,
    description:
      "Version control system for tracking code changes and collaboration.",
  },
  {
    name: "AWS",
    icon: FaAws,
    description:
      "Comprehensive cloud computing platform offering a variety of services.",
  },
  {
    name: "Docker",
    icon: SiDocker,
    description:
      "Containerization platform for developing, shipping, and running applications.",
  },
  {
    name: "Postgresql",
    icon: SiPostgresql,
    description:
      "Open-source relational database system with advanced features.",
  },
  {
    name: "Selenium",
    icon: SiSelenium,
    description:
      "Tool for automating web browsers, commonly used for testing web applications.",
  },
  {
    name: "Cypress",
    icon: SiCypress,
    description:
      "JavaScript-based end-to-end testing framework for web applications.",
  },
  {
    name: "GA4",
    icon: SiGoogleanalytics,
    description:
      "Google Analytics 4 for tracking and analyzing web and app traffic.",
  },
  {
    name: "Figma",
    icon: SiFigma,
    description:
      "Collaborative design tool for creating user interfaces and prototypes.",
  },
  {
    name: "Azure",
    icon: SiAzuredevops,
    description:
      "Microsoft's cloud platform offering a range of services for computing, analytics, storage, and networking.",
  },
  {
    name: "Jira",
    icon: SiJirasoftware,
    description:
      "Agile project management tool for planning, tracking, and managing software development.",
  },
];
