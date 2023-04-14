import React from 'react';
import get from 'lodash/get';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout/layout';
import BlogPreview from '../components/blog-preview/blog-preview';
import PagePreview from '../components/page-preview/page-preview';
import Profile from '../components/profile-preview/profile-feature';
import EventList from '../components/eventList/eventList';
import skaters from '../images/20yr-header-photo-homepage-v2.png';

class RootIndex extends React.Component {
  render() {
    const blogs = get(this, 'props.data.allContentfulBlogPost.edges');
    const pages = get(this, 'props.data.allContentfulPage.edges');
    const profiles = get(this, 'props.data.allContentfulProfile.edges');

    return (
      <Layout location={this.props.location}>
        <section className="home">
          <div className="overlay" />

          <div className="home-content">
            <div className="row contents">
              <img
                src={skaters}
                alt="Texas Rollergirls"
                className="homepage-skaters"
              />
              <div className="home-content-left">
                <h1>
                  Celebrating <br />
                  20 years of <br />
                  Roller Derby.
                </h1>

                <div className="buttons">
                 <a href="https://ticketbud.com/events/01bd11f4-93b8-11ed-bab4-42010a71701e" target="_blank" rel="noopener noreferrer"
                    className="smoothscroll button stroke">
                    <span className="icon-calendar" aria-hidden="true" />
                    Tickets
                  </a>
                  <Link to="/donate" className="smoothscroll button stroke">
                    <span className="icon-dollar" aria-hidden="true" />
                    Donate
                  </Link>
                </div>
              </div>
              {/*}
              <div className="home-image-right">
                <img src={logo} alt="Texas Rollergirls" className="logo-seal" />
              </div>
              */}
            </div>
          </div>

          <ul className="home-social-list">
            <li>
              <a
                href="http://www.facebook.com/TexasRollergirls"
                aria-label="Facebook">
                <i className="fa fa-facebook-square" />
              </a>
            </li>
            <li>
              <a href="http://twitter.com/txrollergirls" aria-label="Twitter">
                <i className="fa fa-twitter" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/texasrollergirls/"
                aria-label="Instagram">
                <i className="fa fa-instagram" />
              </a>
            </li>
            <li>
              <a
                href="http://www.youtube.com/TexasRollergirls"
                aria-label="Youtube">
                <i className="fa fa-youtube-square" />
                </a>
                </li>
          </ul>
        </section>

        <section className="content content-home">
          <div className="row content-intro">
            <div className="col-two">
              <h1 className="intro-header">2023 Season</h1>
            </div>
            <div className="col-ten">
             
             <EventList />
            </div>
          </div>

          <div className="row about-features">
            <div className="features-list block-1-4 block-m-1-3 block-mob-full group">
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
              rawMarkdownBody
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
    allContentfulPage {
      edges {
        node {
          title
          slug
          section
          featured
          featureImage {
            fluid(maxWidth: 350, maxHeight: 350, resizingBehavior: CROP) {
              ...GatsbyContentfulFluid
            }
          }
          featureDescription {
            childMarkdownRemark {
              rawMarkdownBody
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
  }
`;
