import { FC, useEffect, useLayoutEffect, useRef } from "react"
import Container from "../Container"
import Title from "../Title/Title"
import gsap from "gsap"
import SocialLink from "../SocialLink"
import { SOCIALS } from "../../constants"

interface IPageHeadingProps {
  title: string
  description?: string
  secondDescription?: string
  hasButtons?: boolean
}

export const PageHeading: FC<IPageHeadingProps> = ({
  title,
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
        { y: 3000 },
        { y: 0, delay: 0.075, duration: 1.5, ease: "exponential" },
        "-=1.35"
      )
    }, timeline)
    return () => ctx.revert()
  }, [])

  return (
    <section className="relative border-main-blue bg-very-light-blue flex flex-col justify-center items-center py-10 xl:py-32 !pt-52">
      <div className="relative w-full h-full flex justify-start">
        <div className="w-full flex flex-col justify-start overflow-hidden">
          <div className="overflow-hidden">
            <Title
              variant="h1"
              className="!text-[5rem] sm:!text-[8rem] xl:!text-[13rem] !font-thin relative mb-8 text-main-blue pl-12"
              timeline={timeline}
            >
              {title}
            </Title>
            <div className="h-1 w-full bg-main-blue" />
            {description && (
              <div className="relative w-4/5 mt-12">
                {/* <div className="w-0.5 h-8 bg-[#000] absolute left-3 top-1" /> */}
                {/* <div className="w-1 h-20 bg-[#999] absolute left-5 top-1" /> */}
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
                {/* <div className="w-0.5 h-8 bg-[#000] absolute left-3 top-1" /> */}
                {/* <div className="w-1 h-20 bg-[#999] absolute left-5 top-1" /> */}
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

        {/* <div className="absolute right-8 -top-8 h-full flex items-center justify-start flex-col">
          <div className=" w-[1px] h-3/5 bg-light-blue" />
          <p className="text-light-blue">tb.</p>
        </div> */}
      </div>
    </section>
  )
}
