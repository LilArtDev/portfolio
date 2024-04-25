import { Variants } from "framer-motion";

const DEFAULT_ROTATION = 45;

export const primaryStraight: Variants = {
  default: {
    rotate: 0,
  },
  animated: { rotate: DEFAULT_ROTATION },
};
export const secondaryStraight: Variants = {
  default: {
    rotate: 0,
    width: 15,
    marginTop: 8,
    right: 0,
  },
  animated: {
    rotate: -DEFAULT_ROTATION,
    width: 25,
    marginTop: -2,
    right: 1,
  },
};
