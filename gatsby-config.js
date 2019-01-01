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

const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Texas Rollergirls',
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        includePaths: [path.resolve(__dirname, 'node_modules')],
        importer: (url, prev, done) => {
          done({
            file: !/import-once(\.scss)?$/.test(url)
              ? url
              : path.resolve(__dirname, 'src/styles/import-once'),
          });
        },
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
        icon: `src/images/favicon-32.png`, // This path is relative to the root of the site.
      },
    },
  ],
};
