import * as React from "react"
import { Link } from "gatsby"

import { bool } from "prop-types"
import { theme, styled } from "twin.macro"

const menuData = [
  { name: "Mattresses", url: "/brands" },
  { name: "Adjustable Bases", url: "/adjustable" },
  { name: "Accessories", url: "/accessories" },
  { name: "Financing", url: "/financing" },
  { name: "Our Blog", url: "/blog" },
  { name: "About Us", url: "/about" },
]

const NavRoot = styled(`nav`)`
  display: none;
  font-family: Roboto, sans-serif;
  background: ${theme`colors.blue.900`};
  z-index: 0;
  box-shadow: ${theme`boxShadow.md`};
  ul {
    max-width: 1440px;
    justify-content: space-evenly;
    margin: 0 auto;
    /* margin: 0; */
    opacity: ${({ cartStatus }) => (cartStatus ? 0.5 : 1)};
    display: flex;
    list-style: none;
    padding: 0;
    li {
      flex: 1;
      position: relative;
      text-align: center;
      a {
        transition: all 0.2s ease-in-out;
        pointer-events: ${({ cartStatus }) => (cartStatus ? "none" : "auto")};
        width: 100%;
        padding: 10px 0;
        color: #fff;
        display: block;
        text-decoration: none;
        &:hover {
          color: ${theme`colors.gray.100`};
          background: ${theme`colors.red.900`};
        }
        &:focus {
          box-shadow: 0 0 0 1px ${theme`colors.blue.300`} inset;
          outline: 0;
          transition: box-shadow 0.15s ease-in-out;
        }
      }
    }
    @media print {
      display: none;
    }
  }
  @media (min-width: ${theme`screens.lg`}) {
    display: block;
  }
  @media (min-width: ${theme`screens.xl`}) {
    ul li a {
      font-size: ${theme`fontSize.lg`};
    }
  }
`

const Nav = ({ cartStatus }) => {
  return (
    <NavRoot cartStatus={cartStatus}>
      <ul>
        {menuData.map(item => (
          <li key={item.name}>
            <Link
              to={item.url}
              partiallyActive
              activeStyle={{ background: theme`colors.blue.900` }}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </NavRoot>
  )
}

Nav.defaultProps = {
  cartStatus: "false",
}
Nav.propTypes = {
  cartStatus: bool,
}
export default Nav
