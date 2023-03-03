import { FC, useEffect, useRef } from "react";
import Title from "../Title/Title";
import cx from "classnames";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof document !== `undefined`) gsap.registerPlugin(ScrollTrigger);

interface ITimelinePointProps {}

const TimelinePoint: FC<ITimelinePointProps> = ({}) => {
  return (
    <div className="sticky w-8 h-8 -translate-x-3.5 top-[50vh] bg-white rounded-full border-[3px] border-black" />
  );
};

export default TimelinePoint;
