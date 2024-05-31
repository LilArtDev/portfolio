import React from "react";
import { LenguageLevel } from "./custom/LenguageLevel/lenguage-level.component";
import { useMediaQuery } from "@/shared/hooks";

export const LenguagesSection: React.FC = () => {
  const isXlScreen = useMediaQuery("xl");

  return (
    <section
      id="idiomas"
      className="w-screen pt-16 px-8 pb-10 md:px-32 md:pb-32 md:pt-32 xl:px-40"
    >
      <h1 className="text-[38px] font-bold mb-8 md:mb-16">Idiomas</h1>
      <div className="md:flex md:w-full md:justify-between xl:justify-between ">
        <LenguageLevel
          lenguage="Português"
          level="Nativo"
          rating={5}
          className="mb-10"
          levelClassName="text-green-300"
        />
        <LenguageLevel
          lenguage="Inglês"
          level="Intermediário"
          rating={3}
          className="mb-10"
          levelClassName="text-yellow-200"
        />
        {isXlScreen && (
          <React.Fragment>
            <LenguageLevel
              lenguage="Espanhol"
              level="Futuro aprendiz"
              rating={0}
              className="mb-10"
              levelClassName="text-blue-300 "
            />
            <LenguageLevel
              lenguage="Japonês"
              level="Interessado em aprender"
              rating={0}
              className="mb-10"
              levelClassName="text-gray "
            />
          </React.Fragment>
        )}
      </div>
    </section>
  );
};
