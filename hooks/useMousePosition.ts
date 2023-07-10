import React from "react"
const useMousePosition = () => {
  const [mousePosition, setMousePosition] = React.useState({ x: null, y: null })
  React.useEffect(() => {
    const updateMousePosition = (ev: any) => {
      console.log({ X: ev.clientX, Y: ev.clientY })
      setMousePosition({ x: ev.clientX, y: ev.clientY })
    }
    window.addEventListener("mousemove", updateMousePosition)
    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
    }
  }, [])
  return mousePosition
}
export default useMousePosition
