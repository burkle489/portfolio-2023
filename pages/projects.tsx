import { NextPage } from "next"
import { useEffect, useLayoutEffect, useRef } from "react"
import Container from "../components/Container"
import Header from "../components/Header"
import Title from "../components/Title/Title"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { ProjectCard } from "../components/ProjectCard"
import { PROJECT_CARDS } from "../constants"
import { StaticImageData } from "next/image"
import { PageHeading } from "../components/PageHeading"

if (typeof document !== `undefined`) gsap.registerPlugin(ScrollTrigger)

export interface IProjectCard {
  name?: string
  logo?: string
  screenshot?: StaticImageData
  id?: string
  description?: string
  tools?: string[]
  github?: string
  hostedLink?: string
  hasCard: boolean
}

const Projects: NextPage = ({}) => {
  const tl: any = useRef(null)
  const projectsScrollContainer = useRef(null)
  const headerRef = useRef(null)

  useEffect(() => {
    if (!headerRef || !headerRef.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current, { y: -1000 }, { y: 0, duration: 1 })
    }, headerRef.current)
    return () => ctx.revert()
  }, [])

  return (
    <div className="min-h-[100vh] w-[100vw] flex flex-col justify-center align-center bg-white">
      <Header />
      <div
        className="py-32 pt-52 honeycomb-header-background relative"
        ref={headerRef}
      >
        <PageHeading
          title="Project Showcase"
          description="Project showcase description"
        />

        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-b from-transparent to-white h-40"></div>
      </div>
      <Container Tag="section" className="!pb-0">
        <div className="relative" ref={projectsScrollContainer}>
          <div className="w-full h-full min-h-[100vh]">
            <div className="sticky-showcase min-h-[100vh] h-[100vh] sticky w-1/2 top-0 left-0 flex justify-center items-center pt-20 translate-x-[0%] transition-all duration-700">
              <div className="relative w-full h-full">
                {PROJECT_CARDS.map((project) => {
                  if (!project.hasCard) return
                  return <ProjectCard {...{ ...project, className: "" }} />
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
  )
}

export default Projects
