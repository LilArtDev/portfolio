import React from "react";
import { TypeAnimation } from "react-type-animation";

export interface TimelineItemProps {
  displayNumber: number;
  headline: string;
  title: string;
  description: string;
  showLoadingBelow?: boolean;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({
  displayNumber,
  headline,
  title,
  description,
  showLoadingBelow = false,
}) => {
  return (
    <div className="flex flex-row-reverse relative min-h-[360px] md:h-fit md:w-full md:mr-12 pb-10">
      <span className="text-[42px] font-bold mt-4 md:hidden">
        {displayNumber < 10 ? `0${displayNumber}` : displayNumber}
      </span>
      <div className="bg-teal-900 h-[85%] w-[2px] absolute right-[16px] top-[80px] md:hidden" />
      <div className="ml-5 md:ml-0 md:w-full">
        <span className="text-sm text-teal-400">{headline}</span>
        <h2 className="text-[32px] font-semibold leading-8 mb-4 max-w-[200px]">{title}</h2>
        <p>{description}</p>
      </div>
      {showLoadingBelow && (
        <span className="text-lg absolute right-0 -bottom-10 md:hidden">
          <TypeAnimation
            sequence={["Loading...", 1000, "", 100]}
            wrapper="span"
            speed={40}
            repeat={Infinity}
          />
        </span>
      )}
    </div>
  );
};
