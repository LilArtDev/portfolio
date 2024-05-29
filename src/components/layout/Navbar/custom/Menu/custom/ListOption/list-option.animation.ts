import { Variants } from "framer-motion";

export const underline: Variants = {
  default: {
    width: 0,
  },
  animated: { width: "110%" },
};
export const label: Variants = {
  default: {
    scale: 1,
    bottom: 0,
  },
  animated: {
    scale: 1.1,
    bottom: 2,
  },
};

export const verticalItem: Variants = {
  default: {
    opacity: 0,
    y: 20,
  },
  animated: {
    opacity: 1,
    y: 0,
  },
};