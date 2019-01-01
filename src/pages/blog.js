import React from 'react';
import get from 'lodash/get';
import Layout from '../components/layout/layout';
import BlogPreview from '../components/blog-preview/blog-preview';
import Sponsor from '../components/sponsor/sponsor';
import { graphql } from 'gatsby';

class BlogIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulBlogPost.edges');
    const sponsors = get(this, 'props.data.allContentfulSponsor.edges');

    return (
      <Layout location={this.props.location}>
        <main>
          <section className="content">
            <div className="row about-features">
              <h1 className="intro-header">Blog</h1>
              <div className="features-list block-1-4 block-m-1-2 block-mob-full group">
                {posts.map(({ node }) => {
                  return (
                    <>
                      <BlogPreview blog={node} key={node.id} />
                    </>
                  );
                })}
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
        </main>
      </Layout>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query BlogIndexQuery {
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
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          featureImage {
            fluid(maxWidth: 350, maxHeight: 350, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`;
