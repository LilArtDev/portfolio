import { twMerge } from "tailwind-merge";
import {
  AnimatedRating,
  AnimatedRatingProps,
} from "./custom/AnimatedRating/animated-rating.component";

export interface LenguageLevelProps {
  lenguage: string;
  level: string;
  rating: AnimatedRatingProps["rating"];
  className?: string;
  levelClassName?: string;
}

export const LenguageLevel: React.FC<LenguageLevelProps> = ({
  lenguage,
  level,
  rating,
  className,
  levelClassName,
}) => {
  return (
    <div className={twMerge(className, "mb-10 md:w-[360px]")}>
      <div className="flex justify-start items-end mb-2">
        <p className="text-xl">{lenguage}</p>
        <p
          className={twMerge(
            levelClassName,
            "text-xs  mb-[4px] ml-2"
          )}
        >
          {level}
        </p>
      </div>
      <AnimatedRating rating={rating} />
    </div>
  );
};
