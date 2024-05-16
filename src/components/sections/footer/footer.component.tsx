import React from "react";
import { IoMdMail } from "react-icons/io";
import { IoLogoWhatsapp, IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";

export const FooterSection: React.FC = () => {
  return (
    <section className="w-screen">
        <div className="relative pt-16 px-8 pb-8 bg-emerald-200 text-background flex flex-col md:px-32 xl:px-40">
          <h1 className="text-[38px] font-normal mb-8">Contact me</h1>
          <div className="flex flex-col gap-4 text-sm">
            <a href="#" className="inline-flex gap-2 items-center">
              <IoLogoWhatsapp size={25} />
              <p>+55 (11)95719-0847</p>
            </a>
            <a href="#" className="inline-flex gap-2 items-center">
              <IoMdMail size={25} />
              <p>contatoarthurfernandez@gmail.com</p>
            </a>
            <a
              href="https://www.linkedin.com/in/lilart/"
              className="inline-flex gap-2 items-center"
            >
              <IoLogoLinkedin size={25} />
              <p>linkedin.com/lilart</p>
            </a>
            <a
              href="https://github.com/LilArtDev"
              className="inline-flex gap-2 items-center"
            >
              <IoLogoGithub size={25} />
              <p>github.com/LilArtDev</p>
            </a>
          </div>
          <span className="mt-16">© Arthur Fernandez 2024</span>
        </div>
      </section>
  );
};
