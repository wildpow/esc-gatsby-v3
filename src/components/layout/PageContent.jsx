import React from "react"
import tw, { theme, styled } from "twin.macro"

const MainRoot = styled("div")`
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
`

const PageContentRoot = styled(`main`)`
  position: relative;
  z-index: 1;
  box-shadow: ${theme`boxShadow.xl`};
  background-color: ${({ url }) => (url ? "white" : theme`colors.gray.100`)};
  will-change: transform;
  opacity: 1;
  padding-left: 0;
  width: 100%;
  transition: all 0.75s;
  @media (min-width: 640px) {
    transform: ${({ moved }) =>
      moved ? "translate3d(-400px, 0, 0)" : "translate3d(0vw, 0, 0)"};
  }
  @media print {
    box-shadow: none;
  }
`
const PageContent = ({ children, moved }) => {
  function testUrl(str) {
    if (str.includes("/blog/")) {
      if (str === "/blog/" || str === "/blog") {
        return false
      }
      return true
    }
    if (
      str.includes("/landing") ||
      str === "/accessories" ||
      str === "/brands/nectar"
    ) {
      return true
    }
    return false
  }
  const url = typeof window !== "undefined" ? window.location.pathname : ""
  return (
    <PageContentRoot moved={moved} url={testUrl(url)}>
      <MainRoot>{children}</MainRoot>
    </PageContentRoot>
  )
}

export default PageContent
