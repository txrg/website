import React from 'react';
import get from 'lodash/get';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout/layout';
import BlogPreview from '../components/blog-preview/blog-preview';
import PagePreview from '../components/page-preview/page-preview';
import Sponsor from '../components/sponsor/sponsor';
import Profile from '../components/profile-preview/profile-feature';
import logo from '../images/logo-white.png';

class RootIndex extends React.Component {
  render() {
    const blogs = get(this, 'props.data.allContentfulBlogPost.edges');
    const events = get(this, 'props.data.allContentfulEvent.edges');
    const sponsors = get(this, 'props.data.allContentfulSponsor.edges');
    const pages = get(this, 'props.data.allContentfulPage.edges');
    const profiles = get(this, 'props.data.allContentfulProfile.edges');

    return (
      <Layout location={this.props.location}>
        <section className="home">
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
                  <a
                    href="https://www.brownpapertickets.com/event/3233212"
                    className="smoothscroll button stroke">
                    <span className="icon-calendar" aria-hidden="true" />
                    Buy Tickets
                  </a>
                  <Link
                    to="/about/donate"
                    className="smoothscroll button stroke">
                    <span className="icon-dollar" aria-hidden="true" />
                    Donate
                  </Link>
                </div>
              </div>
              <div className="home-image-right">
                <img src={logo} alt="Texas Rollergirls" className="logo-seal" />
              </div>
            </div>
          </div>

          <ul className="home-social-list">
            <li>
              <a href="http://www.facebook.com/TexasRollergirls" aria-label="Facebook">
                <i className="fa fa-facebook-square" />
              </a>
            </li>
            <li>
              <a href="http://twitter.com/txrollergirls" aria-label="Twitter">
                <i className="fa fa-twitter" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/texasrollergirls/" aria-label="Instagram">
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

        <section className="content content-home">
          <div className="row content-intro">
            <div className="col-two">
              <h1 className="intro-header">2019 Season</h1>
            </div>
            <div className="col-ten">
              {events.map(({ node }) => {
                return (
                  <div key={node.id} className="event-list">
                    <h3>
                      <span className="icon-calendar" aria-hidden="true" />{' '}
                      <span>{node.date}</span>: {node.title}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="row about-features">
            <div className="features-list block-1-4 block-m-1-2 block-mob-full group">
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
                      <div className="bgrid feature">
                        <Profile profile={node} key={node.id} />
                      </div>
                    ) : null}
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
      </Layout>
    );
  }
}

export default RootIndex;

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulProfile(sort: { fields: [name], order: ASC }) {
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
            sizes(maxWidth: 350) {
              ...GatsbyContentfulSizes
            }
          }
          featureDescription {
            childMarkdownRemark {
              html
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
            fluid(maxWidth: 350, maxHeight: 350, resizingBehavior: CROP) {
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
            fluid(maxWidth: 350, maxHeight: 350, resizingBehavior: CROP) {
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
    allContentfulEvent(sort: { fields: [date], order: ASC }) {
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
            fluid {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          link
        }
      }
    }
  }
`;
