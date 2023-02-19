import { ITimelineItem } from "../components/Timeline/TimelineItem";

export const NAV_LINKS = [
  { label: "Home", value: "/" },
  { label: "Projects", value: "/projects" },
  { label: "About", value: "/about" },
];

export enum SOCIALS {
  "LINKEDIN" = "linkedin",
  "GITHUB" = "github",
  "EMAIL" = "email",
}

export const ABOUT_TIMELINE: ITimelineItem[] = [
  {
    title: "Chemistry Degree - 2.1 BSC",
    subtitle: "University of Manchester",
    date: "",
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
    description: "",
    tech: ["React", "Redux"],
  },
  {
    title: "Web Developer",
    subtitle: "Equator",
    date: "Jan 2022 - Aug 2022",
    description:
      "Front-End Web Developer role working on a financial services product in a team of 15-20.",
    tech: ["React", "Redux"],
  },
  {
    title: "Web Developer",
    subtitle: "Fluid",
    date: "Aug 2022 - Present",
    description:
      "Web Developer Working on Static Web Apps for Gaming Companies such as Bandai Namco Mobile, Avalanche Studios and Vela Games",
    tech: ["React", "Gatsby", "NextJS", "Netlify", "Serverless Functions"],
  },
];
