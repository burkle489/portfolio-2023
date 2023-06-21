import { ITimelineItem } from "../components/Timeline/TimelineItem"

import pokeball from "../public/pokeball.svg"
import pokedexScreenshot from "../public/pokedex-screenshot.png"
import pokedexScreenshot2 from "../public/pokedex-red.png"
import pokedexScreenshot3 from "../public/pokedex-blue.png"

export const NAV_LINKS = [
  { label: "Home", value: "/" },
  { label: "Projects", value: "/projects" },
  { label: "About", value: "/about" },
]

export enum SOCIALS {
  "LINKEDIN" = "linkedin",
  "GITHUB" = "github",
  "EMAIL" = "email",
  "WEB" = "web",
}

export const ABOUT_TIMELINE: ITimelineItem[] = [
  {
    title: "Chemistry Degree - 2.1 BSC",
    subtitle: "University of Manchester",
    date: "Sep 2016 - July 2019",
    description:
      "Finished my Integrated Masters a year early to graduate with a Bachelors and pursue Web Development.",
    tech: undefined,
  },
  {
    title: "Optimisation Web Developer",
    subtitle: "WeTeachCRO",
    date: "Oct 2019 - Jun 2020",
    description:
      "Role as a Junior Web Developer building A/B tests for clients' existing websites as a means to increase rates of conversion. Worked with clients such as GoDaddy and Nando's.",
    tech: ["JavaScript", "jQuery"],
  },
  {
    title: "App Software Engineer",
    subtitle: "AVAMAE Software Solutions Ltd.",
    date: "Jun 2020 - Dec 2021",
    description:
      "This was my first React-based role, initially I worked closely with a mentor and within 9 months was the main Front-End Developer owning my own project. Working closely with Project Managers, and advising a Junior Developer.",
    tech: ["React", "Redux", "SASS"],
  },
  {
    title: "Web Developer",
    subtitle: "Equator",
    date: "Jan 2022 - Aug 2022",
    description:
      "Front-End Web Developer role working on a financial services product in a team of 15-20.",
    tech: ["React", "Redux", "CSS"],
  },
  {
    title: "Web Developer",
    subtitle: "Fluid",
    date: "Aug 2022 - Present",
    description:
      "Web Developer Working on Modern Web Apps for Gaming Companies such as Bandai Namco Mobile, Gameloft and Team17.",
    tech: ["React", "NextJS", "Gatsby", "Netlify", "Vercel", "Tailwind"],
  },
]

export const PROJECT_CARDS: any[] = [
  {
    name: "Pokedex App",
    logo: pokeball,
    logoAlt: "pokeball",
    screenshot: pokedexScreenshot2,
    bgPosition: "50% 50%",
    projectType: "personal",

    id: "project-card-1",
    description:
      "This was a 1 day build as a way to learn Gatsby, leveraging the poke api for data. It includes search functionality, mobile responsiveness and a sleek design.",
    tools: ["Typescript", "GatsbyJS", "SCSS"],
    github: "https://github.com/burkle489/pokedex-app",
    hostedLink: "https://pokedex-app-rho.vercel.app/",
    hasCard: true,
  },
  {
    name: "Pokedex App",
    logo: pokeball,
    logoAlt: "pokeball",
    screenshot: pokedexScreenshot3,
    bgPosition: "50% 50%",
    projectType: "personal",
    screenshotAlt: "screenshot of pokedex app project",
    id: "project-card-1",
    description:
      "This was a 1 day build as a way to learn Gatsby, leveraging the poke api for data. It includes search functionality, mobile responsiveness and a sleek design.",
    tools: ["Typescript", "GatsbyJS", "SCSS"],
    github: "https://github.com/burkle489/pokedex-app",
    hostedLink: "https://pokedex-app-rho.vercel.app/",
    hasCard: true,
  },
  {
    name: "Pokedex App",
    logo: pokeball,
    logoAlt: "pokeball",
    screenshot: pokedexScreenshot,
    bgPosition: "50% 50%",
    projectType: "personal",
    id: "project-card-1",
    description:
      "This was a 1 day build as a way to learn Gatsby, leveraging the poke api for data. It includes search functionality, mobile responsiveness and a sleek design.",
    tools: ["Typescript", "GatsbyJS", "SCSS"],
    github: "https://github.com/burkle489/pokedex-app",
    hostedLink: "https://pokedex-app-rho.vercel.app/",
    hasCard: true,
  },
  {
    description: "More projects coming soon.",
    hasCard: false,
  },
]
