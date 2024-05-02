"use client";
import React from "react";
import { Variants, motion } from "framer-motion";

const textVariants: Variants = {
  default: {
    opacity: 0,
    y: 15,
  },
  animated: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.1,
      delay: 0.5,
    },
  },
};

const iconVariants: Variants = {
  default: {
    scale: 1.3,
    y: 15,
  },
  animated: {
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.1,
      delay: 0.5,
    },
  },
};

const cardVariants: Variants = {
  default: {
    x: 500,
    rotate: -0,
  },
  animated: {
    x: 0,
    y: 0,
    zIndex: 20,
    rotate: -10,
    width: 80,
    transition: {
      type: "spring",
      bounce: 0.1,
      duration: 0.8,
    },
  },
  focused: {
    position: "relative",
    zIndex: 21,
    x: 0,
    y: -20,
    transition: {
      duration: 0.2,
    },
  },
  focused2: {
    width: 140,
    transition: {
      delay: 0.2,
    },
  },
};

export const cardList: Variants = {
  default: {
    transition: {
      when: "afterChildren",
    },
  },
  animated: {
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
};

export const Frameworks: React.FC = () => {
  const [selectedId, setSelectedId] = React.useState<string | null>(null);
  const food: string[] = ["🍅", "🍊", "🍋", "🍐", "🍏", "🫐", "🍆", "🍇"];

  return (
    <React.Fragment>
      <motion.ul
        className="inline-flex mt-5 overflow-x-scroll w-screen py-5 pl-10 left-0 absolute z-20 no-scrollbar pr-20"
        initial="default"
        whileInView="animated"
        variants={cardList}
      >
        {food.map((food) => (
            <motion.div
              onClick={() => setSelectedId(food)}
              viewport={{ once: true, amount: 0.8 }}
              variants={cardVariants}
              initial="default"
              animate={
                food === selectedId ? ["focused", "focused2"] : "animated"
              }
              key={food}
              className="flex flex-col h-32 w-32 bg-white justify-center items-center text-[42px] shrink-0 rounded-md border-2 border-violet-950"
            >
              <motion.span
                variants={iconVariants}
                initial="default"
                animate={food === selectedId ? "animated" : "default"}
                layout
              >
                {food}
              </motion.span>
              <motion.p
                className="text-violet-950 font-bold text-[18px]"
                layout
                initial="default"
                animate={food === selectedId ? "animated" : "default"}
                variants={textVariants}
              >
                Teste
              </motion.p>
            </motion.div>
        ))}
      </motion.ul>
    </React.Fragment>
  );
};
