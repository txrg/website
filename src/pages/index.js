import React from 'react';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
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
        <section
          id="home"
          data-parallax="scroll"
          data-image-src="images/hero-bg.jpg"
          data-natural-width="3000"
          data-natural-height="2000">
          <div className="overlay" />
          <div className="home-content">
            <div className="row contents">
              <div className="home-content-left">
                <h3>Texas Rollergirls</h3>

                <h1>
                  This is <br />
                  roller
                  <br />
                  derby.
                </h1>

                <div className="buttons">
                  <a href="https://www.brownpapertickets.com/event/3233212" className="smoothscroll button stroke">
                    <span className="icon-calendar" aria-hidden="true" />
                    Buy Tickets
                  </a>
                  <Link to="/about/donate" className="smoothscroll button stroke">
                    <span className="icon-dollar" aria-hidden="true" />
                    Donate
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <ul className="home-social-list">
            <li>
              <a href="http://www.facebook.com/TexasRollergirls">
                <i className="fa fa-facebook-square" />
              </a>
            </li>
            <li>
              <a href="http://twitter.com/txrollergirls">
                <i className="fa fa-twitter" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/texasrollergirls/">
                <i className="fa fa-instagram" />
              </a>
            </li>
          </ul>

          <div className="home-scrolldown">
            <a href="#about" className="scroll-icon smoothscroll">
              <span>Scroll Down</span>
              <i className="icon-arrow-right" aria-hidden="true" />
            </a>
          </div>
        </section>

        <section id="about">
          <div className="row about-intro">
            <div className="col-two">
              <h1 className="intro-header">Events</h1>
            </div>
            <div className="col-ten">
              {events.map(({ node }) => {
                return (
                  <div key={node.id}>
                    <h3>
                      <span>{node.date}</span>: {node.title}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="row about-features">
            <div className="features-list block-1-3 block-m-1-2 block-mob-full group">
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
              {profiles.map(({ node }) => {
                return (
                  <>
                    {node.featured != null ? (
                      <Profile profile={node} key={node.id} />
                    ) : null}
                  </>
                );
              })}
            </div>
          </div>
        </section>

        <Helmet title={siteTitle} />

        <section id="download">
          <div className="row">
            <div className="col-full">
              <h1 className="intro-header">Sponsors</h1>
              <p className="lead" />

              <ul className="sponsor__list download-badges">
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

export default RootIndex;

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulProfile {
      edges {
        node {
          name
          homeTeam
          type
          details
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
