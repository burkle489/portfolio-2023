import { AppDispatch } from "../../store"
import { useDispatch } from "react-redux"
import { setMouseHover } from "../../store/mouseHoverSlice"
import { FC, ReactNode } from "react"

const useAppDispatch: () => AppDispatch = useDispatch

export const HoverWrapper: FC<{ children: ReactNode }> = ({ children }) => {
  const dispatch = useAppDispatch()

  return (
    <div
      onMouseEnter={() => dispatch(setMouseHover(true))}
      onMouseLeave={() => dispatch(setMouseHover(false))}
    >
      {children}
    </div>
  )
}
