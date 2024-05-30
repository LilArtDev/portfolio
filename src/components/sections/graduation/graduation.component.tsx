"use client";
import React from "react";
import { TimelineItem } from "./custom/TimelineItem/timeline-item.component";
import * as constants from "./graduation.constants";

export const GraduationSection: React.FC = () => {
  return (
    <section id="escolaridade" className="w-screen">
      <div className="relative pt-2 px-8 pb-4 md:px-32 xl:px-40">
        <h1 className="text-[38px] font-bold mb-8 md:mb-16">Escolaridade</h1>
        <div className="md:flex md:justify-between">
          {constants.GRADUATION_TIMELINE_CONTENT.map((content, index) => (
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
