import React, { FC, useEffect, useLayoutEffect, useRef } from "react";
import TimelineItem, { ITimelineItem } from "./TimelineItem";
import cx from "classnames";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import TimelinePoint from "./TimelinePoint";

if (typeof document !== `undefined`) gsap.registerPlugin(ScrollTrigger);

interface ITimelineProps {
  items: ITimelineItem[];
}

const Timeline: FC<ITimelineProps> = ({ items }) => {
  const circle = useRef(null);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="w-1 h-full flex gap-10 flex-col relative justify-center items-center mb-[30vh]">
        <div className="w-full h-[85%] bg-black absolute">
          <div className="relative w-full h-full flex flex-col justify-between">
            <TimelinePoint />
          </div>
        </div>
        {items.map((item, index) => (
          <>
            {/* <span className="bg-black w-6 h-6 rounded-full"></span> */}
            <TimelineItem
              {...{ ...item, isLeft: index % 2 ? true : false }}
              className={cx("relative", {
                "-left-72": index % 2,
                "-right-72": !(index % 2),
              })}
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
