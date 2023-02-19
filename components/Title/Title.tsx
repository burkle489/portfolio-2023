import { FC } from "react";
import cx from "classnames";

interface ITitleProps {
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
  className?: string;
  bgShape?: "blue" | "orange" | "yellow" | "red";
}

const Title: FC<ITitleProps> = ({
  variant,
  className,
  bgShape = undefined,
  children,
}) => {
  switch (variant) {
    case "h1":
      return <h1 className={cx(`text-7xl mb-4`, className)}>{children}</h1>;
    case "h2":
      return <h2 className={cx(`text-4xl mb-3`, className)}>{children}</h2>;
    case "h3":
      return <h3 className={cx(`text-3xl mb-2`, className)}>{children}</h3>;
    case "h4":
      return <h4 className={cx(`text-2xl mb-2`, className)}>{children}</h4>;
    case "h5":
      return <h5 className={cx(`text-xl mb-2`, className)}>{children}</h5>;
    case "h6":
      return <h6 className={cx(`text-lg mb-1`, className)}>{children}</h6>;
    default:
      return <div className={cx(``, className)}>{children}</div>;
  }
};

export default Title;
