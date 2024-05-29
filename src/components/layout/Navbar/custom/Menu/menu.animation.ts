import { Variants } from "framer-motion";

export const verticalList: Variants = {
  default: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
  animated: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
};
export const horizontalList: Variants = {
  default: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
  animated: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
};

export const horizontalItem: Variants = {
  default: {
    opacity: 0,
    x: 100,
  },
  animated: {
    opacity: 1,
    x: 0,
  },
};
