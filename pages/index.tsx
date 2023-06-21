import gsap from "gsap"
import { NextPage } from "next"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef } from "react"
import Container from "../components/Container"
import Header from "../components/Header"
import { PageHeading } from "../components/PageHeading"
import Title from "../components/Title/Title"
import { ABOUT_TIMELINE, PROJECT_CARDS } from "../constants"
import stamp from "../public/stamp.png"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { Featured } from "../components/Featured"
import { Stamp } from "../components/Stamp"

if (typeof document !== `undefined`) gsap.registerPlugin(ScrollTrigger)
const isBrowser = () => typeof window !== "undefined" //The approach recommended by Next.js

const Home: NextPage = ({}) => {
  const headerRef = useRef(null)
  const stampRef = useRef(null)
  const carouselTimeline = useRef(gsap.timeline())

  const carouselInner = useRef(null)
  const scrollTrigger = useRef(null)
  const topBorder = useRef(null)
  const bottomBorder = useRef(null)
  const secondBottomBorder = useRef(null)
  const wrapperRef = useRef(null)

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

  useEffect(() => {
    if (!wrapperRef || !wrapperRef.current) return
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: scrollTrigger.current,
            start: "top bottom",
          },
          paused: true,
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
          topBorder.current,
          { clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" },
          {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            duration: 2,
            ease: "power4",
          },
          "second"
        )
        .fromTo(
          bottomBorder.current,
          { clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" },
          {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            duration: 2,
            delay: 0.2,
            ease: "power4",
          },
          "second"
        )
        .fromTo(
          secondBottomBorder.current,
          { clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" },
          {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            duration: 2,
            delay: 0.2,
            ease: "power4",
          },
          "second"
        )
    }, carouselTimeline)
    return () => ctx.revert()
  }, [])

  return (
    <div className="min-h-[100vh] w-[100vw] flex flex-col justify-center align-center bg-very-light-blue">
      <Header />
      <div className="h-screen w-full">
        <div className="relative" ref={headerRef}>
          <PageHeading
            title="Tayler Burke"
            description="Front-End Web Developer with 4+ years industry experience, specialising in React and React-based Frameworks"
          />
          {/* <div className="absolute bottom-0 left-0 w-full bg-gradient-to-b from-transparent to-very-light-blue h-40"></div> */}
        </div>
        <Stamp />
      </div>
      <div ref={scrollTrigger} />
      <Featured
        {...{
          title: "Featured Project",
          itemName: PROJECT_CARDS[0].name,
          tools: PROJECT_CARDS[0].tools,
          description: PROJECT_CARDS[0].description,
        }}
      />
      <div
        className="flex justify-center items-center px-12 pt-12 pb-20"
        ref={wrapperRef}
      >
        <Title variant="h6" className="text-center font-bold">
          tb.
        </Title>
      </div>
      <Featured
        {...{
          title: "Current Role",
          titleTag: ABOUT_TIMELINE[ABOUT_TIMELINE.length - 1].date,
          itemName: ABOUT_TIMELINE[ABOUT_TIMELINE.length - 1].title,
          itemNameSubTitle: ABOUT_TIMELINE[ABOUT_TIMELINE.length - 1].subtitle,
          tools: ABOUT_TIMELINE[ABOUT_TIMELINE.length - 1].tech,
          description: ABOUT_TIMELINE[ABOUT_TIMELINE.length - 1].description,
        }}
      />
    </div>
  )
}

export default Home
