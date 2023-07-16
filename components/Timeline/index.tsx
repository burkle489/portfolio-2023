import React, { FC, useState } from "react"
import TimelineItem, { ITimelineItem } from "./TimelineItem"

interface ITimelineProps {
  items: ITimelineItem[]
}

const Timeline: FC<ITimelineProps> = ({ items }) => {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <div className="w-full h-fit flex justify-center items-center">
      <div className="w-full h-full">
        {items.map((item, index) => (
          <React.Fragment key={`aboutTl-${index}`}>
            <TimelineItem
              {...{ ...item, index, currentHovered: hovered, setHovered }}
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default Timeline
