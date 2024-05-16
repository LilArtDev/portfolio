"use client";
import React from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import {
  TechnologyItem,
  TechnologyItemProps,
} from "./custom/TechnologyItem/technology-item.component";

export interface FrameworksGridProps {
  items: Omit<TechnologyItemProps, "showDescription" | "onClick">[];
  className?: string;
}

export const FrameworksGrid: React.FC<FrameworksGridProps> = ({
  items,
  className,
}) => {
  const [clickedId, setClickedId] = React.useState<string | null>(null);

  return (
    <React.Fragment>
      <motion.ul
        className={twMerge(className, "xl:flex  gap-8 max-w-[1500px] overflow-x-scroll overflow-y-hidden no-scrollbar")}
      >
        {items.map((item, index) => (
          <TechnologyItem
            key={item.name}
            {...item}
            index={index}
            showDescription={clickedId === item.name}
            onClick={() =>
              setClickedId(item.name === clickedId ? null : item.name)
            }
          />
        ))}
      </motion.ul>
    </React.Fragment>
  );
};
