import { NextPage } from "next";
import Container from "../components/Container";
import Header from "../components/Header";
import SocialLink from "../components/SocialLink";
import Timeline from "../components/Timeline";
import TimelineItem from "../components/Timeline/TimelineItem";
import Title from "../components/Title/Title";
import { ABOUT_TIMELINE, SOCIALS } from "../constants";

const About: NextPage = ({}) => {
  return (
    <div className="min-h-[100vh] w-[100vw] flex flex-col justify-center align-center pt-20">
      <Header />
      <div className="py-32 stripes-header-background__inverse relative">
        <Container
          Tag="section"
          className="h-[60vh] border-y-2 border-[#999999] bg-white"
          innerClassName="flex items-center"
        >
          <div className="w-3/5 flex flex-col justify-center">
            <Title variant="h1">Tayler Burke</Title>
            <Title variant="h5">
              Front-End Web Developer with 4+ years commercial experience
              specialising in React and React-based frameworks.
            </Title>
            <p>
              Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem
              ipsum dolor sit amet. Lorem ipsum dolor sit amet.
            </p>
            <p>
              Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
              Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem
              ipsum dolor sit amet.
            </p>
            {/* <p>
            I most enjoy building challenging UI whilst coming up with simple
            solutions to complex requirements.
          </p>
          <p>
            In my spare time I am always trying to reduce gaps in knowledge,
            when I'm not writing code, I'm out playing golf and maybe one day
            I'll fix my awful slice!
          </p> */}
            <p></p>
          </div>
          <div className="flex gap-6 w-2/5 justify-center">
            <SocialLink social={SOCIALS.LINKEDIN} />
            <SocialLink social={SOCIALS.GITHUB} />
            <SocialLink social={SOCIALS.EMAIL} />
          </div>
        </Container>
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-b from-transparent to-white h-40"></div>
      </div>
      <Container Tag="section" className="">
        <Timeline items={ABOUT_TIMELINE} />
      </Container>
    </div>
  );
};

export default About;
