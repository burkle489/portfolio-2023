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
      className="h-[60vh] border-y-2 border-[#999999] bg-white"
      innerClassName="flex items-center"
    >
      <div className="w-3/5 flex flex-col justify-center overflow-hidden">
        <Title variant="h1" timeline={timeline}>
          {title}
        </Title>
        {description && <p ref={descriptionRef}>{description}</p>}
      </div>
      {hasButtons && (
        <div className="flex gap-6 w-2/5 justify-center">
          <SocialLink social={SOCIALS.LINKEDIN} />
          <SocialLink social={SOCIALS.GITHUB} />
        </div>
      )}
    </Container>
  )
}
