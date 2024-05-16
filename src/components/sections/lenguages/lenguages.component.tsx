import React from "react";
import { LenguageLevel } from "./custom/LenguageLevel/lenguage-level.component";

export const LenguagesSection: React.FC = () => {
  return (
    <section className="w-screen pt-16 px-8 pb-10 md:px-32 md:pb-32 md:pt-32 xl:px-40">
      <h1 className="text-[38px] font-bold mb-8 md:mb-16">Lenguages</h1>
      <div className="md:flex md:w-full md:justify-between xl:justify-between ">
        <LenguageLevel
          lenguage="Portuguese"
          level="Native"
          rating={5}
          className="mb-10"
          levelClassName="text-green-300"
        />
        <LenguageLevel
          lenguage="English"
          level="Intermediate"
          rating={3}
          className="mb-10"
          levelClassName="text-yellow-200"
        />
        <LenguageLevel
          lenguage="Spanish"
          level="Future Learning"
          rating={0}
          className="mb-10"
          levelClassName="text-blue-300 hidden xl:block"
        />
        <LenguageLevel
          lenguage="Japanese"
          level="Interested in Learning"
          rating={0}
          className="mb-10"
          levelClassName="text-gray hidden xl:block"
        />
      </div>
    </section>
  );
};
