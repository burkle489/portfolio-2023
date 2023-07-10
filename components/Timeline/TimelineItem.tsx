import { FC, useEffect, useRef } from "react"
import Title from "../Title/Title"
import cx from "classnames"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { HideWrapper } from "../MouseWrappers/HideWrapper"

if (typeof document !== `undefined`) gsap.registerPlugin(ScrollTrigger)

export interface ITimelineItem {
  title: string
  subtitle: string
  date: string
  description: string
  tech?: string[]
}

interface ITimelineItemProps extends ITimelineItem {
  className?: string
}

const TimelineItem: FC<ITimelineItemProps> = ({
  title,
  subtitle,
  date,
  description,
  tech,
  className,
}) => {
  const dateHeader = useRef(null)
  const container = useRef(null)
  const topBorder = useRef(null)
  const bottomBorder = useRef(null)
  const innerFeatured = useRef(null)
  const hoverTimeline = useRef(gsap.timeline({ paused: true }))

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: container.current,
            start: "center bottom",
          },
        })
        .addLabel("first", 0)
        .addLabel("second", 1)
        .fromTo(
          container.current,
          {},
          {
            duration: 1,
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
            delay: 0.2,
            ease: "power4",
          },
          "=-2"
        )
        .fromTo(dateHeader.current, { y: 200 }, { y: 0 }, "-=2")
    })
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
    <>
      <div
        className={cx(
          " h-full w-full relative flex flex-col justify-center items-center mb-28 ",
          className
        )}
        ref={container}
      >
        <div
          className="w-full flex flex-col justify-center items-center overflow-hidden"
          // ref={dateHeader}
        >
          {date && (
            <div
              className="relative border-4 border-main-blue border-b-0"
              ref={dateHeader}
            >
              <Title variant="h5" className="!mb-0 py-3 px-4">
                {date}
              </Title>
            </div>
          )}
          <div className=" bg-main-blue h-1 w-full" ref={topBorder} />
        </div>
        <div
          onMouseEnter={() => hoverTimeline.current.play()}
          onMouseLeave={() => hoverTimeline.current.reverse()}
          ref={innerFeatured}
          className="w-full h-full flex justify-between px-8 lg:px-12 pt-8 pb-8"
        >
          <HideWrapper>
            <div className="w-full flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
              <div className="w-full md:w-[40%]">
                <Title variant="h2">{title}</Title>
                <Title variant="h3" className="!mb-0">
                  {subtitle}
                </Title>
              </div>
              <div className="w-full md:w-[60%] flex flex-col">
                <Title variant="h5">{description}</Title>
                <div className="flex justify-end">
                  {tech?.map((t, index) => (
                    <p
                      className="text-xl uppercase font-thin pr-8"
                      key={`tech-${index}`}
                    >
                      {t}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </HideWrapper>
        </div>

        <div className=" bg-main-blue h-1 w-full mb-4" ref={bottomBorder} />
      </div>
    </>
  )
}

export default TimelineItem
