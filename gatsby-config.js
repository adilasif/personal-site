const data = require('./src/data');

module.exports = {
  siteMetadata: {
    title: data.siteTitle,
    siteUrl: data.siteUrl,
    description: data.siteDescription,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Adil Asif',
        short_name: 'Adil Asif',
        start_url: '/',
        background_color: data.backgroundDarkColor,
        theme_color: data.backgroundColor,
        display: 'minimal-ui',
        icon: 'src/assets/aa-logo-orange-duotone-hexagon.svg',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'site-content',
        path: `${__dirname}/site-content/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow noopener noreferrer',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1100,
              quality: 90,
              linkImagesToOriginal: true,
            },
          },
        ],
      },
    },
  ],
};
