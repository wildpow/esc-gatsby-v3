/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useInterface } from "../context/InterfaceCtx"
import { useWindowSize } from "../context/WindowSizeCtx"
import PageContent from "../components/layout/PageContent"
import Header from "./layout/Header"
const Layout = ({ children }) => {
  const { width, height } = useWindowSize()
  // const {
  //   cartOpen,
  //   cartClose,
  //   cartStatus,
  //   menuOpen,
  //   menuClose,
  //   menuStatus,
  // } = useInterface()
  return (
    <>
      <Header />
      <PageContent>{children}</PageContent>
    </>
  )
}

export default Layout
