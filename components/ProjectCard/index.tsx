import { FC, useEffect, useRef, useState } from "react"
import { IProjectCard } from "../../pages/projects"
import Header from "../Header"
import Title from "../Title/Title"
import cx from "classnames"
import Image from "next/image"
import SocialLink from "../SocialLink"
import { SOCIALS } from "../../constants"
import gsap from "gsap"
import { HoverWrapper } from "../HoverWrapper"

interface IProjectCardProps extends IProjectCard {
  className: string
}

export const ProjectCard: FC<IProjectCardProps> = ({
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
        "col-span-1 relative odd:mr-[-0.125rem] even:ml-[-0.125rem]",
        { "mt-[-0.25rem]": index > 1 }
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
            objectFit="cover"
            style={{
              objectPosition: bgPosition,
              zIndex: 0,
              opacity: 0.1,
              clipPath: "polygon(0% 100%, 0% 100%, 0% 100%, 0% 100%, 0% 100%)",
            }}
            ref={bgRef}
          />
        </>
      )}
      <div className="flex gap-32 m-12 z-20 relative">
        <div className="w-[80%]">
          <Title variant="h2" className="">
            {name}
          </Title>
          <div className="flex gap-4 mb-20">
            {tools?.map((tool: string) => (
              <p className="uppercase font-bold mb-2">{tool}</p>
            ))}
          </div>
          <Title variant="h6">{description}</Title>
        </div>
        <div className="w-[20%] flex flex-col justify-between items-end">
          <div className="flex flex-col items-end">
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
              className="uppercase underline underline-offset-4 font-bold mb-2"
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
