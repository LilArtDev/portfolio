"use client";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  wrap,
} from "framer-motion";
import React, { useEffect } from "react";
import { twMerge } from "tailwind-merge";

interface ParallaxProps {
  text?: string;
  baseVelocity?: number;
  clasName?: string;
}

export const ParallaxText: React.FC<ParallaxProps> = ({
  text = "Paralax",
  baseVelocity = 10,
  clasName,
}) => {
  const [numChildren, setNumChildren] = React.useState<number>(0);

  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLDivElement>(null);
  const baseX = useMotionValue(0);
  const auxiliaryX = useMotionValue(12);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const primaryX = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);
  const secondaryX = useTransform(auxiliaryX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = React.useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
    auxiliaryX.set(auxiliaryX.get() + moveBy);
  });

  React.useEffect(() => {
    if (containerRef.current && scrollerRef.current) {
      const containerHeight = containerRef.current.clientHeight;
      const childHeight = scrollerRef.current.clientHeight;
      const num = Math.floor(containerHeight / childHeight);
      console.log(num);
      setNumChildren(num);
    }
  }, []);

  return (
    <div className={twMerge("parallax-container", clasName)} ref={containerRef}>
      <div className="parallax" ref={scrollerRef}>
        <motion.div className="scroller" style={{ x: primaryX }}>
          {[1, 2, 3, 4].map((key) => (
            <span className="text" key={key}>
              {text}
            </span>
          ))}
        </motion.div>
      </div>
      {Array.from({ length: numChildren }).map((_, scrollerIndex) => (
        <div className="parallax" key={`scroller_${scrollerIndex}`}>
          <motion.div className="scroller" style={{ x: scrollerIndex % 2 === 0 ? secondaryX : primaryX }}>
            {[1, 2, 3, 4].map((key) => (
              <span
                className="text"
                key={`scroller_${scrollerIndex}_span_${key}`}
              >
                {text}
              </span>
            ))}
          </motion.div>
        </div>
      ))}
    </div>
  );
};
