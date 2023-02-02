import React, { FC } from "react";
import cx from "classnames";

export const CopyToClipboardBtn: FC<{ content?: any; className: string }> = ({
  content,
  className,
}) => {
  return (
    <span
      className={cx("flex justify-center items-center  rounded", className)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="flex h-8 w-8  active:translate-y-1 hover:cursor-pointer text-blue-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        onClick={() => navigator.clipboard.writeText(content)}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
        />
      </svg>
    </span>
  );
};
