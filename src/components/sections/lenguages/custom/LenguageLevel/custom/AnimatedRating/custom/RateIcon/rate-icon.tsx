"use client";
import React from "react";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { RiStarSFill } from "react-icons/ri";
import { twMerge } from "tailwind-merge";

export interface RateIconProps {
  delayFactor?: number;
  shouldActive: boolean;
  className?: string;
  iconSize?: number;
}

export const RateIcon: React.FC<RateIconProps> = ({
  shouldActive,
  className,
  iconSize = 50,
  delayFactor = 0,
}) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  async function myAnimation() {
    await animate(
      scope.current,
      { x: [-20, -4, 0], opacity: [0, 0.08, 0.2] },
      { bounce: 1, delay: delayFactor * 0.15, ease: "easeIn" }
    );
    if (shouldActive) {
      await animate(
        scope.current,
        {
          y: [0, -10, 0],
          scale: [1, 1.2, 1],
          opacity: [0.2, 1, 1],
        },
        { bounce: 1, delay: 0.2, ease: "easeOut" }
      );
    }
  }

  React.useEffect(() => {
    if (isInView) {
      myAnimation();
    }
  }, [isInView]);

  return (
    <motion.span
      className={twMerge(className, "text-yellow-100")}
      ref={scope}
      initial={{
        x: -15,
        opacity: 0,
        y: 0,
      }}
    >
      <RiStarSFill size={iconSize} />
    </motion.span>
  );
};
