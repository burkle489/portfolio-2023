import { NextPage } from "next";
import { useLayoutEffect, useRef } from "react";
import Container from "../components/Container";
import Header from "../components/Header";
import Title from "../components/Title/Title";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof document !== `undefined`) gsap.registerPlugin(ScrollTrigger);

const PROJECT_CARDS = [
  {
    name: "Project 1",
    logo: "LOGO",
    screenshot: "SCREENSHOT",
    color: "bg-red-400",
    id: "project-card-1",
    description:
      "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
  },
  {
    name: "Project 2",
    logo: "LOGO",
    screenshot: "SCREENSHOT",
    color: "bg-blue-400",
    id: "project-card-2",
    description:
      "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
  },
  {
    name: "Project 3",
    logo: "LOGO",
    screenshot: "SCREENSHOT",
    color: "bg-yellow-400",
    id: "project-card-3",
    description:
      "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
  },
  {
    name: "Project 4",
    logo: "LOGO",
    screenshot: "SCREENSHOT",
    color: "bg-orange-400",
    id: "project-card-4",
    description:
      "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
  },
];

const Projects: NextPage = ({}) => {
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
          y: 300,
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
          y: 315,
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
          y: 330,
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
          y: 345,
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
      <Container
        Tag="section"
        className="h-[60vh] !pb-0"
        innerClassName="flex items-center"
      >
        <div>
          <Title variant="h1">Lorem ipsum</Title>
        </div>
      </Container>
      <Container Tag="section">
        <div className="relative" ref={projectsScrollContainer}>
          <div className="w-full h-full min-h-[100vh]">
            <div className="sticky-showcase min-h-[100vh] h-[100vh] sticky w-1/2 top-0 left-0 flex justify-center items-center pt-20 translate-x-[0%] transition-all duration-700">
              <div className="relative w-full h-full">
                {PROJECT_CARDS.map((project) => {
                  return (
                    <div
                      className={`absolute h-1/2 w-full ${project.color} ${project.id}-image border-2 border-black`}
                    >
                      {project.name}
                    </div>
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
                <div className={`h-[100vh] w-[40%] ${project.id}`}>
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
