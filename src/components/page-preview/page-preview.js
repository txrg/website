import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

export default ({ page }) => (
  <div className="bgrid feature">
    <div className="page__preview  service-content">
      <Link
        className="page__header"
        to={
          page.section === page.slug
            ? `/${page.slug}/`
            : `/${page.section}/${page.slug}/`
        }>
        <div className="page__thumbnail">
          <Img alt={page.title} sizes={page.featureImage.fluid} />
        </div>
        <div className="page__content">
          <h3 className="page__title">{page.title}</h3>
          <p
            className="page__description"
            dangerouslySetInnerHTML={{
              __html: page.featureDescription.childMarkdownRemark.html,
            }}
          />
        </div>
      </Link>
    </div>
  </div>
);
