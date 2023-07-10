import { FC, useEffect, useLayoutEffect, useRef } from "react"
import Container from "../Container"
import Title from "../Title/Title"
import gsap from "gsap"
import SocialLink from "../SocialLink"
import { SOCIALS } from "../../constants"

interface IPageHeadingProps {
  title: string
  titleTag: string
  description?: string
  secondDescription?: string
  hasButtons?: boolean
}

export const PageHeading: FC<IPageHeadingProps> = ({
  title,
  titleTag,
  description,
  secondDescription,
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
        {},
        { delay: 0.075, duration: 1.5, ease: "exponential" },
        "-=1.35"
      )
    }, timeline)
    return () => ctx.revert()
  }, [])

  return (
    <section className="relative border-main-blue bg-very-light-blue flex flex-col justify-center items-center py-10 xl:py-32 !pt-32 md:!pt-52">
      <div className="relative w-full h-full flex justify-start">
        <div className="w-full flex flex-col justify-start overflow-hidden">
          <div className="overflow-hidden">
            <Title
              variant="h1"
              className="!text-[5rem] sm:!text-[8rem] xl:!text-[13rem] font-bold relative mb-8 text-main-blue pl-12"
              timeline={timeline}
              tag={titleTag}
            >
              {title}
            </Title>
            <div className="h-1 w-full bg-main-blue" />
            {description && (
              <div className="relative w-4/5 mt-12">
                <h2
                  className="text-lg sm:text-3xl xl:text-4xl pl-12 xl:pl-20 text-main-blue"
                  ref={descriptionRef}
                >
                  {description}
                </h2>
              </div>
            )}
            {secondDescription && (
              <div className="relative w-4/5 mt-12">
                <h2
                  className="text-lg sm:text-3xl xl:text-4xl pl-12 xl:pl-20 text-main-blue"
                  ref={descriptionRef}
                >
                  {secondDescription}
                </h2>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
