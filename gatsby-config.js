require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = "https://www.escmattresscenter.com",
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env
const isNetlifyProduction = NETLIFY_ENV === "production"
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL

const cfg = {
  siteMetadata: {
    title: "E.S.C Mattress Center",
    siteUrl,
  },
  plugins: [
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATO_API,
        preview: false,
        disableLiveReload: false,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: "*" }],
          },
          "branch-deploy": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
          "deploy-preview": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
        },
      },
    },
    `gatsby-plugin-goober`,
    `gatsby-plugin-remove-serviceworker`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.escmattresscenter.com`,
        stripQueryString: true,
      },
    },
    {
      resolve: `gatsby-source-shopify`,
      options: {
        shopName: `${process.env.GATSBY_SHOPIFY_STORE}.myshopify.com`,
        accessToken: process.env.GATSBY_SHOPIFY_API,
        verbose: true,
        apiVersion: "2020-10",
      },
    },
    "gatsby-plugin-webpack-bundle-analyser-v2",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `E.S.C Mattress Center`,
        short_name: `E.S.C`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#1565c0`,
        display: `minimal-ui`,
        icon: `src/images/squarePanda.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-remove-serviceworker`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    `gatsby-plugin-gatsby-cloud`,
  ],
}
if (process.env.NODE_ENV === "production") {
  const preact = `gatsby-plugin-preact`

  cfg.plugins.push(preact)
}
module.exports = cfg
