import React from 'react';
import PropTypes from 'prop-types';

const HTML = ({
  htmlAttributes,
  headComponents,
  bodyAttributes,
  preBodyComponents,
  body,
  postBodyComponents
}) => {
  return (
    <html {...htmlAttributes}>
        <head>
        <meta name="facebook-domain-verification" content="vf34qzv42iji3x67nfu6qgam11qv22" /> 
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {headComponents}
          <script src="https://givegab.s3.amazonaws.com/donation-widget/givegab-button.js" />
          <noscript>This website requires JavaScript.</noscript>
        </head>
        <body {...bodyAttributes}>
          {preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: body }}
          />
          {postBodyComponents}
        </body>
    </html>
  );
}

export default HTML;

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
