import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { FC, ReactNode, useEffect, useRef } from "react"
import Marquee from "react-fast-marquee"
import Container from "../Container"

if (typeof document !== `undefined`) gsap.registerPlugin(ScrollTrigger)
const isBrowser = () => typeof window !== "undefined" //The approach recommended by Next.js

export const MarqueeBanner: FC<{ children: ReactNode }> = ({ children }) => {
  const marqueeTimeline = useRef(gsap.timeline())
  const marqueeInner = useRef(null)
  const marqueeTopBorder = useRef(null)
  const marqueeBottomBorder = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: marqueeInner.current,
            start: "top bottom",
          },
        })
        .addLabel("first", 0)
        .addLabel("second", 1)
        .fromTo(
          marqueeInner.current,
          { y: 2000 },
          {
            y: 0,
          },
          "first"
        )
        .fromTo(
          marqueeTopBorder.current,
          { clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" },
          {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            duration: 2,
            ease: "power4",
          },
          "second"
        )
        .fromTo(
          marqueeBottomBorder.current,
          { clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" },
          {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            duration: 2,
            delay: 0.2,
            ease: "power4",
          },
          "second"
        )
    }, marqueeTimeline)
    return () => ctx.revert()
  }, [])

  return (
    <Container
      innerRef={marqueeInner}
      className="!px-0 !py-0 group hover:bg-main-blue transition-all duration-500"
    >
      <div ref={marqueeTopBorder} className=" bg-main-blue h-1 w-full mb-20" />
      <Marquee pauseOnHover className="flex">
        {children}
      </Marquee>
      <div
        ref={marqueeBottomBorder}
        className=" bg-main-blue h-1 w-full mt-20"
      />
    </Container>
  )
}
