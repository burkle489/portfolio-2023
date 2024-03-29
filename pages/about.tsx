import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { NextPage } from "next"
import { useEffect, useRef } from "react"
import { useDispatch } from "react-redux"
import Container from "../components/Container"
import { MarqueeBanner } from "../components/MarqueeBanner"
import { MarqueeItem } from "../components/MarqueeBanner/MarqueeItem"
import { PageHeading } from "../components/PageHeading"
import { Stamp } from "../components/Stamp"
import Timeline from "../components/Timeline"
import { ABOUT_TIMELINE } from "../constants"
import { AppDispatch } from "../store"
import { setMouseHover } from "../store/mouseHoverSlice"

if (typeof document !== `undefined`) gsap.registerPlugin(ScrollTrigger)
const isBrowser = () => typeof window !== "undefined" //The approach recommended by Next.js
const useAppDispatch: () => AppDispatch = useDispatch

const About: NextPage = ({}) => {
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
      <div className="min-h-screen w-full flex flex-col justify-between md:justify-start">
        <PageHeading
          titleTag="03"
          title="About"
          description="I graduated from University and decided to pivot into self teaching software development. Within 3 months I got my first role and haven't looked back!"
          secondDescription="In my spare time I play golf and built an Amazon business with my brother to over 6-figure revenue in the first 12 months."
          hasButtons
        />
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
