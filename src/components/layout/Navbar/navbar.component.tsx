"use client";
import { useMediaQuery } from "@/shared/hooks";
import { motion } from "framer-motion";
import React from "react";
import { NavbarContext } from "./context/navbar.context";
import { Menu } from "./custom/Menu/menu.component";
import { ToggleIcon } from "./custom/ToggleIcon/toggle-icon.component";
import { BASE_MENU_OPTIONS } from "./navbar.constants";

export const Navbar: React.FC = () => {
  const isLgScreen = useMediaQuery("lg");

  const { isHamburguerMenuOpen, setIsHamburguerMenuOpen } =
    React.useContext(NavbarContext);

  const toggleIconPress = React.useCallback(() => {
    setIsHamburguerMenuOpen(!isHamburguerMenuOpen);
  }, [isHamburguerMenuOpen]);

  React.useEffect(() => {
    if (isHamburguerMenuOpen) {
      window.scrollTo({ top: 0, left: 0 });
      document.body.style.position = "fixed";
    }
    return () => {
      document.body.style.position = "unset";
    };
  }, [isHamburguerMenuOpen]);

  return (
    <React.Fragment>
      <nav className="py-10 px-8 flex items-center content-center lg:justify-between absolute z-30 w-screen md:px-32 xl:px-40">
        <div className="z-30">
          <h1 className="text-xl font-extrabold tracking-wide xl:text-[28px] mb-1 cursor-pointer">
            Arthur
            <span className="font-normal ml-2">Fernandez</span>
          </h1>
        </div>
        {isLgScreen ? (
          <ul className="flex gap-8">
            {BASE_MENU_OPTIONS.map((element) => (
              <motion.li
                key={element.label}
                className="cursor-pointer"
                initial={{
                  scale: 1,
                }}
                whileHover={{
                  scale: 1.05,
                }}
              >
                <a href={element.href}>{element.label}</a>
              </motion.li>
            ))}
          </ul>
        ) : (
          <ToggleIcon
            isToggled={isHamburguerMenuOpen}
            onClick={toggleIconPress}
            className="ml-auto"
          />
        )}
      </nav>
      {!isLgScreen && <Menu options={BASE_MENU_OPTIONS} />}
    </React.Fragment>
  );
};
