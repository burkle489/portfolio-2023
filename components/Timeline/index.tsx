import React, { FC } from "react";
import TimelineItem, { ITimelineItem } from "./TimelineItem";
import cx from "classnames";

interface ITimelineProps {
  items: ITimelineItem[];
}

const Timeline: FC<ITimelineProps> = ({ items }) => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="w-1 h-full flex gap-10 flex-col relative justify-center items-center">
        <div className="w-full h-[85%] bg-black absolute" />
        {items.map((item, index) => (
          <>
            {/* <span className="bg-black w-6 h-6 rounded-full"></span> */}
            <TimelineItem
              {...{ ...item, isLeft: index % 2 }}
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
