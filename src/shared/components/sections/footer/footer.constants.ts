import { IoMdMail } from "react-icons/io";
import { IoLogoWhatsapp, IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";
import { SocialMedia } from "./footer.types";

export const SOCIAL_MEDIAS: SocialMedia[] = [
  {
    href: "https://wa.link/bmhlt8",
    icon: IoLogoWhatsapp,
    text: "+55 (11)95719-0847",
  },
  {
    href: "mailTo:contatoarthurfernandez@gmail.com",
    icon: IoMdMail,
    text: "contatoarthurfernandez@gmail.com",
  },
  {
    href: "https://www.linkedin.com/in/lilart/",
    icon: IoLogoLinkedin,
    text: "linkedin.com/lilart",
  },
  {
    href: "https://github.com/LilArtDev",
    icon: IoLogoGithub,
    text: "github.com/LilArtDev",
  },
];
