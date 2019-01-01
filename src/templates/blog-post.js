import React from 'react';
import get from 'lodash/get';
import { graphql } from 'gatsby';
import Layout from '../components/layout/layout';

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulBlogPost');


    return (
      <Layout location={this.props.location}>
        <section className="content content-intro">
          <div className="row">
            <div className="col-twelve">
              <h1 className="intro-header">{post.title}</h1>
              <h5>{post.publishDate}</h5>
              <div
                dangerouslySetInnerHTML={{
                  __html: post.body.childMarkdownRemark.html,
                }}
              />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      featureImage {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
