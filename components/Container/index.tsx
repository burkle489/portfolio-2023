import React, { FC, MutableRefObject, useLayoutEffect, useRef } from "react"
import cx from "classnames"
import gsap from "gsap"

interface IContainerProps {
  children: React.ReactNode
  className?: string
  innerClassName?: string
}

const Container: FC<IContainerProps> = ({
  children,
  className,
  innerClassName,
}) => {
  return (
    <section className={cx("p-12 md:p-20 xl:p-32 w-full h-full", className)}>
      <div
        className={cx("max-w-[1500px] w-full h-full mx-auto", innerClassName)}
      >
        {children}
      </div>
    </section>
  )
}

export default Container
