import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

const BlogPreview = ({ blog }) => (
  <div className="bgrid feature">
    <div className="blog__preview service-content">
      <Link className="blog__header" to={`/blog/${blog.slug}`}>
        <div className="blog__thumbnail">
          <GatsbyImage alt={blog.title} image={blog.featureImage.gatsbyImageData} />
        </div>
        <div className="feature__content">
          <h4 className="feature__title">{blog.title}</h4>
          <p className="feature__date">{blog.publishDate}</p>
          <p className="feature__description">
            {blog.description.childMarkdownRemark.rawMarkdownBody}
          </p>
        </div>
      </Link>
    </div>
  </div>
);

export default BlogPreview;