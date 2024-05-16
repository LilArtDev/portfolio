"use client";
import React from "react";
import { Menu } from "./custom/Menu/menu.component";
import { ToggleIcon } from "./custom/ToggleIcon/toggle-icon.component";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedOptionId, setSelectedOptionId] = React.useState<null | number>(
    null
  );

  const toggleIconPress = React.useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  React.useEffect(() => {
    if (isOpen) {
      window.scrollTo({ top: 0, left: 0 });
      document.body.style.position = "fixed";
    }
    return () => {
      document.body.style.position = "unset";
    };
  }, [isOpen]);

  return (
    <React.Fragment>
      <nav className="py-10 px-8 flex flex-wrap content-center absolute z-30 w-screen md:px-32 xl:px-40">
        <div className="z-30">
          <h1 className="text-xl font-extrabold tracking-wide">
            Arthur
            <span className="font-normal ml-2">Fernandez</span>
          </h1>
        </div>
        <ToggleIcon
          isToggled={isOpen}
          onClick={toggleIconPress}
          className="ml-auto"
        />
      </nav>
      <Menu
        isOpen={isOpen}
        selectedOptionId={selectedOptionId}
        setSelectedOptionId={setSelectedOptionId}
      />
    </React.Fragment>
  );
};
