import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import Image from "next/image"
import { FC, useEffect, useRef } from "react"
import Container from "../Container"
import stamp from "/public/stamp.png"

if (typeof document !== `undefined`) gsap.registerPlugin(ScrollTrigger)

export const Stamp: FC = () => {
  const stampRef = useRef(null)
  const stampInnerRef = useRef(null)

  useEffect(() => {
    if (stampRef.current) {
      const ctx = gsap.context(() => {
        gsap
          .timeline()
          .to(stampRef.current, { opacity: 1, duration: 1, delay: 1 })
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
      }, stampRef)
      return () => ctx.revert()
    }
  }, [])

  return (
    <Container
      className="!pt-0 md:!pt-20 mb-20 !h-fit"
      innerClassName="flex justify-center items-center relative"
    >
      <div ref={stampRef} className="relative opacity-0">
        <Image
          alt="stamp"
          src={stamp}
          width={200}
          height={200}
          ref={stampInnerRef}
        />
        <div className="absolute top-[calc(50%-11px)] left-[calc(50%-12px)] w-[24px] h-[22px]">
          tb.
        </div>
      </div>
    </Container>
  )
}
