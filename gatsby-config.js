let contentfulConfig;

try {
  // Load the Contentful config from the .contentful.json
  contentfulConfig = require('./.contentful');
} catch (_) {}

// Overwrite the Contentful config with environment variables if they exist
contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID || contentfulConfig.spaceId,
  accessToken:
    process.env.CONTENTFUL_DELIVERY_TOKEN || contentfulConfig.accessToken,
};

const { spaceId, accessToken } = contentfulConfig;

if (!spaceId || !accessToken) {
  throw new Error(
    'Contentful spaceId and the delivery token need to be provided.'
  );
}

try {
  // Load the google authentication config from the .google.json
  googleAuthConfig = require('./.google');
} catch (_) {}

// Overwrite the google authentication config with environment variables if they exist
googleAuthConfig = {
  clientId: process.env.GOOGLE_AUTH_CLIENT_ID || googleAuthConfig.clientId,
  apiKey: process.env.GOOGLE_AUTH_API_KEY || googleAuthConfig.apiKey,
};

const { clientId, apiKey } = googleAuthConfig;

if (!clientId || !apiKey) {
  throw new Error(
    'Google Auth client ID and API key need to be provided.'
  );
}

process.env.GATSBY_GOOGLE_AUTH_CLIENT_ID = clientId;

module.exports = {
  siteMetadata: {
    title: 'Texas Rollergirls',
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        implementation: require("sass"),
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ['UA-249307394-1']
      },
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: "726891122478970",
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Texas Rollergirls`,
        short_name: `TXRG`,
        start_url: `/`,
         background_color: "#000",
        theme_color: "#000",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: `src/images/favicon-32.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-image',
  ],
};
