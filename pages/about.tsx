import { NextPage } from "next"
import { useEffect, useRef } from "react"
import Container from "../components/Container"
import Header from "../components/Header"
import SocialLink from "../components/SocialLink"
import Timeline from "../components/Timeline"
import TimelineItem from "../components/Timeline/TimelineItem"
import Title from "../components/Title/Title"
import { ABOUT_TIMELINE, SOCIALS } from "../constants"
import gsap from "gsap"
import { PageHeading } from "../components/PageHeading"

const About: NextPage = ({}) => {
  const headerRef = useRef(null)

  useEffect(() => {
    if (!headerRef || !headerRef.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current, { y: -1000 }, { y: 0, duration: 1 })
    }, headerRef.current)
    return () => ctx.revert()
  }, [])
  return (
    <div className="min-h-[100vh] w-[100vw] flex flex-col justify-center align-center ">
      <Header />
      <div
        className="py-32  pt-52 relative stripes-header-background__inverse"
        ref={headerRef}
      >
        <PageHeading
          title="About Me"
          description=" Front-End Web Developer with 4+ years commercial experience
              specialising in React and React-based frameworks."
          hasButtons
        />
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-b from-transparent to-white h-40"></div>
      </div>
      <Container innerClassName="flex justify-center items-center">
        <div className="rounded-full border-2 border-black w-32 h-32 flex flex-col gap-2 justify-center items-center">
          <div className="bg-black w-0.5 h-16" />
          <p className="text-xl">tb.</p>
        </div>
      </Container>
      <Container className="">
        <Timeline items={ABOUT_TIMELINE} />
      </Container>
    </div>
  )
}

export default About
