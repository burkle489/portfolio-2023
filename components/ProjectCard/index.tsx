import cx from "classnames"
import gsap from "gsap"
import Image from "next/image"
import { FC, useEffect, useRef, useState } from "react"
import { ActiveHoverWrapper } from "../MouseWrappers/ActiveHoverWrapper"
import Title from "../Title/Title"

export const ProjectCard: FC<any> = ({
  name,
  logo,
  description,
  screenshot,
  tools,
  github,
  hostedLink,
  logoAlt,
  screenshotAlt,
  index,
  bgPosition,
}) => {
  const bgRef = useRef(null)
  const timeline = useRef(gsap.timeline({ paused: true }))

  const [mouseEnter, setMouseEnter] = useState<boolean>(false)

  useEffect(() => {
    if (bgRef.current) {
      const ctx = gsap.context(() => {
        timeline.current
          .fromTo(
            bgRef.current,
            {
              clipPath: "polygon(0% 100%, 0% 100%, 0% 100%, 0% 100%, 0% 100%)",
            },
            {
              clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 0%, 0% 0%)",
              ease: "none",
              duration: 0.25,
            }
          )
          .to(bgRef.current, {
            clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 100% 0%, 0% 0%)",
            ease: "none",
            duration: 0.25,
          })
      }, timeline)
      return () => ctx.revert()
    }
  }, [])

  useEffect(() => {
    if (mouseEnter) {
      timeline.current.play()
    } else {
      timeline.current.reverse()
    }
  }, [mouseEnter])

  return (
    <div
      className={cx(
        "col-span-1 relative odd:mb-[-0.125rem] even:mt-[-0.125rem] lg:odd:mb-0 lg:even:mt-0 lg:odd:mr-[-0.125rem] lg:even:ml-[-0.125rem]",
        { "!mt-[-0.25rem]": index > 1 }
      )}
      onMouseEnter={() => {
        setMouseEnter(true)
      }}
      onMouseLeave={() => {
        setMouseEnter(false)
      }}
    >
      {screenshot && (
        <>
          <Image
            src={screenshot}
            alt={screenshotAlt}
            fill
            style={{
              objectPosition: bgPosition,
              zIndex: 0,
              opacity: 0.15,
              clipPath: "polygon(0% 100%, 0% 100%, 0% 100%, 0% 100%, 0% 100%)",
              objectFit: "cover",
            }}
            ref={bgRef}
          />
        </>
      )}
      <div className="flex flex-col justify-between gap-8 p-8 md:p-12 z-20 relative h-full">
        <div className="w-full xl:w-[85%]">
          <Title variant="h2" className="" tag={`0${index + 1}`}>
            {name}
          </Title>
          <div className="flex flex-wrap gap-4 mb-12">
            {tools?.map((tool: string, index: number) => (
              <p
                className="uppercase font-bold text-main-blue"
                key={`projtool-${index}`}
              >
                {tool}
              </p>
            ))}
          </div>
          <Title variant="h6">{description}</Title>
        </div>
        <div className="w-full flex flex-col xs:flex-row justify-between items-between gap-4 md:gap-0 xs:items-end">
          <div className="flex flex-row gap-4 items-end">
            {github && (
              <a
                href={github}
                className="uppercase underline underline-offset-4 font-bold text-main-blue lg:cursor-none hover:scale-[1.15] transition-all duration-300"
                target="_blank"
                referrerPolicy="no-referrer"
              >
                <ActiveHoverWrapper>github</ActiveHoverWrapper>
              </a>
            )}
            <a
              href={hostedLink}
              className="uppercase underline underline-offset-4 font-bold whitespace-nowrap text-main-blue lg:cursor-none hover:scale-[1.15] transition-all duration-300"
              target="_blank"
              referrerPolicy="no-referrer"
            >
              <ActiveHoverWrapper>live link</ActiveHoverWrapper>
            </a>
          </div>
          <div className="flex flex-col justify-start items-end w-full h-full rounded-xl overflow-hidden">
            <Image src={logo} alt={logoAlt} className="w-32 h-32" />
          </div>
        </div>
      </div>
      <div className="h-full w-1 bg-dark-blue absolute top-0 left-0 z-20"></div>
      <div className="h-full w-1 bg-dark-blue absolute top-0 right-0 z-20"></div>
      <div className="h-1 w-full bg-dark-blue absolute bottom-0 left-0 z-20"></div>
      <div className="h-1 w-full bg-dark-blue absolute top-0 left-0 z-20"></div>
    </div>
  )
}
