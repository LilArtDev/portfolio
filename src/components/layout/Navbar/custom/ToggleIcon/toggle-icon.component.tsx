"use client";
import React from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import * as variants from "./toggle-icon.animation";

interface ToggleIconProps {
  isToggled: boolean;
  onClick: () => void;
  className?: string;
}

export const ToggleIcon: React.FC<ToggleIconProps> = ({
  isToggled,
  onClick,
  className,
}) => {
  return (
    <div
      className={twMerge(
        "relative w-[25px] h-[30px] flex flex-col justify-center cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      <motion.div
        className="h-[2px] w-[25px] bg-white relative"
        initial="default"
        animate={isToggled ? "animated" : "default"}
        variants={variants.primaryStraight}
      />
      <motion.div
        className="h-[2px] bg-white ml-auto relative"
        initial="default"
        animate={isToggled ? "animated" : "default"}
        variants={variants.secondaryStraight}
      />
    </div>
  );
};
