import { FaAngular, FaAws, FaGitAlt, FaNpm, FaReact } from "react-icons/fa6";
import {
  SiAzuredevops,
  SiCypress,
  SiDart,
  SiDocker,
  SiDotnet,
  SiExpo,
  SiFigma,
  SiFlutter,
  SiGoogleanalytics,
  SiJest,
  SiJirasoftware,
  SiNestjs,
  SiPostgresql,
  SiSelenium,
  SiStorybook,
  SiTailwindcss,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { TechnologyItemProps } from "./custom/TechnologiesGrid/custom/TechnologyItem/technology-item.component";

export const FAVORITE_FRAMEWORKS: TechnologyItemProps[] = [
  {
    name: "Reactjs",
    icon: FaReact,
    description:
      "Experiência extensa na construção de interfaces de usuário dinâmicas e responsivas com React. Desenvolvi e mantive a segunda versão do aplicativo web PeerBR, focando em melhorias de desempenho e experiência do usuário.",
  },
  {
    name: "React Native",
    icon: FaReact,
    description:
      "Proficiência na criação de aplicações móveis multiplataforma com React Native. Contribuí para o desenvolvimento, implantação e manutenção do aplicativo mobile PeerBR, garantindo uma experiência de usuário perfeita tanto em iOS quanto em Android.",
  },
  {
    name: "Nextjs",
    icon: TbBrandNextjs,
    description:
      "Habilidade na construção de aplicações web renderizadas no servidor e estáticas usando Next.js. Desempenhei um papel fundamental no desenvolvimento da segunda versão do site PeerBR, otimizando para desempenho e SEO.",
  },
  {
    name: "Nestjs",
    icon: SiNestjs,
    description:
      "Experiência na criação de aplicações server-side escaláveis e eficientes com NestJS. Implementei e gerenciei a segunda versão da API REST do PeerBR, integrando-a com PostgreSQL e garantindo um desempenho robusto.",
  },
  {
    name: "Angular",
    icon: FaAngular,
    description:
      "Experiência no desenvolvimento de aplicações web abrangentes usando Angular. Adquiri uma valiosa experiência através de projetos freelancers.",
  },
  {
    name: "Flutter",
    icon: SiFlutter,
    description:
      "Adquiri conhecimentos em Flutter através de cursos e desenvolvimento de aplicações pessoais. Tenho experiência na construção de interfaces de usuário modernas e responsivas, utilizando o Dart para desenvolver aplicativos móveis de alta performance. Além disso, implementei arquitetura clean e modularizada para garantir a manutenção e escalabilidade do código.",
  },
  {
    name: ".NET",
    icon: SiDotnet,
    description:
      "Após fazer um curso de C# na Udemy, passei a utilizar .NET para desenvolver REST APIs, aprimorando minhas habilidades na construção de serviços web eficientes.",
  },
];
export const OTHER_TECHNOLOGIES: TechnologyItemProps[] = [
  {
    name: "Dart",
    icon: SiDart,
    description:
      "Linguagem de programação usada para desenvolver aplicativos web e móveis de alta performance.",
  },
  {
    name: "Jest",
    icon: SiJest,
    description:
      "Framework de testes JavaScript para garantir a correção do código.",
  },
  {
    name: "Storybook",
    icon: SiStorybook,
    description:
      "Explorador de componentes UI para construir e testar componentes em isolamento.",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    description: "Framework CSS utilitário para desenvolvimento rápido de UI.",
  },
  {
    name: "NPM",
    icon: FaNpm,
    description:
      "Gerenciador de pacotes para JavaScript, facilitando a gestão de dependências.",
  },
  {
    name: "Expo",
    icon: SiExpo,
    description:
      "Framework para construção de aplicativos móveis multiplataforma com React Native.",
  },
  {
    name: "Git",
    icon: FaGitAlt,
    description:
      "Sistema de controle de versão para rastreamento de mudanças de código e colaboração.",
  },
  {
    name: "AWS",
    icon: FaAws,
    description:
      "Plataforma de computação em nuvem abrangente que oferece uma variedade de serviços.",
  },
  {
    name: "Docker",
    icon: SiDocker,
    description:
      "Plataforma de conteinerização para desenvolver, enviar e executar aplicações.",
  },
  {
    name: "Postgresql",
    icon: SiPostgresql,
    description:
      "Sistema de banco de dados relacional open-source com recursos avançados.",
  },
  {
    name: "Selenium",
    icon: SiSelenium,
    description:
      "Ferramenta para automação de navegadores web, comumente usada para testar aplicações web.",
  },
  {
    name: "Cypress",
    icon: SiCypress,
    description:
      "Framework de testes end-to-end baseado em JavaScript para aplicações web.",
  },
  {
    name: "GA4",
    icon: SiGoogleanalytics,
    description:
      "Google Analytics 4 para rastreamento e análise de tráfego web e de aplicativos.",
  },
  {
    name: "Figma",
    icon: SiFigma,
    description:
      "Ferramenta de design colaborativo para criar interfaces de usuário e protótipos.",
  },
  {
    name: "Azure",
    icon: SiAzuredevops,
    description:
      "Plataforma de nuvem da Microsoft com serviços para computação, análise, armazenamento e redes.",
  },
  {
    name: "Jira",
    icon: SiJirasoftware,
    description:
      "Ferramenta de gerenciamento de projetos ágeis para planejar, rastrear e gerenciar o desenvolvimento de software.",
  },
];
