module.exports = {
  siteMetadata: {
    title: `iVision Web Studio`,
    description: `Successful businesses require working with full-service web development and digital marketing agencies to help them thrive on an online platform. iVision Studio is based in India, and we specialize in offering a wide scope of services in JAM Development, Website Development, Mobile Application Development, E-Commerce Solutions, and CMS Services,   Website Designing all in one place.`,
    author: `@iVision Web Studio`,
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: 'frm2ukqlqqti',
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken:'4288ec51f7d053f6d6c1be3feb4a1d29c0e9ccf9e3874fa7e173f9244f999685',
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-138675396-1",
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Enables Google Optimize using your container Id
        optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // Enables Google Optimize Experiment ID
        experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // Set Variation ID. 0 for original 1,2,3....
        variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // Any additional create only fields (optional)
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "example.com",
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-remark',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `@contentful/gatsby-transformer-contentful-richtext`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `iVision Web Studio`,
        short_name: `iVision`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
        icon: `src/images/favicon.png`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
