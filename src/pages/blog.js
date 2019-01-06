import React from 'react';
import get from 'lodash/get';
import Layout from '../components/layout/layout';
import { graphql, Link } from 'gatsby';

class BlogIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulBlogPost.edges');

    return (
      <Layout location={this.props.location}>
        <main>
          <section className="content">
            <div className="row">
              <h1 className="intro-header intro-header--full">Blog</h1>
              <ul className="blog-list">
                {posts.map(({ node }) => {
                  return (
                    <>
                      <li className="blog-list__item">
                        <Link className="blog__header" to={`/blog/${node.slug}`}>
                          <div className="feature__content">
                            <h4 className="feature__title">{node.title}</h4>
                            <p className="feature__date">{node.publishDate}</p>
                            <p className="feature__description">
                              {node.description.childMarkdownRemark.rawMarkdownBody}
                            </p>
                          </div>
                        </Link>
                      </li>
                    </>
                  );
                })}
              </ul>
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
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          featureImage {
            fluid(maxWidth: 350, maxHeight: 350, resizingBehavior: CROP) {
              ...GatsbyContentfulFluid
            }
          }
          description {
            childMarkdownRemark {
              rawMarkdownBody
            }
          }
        }
      }
    }
  }
`;
