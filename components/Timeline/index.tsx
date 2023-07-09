import React, { FC, useEffect, useLayoutEffect, useRef } from "react"
import TimelineItem, { ITimelineItem } from "./TimelineItem"
import cx from "classnames"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import TimelinePoint from "./TimelinePoint"

if (typeof document !== `undefined`) gsap.registerPlugin(ScrollTrigger)

interface ITimelineProps {
  items: ITimelineItem[]
}

const Timeline: FC<ITimelineProps> = ({ items }) => {
  const circle = useRef(null)

  return (
    <div className="w-full h-fit flex justify-center items-center">
      <div className="w-full h-full">
        {items.map((item, index) => (
          <React.Fragment key={`aboutTl-${index}`}>
            <TimelineItem {...{ ...item }} />
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default Timeline
