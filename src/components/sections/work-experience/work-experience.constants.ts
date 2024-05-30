import { TimelineItemProps } from "./custom/TimelineItem/timeline-item.component";

export const WORK_EXPERIENCES_TIMELINE_CONTENT: Pick<
  TimelineItemProps,
  "headline" | "title" | "description"
>[] = [
  {
    headline: "2021 - 2024",
    title: "FullStack Developer",
    description: `Na PeerBR (Produto da holding Grupo GCB), desempenhei um papel essencial no desenvolvimento e manutenção das aplicações web e mobile. Contribuí de forma intensiva para a criação da segunda versão do aplicativo web PeerBR, utilizando React, Axios, Styled Components e Jest, assegurando uma performance aprimorada e uma experiência de usuário superior. Também tive uma participação significativa na primeira versão do aplicativo mobile, desenvolvido com React Native, Redux e Expo/EAS, focando em uma funcionalidade perfeita entre plataformas.
      No backend, implementei e administrei a segunda versão da API REST utilizando NestJS e PostgreSQL, integrando funcionalidades robustas e garantindo uma gestão eficiente dos dados. Trabalhei com serviços AWS, incluindo EC2, ECS, S3 e Docker, o que permitiu implantações contínuas e garantiu uma infraestrutura confiável.`,
  },
];

export const LAST_TIMELINE_CONTENT_INDEX =
  WORK_EXPERIENCES_TIMELINE_CONTENT.length - 1;
