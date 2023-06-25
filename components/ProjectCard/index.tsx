import { FC, useEffect, useRef, useState } from "react"
import Header from "../Header"
import Title from "../Title/Title"
import cx from "classnames"
import Image from "next/image"
import SocialLink from "../SocialLink"
import { SOCIALS } from "../../constants"
import gsap from "gsap"
import { HoverWrapper } from "../HoverWrapper"

interface IProjectCardProps {
  className: string
}

export const ProjectCard: FC<any> = ({
  className,
  name,
  logo,
  description,
  screenshot,
  id,
  tools,
  github,
  hostedLink,
  logoAlt,
  screenshotAlt,
  index,
  bgPosition,
  projectType,
}) => {
  const bgRef = useRef(null)
  const timeline = useRef(gsap.timeline({ paused: true }))

  const [mouseEnter, setMouseEnter] = useState<boolean>(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      timeline.current
        .fromTo(
          bgRef.current,
          { clipPath: "polygon(0% 100%, 0% 100%, 0% 100%, 0% 100%, 0% 100%)" },
          {
            clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 0%, 0% 0%)",
            ease: "none",
            // duration: 0.5,
          }
        )
        .to(bgRef.current, {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 100% 0%, 0% 0%)",
          ease: "none",
        })
    }, timeline)
    return () => ctx.revert()
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
              opacity: 0.1,
              clipPath: "polygon(0% 100%, 0% 100%, 0% 100%, 0% 100%, 0% 100%)",
              objectFit: "cover",
            }}
            ref={bgRef}
          />
        </>
      )}
      <div className="flex flex-col gap-8 p-8 md:p-12 z-20 relative">
        <div className="w-full xl:w-[80%]">
          <Title variant="h2" className="">
            {name}
          </Title>
          <div className="flex flex-wrap gap-4 mb-12">
            {tools?.map((tool: string) => (
              <p className="uppercase font-bold">{tool}</p>
            ))}
          </div>
          <Title variant="h6">{description}</Title>
        </div>
        <div className="w-full flex flex-col xs:flex-row justify-between items-between gap-2 md:gap-0 xs:items-end">
          <div className="flex flex-row gap-4 items-end">
            <a
              href={github}
              className="uppercase underline underline-offset-4 font-bold mb-2"
              target="_blank"
              referrerPolicy="no-referrer"
            >
              <HoverWrapper>github</HoverWrapper>
            </a>
            <a
              href={hostedLink}
              className="uppercase underline underline-offset-4 font-bold mb-2 whitespace-nowrap"
              target="_blank"
              referrerPolicy="no-referrer"
            >
              <HoverWrapper>live link</HoverWrapper>
            </a>
          </div>
          <div className="flex flex-col justify-start items-end">
            <Image src={logo} alt={logoAlt} />
          </div>
        </div>
      </div>
      <div className="h-full w-1 bg-main-blue absolute top-0 left-0 z-20"></div>
      <div className="h-full w-1 bg-main-blue absolute top-0 right-0 z-20"></div>
      <div className="h-1 w-full bg-main-blue absolute bottom-0 left-0 z-20"></div>
      <div className="h-1 w-full bg-main-blue absolute top-0 left-0 z-20"></div>
    </div>
  )
}
