"use client";
import { ParallaxText } from "@/components/layout/ParalaxText/paralax.component";
import { Frameworks } from "@/components/sections/frameworks/frameworks.component";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { RiStarSFill } from "react-icons/ri";

export default function Home() {
  return (
    <main>
      <section className="bg-teal-700 w-screen h-screen relative pt-40 px-8 overflow-hidden ">
        <motion.div
          className="absolute bg-white/10 h-80 w-80 rounded-full bottom-40 -right-28 "
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
          className="absolute bg-white/10 h-80 w-80 rounded-full -bottom-20 -left-20"
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
        <h1 className="text-[42px] leading-tight">
          <span className="font-bold">FullStack</span>
          <br />
          Developer
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
        <p className="mt-6">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
          possimus beatae delectus praesentium iusto nam, tenetur, reiciendis
          nobis enim voluptas nesciunt temporibus libero omnis? Maiores, vitae
          ullam. Culpa, asperiores libero?
        </p>
      </section>
      <section className="bg-violet-900 w-screen h-[450px] relative">
        <ParallaxText
          baseVelocity={5}
          text="Frameworks"
          clasName="absolute h-full w-screen top-0 left-0 opacity-5 select-none"
        />
        <div className="static pt-16 px-8 overflow-hidden ">
          <h1 className="text-[38px] font-bold mb-5">
            My Favorite <br /> Frameworks
          </h1>
          <Frameworks />
        </div>
      </section>
      <section className="bg-indigo-950 w-screen h-[450px] relative">
        <ParallaxText
          baseVelocity={10}
          text="Technologies"
          clasName="absolute h-full w-screen top-0 left-0 opacity-5 select-none "
        />
        <div className="static pt-16 px-8 overflow-hidden ">
          <h1 className="text-[38px] font-bold mb-5">
            Other <br /> Technologies
          </h1>
          <Frameworks />
        </div>
      </section>
      <section className="w-screen">
        <div className="relative pt-16 px-8 pb-10">
          <h1 className="text-[38px] font-bold mb-8">
            Work
            <br />
            Experience
          </h1>
          <div className="inline-flex relative h-[300px]">
            <span className="text-[42px] font-bold mt-4">01</span>
            <div className="bg-violet-900 h-[235px] w-[2px] absolute left-[16px] top-[80px]" />
            <div className="ml-5">
              <span className="text-sm text-violet-400">Headline</span>
              <h2 className="text-[32px] font-semibold">Head</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto at commodi accusantium saepe aliquid cupiditate
                repudiandae quaerat possimus, quas dolore fugit in soluta!
                Facilis modi nisi alias? Quas, tempore. Nostrum!
              </p>
            </div>
          </div>
          <div className="inline-flex relative h-[300px]">
            <span className="text-[42px] font-bold mt-4">02</span>
            <div className="bg-violet-900 h-[200px] w-[2px] absolute left-[16px] top-[80px]" />
            <div className="ml-5">
              <span className="text-sm text-violet-400">Headline</span>
              <h2 className="text-[32px] font-semibold">Head</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto at commodi accusantium saepe aliquid cupiditate
                repudiandae quaerat possimus, quas dolore fugit in soluta!
                Facilis modi nisi alias? Quas, tempore. Nostrum!
              </p>
            </div>
            <span className="text-lg absolute left-0 -bottom-4">
              <TypeAnimation
                sequence={["Loading...", 1000, "", 100]}
                wrapper="span"
                speed={40}
                repeat={Infinity}
              />
            </span>
          </div>
        </div>
      </section>
      <section className="w-screen">
        <div className="relative pt-2 px-8 pb-4">
          <h1 className="text-[38px] font-bold mb-8">Graduations</h1>
          <div className="flex flex-row-reverse relative h-[300px]">
            <span className="text-[42px] font-bold mt-4">01</span>
            <div className="bg-teal-900 h-[235px] w-[2px] absolute right-[16px] top-[80px]" />
            <div className="ml-5">
              <span className="text-sm text-teal-400">Headline</span>
              <h2 className="text-[32px] font-semibold">Head</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto at commodi accusantium saepe aliquid cupiditate
                repudiandae quaerat possimus, quas dolore fugit in soluta!
                Facilis modi nisi alias? Quas, tempore. Nostrum!
              </p>
            </div>
          </div>
          <div className="flex flex-row-reverse relative h-[300px]">
            <span className="text-[42px] font-bold mt-4">02</span>
            <div className="bg-teal-900 h-[200px] w-[2px] absolute right-[16px] top-[80px]" />
            <div className="ml-5">
              <span className="text-sm text-teal-400">Headline</span>
              <h2 className="text-[32px] font-semibold">Head</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto at commodi accusantium saepe aliquid cupiditate
                repudiandae quaerat possimus, quas dolore fugit in soluta!
                Facilis modi nisi alias? Quas, tempore. Nostrum!
              </p>
            </div>
            <span className="text-lg absolute right-0 -bottom-4">
              <TypeAnimation
                sequence={["Loading...", 1000, "", 100]}
                wrapper="span"
                speed={40}
                repeat={Infinity}
              />
            </span>
          </div>
        </div>
      </section>
      <section className="w-screen">
        <div className="relative pt-16 px-8 pb-10">
          <h1 className="text-[38px] font-bold mb-8">Lenguages</h1>
          <div className="mb-10">
            <div className="flex justify-start items-end mb-2">
              <p className="text-xl">Portuguese</p>
              <p className="text-xs text-green-300 mb-[4px] ml-2">Native</p>
            </div>
            <div className="flex">
              {Array.from({ length: 5 }).map((_, index) => (
                <RiStarSFill
                  key={index}
                  size={50}
                  className="text-yellow-100 opacity-20"
                />
              ))}
            </div>
          </div>
          <div className="mb-10">
            <div className="flex justify-start items-end mb-2">
              <p className="text-xl">English</p>
              <p className="text-xs text-yellow-200 mb-[4px] ml-2">
                Intermediate
              </p>
            </div>
            <div className="flex">
              {Array.from({ length: 5 }).map((_, index) => (
                <RiStarSFill
                  key={index}
                  size={50}
                  className="text-yellow-100 opacity-20"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="w-screen">
        <div className="relative pt-16 px-8 pb-20 bg-violet-300 text-background">
          <h1 className="text-[38px] font-normal mb-8">Contact me</h1>
        </div>
      </section>
    </main>
  );
}
