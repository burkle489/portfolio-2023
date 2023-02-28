import { NextPage } from "next";
import { useLayoutEffect, useRef } from "react";
import Container from "../components/Container";
import Header from "../components/Header";
import Title from "../components/Title/Title";
import gsap from "gsap";

const Projects: NextPage = ({}) => {
  const projectsScrollContainer = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to('sticky-showcase')
    }, projectsScrollContainer moveLeft);
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
            <div className="sticky-showcase h-[calc(100vh)] sticky w-1/2 top-0 left-0 flex justify-center items-center pt-20 translate-x-[0%] transition-all duration-700">
              <div className="h-1/2 bg-red-400 w-full"></div>
            </div>
            <div className="h-[100vh]"></div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Projects;
