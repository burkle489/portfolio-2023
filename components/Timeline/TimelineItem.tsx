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
  const cardRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    if (isLeft) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, x: -300 },
        {
          opacity: 1,
          x: 0,
          duration: 1.5,
          ease: "bounce",
          scrollTrigger: {
            trigger: cardRef.current,
            // toggleActions: "play none none reverse",
            start: "bottom bottom",
          },
        }
      );
      gsap.fromTo(
        bgRef.current,
        { opacity: 0, x: -300, delay: 0.3 },
        {
          opacity: 1,
          x: 0,
          duration: 1.5,
          ease: "power3.in",
          delay: 0.5,
          scrollTrigger: {
            trigger: cardRef.current,
            // toggleActions: "play none none reverse",
            start: "bottom bottom",
          },
        }
      );
    } else {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, x: 300, ease: "power3" },
        {
          opacity: 1,
          x: 0,
          duration: 1.5,
          ease: "bounce",
          scrollTrigger: {
            trigger: cardRef.current,
            // toggleActions: "play none none reverse",
            start: "bottom bottom",
          },
        }
      );
      gsap.fromTo(
        bgRef.current,
        { opacity: 0, x: 300, ease: "power3", delay: 0.3 },
        {
          opacity: 1,
          x: 0,
          duration: 1.5,
          delay: 0.5,
          ease: "power3.in",
          scrollTrigger: {
            trigger: cardRef.current,
            // toggleActions: "play none none reverse",
            start: "bottom bottom",
          },
        }
      );
    }
  }, []);

  return (
    <div className={cx(" h-fit w-96 relative", className)}>
      <div
        ref={bgRef}
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
          "border-2 border-black px-6 py-6 bg-white relative z-10 pt-16 ",
          {
            "box-shadow__top-left text-right": isLeft,
            "box-shadow__top-right": !isLeft,
          }
        )}
        ref={cardRef}
      >
        <Title
          variant="h4"
          className={cx(
            "absolute -top-2 rounded-full bg-blue-300 border-2 border-black px-6 py-3 mb-0",
            {
              "-left-4": !isLeft,
              "-right-4": isLeft,
            }
          )}
        >
          {title}
        </Title>
        <Title variant="h5">{subtitle}</Title>
        <Title variant="h6">{date}</Title>
        <p className="mb-2">{description}</p>
        <div
          className={cx("flex flex-wrap gap-2 text-sm italic mb-2", {
            "justify-end": isLeft,
          })}
        >
          {tech?.map((item) => (
            <span className="rounded-full bg-yellow-200 px-3 py-0.5 whitespace-nowrap border border-black">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;
