import { NextPage } from "next"
import { FC, useEffect, useRef } from "react"
import Container from "../components/Container"
import Header from "../components/Header"
import SocialLink from "../components/SocialLink"
import Timeline from "../components/Timeline"
import TimelineItem from "../components/Timeline/TimelineItem"
import Title from "../components/Title/Title"
import { ABOUT_TIMELINE, SOCIALS } from "../constants"
import gsap from "gsap"
import { PageHeading } from "../components/PageHeading"
import Image from "next/image"
import stamp from "../public/stamp.png"
import { useIsIntersectingLeftScreen } from "../hooks/useIsVisible"
const isBrowser = () => typeof window !== "undefined" //The approach recommended by Next.js

const About: NextPage = ({}) => {
  const headerRef = useRef(null)
  const stampRef = useRef(null)
  const resetRef = useRef(null)
  const carouselWrapperRef = useRef(null)
  const carouselTimeline = useRef(gsap.timeline())
  const carouselContainer = useRef(null)
  const carouselInner = useRef(null)
  const carouselScrollTrigger = useRef(null)
  const carouselTopBorder = useRef(null)
  const carouselBottomBorder = useRef(null)

  const resetIsVisible = useIsIntersectingLeftScreen(resetRef)

  useEffect(() => {
    if (!isBrowser()) return
    window.scrollTo({ top: 0 })
  }, [])

  useEffect(() => {
    if (!headerRef || !headerRef.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current, { y: -3000 }, { y: 0, duration: 1 })
    }, headerRef.current)
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
        .to(stampRef.current, {
          rotation: 360 * 5,
          duration: 1,
          ease: "none",
          scrollTrigger: {
            trigger: "html",
            pin: true,
            scrub: 0.2,
            start: "top top",
            end: "+=10000",
          },
        })
    }, stampRef.current)
    return () => ctx.revert()
  }, [])

  useEffect(() => {
    if (!carouselWrapperRef || !carouselWrapperRef.current) return
    const ctx = gsap.context(() => {
      carouselTimeline.current.to(carouselWrapperRef.current, {
        x: -7000,
        duration: 100,
      })
    }, carouselTimeline.current)
    return () => ctx.revert()
  }, [])

  useEffect(() => {
    if (!carouselWrapperRef || !carouselWrapperRef.current) return
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: carouselScrollTrigger.current,
            start: "top bottom",
          },
        })
        .addLabel("first", 0)
        .addLabel("second", 1)
        .fromTo(
          carouselInner.current,
          { y: 2000 },
          {
            y: 0,
          },
          "first"
        )
        .fromTo(
          carouselTopBorder.current,
          { clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" },
          {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            duration: 2,
            ease: "power4",
          },
          "second"
        )
        .fromTo(
          carouselBottomBorder.current,
          { clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" },
          {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            duration: 2,
            delay: 0.2,
            ease: "power4",
          },
          "second"
        )
    }, carouselTimeline.current)
    return () => ctx.revert()
  }, [])

  useEffect(() => {
    if (resetIsVisible) {
      carouselTimeline.current.restart()
    }
  }, [resetIsVisible])

  return (
    <div className="min-h-[100vh] w-[100vw] flex flex-col justify-center align-center bg-very-light-blue">
      <Header />
      <div className="relative" ref={headerRef}>
        <PageHeading
          title="About Me"
          description=" Front-End Web Developer with 4+ years commercial experience
              specialising in React and React-based frameworks."
          hasButtons
        />
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-b from-transparent to-very-light-blue h-40"></div>
      </div>
      <Container
        className="!pt-20 mb-20"
        innerClassName="flex justify-center items-center relative"
        // innerRef={stampContainer}
      >
        <div ref={stampRef} className="relative">
          <Image alt="stamp" src={stamp} width={200} height={200} />
          <div className="absolute top-[calc(50%-11px)] left-[calc(50%-12px)] w-[24px] h-[22px]">
            tb.
          </div>
        </div>
      </Container>
      <div ref={carouselScrollTrigger} />
      <Container
        innerRef={carouselInner}
        className="!px-0 !py-0 group hover:bg-main-blue transition-all duration-500"
      >
        <div
          ref={carouselTopBorder}
          className=" bg-main-blue h-1 w-full mb-20"
        />
        <div className="flex" ref={carouselWrapperRef} onMouseEnter={() => {}}>
          <AutoCarouselItem {...{ text: "React" }} />
          <AutoCarouselItem {...{ text: "NextJS" }} />
          <AutoCarouselItem {...{ text: "Gatsby" }} />
          <AutoCarouselItem {...{ text: "Redux" }} />
          <AutoCarouselItem {...{ text: "Recoil" }} />
          <AutoCarouselItem {...{ text: "Tailwind" }} />
          <AutoCarouselItem {...{ text: "HTML" }} />
          <AutoCarouselItem {...{ text: "CSS" }} />
          <AutoCarouselItem {...{ text: "SASS" }} />
          <AutoCarouselItem {...{ text: "Vercel" }} />
          <AutoCarouselItem {...{ text: "Netlify" }} />
          <span ref={resetRef}>
            <AutoCarouselItem {...{ text: "React" }} />
          </span>
          <AutoCarouselItem {...{ text: "NextJS" }} />
          <AutoCarouselItem {...{ text: "Gatsby" }} />
          <AutoCarouselItem {...{ text: "Redux" }} />
          <AutoCarouselItem {...{ text: "Recoil" }} />
          <AutoCarouselItem {...{ text: "Tailwind" }} />
          <AutoCarouselItem {...{ text: "HTML" }} />
          <AutoCarouselItem {...{ text: "CSS" }} />
          <AutoCarouselItem {...{ text: "SASS" }} />
          <AutoCarouselItem {...{ text: "Vercel" }} />
          <AutoCarouselItem {...{ text: "Netlify" }} />
        </div>
        <div
          ref={carouselBottomBorder}
          className=" bg-main-blue h-1 w-full mt-20"
        />
      </Container>
      <Container className="">
        <Timeline items={ABOUT_TIMELINE} />
      </Container>
    </div>
  )
}

export default About

const AutoCarouselItem: FC<{ text: string; className?: string }> = ({
  text,
}) => {
  return (
    <span className="text-8xl px-16 group-hover:text-very-light-blue">
      {text}
    </span>
  )
}
