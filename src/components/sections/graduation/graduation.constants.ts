import { TimelineItemProps } from "./custom/TimelineItem/timeline-item.component";

export const GRADUATION_TIMELINE_CONTENT: Pick<
  TimelineItemProps,
  "headline" | "title" | "description"
>[] = [
  {
    headline: "2017 - 2019",
    title: "Etec Sapopemba",
    description:
      "I completed my technical education in Informatics at ETEC Sapopemba, where I built a strong foundation in programming and database management. During the course, I learned the basics of programming, including key concepts and practices essential for software development. I also gained hands-on experience with database systems, understanding how to design, implement, and manage databases effectively. This education provided me with the fundamental skills necessary to pursue a career in technology and laid the groundwork for my continued learning and professional growth.",
  },
  {
    headline: "2023 - 2024",
    title: "FIAP",
    description:
      "I am currently pursuing a degree in Systems Analysis and Development at FIAP, where I am gaining comprehensive knowledge and hands-on experience in various aspects of modern software development. My education includes Agile methodologies, enabling me to work efficiently in collaborative and dynamic environments. I am learning to develop REST APIs using Java Spring and becoming proficient in SQL for database management. Additionally, I am acquiring skills in Docker for containerization, Oracle databases, and UX/UI design principles. The course also covers mobile development for both Android and iOS, web development with Bootstrap, and DevOps practices, equipping me with a versatile skill set for tackling diverse technology projects.",
  },
];

export const LAST_TIMELINE_CONTENT_INDEX =
  GRADUATION_TIMELINE_CONTENT.length - 1;
