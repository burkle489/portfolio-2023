import { FC, useEffect, useLayoutEffect, useRef } from "react"
import Container from "../Container"
import Title from "../Title/Title"
import gsap from "gsap"
import SocialLink from "../SocialLink"
import { SOCIALS } from "../../constants"

interface IPageHeadingProps {
  title: string
  description?: string
  hasButtons?: boolean
}

export const PageHeading: FC<IPageHeadingProps> = ({
  title,
  description,
  hasButtons,
}) => {
  const timeline = useRef(
    gsap.timeline().addLabel("first", 0).addLabel("second", 1)
  )
  const descriptionRef = useRef(null)

  useEffect(() => {
    if (!timeline.current) return

    const ctx = gsap.context(() => {
      timeline.current.fromTo(
        descriptionRef.current,
        { y: 1000 },
        { y: 0, delay: 0.2, duration: 1.5, ease: "power1" },
        "first"
      )
    }, timeline.current)
    return () => ctx.revert()
  }, [])

  return (
    <Container
      className="relative min-h-[60vh] border-y-4 border-[#000] bg-white flex flex-col justify-center items-center"
      innerClassName="flex items-center "
    >
      <div className="w-full h-full flex items-center justify-start">
        <div className="w-3/5 flex flex-col justify-center overflow-hidden">
          <Title variant="h1" className="text-[9rem]" timeline={timeline}>
            {title}
          </Title>
          {description && (
            <h2 className="text-3xl" ref={descriptionRef}>
              {description}
            </h2>
          )}
        </div>
        {hasButtons && (
          <div className="flex gap-6 w-2/5 justify-center">
            <SocialLink social={SOCIALS.LINKEDIN} />
            <SocialLink social={SOCIALS.GITHUB} />
          </div>
        )}
        <div className="absolute right-8 bottom-8 h-full flex items-center justify-end flex-col">
          <div className=" w-[1px] h-3/5 bg-black" />
          <p>tb.</p>
        </div>
      </div>
    </Container>
  )
}
