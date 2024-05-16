"use client";
import React from "react";
import { Variants, motion } from "framer-motion";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";
import {
  TechnologyItem,
  TechnologyItemProps,
} from "./custom/TechnologyItem/technology-item.component";

export interface TechnologiesGridProps {
  items: TechnologyItemProps[];
  className?: string;
}

export const TechnologiesGrid: React.FC<TechnologiesGridProps> = ({
  items,
  className,
}) => {
  return (
    <React.Fragment>
      <motion.ul
        className={twMerge(
          className,
          "xl:grid grid-cols-4 gap-8 max-w-[1500px]"
        )}
        // initial="default"
        // whileInView="animated"
      >
        {items.map((item, index) => (
          <TechnologyItem key={item.name} {...item} index={index}/>
        ))}
      </motion.ul>
    </React.Fragment>
  );
};
