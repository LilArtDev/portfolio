import { ListOptionProps } from "./custom/Menu/custom/ListOption/list-option.component";

export const BASE_MENU_OPTIONS: Pick<ListOptionProps, "label" | "href">[] = [
  {
    label: "Tecnologias",
    href: "#frameworks",
  },
  {
    label: "Experiência",
    href: "#experiencia",
  },
  {
    label: "Escolaridade",
    href: "#escolaridade",
  },
  {
    label: "Idiomas",
    href: "#idiomas",
  },
  {
    label: "Contato",
    href: "#contato",
  },
];
