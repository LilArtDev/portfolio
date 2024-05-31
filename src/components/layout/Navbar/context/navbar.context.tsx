"use client";

import React, { createContext, useState, useEffect, ReactNode } from "react";

interface NavbarContextProps {
  isHamburguerMenuOpen: boolean;
  setIsHamburguerMenuOpen: (isOpen: boolean) => void;
}

const defaultState: NavbarContextProps = {
  isHamburguerMenuOpen: false,
  setIsHamburguerMenuOpen: () => {},
};

export const NavbarContext = createContext<NavbarContextProps>(defaultState);

interface NavbarProviderProps {
  children: ReactNode;
}

export const NavbarProvider: React.FC<NavbarProviderProps> = ({ children }) => {
  const [isHamburguerMenuOpen, setIsHamburguerMenuOpen] =
    useState<boolean>(false);

  return (
    <NavbarContext.Provider
      value={{
        isHamburguerMenuOpen,
        setIsHamburguerMenuOpen,
      }}
    >
      {children}
    </NavbarContext.Provider>
  );
};
