import { NextPage } from "next";
import { useLayoutEffect, useRef } from "react";
import Container from "../components/Container";
import Header from "../components/Header";
import Title from "../components/Title/Title";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ProjectCard } from "../components/ProjectCard";
import { PROJECT_CARDS } from "../constants";
import { StaticImageData } from "next/image";

if (typeof document !== `undefined`) gsap.registerPlugin(ScrollTrigger);

export interface IProjectCard {
  name: string;
  logo: string;
  screenshot: StaticImageData;
  id: string;
  description: string;
  tools: string[];
  github: string;
  hostedLink: string;
}


const Projects: NextPage = ({ }) => {
  const tl: any = useRef(null);
  const projectsScrollContainer = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // PROJECT_CARDS.map((project) =>
      //   gsap.fromTo(
      //     `.${project.id}-image`,
      //     {
      //       y: 0,
      //       duration: 1,
      //       opacity: 0,
      //     },
      //     {
      //       // scrollTrigger: `.${project.id}`,
      //       y: 390,
      //       duration: 1,
      //       opacity: 1,
      //     }
      //   )
      // );
      gsap.fromTo(
        ".project-card-1-image",
        {
          y: 600,
          duration: 1,
          opacity: 0,
          transform: "perspective(500px) rotateY(0deg) rotateX(-20deg)",
        },
        {
          scrollTrigger: {
            trigger: ".project-card-1",
            // start: "top top",
            toggleActions: "play none none reverse",
          },
          y: 0,
          duration: 1,
          opacity: 1,
          transform: "perspective(500px) rotateY(0deg) rotateX(0deg)",
        }
      );
      gsap.fromTo(
        ".project-card-2-image",
        {
          y: 600,
          duration: 1,
          opacity: 0,
          transform: "perspective(500px) rotateY(0deg) rotateX(-20deg)",
        },
        {
          scrollTrigger: {
            trigger: ".project-card-2",
            // start: "top top",
            toggleActions: "play none none reverse",
          },
          y: 15,
          duration: 1,
          opacity: 1,
          transform: "perspective(500px) rotateY(0deg) rotateX(0deg)",
        }
      );
      gsap.fromTo(
        ".project-card-3-image",
        {
          y: 600,
          duration: 1,
          opacity: 0,
          transform: "perspective(500px) rotateY(0deg) rotateX(-20deg)",
        },
        {
          scrollTrigger: {
            trigger: ".project-card-3",
            toggleActions: "play none none reverse",
          },
          y: 30,
          duration: 1,
          opacity: 1,
          transform: "perspective(500px) rotateY(0deg) rotateX(0deg)",
        }
      );
      gsap.fromTo(
        ".project-card-4-image",
        {
          y: 600,
          duration: 1,
          opacity: 0,
          transform: "perspective(500px) rotateY(0deg) rotateX(-20deg)",
        },
        {
          scrollTrigger: {
            trigger: ".project-card-4",
            toggleActions: "play none none reverse",
          },
          y: 45,
          duration: 1,
          opacity: 1,
          transform: "perspective(500px) rotateY(0deg) rotateX(0deg)",
        }
      );
    }, projectsScrollContainer);
  }, []);

  return (
    <div className="min-h-[100vh] w-[100vw] flex flex-col justify-center align-center bg-white">
      <Header />
      <div className="py-32 pt-52 honeycomb-header-background relative">
        <Container
          Tag="section"
          className="h-[60vh] border-y-2 border-[#999999] bg-white"
          innerClassName="flex items-center"
        >
          <div className="w-3/5 flex flex-col justify-center">
            <Title variant="h1">Project Showcase</Title>
            <Title variant="h5">
              Explore the variety of projects I have worked on in my personal time, as freelance work or during my day job.
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

        </Container>
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-b from-transparent to-white h-40"></div>
      </div>
      <Container Tag="section" className='!pb-0'>
        <div className="relative" ref={projectsScrollContainer}>
          <div className="w-full h-full min-h-[100vh]">
            <div className="sticky-showcase min-h-[100vh] h-[100vh] sticky w-1/2 top-0 left-0 flex justify-center items-center pt-20 translate-x-[0%] transition-all duration-700">
              <div className="relative w-full h-full">
                {PROJECT_CARDS.map((project) => {
                  return (
                    <ProjectCard {...{ ...project, className: '' }} />
                  );
                })}
                {/* <div
                  className={`absolute h-1/2 w-full bg-red-400 project-card-1-image`}
                >
                  Project 1
                </div> */}
              </div>
            </div>
            <div className="min-h-[100vh] flex flex-col items-end">
              {PROJECT_CARDS.map((project) => (
                <div className={`h-[100vh] w-[40%] text-2xl ${project.id}`}>
                  {project.description}
                </div>
              ))}
              {/* <div className={`h-[100vh] w-1/2 project-card-1`}> */}
              {/* Lorem ipsum dolor sit amet. */}
              {/* {project.description} */}
              {/* </div> */}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Projects;
