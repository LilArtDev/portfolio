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
    <div className="flex relative min-h-[360px] h-fit md:w-full md:max-w-[600px] pb-10">
      <span className="text-[42px] font-bold mt-4 md:hidden">
        {displayNumber < 10 ? `0${displayNumber}` : displayNumber}
      </span>
      <div className="bg-violet-900 h-[85%] w-[2px] absolute left-[16px] top-[80px] md:hidden" />
      <div className="ml-5 md:ml-0 w-full">
        <span className="text-sm text-violet-400">{headline}</span>
        <h2 className="text-[32px] font-semibold leading-8 mb-4 max-w-[200px]">{title}</h2>
        <p>{description}</p>
      </div>
      {showLoadingBelow && (
        <span className="text-lg absolute left-0 -bottom-14 md:hidden">
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
