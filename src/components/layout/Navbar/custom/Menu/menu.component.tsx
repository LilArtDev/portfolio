"use client";
import { motion } from "framer-motion";
import React from "react";

import { NavbarContext } from "../../context/navbar.context";
import { DownloadCVButton } from "../DownloadCvButton/download-cv-button.component";
import {
  ListOption,
  ListOptionProps,
} from "./custom/ListOption/list-option.component";
import { MobileOverlay } from "./custom/MobileOverlay/mobile-overlay.component";
import * as variants from "./menu.animation";
import { SOCIAL_OPTIONS } from "./menu.constants";

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
        <DownloadCVButton />
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
