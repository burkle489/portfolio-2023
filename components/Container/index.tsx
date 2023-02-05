import React, { FC } from "react";
import cx from "classnames";

interface IContainerProps {
  children: React.ReactNode;
  Tag: keyof JSX.IntrinsicElements;
  className?: string;
  innerClassName?: string;
}

const Container: FC<IContainerProps> = ({
  Tag,
  children,
  className,
  innerClassName,
}) => {
  return (
    <Tag className={cx("p-12 md:p-20 xl:p-32", className)}>
      <div
        className={cx("max-w-[1200px] w-full h-full mx-auto", innerClassName)}
      >
        {children}
      </div>
    </Tag>
  );
};

export default Container;
