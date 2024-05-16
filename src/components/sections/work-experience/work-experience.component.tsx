import React from "react";
import { TimelineItem } from "./custom/TimelineItem/timeline-item.component";
import * as constants from "./work-experience.constants";

export const WorkExperienceSection: React.FC = () => {
  return (
    <section className="w-screen">
      <div className="relative pt-16 px-8 pb-20 md:px-32 md:pt-32  xl:px-40">
        <h1 className="text-[38px] font-bold mb-8 md:mb-16">
          Work
          <br />
          Experience
        </h1>
        <div className="md:flex md:justify-between">
          {constants.WORK_EXPERIENCES_TIMELINE_CONTENT.map((content, index) => (
            <TimelineItem
              key={content.headline}
              displayNumber={index + 1}
              showLoadingBelow={index === constants.LAST_TIMELINE_CONTENT_INDEX}
              {...content}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
