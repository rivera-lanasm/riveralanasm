module.exports = {

  // ======================
  // Site Metadata
  // ======================  
  siteMetadata: {
    title: `rivera-lanasm`,
    description: `Writing about Intersections of Technology and Public Policy`,
    author: `Miguel Rivera-Lanas`,
    // siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },

  // ======================
  // Plugins
  // ======================
  plugins: [
    
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    
    `gatsby-transformer-sharp`,

    `gatsby-plugin-sharp`,
      {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
        },
      },
    
    `gatsby-plugin-sass`,
    // `gatsby-transformer-remark`,

    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
           posts: require.resolve('./src/components/post-layout.js'),
        }}},

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    }    
  
  
  ],
}
