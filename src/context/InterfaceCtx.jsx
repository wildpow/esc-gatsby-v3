import React, { useState, createContext, useContext } from "react"

const InterfaceCtx = createContext()

export const InterfaceProvider = ({ children }) => {
  const [cartStatus, setCartStatus] = useState(false)
  const [menuStatus, setMenuStatus] = useState(false)
  const element =
    typeof document !== `undefined`
      ? document.getElementById("bf-revz-widget-1484606125")
      : null

  const menuClose = () => {
    setMenuStatus(false)
    // document.body.style.paddingRight = "0";
    document.body.style.overflow = "visible"
    element.style.display = "block"
  }
  const menuOpen = () => {
    setMenuStatus(true)
    // document.body.style.paddingRight = "15px";
    document.body.style.overflow = "hidden"
    element.style.display = "none"
  }
  const cartOpen = () => {
    setCartStatus(true)
    document.body.style.overflow = "hidden"
    element.style.display = "none"
    // document.body.style.paddingRight = "15px";
  }
  const cartClose = () => {
    setCartStatus(false)
    // document.body.style.paddingRight = "0";
    document.body.style.overflow = "visible"
    element.style.display = "block"
  }
  return (
    <InterfaceCtx.Provider
      value={{
        cartOpen,
        cartClose,
        cartStatus,
        menuOpen,
        menuClose,
        menuStatus,
      }}
    >
      {children}
    </InterfaceCtx.Provider>
  )
}

export const useInterface = () => useContext(InterfaceCtx)
