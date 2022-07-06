module.exports = {
  siteMetadata: {
    title: `Villains`
  },
  plugins: [
    "gatsby-plugin-sass", 
    "gatsby-plugin-react-helmet", 
    "gatsby-plugin-mdx",
  {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-villains`,
        short_name: `villains`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: 'src/images/icon.png'
      },
  },
  `gatsby-plugin-offline`,
  {
    resolve: `gatsby-source-drupal`,
    options: {
      baseUrl: `https://dev-heres-negan.pantheonsite.io/`,
      apiBase: `jsonapi`,
    },
  }
]
};