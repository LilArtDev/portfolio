"use client";
import React from "react";
import { AnimatePresence, Variants, motion } from "framer-motion";
import { IconType } from "react-icons";
import * as variants from "./technology-item.animation";
import { twMerge } from "tailwind-merge";

export interface TechnologyItemProps {
  icon: IconType;
  name: string;
  description: string;
  index?: number;
}

export const TechnologyItem: React.FC<TechnologyItemProps> = ({
  icon: Icon,
  name,
  description,
  index = 0,
}) => {
  const [isHovering, setIsHovering] = React.useState(false);
  return (
    <motion.div
      viewport={{ once: true, amount: 0.8 }}
      //   variants={variants.cardVariants}
      initial="default"
      key={name}
      className=" h-[220px] w-[320px] bg-black/40  rounded-2xl cursor-pointer relative overflow-hidden"
      onHoverStart={() => setIsHovering(true)}
      onHoverEnd={() => setIsHovering(false)}
    >
      <motion.div className="flex flex-col justify-center items-center gap-5 w-full h-full ">
        <Icon size={65} />
        <motion.h4
          className=" font-semibold text-[20px] relative mix-blend-exclusion z-20"
          layoutId={`${name}_title`}
        >
          {name}
        </motion.h4>
      </motion.div>

      <AnimatePresence>
        {isHovering && (
          <React.Fragment>
            <motion.h4
              className="text-violet-950 font-semibold text-[20px] absolute top-12 left-8 z-20"
              transition={{ delay: 1.1 }}
              layoutId={`${name}_title`}
            >
              {name}
            </motion.h4>
            <motion.div
              className=" w-full h-full absolute  top-0 left-0"
              initial={{ y: 600, opacity: 0 }}
              animate={{
                y: [600, 400, 400, 1],
                opacity: [0, 1, 1, 1],
                transition: { bounce: 0, duration: 1.5 },
              }}
              exit={{
                opacity: 0,
                y: 600,
              }}
            >
              <motion.div className="bg-white  w-[250px] h-full wave" />
              <motion.p
                className="relative z-10 py-12 px-8 text-violet-950 mt-[40px]"
                initial={{ y: 10, opacity: 0 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: { delay: 1.5 },
                }}
                exit={{
                  opacity: 0,
                  y: 10,
                }}
              >
                Uma paisagem deslumbrante onde o sol se põe atrás de montanhas
              </motion.p>
            </motion.div>
          </React.Fragment>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
