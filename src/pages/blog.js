import React from 'react';
import Layout from '../components/layout/layout';
import { graphql, Link } from 'gatsby';

const BlogIndex = ({ data, location }) => {
  const posts = data.allContentfulBlogPost.edges;

  return (
    <Layout location={location}>
      <main>
        <section className="content">
          <div className="row">
            <h1 className="intro-header intro-header--full">Blog</h1>
            <ul className="blog-list">
              {posts.map(({ node }) => {
                return (
                  <>
                    <li className="blog-list__item" key={node.id} >
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

export default BlogIndex;

export const pageQuery = graphql`
  query BlogIndexQuery {
    allContentfulBlogPost(sort: {publishDate: DESC}) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
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
