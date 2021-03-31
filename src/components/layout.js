/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useState } from "react"
import Headroom from "react-headroom"
import { useInterface } from "../context/InterfaceCtx"
import { useWindowSize } from "../context/WindowSizeCtx"

import PageContent from "../components/layout/PageContent"
import Header from "./layout/Header"
const Layout = ({ children }) => {
  const [pin, setpen] = useState(true)
  const [searchFocus, setSearchFocus] = useState(false)
  const { width, height } = useWindowSize()
  const {
    cartOpen,
    cartClose,
    cartStatus,
    menuOpen,
    menuClose,
    menuStatus,
  } = useInterface()
  return (
    <>
      <Headroom
        onPin={() => setpen(true)}
        onUnpin={() => setpen(false)}
        pinStart={-1}
      >
        <Header
          moved={menuStatus || cartStatus}
          pin={pin}
          cartStatus={cartStatus}
          menuStatus={menuStatus}
          cartToggle={{ open: cartOpen, close: cartClose }}
          searchFocus={searchFocus}
          setSearchFocus={setSearchFocus}
        />
      </Headroom>
      <PageContent>{children}</PageContent>
    </>
  )
}

export default Layout
