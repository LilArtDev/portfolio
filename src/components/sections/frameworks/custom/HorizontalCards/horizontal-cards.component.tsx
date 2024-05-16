"use client";
import React from "react";
import { Variants, motion } from "framer-motion";
import { IconType } from "react-icons";
import * as variants from "./horizontal-cards.animation";
import { twMerge } from "tailwind-merge";

export interface HorizontalCardItem {
  icon: IconType;
  name: string;
}

export interface HorizontalCardsProps {
  items: HorizontalCardItem[];
  className?: string;
}

export const HorizontalCards: React.FC<HorizontalCardsProps> = ({
  items,
  className,
}) => {
  const [selectedId, setSelectedId] = React.useState<string | null>(null);

  return (
    <React.Fragment>
      <motion.ul
        className={twMerge(
          "inline-flex mt-5 overflow-x-scroll w-screen py-5 pl-10 left-0 absolute z-20 no-scrollbar pr-20 md:px-32",
          className
        )}
        initial="default"
        whileInView="animated"
        variants={variants.cardList}
      >
        {items.map(({ name, icon: Icon }) => (
          <motion.div
            onClick={() => setSelectedId(name)}
            viewport={{ once: true, amount: 0.8 }}
            variants={variants.cardVariants}
            initial="default"
            animate={name === selectedId ? ["focused", "focused2"] : "animated"}
            key={name}
            className="flex flex-col h-32 w-32 bg-white justify-center items-center text-[42px] shrink-0 rounded-md border-2 border-violet-950 cursor-pointer"
          >
            <motion.span
              variants={variants.iconVariants}
              initial="default"
              animate={name === selectedId ? "animated" : "default"}
              layout
            >
              <Icon className="text-violet-950" size={50} />
            </motion.span>
            <motion.p
              className="text-violet-950 font-bold text-[16px] w-[120px] text-center"
              layout
              initial="default"
              animate={name === selectedId ? "animated" : "default"}
              variants={variants.textVariants}
            >
              {name}
            </motion.p>
          </motion.div>
        ))}
      </motion.ul>
    </React.Fragment>
  );
};
