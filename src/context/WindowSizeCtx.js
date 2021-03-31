import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
} from "react"
import PropTypes from "prop-types"

const WindowSizeCtx = createContext()

const WindowSizeProvider = ({ children }) => {
  const resizeInProgress = useRef(false)

  const [dimensions, setDimensions] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : null,
    height: typeof window !== "undefined" ? window.innerHeight : null,
  })

  useEffect(() => {
    function throttledUpdateWindowSize() {
      setTimeout(() => {
        setDimensions({
          width: typeof window !== "undefined" ? window.innerWidth : null,
          height: typeof window !== "undefined" ? window.innerHeight : null,
        })
        resizeInProgress.current = false
      }, 500)
    }
    function handleResize() {
      if (resizeInProgress.current === true) {
        return
      }
      resizeInProgress.current = true
      throttledUpdateWindowSize()
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <WindowSizeCtx.Provider value={dimensions}>
      {children}
    </WindowSizeCtx.Provider>
  )
}
WindowSizeProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
export default WindowSizeProvider

export const useWindowSize = () => useContext(WindowSizeCtx)
