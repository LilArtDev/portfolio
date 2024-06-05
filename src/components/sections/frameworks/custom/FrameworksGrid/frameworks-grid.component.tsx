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
  const scrollContainerRef = React.useRef<HTMLUListElement>(null);
  const [clickedId, setClickedId] = React.useState<string | null>(null);

  function handleOnItemClick(itemName: string, index: number) {
    setClickedId(itemName === clickedId ? null : itemName);
    scrollContainerRef.current?.scrollTo({
      left: index * 150,
      behavior: "smooth",
    });
  }

  return (
    <React.Fragment>
      <motion.ul
        ref={scrollContainerRef}
        className={twMerge(
          className,
          "xl:flex w-screen gap-8 overflow-x-scroll overflow-y-hidden no-scrollbar relative -left-40 px-40 pr-[700px]"
        )}
      >
        {items.map((item, index) => (
          <TechnologyItem
            key={item.name}
            {...item}
            index={index}
            showDescription={clickedId === item.name}
            onClick={() => handleOnItemClick(item.name, index)}
          />
        ))}
      </motion.ul>
    </React.Fragment>
  );
};
