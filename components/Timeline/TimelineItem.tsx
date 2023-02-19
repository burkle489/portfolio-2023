import { FC } from "react";
import Title from "../Title/Title";
import cx from "classnames";

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
  return (
    <div className={cx(" h-fit w-96 relative", className)}>
      <div
        className={cx(
          "absolute w-full h-full border-black border-2 -top-6 -z-0",
          {
            "stripes-background__inverse -left-6": isLeft,
            "stripes-background -right-6": !isLeft,
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
