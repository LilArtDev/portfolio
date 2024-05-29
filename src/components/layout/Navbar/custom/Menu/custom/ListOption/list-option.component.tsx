"use client";
import React from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import * as variants from "./list-option.animation";

export interface ListOptionProps {
  isSelected: boolean;
  label: string;
  onClick?: () => void;
  className?: string;
}

export const ListOption: React.FC<ListOptionProps> = ({
  isSelected,
  className,
  onClick,
  label,
}) => {
  return (
    <motion.li
      className={twMerge(
        className,
        "w-fit mt-4 flex flex-col justify-center items-center"
      )}
      onClick={onClick}
      variants={variants.verticalItem}
    >
      <motion.span
        className="text-lg relative"
        animate={isSelected ? "animated" : "default"}
        variants={variants.label}
      >
        <h2 className="">{label}</h2>
      </motion.span>

      <motion.div
        className="bg-white h-[2px] mt-1"
        animate={isSelected ? "animated" : "default"}
        exit="default"
        variants={variants.underline}
      />
    </motion.li>
  );
};
