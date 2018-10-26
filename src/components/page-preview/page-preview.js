import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

export default ({ page }) => (
  <div className="single-blog-post">
      <div className="post-thumbnail">
        <Img alt="" sizes={blogPost.featureImage.sizes} />
      </div>
      <div className="post-content">
          <Link to={`/${page.section}/${page.slug}`}>{page.title}</Link>
          <p
            dangerouslySetInnerHTML={{
              __html: blogPost.description.childMarkdownRemark.html,
            }}
          />
      </div>
  </div>
)
