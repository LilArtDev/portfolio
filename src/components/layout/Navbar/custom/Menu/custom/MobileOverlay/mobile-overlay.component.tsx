"use client";
import { motion } from "framer-motion";
import React from "react";
import * as variants from "./mobile-overlay.animation";

interface MobileOverlayProps {
  isVisible: boolean;
}

export const MobileOverlay: React.FC<
  React.PropsWithChildren<MobileOverlayProps>
> = ({ isVisible, children }) => {
  return (
        <React.Fragment>
          <motion.div
            className="bg-violet-900 h-screen w-screen z-10 absolute top-0 right-0"
            initial="default"
            animate={isVisible ? "animated" : "default"}
            exit='default'
            variants={variants.backgroundOverlay}
          />
          <motion.div
            className="bg-gradient-to-r from-violet-700  to-violet-500/30 h-screen w-screen z-20 absolute top-0 right-0 overflow-hidden"
            initial="default"
            animate={isVisible ? "animated" : "default"}
            exit='default'
            variants={variants.primaryOverlay}
          >
            <motion.div className="h-full w-full flex flex-col justify-center items-center">
              {children}
            </motion.div>
          </motion.div>
        </React.Fragment>
  );
};
