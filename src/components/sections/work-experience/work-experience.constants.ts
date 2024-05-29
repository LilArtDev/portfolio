import { TimelineItemProps } from "./custom/TimelineItem/timeline-item.component";

export const WORK_EXPERIENCES_TIMELINE_CONTENT: Pick<
  TimelineItemProps,
  "headline" | "title" | "description"
>[] = [
  {
    headline: "2021 - 2024",
    title: "FullStack Developer",
    description:
      "At PeerBR, I played a crucial role in developing and maintaining multiple versions of web and mobile applications. I participated intensively in the creation of the second version of the PeerBR web app using React, Axios, Styled Components, and Jest, ensuring enhanced performance and user experience. I also contributed significantly to the first version of the mobile app in React Native, Redux, and Expo/EAS, focusing on seamless cross-platform functionality. On the backend, I implemented and administered the second version of the REST API with NestJS and PostgreSQL, integrating robust features and ensuring efficient data management. My work with AWS services, including EC2, ECS, S3, and Docker, facilitated smooth deployments and reliable infrastructure.",
  },
];

export const LAST_TIMELINE_CONTENT_INDEX =
  WORK_EXPERIENCES_TIMELINE_CONTENT.length - 1;
