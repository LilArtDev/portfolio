import { useEffect, useState } from "react";

type Sizes = "sm" | "md" | "lg" | "xl" | "2xl";

export const SCREEN_SIZES: Record<Sizes, string> = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

export const useMediaQuery = (screenSize: Sizes) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const query = `(min-width: ${SCREEN_SIZES[screenSize]})`;
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, screenSize]);

  return matches;
};
