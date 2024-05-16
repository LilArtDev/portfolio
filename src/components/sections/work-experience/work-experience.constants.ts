import { TimelineItemProps } from "./custom/TimelineItem/timeline-item.component";

export const WORK_EXPERIENCES_TIMELINE_CONTENT: Pick<
  TimelineItemProps,
  "headline" | "title" | "description"
>[] = [
  {
    headline: "2021 - 2022",
    title: "Front-end Developer",
    description: "lorem",
  },
  {
    headline: "2022 - 2024",
    title: "FullStack Developer",
    description: "lorem",
  },
];

export const LAST_TIMELINE_CONTENT_INDEX =
  WORK_EXPERIENCES_TIMELINE_CONTENT.length - 1;
