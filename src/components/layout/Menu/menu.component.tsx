"use client";
import React from "react";
import { ToggleIcon } from "./custom/ToggleIcon/toggle-icon.component";
import { AnimatePresence, motion } from "framer-motion";
import { MobileOverlay } from "./custom/MobileOverlay/mobile-overlay.component";
import {
  ListOption,
  ListOptionProps,
} from "./custom/ListOption/list-option.component";
import { IoLogoGithub } from "react-icons/io5";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { IconType } from "react-icons";

import * as variants from "./menu.animation";

export const Menu: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedOptionId, setSelectedOptionId] = React.useState<null | number>(
    null
  );

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

  React.useEffect(() => {
    if (isOpen) {
      window.scrollTo({ top: 0, left: 0 });
      document.body.style.position = 'fixed';
    }
    return () => {
      document.body.style.position = 'unset';

    };
  }, [isOpen]);

  return (
    <React.Fragment>
      <div className="ml-auto z-30">
        <ToggleIcon onClick={() => setIsOpen(!isOpen)} isToggled={isOpen} />
      </div>
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
    </React.Fragment>
  );
};
