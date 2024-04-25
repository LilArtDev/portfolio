"use client";
import React from "react";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";
import * as variants from "./mobile-overlay.animation";

interface MobileOverlayProps {
  isVisible: boolean;
  className?: string;
}

export const MobileOverlay: React.FC<
  React.PropsWithChildren<MobileOverlayProps>
> = ({ className, isVisible, children }) => {
  return (
    <div className={twMerge(className, "relative -top-10 -right-8 z-10")}>
      <AnimatePresence>
        <motion.div
          className="bg-violet-900 h-screen w-screen z-10 absolute top-0 right-0"
          initial="default"
          animate={isVisible ? "animated" : "default"}
          variants={variants.backgroundOverlay}
        />
        <motion.div
          className="bg-gradient-to-r from-violet-700  to-violet-500/30 h-screen w-screen z-20 absolute top-0 right-0"
          initial="default"
          animate={isVisible ? "animated" : "default"}
          variants={variants.primaryOverlay}
        >
          <motion.div className="h-full w-full flex flex-col justify-center items-center">
            {children}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
