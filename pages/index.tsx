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
      // gsap.to(stampRef.current, {
      //   scrollTrigger: {
      //     trigger: "html",
      //     pin: true,
      //     scrub: 0.2,
      //     start: "top top",
      //     end: "+=10000",
      //   },
      //   rotation: 360 * 5,
      //   duration: 1,
      //   ease: "none",
      // })
    }, stampRef.current)
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
    }, carouselTimeline.current)
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
        <Container
          className="!pt-20 mb-20 !h-fit"
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
      </div>
      <div ref={scrollTrigger} />
      <Container
        innerRef={carouselInner}
        className="!px-0 !py-0 group  transition-all duration-500"
      >
        <div ref={topBorder} className=" bg-main-blue h-1 w-full mb-6" />
        <div className="flex pl-12" ref={wrapperRef}>
          <Title variant="h6" className="uppercase font-bold">
            Featured Project
          </Title>
        </div>
        <div ref={bottomBorder} className=" bg-main-blue h-1 w-full mt-6" />
        <div className="px-12 py-8 flex justify-between items-center gap-20">
          <Title variant="h1" className="w-[50%] mb-0 pb-0">
            {PROJECT_CARDS[0].name}
          </Title>
          <div className="w-[50%]">
            <div className="flex gap-4 mb-4 justify-end">
              {PROJECT_CARDS[0].tools?.map((tool: string) => (
                <p className="uppercase font-bold mb-2">{tool}</p>
              ))}
            </div>
            <Title variant="h6" className="text-md text-right">
              {PROJECT_CARDS[0].description}
            </Title>
          </div>
        </div>
        <div ref={secondBottomBorder} className=" bg-main-blue h-1 w-full" />
        <div className="flex justify-end w-full">
          <div className="w-[200px] py-4 flex justify-center items-center text-right relative">
            <Link
              href="/projects"
              className="uppercase w-full h-full text-center font-bold"
            >
              See more
            </Link>
            <div className=" bg-main-blue h-1 w-full absolute left-0 bottom-0" />
            <div className=" bg-main-blue h-full w-1 absolute left-0 top-0" />
          </div>
        </div>
      </Container>
      <div
        className="flex justify-center items-center px-12 py-20"
        ref={wrapperRef}
      >
        <Title variant="h6" className="text-center font-bold">
          tb.
        </Title>
      </div>
      <Container
        innerRef={carouselInner}
        className="!px-0 !py-0 group  transition-all duration-500 mb-20"
      >
        <div ref={topBorder} className=" bg-main-blue h-1 w-full mb-6" />
        <div className="flex justify-between px-12" ref={wrapperRef}>
          <Title variant="h6" className="uppercase font-bold">
            CURRENT ROLE
          </Title>
          <Title variant="h6" className="uppercase font-bold">
            {ABOUT_TIMELINE[ABOUT_TIMELINE.length - 1].date}
          </Title>
        </div>
        <div ref={bottomBorder} className=" bg-main-blue h-1 w-full mt-6" />
        <div className="px-12 py-8 flex justify-between items-center gap-20">
          <div>
            <Title variant="h2" className=" mb-0 pb-0">
              {ABOUT_TIMELINE[ABOUT_TIMELINE.length - 1].title}
            </Title>
            <Title variant="h4" className=" mb-0 pb-0">
              {ABOUT_TIMELINE[ABOUT_TIMELINE.length - 1].subtitle}
            </Title>
          </div>
          <div className="w-[50%]">
            <div className="flex gap-4 mb-4 justify-end">
              {ABOUT_TIMELINE[ABOUT_TIMELINE.length - 1].tech?.map(
                (tool: string) => (
                  <p className="uppercase font-bold mb-2">{tool}</p>
                )
              )}
            </div>
            <Title variant="h6" className="text-md text-right">
              {ABOUT_TIMELINE[ABOUT_TIMELINE.length - 1].description}
            </Title>
          </div>
        </div>
        <div ref={secondBottomBorder} className=" bg-main-blue h-1 w-full" />
        <div className="flex justify-end w-full">
          <div className="w-[200px] py-4 flex justify-center items-center text-right relative">
            <Link
              href="/about"
              className="uppercase w-full h-full text-center font-bold"
            >
              See more
            </Link>
            <div className=" bg-main-blue h-1 w-full absolute left-0 bottom-0" />
            <div className=" bg-main-blue h-full w-1 absolute left-0 top-0" />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Home
