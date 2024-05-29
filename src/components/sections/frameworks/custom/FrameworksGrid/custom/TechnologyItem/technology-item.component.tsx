"use client";
import React from "react";
import { AnimatePresence, Variants, motion } from "framer-motion";
import { IconType } from "react-icons";
import * as variants from "./technology-item.animation";
import { twMerge } from "tailwind-merge";
import { FaChevronRight } from "react-icons/fa";
import { HiChevronRight } from "react-icons/hi2";

export interface TechnologyItemProps {
  icon: IconType;
  name: string;
  description: string;
  index?: number;
  showDescription?: boolean;
  onClick: () => void;
}

export const TechnologyItem: React.FC<TechnologyItemProps> = ({
  icon: Icon,
  name,
  description,
  onClick,
  index = 0,
  showDescription = false,
}) => {
  const [isHovering, setIsHovering] = React.useState(false);

  return (
    <React.Fragment>
      <motion.div
        onClick={onClick}
        onHoverStart={() => setIsHovering(true)}
        onHoverEnd={() => setIsHovering(false)}
        className="relative flex h-[400px]"
        initial={{
          paddingRight: 0,
        }}
        animate={
          !showDescription && isHovering
            ? {
                paddingRight: 40,
                transition: { duration: 0.2 },
              }
            : {
                paddingRight: 0,
                transition: { delay: 0.2 },
              }
        }
      >
        <motion.div
          viewport={{ once: true, amount: 0.8 }}
          initial="default"
          key={name}
          className=" h-[400px] w-[280px] cursor-pointer relative overflow-hidden rounded-xl bg-gradient-to-b from-black/30 from-40% to-black/50 z-20"
        >
          <motion.div className="flex flex-col justify-center items-center gap-5 w-full h-full relative">
            <Icon size={30} className="absolute  z-0 top-5 left-5" />
            <Icon size={30} className="absolute  z-0 bottom-5 right-5" />
            <motion.span
              initial={{
                y: 20,
              }}
              animate={
                isHovering || showDescription
                  ? {
                      y: 0,
                    }
                  : {
                      y: 20,
                    }
              }
            >
              <Icon size={140} />
            </motion.span>
            <motion.h4
              className="relative flex items-center text-[18px] font-semibold"
              initial={{
                y: 20,
                opacity: 0,
              }}
              animate={
                isHovering || showDescription
                  ? {
                      y: 0,
                      opacity: 1,
                    }
                  : {
                      y: 20,
                      opacity: 0,
                    }
              }
            >
              {name}
            </motion.h4>
            <Icon
              size={400}
              className="absolute opacity-5 z-0 -right-[150px]"
            />
          </motion.div>
        </motion.div>
        <AnimatePresence>
          {isHovering && !showDescription && (
            <motion.span
              className="absolute -right-[45px] top-0 h-full flex items-center"
              initial={{
                x: -20,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
                transition: {
                  delay: 0.2,
                  duration: 0.2,
                },
              }}
              exit={{
                x: -20,
                opacity: 0,
                transition: {
                  duration: 0.2,
                },
              }}
            >
              <HiChevronRight size={100} className=" cursor-pointer" />
            </motion.span>
          )}
          <motion.div
            className=" bg-black/40 h-[90%] my-auto relative rounded-r-xl"
            initial={{
              width: 0,
            }}
            animate={
              showDescription
                ? {
                    width: 400,
                    transition: {
                      duration: 0.5,
                    },
                  }
                : {
                    width: 0,
                    transition: {
                      delay: 0.5,
                      duration: 0.5,
                    },
                  }
            }
          >
            <motion.p
              className="pl-10 pr-5 pt-10"
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={
                showDescription
                  ? {
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: 0.5,
                        duration: 0.5,
                      },
                    }
                  : {
                      y: 20,
                      opacity: 0,
                      transition: {
                        duration: 0.5,
                      },
                    }
              }
            >
              {description}
            </motion.p>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </React.Fragment>
  );
};
