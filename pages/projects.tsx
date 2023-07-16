import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { NextPage } from "next"
import React, { useEffect, useRef } from "react"
import { useDispatch } from "react-redux"
import Container from "../components/Container"
import { PageHeading } from "../components/PageHeading"
import { ProjectCard } from "../components/ProjectCard"
import { Stamp } from "../components/Stamp"
import { PROJECT_CARDS } from "../constants"
import { AppDispatch } from "../store"
import { setMouseHover } from "../store/mouseHoverSlice"

if (typeof document !== `undefined`) gsap.registerPlugin(ScrollTrigger)
const isBrowser = () => typeof window !== "undefined" //The approach recommended by Next.js
const useAppDispatch: () => AppDispatch = useDispatch

const Projects: NextPage = ({}) => {
  //reset mouse hover state on page change/load
  const dispatch = useAppDispatch()
  dispatch(setMouseHover("standard"))

  const headerRef = useRef(null)

  useEffect(() => {
    if (!isBrowser()) return
    window.scrollTo({ top: 0 })
  }, [])

  useEffect(() => {
    if (headerRef.current) {
      const ctx = gsap.context(() => {
        gsap.fromTo(headerRef.current, { y: -3000 }, { y: 0, duration: 1 })
      }, headerRef)
      return () => ctx.revert()
    }
  }, [])

  return (
    <div className="z-10 relative min-h-[100vh] w-[100vw] flex flex-col justify-center align-center bg-light-beige pb-20">
      <div className="min-h-screen w-full  flex flex-col justify-between md:justify-start">
        <PageHeading
          titleTag="02"
          title="Projects"
          description="I have worked on a variety of projects in my professional roles."
          secondDescription="Some industries I have worked in include Gaming, FinTech, Psychometric Testing, Farming Tech and even Nandos!"
        />

        <Stamp />
      </div>

      <Container>
        <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2 mx-auto px-4 xs:px-8 md:px-20">
          {PROJECT_CARDS.map((project, index) => (
            <React.Fragment key={`projcard-${index}`}>
              <ProjectCard {...{ ...project, index }} />
            </React.Fragment>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default Projects
