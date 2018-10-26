import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

export default ({ blog }) => (
  <div className="blog-post">
      <div className="blog-post__thumbnail">
        <Img alt={blog.title} sizes={blog.featureImage.sizes} />
      </div>
      <div className="blog-post__content">
          <Link className="blog-post__header" to={`/blog/${blog.slug}`}>{blog.title}</Link>
          <p
            className="blog-post__preview"
            dangerouslySetInnerHTML={{
              __html: blog.description.childMarkdownRemark.html,
            }}
          />
          <p className="blog-post__date">{blog.publishDate}</p>
      </div>
  </div>
)
