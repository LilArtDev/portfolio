import React from "react";

export interface ListOptionProps {
  label: string;
  href: string;
  onClick?: () => void;
}

export const ListOption: React.FC<ListOptionProps> = ({
  label,
  href,
  onClick,
}) => {
  return (
    <li
      className={"w-fit mt-4 flex flex-col justify-center items-center"}
      onClick={onClick}
    >
      <a href={href} className="text-lg relative">
        <h2 className="">{label}</h2>
      </a>
    </li>
  );
};
