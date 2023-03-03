import { FC, useEffect, useRef } from "react";
import Title from "../Title/Title";
import cx from "classnames";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof document !== `undefined`) gsap.registerPlugin(ScrollTrigger);

export interface ITimelineItem {
  title: string;
  subtitle: string;
  date: string;
  description: string;
  tech?: string[];
}

interface ITimelineItemProps extends ITimelineItem {
  className?: string;
  isLeft: boolean;
}

const TimelineItem: FC<ITimelineItemProps> = ({
  title,
  subtitle,
  date,
  description,
  tech,
  className,
  isLeft,
}) => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref && ref.current) {
      if (isLeft) {
        gsap.fromTo(
          ref.current,
          { opacity: 0, x: -300 },
          {
            opacity: 1,
            x: 0,
            duration: 1.5,
            ease: "bounce",
            scrollTrigger: {
              trigger: ref.current,
              toggleActions: "play none none reverse",
              start: "bottom bottom",
            },
          }
        );
      } else {
        gsap.fromTo(
          ref.current,
          { opacity: 0, x: 300 },
          {
            opacity: 1,
            x: 0,
            duration: 1.5,
            ease: "bounce",
            scrollTrigger: {
              trigger: ref.current,
              toggleActions: "play none none reverse",
              start: "bottom bottom",
            },
          }
        );
      }
    }
  }, [ref]);

  return (
    <div className={cx(" h-fit w-96 relative", className)} ref={ref}>
      <div
        className={cx(
          "absolute w-full h-full border-black border-2 -top-6 -z-0",
          {
            "stripes-background__inverse -left-6": isLeft,
            "stripes-background -right-6 ": !isLeft,
          }
        )}
      ></div>
      <div
        className={cx(
          "border-2 border-black px-6 py-6 bg-white relative z-10 ",
          {
            "box-shadow__top-left": isLeft,
            "box-shadow__top-right": !isLeft,
          }
        )}
      >
        <Title variant="h3" className="mb-0">
          {title}
        </Title>
        <p className="text-sm italic mb-2">{tech?.join(", ")}</p>
        <Title variant="h5">{subtitle}</Title>
        <Title variant="h6">{date}</Title>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default TimelineItem;
