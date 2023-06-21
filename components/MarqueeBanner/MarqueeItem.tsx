import { FC } from "react"

export const MarqueeItem: FC<{ text: string; className?: string }> = ({
  text,
}) => {
  return (
    <span className="text-8xl px-16 group-hover:text-very-light-blue">
      {text}
    </span>
  )
}
