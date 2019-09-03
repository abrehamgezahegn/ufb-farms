const path = require(`path`)
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

console.log("process env:" ,process.env.CONTENTFUL_SPACE_ID)

module.exports = {
  plugins: [
  	 {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
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

