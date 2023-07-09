import React, { FC, MutableRefObject, useLayoutEffect, useRef } from "react"
import cx from "classnames"
import gsap from "gsap"

interface IContainerProps {
  children: React.ReactNode
  className?: string
  innerClassName?: string
  innerRef?: MutableRefObject<any>
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

const Container: FC<IContainerProps> = ({
  children,
  innerRef,
  className,
  innerClassName,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <section
      ref={innerRef}
      className={cx("py-12 md:py-20 xl:py-32 w-full h-full", className)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className={cx(" w-full h-full mx-auto", innerClassName)}>
        {children}
      </div>
    </section>
  )
}

export default Container
