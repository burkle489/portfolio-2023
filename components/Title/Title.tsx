import { FC, MutableRefObject, useEffect, useRef } from "react"
import cx from "classnames"
import gsap from "gsap"
interface ITitleProps {
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  children: React.ReactNode
  className?: string
  bgShape?: "blue" | "orange" | "yellow" | "red"
  timeline?: MutableRefObject<gsap.core.Timeline>
}

const Title: FC<ITitleProps> = ({
  variant,
  className,
  bgShape = undefined,
  children,
  timeline,
}) => {
  const ref = useRef(null)
  useEffect(() => {
    if (!timeline || !timeline.current) return
    const ctx = gsap.context(() => {
      timeline.current.fromTo(
        ref.current,
        { y: 1000 },
        { y: 0, duration: 1.1, ease: "power1", delay: 0.075 }
      )
    }, timeline)
    return () => ctx.revert()
  }, [timeline?.current])
  switch (variant) {
    case "h1":
      return (
        <h1 ref={ref} className={cx(`text-8xl mb-4`, className)}>
          {children}
        </h1>
      )
    case "h2":
      return (
        <h2 ref={ref} className={cx(`text-6xl mb-3`, className)}>
          {children}
        </h2>
      )
    case "h3":
      return (
        <h3 ref={ref} className={cx(`text-4xl mb-2`, className)}>
          {children}
        </h3>
      )
    case "h4":
      return (
        <h4 ref={ref} className={cx(`text-3xl mb-2`, className)}>
          {children}
        </h4>
      )
    case "h5":
      return (
        <h5 ref={ref} className={cx(`text-2xl mb-2`, className)}>
          {children}
        </h5>
      )
    case "h6":
      return (
        <h6 ref={ref} className={cx(`text-xl mb-1`, className)}>
          {children}
        </h6>
      )
    default:
      return (
        <div ref={ref} className={cx(``, className)}>
          {children}
        </div>
      )
  }
}

export default Title
