import { useStaticQuery, graphql } from "gatsby"

const useLogo = () => {
  const { datoCmsFrontPage } = useStaticQuery(
    graphql`
      query logoImage {
        datoCmsFrontPage {
          pandaLogo {
            alt

            gatsbyImageData(layout: CONSTRAINED)
          }
        }
      }
    `
  )
  return datoCmsFrontPage
}

export default useLogo
