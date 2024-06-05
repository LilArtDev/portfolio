import React from "react";
import { IoMdMail } from "react-icons/io";
import { SOCIAL_MEDIAS } from "./footer.constants";

export const FooterSection: React.FC = () => {
  return (
    <section id="contato" className="w-screen">
      <div className="relative pt-16 px-8 pb-8 bg-emerald-200 text-background flex flex-col md:px-32 xl:px-40 ">
        <h1 className="text-[38px] mb-8  font-bold">Contato</h1>
        <div className="flex flex-col gap-4 text-sm">
          {SOCIAL_MEDIAS.map(({ href, text, icon: Icon }) => (
            <a
              key={href}
              href={href}
              className="inline-flex gap-2 items-center lg:text-[14px]"
              target="_blank"
            >
              <Icon size={25} />
              <p>{text}</p>
            </a>
          ))}
        </div>
        <span className="mt-16 font-semibold">© Arthur Fernandez 2024</span>
      </div>
    </section>
  );
};
