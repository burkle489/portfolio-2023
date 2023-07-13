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
  const secondDescriptionRef = useRef(null)
  const dividerRef = useRef(null)
  const headingRef = useRef(null)

  useEffect(() => {
    if (!timeline.current) return

    const ctx = gsap.context(() => {
      // timeline.current
      gsap.fromTo(
        dividerRef.current,
        { clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" },
        {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          duration: 2,
          delay: 0.2,
          ease: "power4",
        }
      )
      gsap.to(headingRef.current, {
        y: 0,
        duration: 1,
        delay: 0.1,
        ease: "power4.inOut",
      })
      gsap.to(descriptionRef.current, {
        delay: 0.7,
        duration: 1.2,
        y: 0,
        marginTop: 40,
        ease: "power4.inOut",
      })
      gsap.to(secondDescriptionRef.current, {
        delay: 1,
        duration: 1.2,
        marginTop: 40,
        y: 0,
        ease: "power4.inOut",
      })
    }, timeline)
    return () => ctx.revert()
  }, [])

  return (
    <section className="relative border-dark-blue bg-light-beige flex flex-col justify-center items-center py-10 xl:py-32 !pt-32 md:!pt-52">
      <div className="relative w-full h-full flex justify-start">
        <div className="w-full flex flex-col justify-start overflow-hidden">
          <div className="overflow-hidden">
            <div className="overflow-hidden">
              <div ref={headingRef} className="translate-y-[120%]">
                <Title
                  variant="h1"
                  className="!text-[5rem] sm:!text-[8rem] xl:!text-[13rem] font-bold relative mb-8 text-dark-blue pl-12"
                  tag={titleTag}
                >
                  {title}
                </Title>
              </div>
            </div>
            <div className="h-1 w-full bg-dark-blue" ref={dividerRef} />

            {description && (
              <div className="relative w-4/5 overflow-hidden">
                <h2
                  className="text-lg sm:text-3xl xl:text-4xl pl-12 xl:pl-20 text-dark-blue translate-y-[-120%]"
                  ref={descriptionRef}
                >
                  {description}
                </h2>
              </div>
            )}
            {secondDescription && (
              <div className="relative w-4/5 overflow-hidden">
                <h2
                  className="text-lg sm:text-3xl xl:text-4xl pl-12 xl:pl-20 text-dark-blue translate-y-[-120%]"
                  ref={secondDescriptionRef}
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
