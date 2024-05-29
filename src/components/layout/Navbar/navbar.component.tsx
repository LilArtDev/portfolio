"use client";
import React from "react";
import { Menu } from "./custom/Menu/menu.component";
import { ToggleIcon } from "./custom/ToggleIcon/toggle-icon.component";
import { useMediaQuery } from "@/shared/hooks";
import { ListOptionProps } from "./custom/Menu/custom/ListOption/list-option.component";

export const Navbar: React.FC = () => {
  const isLgScreen = useMediaQuery("lg");
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedOptionId, setSelectedOptionId] = React.useState<null | number>(
    null
  );

  const TEMP_OPTIONS: ListOptionProps[] = Array.from(
    { length: 5 },
    (_, index) => ({
      isSelected: selectedOptionId === index,
      label: `Mano_1`,
      onClick: () => console.log("a"),
    })
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
      <nav className="py-10 px-8 flex items-center content-center lg:justify-between absolute z-30 w-screen md:px-32 xl:px-40">
        <div className="z-30">
          <h1 className="text-xl font-extrabold tracking-wide xl:text-[28px] mb-1 cursor-pointer">
            Arthur
            <span className="font-normal ml-2">Fernandez</span>
          </h1>
        </div>
        {isLgScreen ? (
          <ul className="flex gap-8">
            {TEMP_OPTIONS.map((element) => (
              <li key={element.label} className="cursor-pointer">
                <a>{element.label}</a>
              </li>
            ))}
          </ul>
        ) : (
          <ToggleIcon
            isToggled={isOpen}
            onClick={toggleIconPress}
            className="ml-auto"
          />
        )}
      </nav>
      {!isLgScreen && <Menu options={TEMP_OPTIONS} isOpen={isOpen} />}
    </React.Fragment>
  );
};
