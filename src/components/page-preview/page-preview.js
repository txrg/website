import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

export default ({ page }) => (
  <div className="page__preview">
      <div className="page__thumbnail">
        <Img alt={page.title} sizes={page.featureImage.sizes} />
      </div>
      <div className="page__content">
          <Link className="page__header" to={`/page/${page.slug}`}>{page.title}</Link>
          <p
            className="page__description"
            dangerouslySetInnerHTML={{
              __html: page.featureDescription.childMarkdownRemark.html,
            }}
          />
      </div>
  </div>
)
