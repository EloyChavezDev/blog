import type { Link } from "../types";

export const SITE = {
  title: "Aprende la Tech",
  description: "Tips y articulos creados por y para informaticos",
  author: "EloyChavezDev",
  url: "https://blog.eloychavez.dev/",
  github: "https://github.com/EloyChavezDev",
  locale: "es-mx",
  dir: "ltr",
  charset: "UTF-8",
  basePath: "/",
  postsPerPage: 4,
};

export const NAVIGATION_LINKS: Link[] = [
  {
    href: "/categories/ciberseguridad",
    text: "Ciberseguridad",
  },
  {
    href: "/categories/hardware",
    text: "Hardware",
  },
  {
    href: "/categories/tools",
    text: "Herramientas",
  },
  {
    href: "/categories/programacion",
    text: "Programación",
  },
  {
    href: "/categories/software",
    text: "Software",
  },
  {
    href: "/categories/tutorial",
    text: "Tutoriales",
  },
  {
    href: "/categories/windows",
    text: "Windows",
  },
];

export const OTHER_LINKS: Link[] = [
  // {
  //   href: "/about",
  //   text: "About us",
  // },
  {
    href: "/authors",
    text: "Autores",
  },
  // {
  //   href: "/contact",
  //   text: "Contact",
  // },
  // {
  //   href: "/privacy",
  //   text: "Privacy",
  // },
  // {
  //   href: "/terms",
  //   text: "Terms",
  // },
  // {
  //   href: "/cookie-policy",
  //   text: "Cookie Policy",
  // },
  {
    href: "https://blog.eloychavez.dev/rss.xml",
    text: "RSS",
  },
  // {
  //   href: "https://blog.eloychavez.dev/sitemap-index.xml",
  //   text: "Sitemap",
  // },
];

export const SOCIAL_LINKS: Link[] = [
  {
    href: "https://github.com/EloyChavezDev",
    text: "GitHub",
    icon: "github",
  },
  {
    href: "https://t.me/Eloychavezdev0",
    text: "Telegram",
    icon: "telegram",
  },
  {
    href: "https://twitter.com/EloyChavezDev",
    text: "Twitter",
    icon: "newTwitter",
  },
];
