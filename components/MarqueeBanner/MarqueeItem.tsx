import { FC } from "react"
import Title from "../Title/Title"

export const MarqueeItem: FC<{ text: string; className?: string }> = ({
  text,
}) => {
  return (
    <Title
      variant="h2"
      className="px-8 md:px-12 lg:px-16 group-hover:text-very-light-blue !mb-0 py-2"
    >
      {text}
    </Title>
  )
}
