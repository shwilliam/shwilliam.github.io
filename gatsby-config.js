module.exports = {
  siteMetadata: {
    title: `William L`,
    description: `Vancouver-based frontend developer`,
    author: `William Lindvall (@shwilliam)`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        // develop: true, // uncomment when using `gatsby develop`
        printRejected: true
      }
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/projects`,
        name: 'markdown-pages'
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `shwilliam.github.io`,
        short_name: `shwilliam.github.io`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/images/blossom.png`
      }
    }
  ]
}
