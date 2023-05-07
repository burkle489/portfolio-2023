import { FC } from "react"

export const ArrowRight: FC<{ className: string }> = ({ className }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="-0.709 -0.235 213 71"
      enable-background="new -0.709 -0.235 213 71"
      className={className}
    >
      <polygon points="0,26.488 0,44.144 167.747,44.144 167.747,70.631 211.89,35.316 167.747,0 167.747,26.488 " />
    </svg>
  )
}
