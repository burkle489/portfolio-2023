import cx from "classnames"
import gsap from "gsap"
import { useEffect, useRef } from "react"
import { TypedUseSelectorHook, useSelector } from "react-redux"
import useIsMouseWindow from "../../hooks/useIsMouseWindow"
import useMousePosition from "../../hooks/useMousePosition"
import { RootState } from "../../store"

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const MouseCursor = () => {
  const activeTimeline = useRef(gsap.timeline({ paused: true }))
  const hideTimeline = useRef(gsap.timeline({ paused: true }))
  const cursor = useRef(null)
  const hoverCursor = useRef(null)
  const mouse = useMousePosition()
  const outOfWindow = useIsMouseWindow()
  const hoverState = useAppSelector((state) => state.mouseHover.hoverState)

  useEffect(() => {
    if (cursor.current && hoverCursor.current) {
      const ctx = gsap.context(() => {
        activeTimeline.current
          .to(cursor.current, { scale: 0, duration: 0.3 })
          .to(hoverCursor.current, { scale: 0.8, duration: 0.3 }, "-=0.3")
      })
      return () => ctx.revert()
    }
  }, [])
  useEffect(() => {
    if (cursor.current && hoverCursor.current) {
      const ctx = gsap.context(() => {
        hideTimeline.current
          .to(cursor.current, { scale: 0, duration: 0.3 })
          .to(hoverCursor.current, { scale: 0, duration: 0.3 }, "-=0.3")
      })
      return () => ctx.revert()
    }
  }, [])

  useEffect(() => {
    if (hoverState === "active") {
      activeTimeline.current.play()
    } else {
      activeTimeline.current.reverse()
    }
  }, [hoverState])

  return (
    <div
      className={cx(
        "hidden lg:flex fixed w-14 h-14 z-[9999] justify-center mix-blend-exclusion items-center pointer-events-none"
      )}
      style={{
        top: `${(mouse.y as unknown as number) - 28}px`,
        left: `${(mouse.x as unknown as number) - 28}px`,
      }}
    >
      <div className="relative w-full h-full">
        <div
          ref={cursor}
          className={cx(
            "w-12 h-12 rounded-full absolute top-1 left-1 scale-100 transition-colors ",
            {
              "bg-mouse": hoverState !== "hide",
              "!bg-transparent": hoverState === "hide" || outOfWindow,
            }
          )}
        ></div>
        <div ref={hoverCursor} className="w-full h-full scale-0">
          <div
            className={cx(
              "w-14 h-14 rounded-full abolute left-0 top-0 opacity-30 transition-colors",
              {
                "bg-mouse": hoverState !== "hide",
                "!bg-transparent": hoverState === "hide" || outOfWindow,
              }
            )}
          ></div>
          <div
            className={cx(
              "w-8 h-8 rounded-full absolute top-3 left-3 transition-colors",
              {
                "bg-mouse": hoverState !== "hide",
                "!bg-transparent": hoverState === "hide" || outOfWindow,
              }
            )}
          ></div>
        </div>
      </div>
    </div>
  )
}
