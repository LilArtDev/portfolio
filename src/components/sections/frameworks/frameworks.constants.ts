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
    description: "Description",
  },
  {
    name: "React Native",
    icon: FaReact,
    description: "Description",
  },
  {
    name: "Nextjs",
    icon: TbBrandNextjs,
    description: "Description",
  },
  {
    name: "Nestjs",
    icon: SiNestjs,
    description: "Description",
  },
  {
    name: "Angular",
    icon: FaAngular,
    description: "Description",
  },
];
export const OTHER_TECHNOLOGIES: TechnologyItemProps[] = [
  {
    name: "Jest",
    icon: SiJest,
    description: "Description",
  },
  {
    name: "Storybook",
    icon: SiStorybook,
    description: "Description",
  },

  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    description: "Description",
  },
  {
    name: "NPM",
    icon: FaNpm,
    description: "Description",
  },
  {
    name: "Expo",
    icon: SiExpo,
    description: "Description",
  },
  {
    name: "Git",
    icon: FaGitAlt,
    description: "Description",
  },
  {
    name: "AWS",
    icon: FaAws,
    description: "Description",
  },
  {
    name: "Docker",
    icon: SiDocker,
    description: "Description",
  },
  {
    name: "Postgresql",
    icon: SiPostgresql,
    description: "Description",
  },
  {
    name: "Selenium",
    icon: SiSelenium,
    description: "Description",
  },
  {
    name: "Cypress",
    icon: SiCypress,
    description: "Description",
  },
  {
    name: "GA4",
    icon: SiGoogleanalytics,
    description: "Description",
  },
  {
    name: "Figma",
    icon: SiFigma,
    description: "Description",
  },
  {
    name: "Azure",
    icon: SiAzuredevops,
    description: "Description",
  },
  {
    name: "Jira",
    icon: SiJirasoftware,
    description: "Description",
  },
];
