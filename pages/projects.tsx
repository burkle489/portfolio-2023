import { NextPage } from "next"
import React, { FC, useEffect, useRef } from "react"
import Container from "../components/Container"
import Header from "../components/Header"
import SocialLink from "../components/SocialLink"
import Timeline from "../components/Timeline"
import TimelineItem from "../components/Timeline/TimelineItem"
import Title from "../components/Title/Title"
import { ABOUT_TIMELINE, PROJECT_CARDS, SOCIALS } from "../constants"
import gsap from "gsap"
import { PageHeading } from "../components/PageHeading"
import Image from "next/image"
import stamp from "../public/stamp.png"
import cx from "classnames"
import { ProjectCard } from "../components/ProjectCard"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { AppDispatch } from "../store"
import { setMouseHover } from "../store/mouseHoverSlice"
import { useDispatch } from "react-redux"
import { Stamp } from "../components/Stamp"

if (typeof document !== `undefined`) gsap.registerPlugin(ScrollTrigger)
const isBrowser = () => typeof window !== "undefined" //The approach recommended by Next.js
const useAppDispatch: () => AppDispatch = useDispatch

const Projects: NextPage = ({}) => {
  //reset mouse hover state on page change/load
  const dispatch = useAppDispatch()
  dispatch(setMouseHover("standard"))

  const headerRef = useRef(null)
  const stampRef = useRef(null)

  useEffect(() => {
    if (!isBrowser()) return
    window.scrollTo({ top: 0 })
  }, [])

  useEffect(() => {
    if (!headerRef || !headerRef.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current, { y: -3000 }, { y: 0, duration: 1 })
    }, headerRef)
    return () => ctx.revert()
  }, [])

  useEffect(() => {
    if (!stampRef || !stampRef.current) return
    const ctx = gsap.context(() => {
      gsap
        .timeline()
        .fromTo(
          stampRef.current,
          { rotation: 0, y: -3000 },
          { rotation: 360, y: 0, duration: 1 }
        )
      gsap.to(stampRef.current, {
        scrollTrigger: {
          trigger: "html",
          pin: true,
          scrub: 0.2,
          start: "top top",
          end: "+=10000",
        },
        rotation: 360 * 5,
        duration: 1,
        ease: "none",
      })
    }, stampRef)
    return () => ctx.revert()
  }, [])

  return (
    <div className="z-10 relative min-h-[100vh] w-[100vw] flex flex-col justify-center align-center bg-light-beige">
      <div className="min-h-screen w-full  flex flex-col justify-between md:justify-start">
        <PageHeading
          titleTag="02"
          title="Projects"
          description="I have worked on a variety of projects in my professional roles."
          secondDescription="Industries include Gaming, Financial Services, Psychometric Testing, Farming Tech and even Nandos!"
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
