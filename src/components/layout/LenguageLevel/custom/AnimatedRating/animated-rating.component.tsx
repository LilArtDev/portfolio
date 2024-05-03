"use client";
import React from "react";
import { motion,  } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { RateIcon } from "./custom/RateIcon/rate-icon";

export interface AnimatedRatingProps {
  rating: 1 | 2 | 3 | 4 | 5;
  iconSize?: number;
  wrapperClassName?: string;
  iconsClassName?: string;
}

export const AnimatedRating: React.FC<AnimatedRatingProps> = ({
  rating,
  wrapperClassName,
  iconsClassName,
  iconSize = 50,
}) => {
  return (
    <motion.div className={twMerge(wrapperClassName, "flex")}>
      {Array.from({ length: 5 }).map((_, index) => (
        <RateIcon
          shouldActive={rating >= index + 1}
          key={index}
          delayFactor={index}
          iconSize={iconSize}
          className={iconsClassName}
        />
      ))}
    </motion.div>
  );
};
