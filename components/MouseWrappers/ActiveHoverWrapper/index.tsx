import { AppDispatch } from "../../../store"
import { useDispatch } from "react-redux"
import { setMouseHover } from "../../../store/mouseHoverSlice"
import { FC, ReactNode } from "react"

const useAppDispatch: () => AppDispatch = useDispatch

export const ActiveHoverWrapper: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const dispatch = useAppDispatch()

  return (
    <div
      onMouseEnter={() => dispatch(setMouseHover("active"))}
      onMouseLeave={() => dispatch(setMouseHover("standard"))}
    >
      {children}
    </div>
  )
}
