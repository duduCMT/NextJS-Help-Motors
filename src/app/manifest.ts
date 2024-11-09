import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Help Motors",
    short_name: "Help Motors",
    description:
      "Help Motors é uma aplicação web para solicitação de serviços automotivos. O objetivo do projeto é testar a integração de CMS em aplicações para facilitar a criação de projetos.",
    start_url: "/",
    display: "standalone",
    icons: [
      {
        src: "/favicon.icon",
        sizes: "any",
        type: "image/icon",
      },
    ],
  };
}