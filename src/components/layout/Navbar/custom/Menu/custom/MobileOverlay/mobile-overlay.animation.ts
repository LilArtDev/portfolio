import { Variants } from "framer-motion";

export const backgroundOverlay: Variants = {
  default: {
    x: "100vw",
    transition: {
      delay: 0.15,
      bounce: 0,
    },
  },
  animated: {
    x: 0,
    transition: {
      bounce: 0,
    },
  },
};
export const primaryOverlay: Variants = {
  default: {
    x: "100vw",
    transition: {
      bounce: 0,
    },
  },
  animated: {
    x: 0,
    transition: {
      delay: 0.15,
      bounce: 0,
    },
  },
};
