"use client";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import ImageSrc from "@/shared/assets/front-end-wallpaper.png";

export const PresentationSection: React.FC = () => {
  return (
    <section className="bg-violet-950/70 w-screen h-screen relative pt-40 xl:py-40 px-8 md:px-32 xl:px-40 overflow-hidden">
      <Image
        src={ImageSrc}
        alt="front-end background image"
        className="hidden xl:block w-screen h-screen absolute top-0 left-0 opacity-20 object-cover select-none -z-10"
      />
      <motion.div
        className="absolute bg-white/10 h-80 w-80 rounded-full bottom-40 -right-28 xl:hidden"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatDelay: 2.5,
        }}
      />
      <motion.div
        className="absolute bg-white/10 h-80 w-80 rounded-full -bottom-20 -left-20 md:left-[unset] md:right-32 xl:hidden"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          delay: 2.5,
          duration: 5,
          repeat: Infinity,
          repeatDelay: 2.5,
        }}
      />
      <div className="xl:flex flex-col justify-center h-full w-full">
        <h1 className="text-[42px] leading-tight md:text-[64px]">
          Desenvolvedor
          <br />
          <span className="font-bold">FullStack</span>
          <motion.span className=" inline-flex">
            {Array.from({ length: 3 }).map((_, index) => {
              return (
                <motion.div
                  className="w-[10px] h-[10px] rounded-full bg-white mx-1"
                  key={`round_${index}`}
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    bounce: 1,
                    delay: index / 10,
                    duration: 0.3,
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                />
              );
            })}
          </motion.span>
        </h1>
        <p className="mt-6 md:text-[18px] md:mt-10 max-w-[600px] xl:text-[21px]">
          Olá! Sou um desenvolvedor com expertise em aplicações web e mobile,
          utilizando tecnologias como React, React Native, NestJS e AWS. Meu
          foco é criar soluções eficientes e centradas no usuário.
        </p>
      </div>
      <div className="section-wave"/>
    </section>
  );
};
