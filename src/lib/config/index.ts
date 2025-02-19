import type { Link } from "../types";

export const SITE = {
  title: "La Tech",
  description: "A news website built with Astro",
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
    href: "/categories/programacion",
    text: "Programacion",
  },
  {
    href: "/categories/tools",
    text: "Herramientas",
  },
];

export const OTHER_LINKS: Link[] = [
  {
    href: "/about",
    text: "About us",
  },
  {
    href: "/authors",
    text: "Authores",
  },
  {
    href: "/contact",
    text: "Contact",
  },
  {
    href: "/privacy",
    text: "Privacy",
  },
  {
    href: "/terms",
    text: "Terms",
  },
  {
    href: "/cookie-policy",
    text: "Cookie Policy",
  },
  {
    href: "https://blog.eloychavez.dev/rss.xml",
    text: "RSS",
  },
  {
    href: "https://blog.eloychavez.dev/sitemap-index.xml",
    text: "Sitemap",
  },
];

export const SOCIAL_LINKS: Link[] = [
  {
    href: "https://github.com/EloyChavezDev",
    text: "GitHub",
    icon: "github",
  },
  {
    href: "httpe://www.t.me",
    text: "Telegram",
    icon: "telegram",
  },
  {
    href: "https://twitter.com/EloyChavezDev",
    text: "Twitter",
    icon: "newTwitter",
  },
];
