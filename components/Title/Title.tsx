import cx from "classnames"
import { FC, useRef } from "react"
interface ITitleProps {
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  children: React.ReactNode
  tag?: string
  className?: string
}

const Title: FC<ITitleProps> = ({ variant, className, children, tag }) => {
  const ref = useRef(null)

  switch (variant) {
    case "h1":
      return (
        <h1
          ref={ref}
          className={cx(`text-6xl md:text-7xl lg:text-8xl mb-4`, className)}
        >
          {children}
          {tag && (
            <span className="mr-1 !text-lg h-full !font-semibold">{tag}</span>
          )}
        </h1>
      )
    case "h2":
      return (
        <h2 ref={ref} className={cx(`text-5xl md:text-6xl mb-3`, className)}>
          {children}
          {tag && (
            <span className="mr-1 !text-[1rem] h-full !font-semibold">
              {tag}
            </span>
          )}
        </h2>
      )
    case "h3":
      return (
        <h3
          ref={ref}
          className={cx(`text-2xl md:text-3xl lg:text-4xl mb-2`, className)}
        >
          {children}
          {tag && (
            <span className="mr-1 !text-lg h-full !font-semibold">{tag}</span>
          )}
        </h3>
      )
    case "h4":
      return (
        <h4
          ref={ref}
          className={cx(`text-xl md:text-2xl lg:text-3xl mb-2`, className)}
        >
          {children}
          {tag && (
            <span className="mr-1 !text-lg h-full !font-semibold">{tag}</span>
          )}
        </h4>
      )
    case "h5":
      return (
        <h5
          ref={ref}
          className={cx(`text-lg md:text-xl lg:text-2xl mb-2`, className)}
        >
          {children}
          {tag && (
            <span className="mr-1 !text-lg h-full !font-semibold">{tag}</span>
          )}
        </h5>
      )
    case "h6":
      return (
        <h6 ref={ref} className={cx(`lg:text-xl mb-1`, className)}>
          {children}
          {tag && (
            <span className="mr-1 !text-lg h-full !font-semibold">{tag}</span>
          )}
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
