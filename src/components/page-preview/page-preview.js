import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

export default ({ page }) => (
  <div className="page__preview">
      <div className="page__thumbnail">
        <Img alt={page.title} sizes={page.featureImage.fluid} />
      </div>
      <div className="page__content">
        <Link className="page__header" to={page.section === page.slug ? `/${page.slug}/` : `/${page.section}/${page.slug}/`}>
          {page.title}
        </Link>
        <p
          className="page__description"
          dangerouslySetInnerHTML={{
            __html: page.featureDescription.childMarkdownRemark.html,
          }}
        />
      </div>
  </div>
)

