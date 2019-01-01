import React from 'react';
import get from 'lodash/get';
import { graphql } from 'gatsby';
import Layout from '../components/layout/layout';
import Sponsor from '../components/sponsor/sponsor';

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulBlogPost');
    const sponsors = get(this, 'props.data.allContentfulSponsor.edges');

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
        <section className="sponsors">
          <div className="row">
            <div>
              <h1 className="intro-header">We love our sponsors!</h1>
              <ul className="sponsor__list">
                {sponsors.map(({ node }) => {
                  return (
                    <li className="sponsor__item" key={node.id}>
                      <Sponsor sponsor={node} />
                    </li>
                  );
                })}
              </ul>
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
    allContentfulSponsor {
      edges {
        node {
          name
          id
          photo {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          link
        }
      }
    }
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
