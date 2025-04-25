const axios = require('axios');
const spaceImport = require('contentful-import');
const { writeFileSync, readFileSync, existsSync } = require('fs');
const path = require('path');

const argv = require('yargs-parser')(process.argv.slice(2));

const contentfulConfigFile = argv.contentfulConfigFile || '.contentful.json';
const contentfulConfig = getConfigFile(contentfulConfigFile);
const spaceId = argv.spaceId || contentfulConfig.spaceId;
const accessToken = argv.accessToken || contentfulConfig.accessToken;
const managementToken = argv.managementToken || contentfulConfig.managementToken;

const googleConfigFile = argv.googleConfigFile || '.google.json';
const googleConfig = getConfigFile(googleConfigFile);
const clientId = argv.clientId || googleConfig.clientId;

// To setup Contentful, we need all 3 variables
// * spaceId and accessToken (CDA token) – to write into config file,
// * and managementToken for contentful-import
// To setup Google Auth, we need 1 variable
// * clientId
if (!spaceId || !managementToken || !accessToken || !clientId) {
  console.log(
    `To setup Contentful, you have to provide
  * spaceId'
  * managementToken
  * accessToken
To setup Google Auth, you have to provide
  * clientId

Setup .contentful.json and .google.json files with configs OR run one of the following commands:
  npm run setup -- --spaceId YOUR_SPACE --accessToken YOUR_CDA_KEY --managementToken YOUR_CMA_KEY --clientId YOUR_CLIENT_ID
  npm run setup -- --contentfulConfigFile PATH_TO_CONTENTFUL_CONFIG --googleConfigFile PATH_TO_GOOGLE_CONFIG`
  );
  process.exit(1);
}

const REPO = 'contentful/content-models';
const TEMPLATE = 'blog';

// we attach to a specific tag, so we can be sure that this file exists
const tag = 'v0.0.14';

const url = `https://api.github.com/repos/${REPO}/contents/${TEMPLATE}/contentful-export.json?ref=${tag}`;

const fileRequest = axios({
  url,
  headers: {
    // just get the raw JSON file
    // we don't need metadata
    // https://developer.github.com/v3/repos/contents/#custom-media-types
    Accept: 'application/vnd.github.3.raw',
  },
  responseType: 'json',
});

fileRequest.then(
  response => {
    saveConfigFile({ spaceId, accessToken, managementToken });

    // we need to add promise handlers here, so we don't fall here from the
    // `catch` section.
    spaceImport({ spaceId, managementToken, content: response.data })
      .then(() => {
        console.log(`All set! You can now run 'npm run dev' to see it in action.`);
      })
      .catch(error => console.error(error));
  },
  () => {
    // request failed – might be a network, might be a github issue.
    console.log(
      'Oops, something happened during fetching the template. Please try again later.'
    );
  }
);

function getConfigFile(path) {
  const isFile = existsSync(path);
  if (isFile) {
    return JSON.parse(readFileSync(path, { encoding: "utf-8"}));
  }
  return {};
}

// we need to write a config file with a provided credentials (space id and CDA token)
// so that `npm run dev` connects to your space.
function saveConfigFile({ spaceId, accessToken }) {
  const configFilePath = path.resolve(__dirname, '.contentful.json');
  console.log("Writing config file...");
  writeFileSync(
    configFilePath,
    JSON.stringify(
      {
        spaceId,
        accessToken: accessToken,
        managementToken, 
      },
      null,
      2
    )
  );

  console.log(`Config file ${configFilePath} written`);
}
