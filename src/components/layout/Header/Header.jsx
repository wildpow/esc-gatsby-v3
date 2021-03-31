import { Link } from "gatsby"
// import Img from "gatsby-image";
import { string, bool, func } from "prop-types"
import tw, { styled, theme } from "twin.macro"
import { useWindowSize } from "../../../context/WindowSizeCtx"
// import {
//   colors,
//   dimensions,
//   boxShadow,
//   breakpoints,
//   spacing,
//   fontSize,
//   fonts,
// } from "../../../utils/styles";
import Nav from "./Nav"
import NavIcons from "./NavIcons"
import MenuOverlay from "../../shared/MenuOverlay"
import useLogo from "./use-logo"

const HeaderRoot = styled.header`
  transition: all 0.75s;
  /* will-change: transform; */
  right: 0;
  top: 0;
  z-index: 10;
  display: flex;
  flex-direction: column;
  box-shadow: ${boxShadow.lg};
  background-color: ${theme`colors.gray.200`};
  pointer-events: ${({ cartStatus, menuStatus }) =>
    cartStatus === "open" || menuStatus === "open" ? "none" : "auto"};
  .header__Wrapper {
    display: flex;
    flex-direction: column-reverse;
    max-width: 1440px;
    margin: 0 auto;
    width: 100%;
  }
  .header__flex {
    border-top: 2px solid ${theme`colors.gray.300`};
    display: flex;
    align-items: center;
    height: ${dimensions.headerHeight};
    left: 0;
    padding-left: ${theme`spacing.2`};
    a {
      :focus {
        box-shadow: 0 0 0 2px ${theme`colors.blue.300`};
        outline: 0;
        transition: box-shadow 0.15s ease-in-out;
      }
    }
  }
  .brand__anchor {
    width: 60px;
    position: relative;
    /* pointer-events: ${({ cartStatus, menuStatus }) =>
      cartStatus === "open" || menuStatus === "open" ? "none" : "auto"}; */
    display: block;
    flex-shrink: 0;
    line-height: 1;
    transition: all 0.2s ease;
    :hover {
      transform: scale(1.1);
    }
    :focus {
      box-shadow: 0 0 0 1px ${theme`colors.blue.300`};
      outline: 0;
      transition: box-shadow 0.15s ease-in-out;
    }
  }
  h1 {
    align-self: center;
    -webkit-text-stroke: 0.45px;
    -webkit-text-stroke: 0.45px rgba(0, 0, 0, 0.1);
    text-shadow: #fff 0px 1px 1px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: ${fonts.sans};
    color: ${theme`colors.red.800`};
    font-weight: 900;
    font-size: ${theme`fontSize.2xl`};
    line-height: 1;
    padding-left: ${theme`spacing.2`};
    span {
      color: ${theme`colors.blue.800`};
      font-style: italic;
    }
  }

  @media (min-width: ${theme`breakpoints.sm`}) {
    transform: ${({ moved }) =>
      moved ? "translate3d(0vw, 0, 0)" : "translate3d(-400px, 0, 0)"};
  }
  @media screen and (min-width: 835px) {
    box-shadow: ${theme`boxShadow.md`};
    .header__Wrapper {
      display: flex;
      justify-content: space-between;
      flex-direction: row;
    }
    .header__flex {
      border-top: none;
    }
    h1 {
      padding-left: 6px;
    }
  }

  @media screen and (min-width: ${breakpoints.phablet}) {
    h1 {
      font-size: ${fontSize["4xl"]};
      padding-left: ${spacing["3"]};
    }
    .brand__anchor {
      width: 75px;
    }
  }
  @media screen and (min-width: ${theme`breakpoints.lg`}) {
    h1 {
      margin: 0;
      padding-left: ${theme`spacing.4`};
      font-size: ${theme`fontSize.5xl`};
      padding-bottom: ${theme`spacing.0`};
      align-self: flex-end;
    }
    .brand__anchor {
      width: 90px;
    }
  }
  @media print {
    box-shadow: none;

    border-bottom: 2px solid ${theme`colors.gray.300`};
  }
`
const PrintOnlyContact = styled.div`
  display: none;
  /* color: black;
  font-size: 40px; */
  font-family: ${fonts.sans};
  @media print {
    display: flex;
    justify-content: space-between;
  }
`
const Header = ({
  cartStatus,
  menuStatus,
  pin,
  moved,
  cartToggle,
  searchFocus,
  setSearchFocus,
}) => {
  const { width } = useWindowSize()
  const { pandaLogo } = useLogo()
  return (
    <HeaderRoot
      cartStatus={cartStatus}
      menuStatus={menuStatus}
      className={moved}
      role="banner"
    >
      {menuStatus === "open" || cartStatus === "open" ? <MenuOverLay /> : null}
      <div className="header__Wrapper">
        <div className="header__flex">
          <Link className="brand__anchor" to="/" title="Back to home page">
            <Img fluid={pandaLogo.fluid} alt={pandaLogo.alt} />
          </Link>
          <Link
            title="Back to home page"
            to="/"
            style={{ textDecoration: "none" }}
          >
            <h1>
              <span>E.S.C.</span>
              Mattress Center
            </h1>
          </Link>
        </div>
        {/* {width > 768 ? <ExtraNavIcons /> : null} */}
        <NavIcons
          pin={pin}
          cartToggle={cartToggle}
          menuStatus={menuStatus}
          cartStatus={cartStatus}
          searchFocus={searchFocus}
          setSearchFocus={setSearchFocus}
        />
        <PrintOnlyContact>
          <div>10121 Evergreen Way, #30, Everett, WA 98204</div>
          <div>(425) 512.0017</div>
        </PrintOnlyContact>
      </div>
      {/* (425) 512.0017 */}
      {width >= 1024 ? <Nav cartStatus={cartStatus} /> : null}
      {/* {width < 768 ? <ExtraNavIcons /> : null} */}
    </HeaderRoot>
  )
}
Header.defaultProps = {
  cartStatus: "closed",
  menuStatus: "closed",
  moved: "",
  pin: true,
}
Header.propTypes = {
  cartStatus: string,
  menuStatus: string,
  moved: string,
  pin: bool,
  cartToggle: func.isRequired,
}

export default Header
