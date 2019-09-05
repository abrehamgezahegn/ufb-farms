const path = require(`path`)
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

console.log("process env:" ,process.env.CONTENTFUL_SPACE_ID)

module.exports = {
siteMetadata: {
    title: "UFB Farms",
    titleTemplate: "%s · UFB Farms",
    description:
      `UFB links farmers and vendors to fair, trusted markets
		We source quality produce from Ethiopian farmers and deliver to vendors in urban areas
	`,
    url: "https://www.ufbfarms.com", // No trailing slash allowed!
    image: "/headerImage.png", // Path to your image you placed in the 'static' folder
  },
  plugins: [
  	{
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ufb farming`,
        short_name: `ufb`,
        start_url: `/`,
        display: `standalone`,
        icon: "static/Icons/siteIcon.svg"
      },
    },

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

