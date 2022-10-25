module.exports = {
  siteMetadata: {
    title: `Ahsoka Tano site`,
    description: `Practice POC for drupal headless cms`,
    author: `Alannah Holder`,
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
    resolve: `gatsby-source-drupal-menu-links`,
    options: {
      baseUrl: `http://localhost/ahsokatano/web`,
      menus: ["main"],
    },
  },
  {
    resolve: `gatsby-source-drupal`,
    options: {
      baseUrl: `http://localhost/ahsokatano/web`,
      apiBase: `jsonapi`,
      placeholderStyleName: `placeholder`,
      fastBuilds: true,
    },
  },
  {
    resolve: `gatsby-source-drupal-menu-links`,
    options: {
      baseUrl: `http://localhost/ahsokatano/web`,
      menus: ["main", "footer"],
    },
  },
  {
    resolve: `gatsby-plugin-alias-imports`,
    options: {
      alias: {
        "@src": "src",
        "@components": "src/components",
        "@images": "src/images",
        "@styles": "src/styles",
        "@utils": "src/utils",
      },
      extensions: ["js, svg, png, jpeg, jpg, gif"],
    },
  }
]
};