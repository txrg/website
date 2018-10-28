import React from 'react';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import Layout from '../components/layout/layout';
import BlogPreview from '../components/blog-preview/blog-preview';
import PagePreview from '../components/page-preview/page-preview';
import Sponsor from '../components/sponsor/sponsor';
import Profile from '../components/profile-preview/profile-preview';

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const blogs = get(this, 'props.data.allContentfulBlogPost.edges');
    const events = get(this, 'props.data.allContentfulEvent.edges');
    const sponsors = get(this, 'props.data.allContentfulSponsor.edges');
    const pages = get(this, 'props.data.allContentfulPage.edges');
    const profiles = get(this, 'props.data.allContentfulProfile.edges');

    return (
      <Layout location={this.props.location}>
        <main className="main--home">
          <Helmet title={siteTitle} />

          <section className="featured featured--events">
            {events.map(({ node }) => {
              return (
                <div key={node.id}>
                  {node.title} | {node.date} | {node.location}
                </div>
              );
            })}
          </section>

          <section className="featured featured--items">
            {blogs.map(({ node }) => {
              const featuredBlog = node.featured;
              return (
                <>
                  {featuredBlog ? (
                    <BlogPreview blog={node} key={node.id} />
                  ) : null}
                </>
              );
            })}
            {pages.map(({ node }) => {
              const FeaturedPage = node.featured;
              return (
                <>
                  {FeaturedPage ? (
                    <PagePreview page={node} key={node.id} />
                  ) : null}
                </>
              );
            })}
          </section>

          <section className="featured featured-skater">
            <h2>Featured Skater</h2>
            {profiles.map(({ node }) => {
              return <Profile profile={node} key={node.id} />;
            })}
          </section>

          <section className="sponsor">
            <ul className="sponsor__list">
              {sponsors.map(({ node }) => {
                return (
                  <li className="sponsor__item" key={node.id}>
                    <Sponsor sponsor={node} />
                  </li>
                );
              })}
            </ul>
          </section>
        </main>
      </Layout>
    );
  }
}

export default RootIndex;

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulProfile {
      edges {
        node {
          name
          homeTeam
          type
          bio {
            childMarkdownRemark {
              html
            }
          }
          featured
          photo {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          featured
          featureImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
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
    allContentfulPage {
      edges {
        node {
          title
          slug
          section
          featured
          featureImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          featureDescription {
            childMarkdownRemark {
              html
            }
          }
          pageContent {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulEvent(sort: { fields: [date], order: DESC }) {
      edges {
        node {
          title
          id
          date(formatString: "MMMM DD, YYYY")
          location
        }
      }
    }
    allContentfulSponsor {
      edges {
        node {
          name
          id
          photo {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          link
        }
      }
    }
  }
`;
