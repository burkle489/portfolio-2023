import { ITimelineItem } from "../components/Timeline/TimelineItem"

import pokeball from "../public/pokeball.svg"
import pokedexScreenshot from "../public/pokedex-screenshot.png"
import pokedexScreenshot2 from "../public/pokedex-red.png"
import pokedexScreenshot3 from "../public/pokedex-blue.png"
import earthlessIcon from "../public/earthless-icon.png"
import earthlessScreenshot from "../public/earthless-screenshot.png"
import evercoreIcon from "../public/evercore-icon.svg"
import evercoreScreenshot from "../public/evercore-screenshot.png"

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
      "I decided not to pursue an Integrated Masters to graduate early with a Bachelors and pursue a self-taught route in Web Development.",
    tech: undefined,
  },
  {
    title: "Optimisation Web Developer",
    subtitle: "WeTeachCRO",
    date: "Oct 2019 - Jun 2020",
    description:
      "First role as a Junior Web Developer building A/B tests for client websites as a means to increase rates of conversion. Worked with clients such as GoDaddy and Nando's.",
    tech: ["JavaScript", "CSS", "HTML", "jQuery"],
  },
  {
    title: "App Software Engineer",
    subtitle: "AVAMAE",
    date: "Jun 2020 - Dec 2021",
    description:
      "This was my first React-based role, initially I worked closely with a mentor and within 9 months was the lead Front-End Developer owning a project. I Worked closely with the Projects Managers and mentored a Junior Developer.",
    tech: ["React", "Redux", "SCSS"],
  },
  {
    title: "Web Developer",
    subtitle: "Equator",
    date: "Jan 2022 - Aug 2022",
    description:
      "Front-End Web Developer role working on a financial services product in a team of 20. This involved complex funnel and data management.",
    tech: ["React", "Redux Toolkit", "CSS"],
  },
  {
    title: "Web Developer",
    subtitle: "Fluid",
    date: "Aug 2022 - Present",
    description:
      "I'm currently Working on Modern Web Apps for Gaming Companies such as Bandai Namco Mobile, Gameloft and Team17. The Apps have included Node APIs and CRM Integrations.",
    tech: ["React", "NextJS", "Gatsby", "Netlify", "Vercel", "Tailwind"],
  },
]

export const PROJECT_CARDS: any[] = [
  {
    name: "Earthless",
    logo: earthlessIcon,
    logoAlt: "earthless icon",
    screenshot: earthlessScreenshot,
    bgPosition: "50% 50%",
    projectType: "professional",
    description:
      "Earthless is a sci-fi roguelike deckbuilder. Build still in progress as information about the game releases and development progresses.",
    tools: [
      "Typescript",
      "NextJS",
      "Vercel",
      "Redux",
      "SCSS",
      "GSAP",
      "Hubspot",
    ],
    github: null,
    hostedLink: "https://www.earthlessgame.com/",
    hasCard: true,
  },
  {
    name: "Pokedex App",
    logo: pokeball,
    logoAlt: "pokeball",
    screenshot: pokedexScreenshot2,
    bgPosition: "50% 50%",
    projectType: "personal",
    description:
      "This was a 1 day build as a way to learn Gatsby, leveraging the poke api for data. It includes search functionality, mobile responsiveness and a sleek design.",
    tools: ["Typescript", "GatsbyJS", "SCSS"],
    github: "https://github.com/burkle489/pokedex-app",
    hostedLink: "https://pokedex-app-rho.vercel.app/",
    hasCard: true,
  },

  {
    name: "Evercore Heroes",
    logo: evercoreIcon,
    logoAlt: "evercore",
    screenshot: evercoreScreenshot,
    bgPosition: "50% 50%",
    projectType: "professional",
    screenshotAlt: "screenshot of evercore heroes home page",
    description:
      "Evercore Heroes is a Mobile MOBA with a Twist! I built an initial website ready for launch of the closed beta and the site was then handed over and built upon by the client using the base project code built by me.",
    tools: ["Typescript", "GatsbyJS", "Netlify", "SCSS"],
    github: null,
    hostedLink: "https://evercoreheroes.com/",
    hasCard: true,
  },
]
