"use client";
import React from "react";
import { ParallaxText } from "@/components/layout/ParalaxText/paralax.component";
import { HorizontalCards } from "./custom/HorizontalCards/horizontal-cards.component";
import * as constants from "./frameworks.constants";
import { TechnologiesGrid } from "./custom/TechnologiesGrid/technologies-grid.component";
import { FrameworksGrid } from "./custom/FrameworksGrid/frameworks-grid.component";

export const FrameworksSection: React.FC = () => {

  return (
    <div className="bg-gradient-to-b from-violet-950 from-40% to-trasparent  border-t-[5px] border-t-">
      <section className=" w-screen h-[450px] relative md:h-[600px] xl:h-fit xl:pb-16">
        <ParallaxText
          baseVelocity={5}
          text="Frameworks"
          clasName="absolute h-full w-screen top-0 left-0 opacity-5 select-none xl:hidden"
        />
        <div className="static pt-16 px-8 overflow-hidden md:px-32 md:pt-32 xl:px-40">
          <h1 className="text-[38px] font-bold mb-5 xl:mb-20">
            My Favorite <br className="xl:hidden " /> Frameworks
          </h1>
          <HorizontalCards
            items={constants.FAVORITE_FRAMEWORKS}
            className="xl:hidden"
          />
          <FrameworksGrid
            items={constants.FAVORITE_FRAMEWORKS}
            className="hidden xl:grid"
          />
        </div>
      </section>
      <section className=" w-screen h-[450px] relative md:h-[600px]  xl:h-fit xl:pb-16">
        <ParallaxText
          baseVelocity={10}
          text="Technologies"
          clasName="absolute h-full w-screen top-0 left-0 opacity-5 select-none xl:hidden"
        />
        <div className="static pt-16 px-8 overflow-hidden md:px-32 md:pt-32  xl:px-40">
          <h1 className="text-[38px] font-bold mb-5 xl:mb-20">
            Other <br className="xl:hidden" /> Technologies
          </h1>
          <HorizontalCards
            items={constants.OTHER_TECHNOLOGIES}
            className="xl:hidden"
          />
          <TechnologiesGrid
            items={constants.OTHER_TECHNOLOGIES}
            className="hidden xl:grid"
          />
        </div>
      </section>
    </div>
  );
};
