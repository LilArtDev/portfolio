"use client";
import React from "react";
import { motion } from "framer-motion";
import * as variants from "./list-option.animation";

export interface ListOptionProps {
  isSelected: boolean;
  label: string;
  href: string;
}

export const ListOption: React.FC<ListOptionProps> = ({
  isSelected,
  label,
  href,
}) => {
  return (
    <motion.li
      className={"w-fit mt-4 flex flex-col justify-center items-center"}
      variants={variants.verticalItem}
    >
      <motion.a
        href={href}
        className="text-lg relative"
        animate={isSelected ? "animated" : "default"}
        variants={variants.label}
      >
        <h2 className="">{label}</h2>
      </motion.a>

      <motion.div
        className="bg-white h-[2px] mt-1"
        animate={isSelected ? "animated" : "default"}
        exit="default"
        variants={variants.underline}
      />
    </motion.li>
  );
};
