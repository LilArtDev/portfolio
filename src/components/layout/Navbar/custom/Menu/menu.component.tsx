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
  options: ListOptionProps[];
}

export const Menu: React.FC<MenuProps> = ({ isOpen, options }) => {
  const SOCIAL_OPTIONS: {
    icon: IconType;
    href: string;
    alt: string;
  }[] = [
    {
      icon: IoLogoGithub,
      href: "https://github.com/LilArtDev",
      alt: "Github",
    },
    {
      icon: FaLinkedinIn,
      href: "https://www.linkedin.com/in/lilart/",
      alt: "LinkedIn",
    },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/arttie_e",
      alt: "Instagram",
    },
  ];

  return (
    <MobileOverlay isVisible={isOpen}>
      <motion.ul
        className="mt-[15vh] px-8 w-full flex flex-col justify-center items-center gap-10"
        animate={isOpen ? "animated" : "default"}
        variants={variants.verticalList}
      >
        {options.map((props) => (
          <ListOption {...props} key={props.label} />
        ))}
      </motion.ul>
      <motion.ul
        className="w-full flex  justify-center items-center gap-10 mt-auto mb-12"
        animate={isOpen ? "animated" : "default"}
        variants={variants.horizontalList}
      >
        {SOCIAL_OPTIONS.map(({ icon: Icon, ...props }) => (
          <motion.li key={props.href} variants={variants.horizontalItem}>
            <a {...props} target="_blank">
              <Icon size={27} color="white" />
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </MobileOverlay>
  );
};
