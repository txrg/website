import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

const PagePreview = ({ page }) => {
  const sectionSlug = page.section.toLowerCase().split(' ').join('-');
  return (
    <div className="bgrid feature">
      <div className="page__preview  service-content">
        <Link
          className="page__header"
          to={
            sectionSlug === page.slug
              ? `/${page.slug}/`
              : `/${sectionSlug}/${page.slug}/`
          }>
          <div className="page__thumbnail">
            <GatsbyImage alt={page.title} image={page.featureImage.gatsbyImageData} />
          </div>
          <div className="feature__content">
            <h4 className="feature__title">{page.title}</h4>
            <p className="feature__description">
              {page.featureDescription.childMarkdownRemark.rawMarkdownBody}
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default PagePreview;