import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { NextPage } from "next"
import { FC, useEffect, useRef } from "react"
import Container from "../components/Container"
import Header from "../components/Header"
import { MarqueeBanner } from "../components/MarqueeBanner"
import { MarqueeItem } from "../components/MarqueeBanner/MarqueeItem"
import { PageHeading } from "../components/PageHeading"
import { Stamp } from "../components/Stamp"
import Timeline from "../components/Timeline"
import { ABOUT_TIMELINE } from "../constants"

if (typeof document !== `undefined`) gsap.registerPlugin(ScrollTrigger)
const isBrowser = () => typeof window !== "undefined" //The approach recommended by Next.js

const About: NextPage = ({}) => {
  const headerRef = useRef(null)

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

  return (
    <div className="min-h-[100vh] w-[100vw] flex flex-col justify-center align-center bg-very-light-blue">
      <Header />
      <div className="h-screen w-full">
        <div className="relative" ref={headerRef}>
          <PageHeading
            title="About Me"
            description=" Front-End Web Developer with 4+ years commercial experience
          specialising in React and React-based frameworks."
            hasButtons
          />
        </div>
        <Stamp />
      </div>
      <MarqueeBanner>
        <MarqueeItem {...{ text: "React" }} />
        <MarqueeItem {...{ text: "NextJS" }} />
        <MarqueeItem {...{ text: "Gatsby" }} />
        <MarqueeItem {...{ text: "Redux" }} />
        <MarqueeItem {...{ text: "Recoil" }} />
        <MarqueeItem {...{ text: "Tailwind" }} />
        <MarqueeItem {...{ text: "HTML" }} />
        <MarqueeItem {...{ text: "CSS" }} />
        <MarqueeItem {...{ text: "SASS" }} />
        <MarqueeItem {...{ text: "Vercel" }} />
        <MarqueeItem {...{ text: "Netlify" }} />
      </MarqueeBanner>
      <Container className="">
        <Timeline items={ABOUT_TIMELINE} />
      </Container>
    </div>
  )
}

export default About
