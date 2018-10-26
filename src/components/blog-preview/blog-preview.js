import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

export default ({ blog }) => (
  <div className="blog__preview">
      <div className="blog__thumbnail">
        <Img alt={blog.title} sizes={blog.featureImage.sizes} />
      </div>
      <div className="blog__content">
          <Link className="blog__header" to={`/blog/${blog.slug}`}>{blog.title}</Link>
          <p
            className="blog__description"
            dangerouslySetInnerHTML={{
              __html: blog.description.childMarkdownRemark.html,
            }}
          />
          <p className="blog__date">{blog.publishDate}</p>
      </div>
  </div>
)