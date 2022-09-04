module.exports = {
  siteMetadata: {
    title: `Gatsby Sydney Ecommerce Theme`,
    siteUrl: `https://jamm.matter.design`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mademoiselle Online`,
        short_name: `Sydney`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: 'src/assets/favicon.png',
      },
    },
    'gatsby-plugin-netlify',
  ],
}
