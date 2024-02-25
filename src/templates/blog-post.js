import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout/layout';

const BlogPostTemplate = ({ data, location }) => { 
  const post = data.contentfulBlogPost;
  return (
    <Layout location={location}>
      <section className="content content-intro">
        <div className="row">
          <div className="col-two" />
          <div className="col-eight">
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

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      featureImage {
        gatsbyImageData(layout: CONSTRAINED, width: 1180, backgroundColor: "rgb:000000")
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
