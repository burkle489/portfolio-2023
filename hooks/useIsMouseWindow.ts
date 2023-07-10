import React from "react"
const useIsMouseWindow = () => {
  const [isMouseWindow, setIsMouseWindow] = React.useState(false)
  React.useEffect(() => {
    // Track mouse leaving window
    const updateMousePosition = (ev: any) => {
      if (
        ev.clientY <= 0 ||
        ev.clientX <= 0 ||
        ev.clientX >= window.innerWidth ||
        ev.clientY >= window.innerHeight
      ) {
        console.log("Mouse has left the window.")

        setIsMouseWindow(true)
      } else {
        setIsMouseWindow(false)
      }
    }
    window.addEventListener("mouseout", updateMousePosition)
    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
    }
  }, [])
  return isMouseWindow
}
export default useIsMouseWindow
