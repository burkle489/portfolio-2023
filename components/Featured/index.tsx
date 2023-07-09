import { FC } from "react"
import gsap from "gsap"
import { NextPage } from "next"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef } from "react"
import stamp from "../public/stamp.png"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { PROJECT_CARDS } from "../../constants"
import Container from "../Container"
import Title from "../Title/Title"
import { ActiveHoverWrapper } from "../MouseWrappers/ActiveHoverWrapper"
import { HideWrapper } from "../MouseWrappers/HideWrapper"

if (typeof document !== `undefined`) gsap.registerPlugin(ScrollTrigger)
const isBrowser = () => typeof window !== "undefined" //The approach recommended by Next.js

export const Featured: FC<{
  title: string
  titleTag?: string
  itemName: string
  itemNameSubTitle?: string
  tools?: string[]
  description: string
}> = ({ title, titleTag, itemName, itemNameSubTitle, description, tools }) => {
  const carouselTimeline = useRef(gsap.timeline())
  const carouselInner = useRef(null)
  const scrollTrigger = useRef(null)
  const topBorder = useRef(null)
  const bottomBorder = useRef(null)
  const innerFeatured = useRef(null)
  const secondBottomBorder = useRef(null)
  const wrapperRef = useRef(null)
  const hoverTimeline = useRef(gsap.timeline({ paused: true }))
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

  //hover animations
  useEffect(() => {
    if (hoverTimeline.current && innerFeatured.current) {
      const ctx = gsap.context(() => {
        hoverTimeline.current.to(innerFeatured.current, {
          backgroundColor: "#1136a6",
          color: "#f0f3fc",
          duration: 0.7,
          ease: "power4",
        })
      })
      return () => ctx.revert()
    }
  }, [])

  return (
    <Container
      innerRef={carouselInner}
      className="!px-0 !py-0 group transition-all duration-500"
    >
      <div ref={topBorder} className=" bg-main-blue h-1 w-full mb-6" />
      <div
        className="flex flex-col sm:flex-row px-8 lg:px-12 justify-between"
        ref={wrapperRef}
      >
        <Title variant="h6" className="uppercase font-bold !mb-0 !text-xl">
          {title}
        </Title>

        <Title variant="h6" className="uppercase font-bold !mb-0 !text-xl">
          {titleTag}
        </Title>
      </div>
      <div ref={bottomBorder} className=" bg-main-blue h-1 w-full mt-6" />
      <HideWrapper>
        <div
          onMouseEnter={() => hoverTimeline.current.play()}
          onMouseLeave={() => hoverTimeline.current.reverse()}
          ref={innerFeatured}
          className="px-8 lg:px-12 py-6 lg:py-8 flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-20"
        >
          <Title variant="h2" className="w-full lg:w-1/2 !mb-0 !pb-0">
            {itemName}
          </Title>

          <div className="w-full lg:w-1/2 h-full">
            <Title variant="h3" className="text-right !mb-4 pb-0">
              {itemNameSubTitle}
            </Title>
            <div className="flex gap-4 mb-2 justify-end flex-wrap">
              {tools?.map((tool: string, index: number) => (
                <p className="uppercase font-bold mb-0" key={`tool-${index}`}>
                  {tool}
                </p>
              ))}
            </div>
            <Title variant="h6" className="text-md text-right">
              {description}
            </Title>
          </div>
        </div>
      </HideWrapper>

      <div ref={secondBottomBorder} className=" bg-main-blue h-1 w-full" />
      <div className="flex justify-end w-full">
        <ActiveHoverWrapper>
          <div className="w-[200px] py-4 flex justify-center items-center text-right relative">
            <Link
              href="/projects"
              className="uppercase w-full h-full text-center font-bold lg:cursor-none"
            >
              See more
            </Link>
            <div className=" bg-main-blue h-1 w-full absolute left-0 bottom-0" />
            <div className=" bg-main-blue h-full w-1 absolute left-0 top-0" />
          </div>
        </ActiveHoverWrapper>
      </div>
    </Container>
  )
}
