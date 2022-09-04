module.exports = {
  siteMetadata: {
    title: `Mademoiselle`,
    description: `Mademoiselle Fashion... be yourself.`,
    twitterUsername: `@ArtasceCreative`,
    image: `/icon.png`,
    siteUrl: `https://mademoiselle.netlify.app`,
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
