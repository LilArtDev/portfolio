"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main>
      <section className="bg-teal-700 w-screen h-screen relative -top-[110px] pt-40 px-8 overflow-hidden">
        <motion.div className="absolute bg-white/10 h-80 w-80 rounded-full bottom-40 -right-28 "
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatDelay: 2.5,
        }}/>
        <motion.div className="absolute bg-white/10 h-80 w-80 rounded-full -bottom-20 -left-20"
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
          <br />Developer
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
        <p className="mt-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit possimus beatae delectus praesentium iusto nam, tenetur, reiciendis nobis enim voluptas nesciunt temporibus libero omnis? Maiores, vitae ullam. Culpa, asperiores libero?</p>
      </section>
    </main>
  );
}
