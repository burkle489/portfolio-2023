import { AppDispatch } from "../../../store"
import { useDispatch } from "react-redux"
import { setMouseHover } from "../../../store/mouseHoverSlice"
import { FC, ReactNode } from "react"

const useAppDispatch: () => AppDispatch = useDispatch

export const ActiveHoverWrapper: FC<{
  children: ReactNode
  className?: string
}> = ({ children, className }) => {
  const dispatch = useAppDispatch()

  return (
    <div
      className={className}
      onMouseEnter={() => dispatch(setMouseHover("active"))}
      onMouseLeave={() => dispatch(setMouseHover("standard"))}
    >
      {children}
    </div>
  )
}
