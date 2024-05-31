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
import { SOCIAL_OPTIONS } from "./menu.constants";
import { NavbarContext } from "../../context/navbar.context";

export interface MenuProps {
  options: ListOptionProps[];
}

export const Menu: React.FC<MenuProps> = ({ options }) => {
  const { isHamburguerMenuOpen, setIsHamburguerMenuOpen } =
    React.useContext(NavbarContext);

  return (
    <MobileOverlay isVisible={isHamburguerMenuOpen}>
      <motion.ul
        className="mt-[15vh] px-8 w-full flex flex-col justify-center items-center gap-10"
        animate={isHamburguerMenuOpen ? "animated" : "default"}
        variants={variants.verticalList}
      >
        {options.map((props) => (
          <ListOption
            {...props}
            key={props.label}
            onClick={() => setIsHamburguerMenuOpen(false)}
          />
        ))}
      </motion.ul>
      <motion.ul
        className="w-full flex  justify-center items-center gap-10 mt-auto mb-12"
        animate={isHamburguerMenuOpen ? "animated" : "default"}
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
