import { TimelineItemProps } from "./custom/TimelineItem/timeline-item.component";

export const GRADUATION_TIMELINE_CONTENT: Pick<
  TimelineItemProps,
  "headline" | "title" | "description"
>[] = [
  {
    headline: "2017 - 2019",
    title: "Etec Sapopemba",
    description: `
    Concluí minha formação técnica em Informática na ETEC Sapopemba, onde construí uma base sólida em programação e gestão de banco de dados. Durante o curso, aprendi os fundamentos da programação, incluindo conceitos e práticas essenciais para o desenvolvimento de software. Além disso, adquiri experiência prática com sistemas de banco de dados, compreendendo como projetar, implementar e gerenciar bancos de dados de forma eficaz. Essa formação me proporcionou as habilidades fundamentais necessárias para seguir uma carreira em tecnologia e estabeleceu as bases para meu contínuo aprendizado e crescimento profissional.`,
  },
  {
    headline: "2023 - 2024",
    title: "FIAP",
    description: `Atualmente, estou cursando Análise e Desenvolvimento de Sistemas na FIAP, onde estou adquirindo conhecimentos abrangentes e experiência prática em vários aspectos do desenvolvimento de software moderno. Minha formação inclui metodologias ágeis, permitindo-me trabalhar de forma eficiente em ambientes colaborativos e dinâmicos. Estou aprendendo a desenvolver APIs REST usando Java Spring e me tornando proficiente em SQL para gestão de banco de dados.

      Além disso, estou adquirindo habilidades em Docker para conteinerização, bancos de dados Oracle e princípios de design UX/UI. O curso também abrange desenvolvimento mobile para Android e iOS, desenvolvimento web com Bootstrap e práticas de DevOps, me proporcionando um conjunto de habilidades versáteis para enfrentar diversos projetos tecnológicos.`,
  },
];

export const LAST_TIMELINE_CONTENT_INDEX =
  GRADUATION_TIMELINE_CONTENT.length - 1;
