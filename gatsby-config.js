const path = require(`path`)

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
          useMozJpeg: false,
          stripMetadata: true,
          defaultQuality: 75,
        },
    },
    `gatsby-transformer-sharp`,
  ],
}

