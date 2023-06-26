import Link from "next/link"
import { FC, SetStateAction } from "react"
import cx from "classnames"
import { HoverWrapper } from "../HoverWrapper"

interface IHomePageLinkProps {
  className: string
  innerClassName?: string
  setIsHovering?: React.Dispatch<SetStateAction<boolean>>
  pageHref?: string
  text?: string
  children?: React.ReactNode
}

const HomePageLink: FC<IHomePageLinkProps> = ({
  className,
  setIsHovering = () => {},
  pageHref = null,
  text = "",
  children = null,
  innerClassName = "",
}) => {
  return (
    <div
      onMouseEnter={() => {
        setIsHovering(true)
      }}
      onMouseLeave={() => {
        setIsHovering(false)
      }}
      className={cx(``, className)}
    >
      {pageHref ? (
        <HoverWrapper>
          <Link
            href={pageHref}
            className={cx(
              "h-full w-full flex flex-col justify-center items-center  lg:cursor-none",
              innerClassName
            )}
          >
            {children ? (
              children
            ) : (
              <h2 className="text-3xl uppercase">{text}</h2>
            )}
          </Link>
        </HoverWrapper>
      ) : (
        <div
          className={cx(
            "h-full w-full flex flex-col justify-center items-center",
            innerClassName
          )}
        >
          {children ? children : <h2 className="text-3xl uppercase">{text}</h2>}
        </div>
      )}
    </div>
  )
}

export default HomePageLink
