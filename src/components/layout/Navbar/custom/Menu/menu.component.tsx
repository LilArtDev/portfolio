"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";

import { IoLogoGithub } from "react-icons/io5";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { IconType } from "react-icons";

import * as variants from "./menu.animation";
import {
  ListOption,
  ListOptionProps,
} from "./custom/ListOption/list-option.component";
import { MobileOverlay } from "./custom/MobileOverlay/mobile-overlay.component";

export interface MenuProps {
  isOpen: boolean;
  selectedOptionId: null | number;
  setSelectedOptionId: React.Dispatch<React.SetStateAction<null | number>>;
}

export const Menu: React.FC<MenuProps> = ({
  isOpen,
  selectedOptionId,
  setSelectedOptionId,
}) => {
  const BASE_WORD = "TESTE";

  const TEMP_OPTIONS: ListOptionProps[] = Array.from(
    { length: 5 },
    (_, index) => ({
      isSelected: selectedOptionId === index,
      label: `${BASE_WORD}_${index}`,
      onClick: () => onOptionClick(index),
      listVariants: variants.verticalItem,
    })
  );

  const TEMP_SOCIAL_OPTIONS: {
    icon: IconType;
    href: string;
    alt: string;
  }[] = [
    {
      icon: IoLogoGithub,
      href: "#",
      alt: "Github",
    },
    {
      icon: FaLinkedinIn,
      href: "#",
      alt: "LinkedIn",
    },
    {
      icon: FaInstagram,
      href: "#",
      alt: "Instagram",
    },
  ];

  function onOptionClick(id: number) {
    setSelectedOptionId(id);
  }

  return (
    <MobileOverlay isVisible={isOpen}>
      <motion.ul
        className="mt-[15vh] px-8 w-full flex flex-col justify-center items-center gap-10"
        animate={isOpen ? "animated" : "default"}
        variants={variants.verticalList}
      >
        {TEMP_OPTIONS.map((props) => (
          <ListOption {...props} key={props.label} />
        ))}
      </motion.ul>
      <motion.ul
        className="w-full flex  justify-center items-center gap-10 mt-auto mb-12"
        animate={isOpen ? "animated" : "default"}
        variants={variants.horizontalList}
      >
        {TEMP_SOCIAL_OPTIONS.map(({ icon: Icon, ...props }) => (
          <motion.li
            key={props.href}
            variants={variants.horizontalItem}
          >
            <a {...props}>
              <Icon size={27} color="white" />
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </MobileOverlay>
  );
};
