import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

export default ({ article }) => (
  <div className="single-blog-post">
      <div className="post-thumbnail">
        <Img alt="" sizes={article.featureImage.sizes} />
      </div>
      <div className="post-content">
          <Link className="headline" to={`/blog/${article.slug}`}>{article.title}</Link>
          <p
            dangerouslySetInnerHTML={{
              __html: article.description.childMarkdownRemark.html,
            }}
          />
          <div className="post-meta">
              <p><a href="#" className="post-date">{article.publishDate}</a></p>
          </div>
      </div>
  </div>
)
