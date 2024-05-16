import { Variants } from "framer-motion";

export const textVariants: Variants = {
  default: {
    opacity: 0,
    y: 15,
  },
  animated: {
    opacity: 1,
    y: 10,
    transition: {
      type: "spring",
      bounce: 0.1,
      delay: 0.5,
    },
  },
};

export const iconVariants: Variants = {
  default: {
    scale: 1.1,
    y: 15,
  },
  animated: {
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.1,
    },
  },
};

export const cardVariants: Variants = {
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
      delay: 0.3,
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
    width: 150,
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
