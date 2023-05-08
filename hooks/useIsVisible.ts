import { MutableRefObject, useEffect, useState } from "react"

export function useIsIntersectingLeftScreen(ref: MutableRefObject<any>) {
  const [isIntersecting, setIntersecting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.intersectionRect.left <= 0)
    )

    observer.observe(ref.current)
    return () => {
      observer.disconnect()
    }
  }, [ref])

  return isIntersecting
}
