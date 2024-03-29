import gsap from "gsap"
import Link from "next/link"
import { FC, useEffect, useRef } from "react"
import Container from "../Container"
import { ActiveHoverWrapper } from "../MouseWrappers/ActiveHoverWrapper"
import Title from "../Title/Title"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

if (typeof document !== `undefined`) gsap.registerPlugin(ScrollTrigger)

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
  const topBorder = useRef(null)
  const bottomBorder = useRef(null)
  const seeMoreBtn = useRef(null)
  const innerFeatured = useRef(null)
  const secondBottomBorder = useRef(null)
  const wrapperRef = useRef(null)
  const hoverTimeline = useRef(gsap.timeline({ paused: true }))

  const ifAllRefs =
    wrapperRef.current &&
    carouselInner.current &&
    innerFeatured.current &&
    topBorder.current &&
    bottomBorder.current &&
    secondBottomBorder.current &&
    seeMoreBtn.current &&
    carouselTimeline.current

  useEffect(() => {
    // if (ifAllRefs) {
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: carouselInner.current,
            start: "top bottom",
          },
          paused: true,
        })
        .addLabel("first", 0)
        .addLabel("second", 1)
        .fromTo(
          innerFeatured.current,
          { yPercent: 200 },
          {
            yPercent: 0,
            duration: 1.5,
            ease: "power3.inOut",
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
          "=-0.5"
        )
        .fromTo(
          bottomBorder.current,
          { clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" },
          {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            duration: 2,
            ease: "power4",
          },
          "=-1.9"
        )
        .fromTo(
          secondBottomBorder.current,
          { clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" },
          {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            duration: 2,
            ease: "power4",
          },
          "=-1.8"
        )
        .fromTo(wrapperRef.current, { opacity: 0 }, { opacity: 1 }, "=-1.8")
        .fromTo(seeMoreBtn.current, { y: -100 }, { y: 0 }, "-=1.5")
    }, carouselTimeline)
    return () => ctx.revert()
    // }
  }, [])

  //hover animations
  useEffect(() => {
    if (hoverTimeline.current && innerFeatured.current) {
      const ctx = gsap.context(() => {
        hoverTimeline.current.to(innerFeatured.current, {
          scale: 1.02,
          duration: 0.7,
          ease: "power3.inOut",
        })
      })
      return () => ctx.revert()
    }
  }, [])

  return (
    <Container className="!px-0 !py-0 overflow-hidden">
      <div ref={carouselInner}>
        <div ref={topBorder} className=" bg-dark-blue h-1 w-full mb-6" />
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
        <div ref={bottomBorder} className=" bg-dark-blue h-1 w-full mt-6" />
        <div className="overflow-hidden w-full h-full">
          <div
            onMouseEnter={() => hoverTimeline.current.play()}
            onMouseLeave={() => hoverTimeline.current.reverse()}
            ref={innerFeatured}
            className="px-8 lg:px-12 py-6 lg:py-8 flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-20 overflow-hidden"
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
                  <p
                    className="uppercase font-bold mb-0 text-main-blue"
                    key={`tool-${index}`}
                  >
                    {tool}
                  </p>
                ))}
              </div>
              <Title variant="h6" className="text-md text-right">
                {description}
              </Title>
            </div>
          </div>
        </div>

        <div ref={secondBottomBorder} className=" bg-dark-blue h-1 w-full" />
        <div className="flex justify-end w-full overflow-hidden">
          <ActiveHoverWrapper>
            <div
              ref={seeMoreBtn}
              className="w-[200px] group py-4 flex justify-center items-center text-right relative hover:bg-dark-blue duration-500 transition-all hover:text-light-beige"
            >
              <Link
                href="/projects"
                className="uppercase w-full h-full text-center font-bold lg:cursor-none"
              >
                See more
              </Link>
              <div className=" bg-dark-blue h-1 w-full absolute left-0 bottom-0 duration-500 transition-all" />
              <div className=" bg-dark-blue h-full w-1 absolute left-0 top-0 duration-500 transition-all" />
            </div>
          </ActiveHoverWrapper>
        </div>
      </div>
    </Container>
  )
}
