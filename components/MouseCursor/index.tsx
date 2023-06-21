import useMousePosition from "../../hooks/useMousePosition"
import dynamic from "next/dynamic"
import { useEffect, useRef } from "react"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { RootState } from "../../store"
import Timeline from "../Timeline"
import gsap from "gsap"

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
})
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const MouseCursor = () => {
  const timeline = useRef(gsap.timeline({ paused: true }))
  const cursor = useRef(null)
  const hoverCursor = useRef(null)
  const mouse = useMousePosition()
  const isHovering = useAppSelector((state) => state.mouseHover.isHover)

  useEffect(() => {
    const ctx = gsap.context(() => {
      timeline.current
        .to(cursor.current, { scale: 0, duration: 0.3 })
        .to(hoverCursor.current, { scale: 1, duration: 0.3 }, "-=0.3")
    })
    return () => ctx.revert()
  }, [])

  useEffect(() => {
    console.log({ isHovering })
    if (isHovering) {
      timeline.current.play()
    } else {
      timeline.current.reverse()
    }
  }, [isHovering])
  return (
    <div
      className="fixed w-14 h-14 z-[9999] flex justify-center items-center mix-blend-exclusion pointer-events-none"
      style={{
        top: `${(mouse.y as unknown as number) - 28}px`,
        left: `${(mouse.x as unknown as number) - 28}px`,
      }}
    >
      <div className="relative w-full h-full">
        <div
          ref={cursor}
          className="w-12 h-12 bg-yellow rounded-full absolute top-1 left-1 scale-100"
        ></div>
        <div ref={hoverCursor} className="w-full h-full scale-0">
          <div className="bg-yellow w-14 h-14 rounded-full abolute left-0 top-0 opacity-30"></div>
          <div className="w-8 h-8 bg-yellow rounded-full absolute top-3 left-3"></div>
        </div>
      </div>
    </div>
  )
}
