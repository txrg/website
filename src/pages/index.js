import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout/layout';
import BlogPreview from '../components/blog-preview/blog-preview';
import PagePreview from '../components/page-preview/page-preview';
import ProfilePreview from '../components/profile-preview/profile-preview';
import EventList from '../components/eventList/eventList';
import skaters from '../images/homepage.png';

const RootIndex = ({ data, location }) => { 
  const blogs = data.allContentfulBlogPost.edges;
  const pages = data.allContentfulPage.edges;
  const profiles = data.allContentfulProfile.edges;

  return (
    <Layout location={location}>
      <section className="home">

        <div className="home-content">
          <div className="home-highlight row contents">
            <div className="home-highlight-right">
              <img
                src={skaters}
                alt="Texas Rollergirls"
              />
            </div>
            <div className="home-highlight-left">
              <h1>
                <span style={{ display: "block" }}>THIS IS </span>
                <span style={{ display: "block" }}>ROLLER </span>
                DERBY
              </h1>

              <div className="buttons">
               <Link to="/events/tickets/"
                  className="smoothscroll button stroke">
                  <span className="icon-calendar" aria-hidden="true" />
                  Tickets
                </Link>
                <Link to="/donate" className="smoothscroll button stroke">
                  <span className="icon-dollar" aria-hidden="true" />
                  Donate
                </Link>
              </div>
            </div>
          </div>
        </div>

        <ul className="home-social-list">
          <li>
            <a
              href="http://www.facebook.com/TexasRollergirls"
              aria-label="Facebook">
                <i className="fa-brands fa-facebook-square"/>
            </a>
          </li>
          <li>
            <a href="http://twitter.com/txrollergirls" aria-label="Twitter">
              <i className="fa-brands fa-twitter" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/texasrollergirls/"
              aria-label="Instagram">
              <i className="fa-brands fa-instagram" />
            </a>
          </li>
          <li>
            <a
              href="http://www.youtube.com/TexasRollergirls"
              aria-label="Youtube">
              <i className="fa-brands fa-youtube-square" />
              </a>
          </li>
          <li>
            <a
              href="https://www.tiktok.com/@texasrollergirls"
              aria-label="TikTok">
              <i className="fa-brands fa-tiktok" />
              </a>
          </li>
        </ul>
      </section>

      <section className="content content-home">
        <div className="row content-intro">
          <div className="col-two">
            <h1 className="intro-header">2025 Season</h1>
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
                    <div className="bgrid feature" key={node.id}>
                      <ProfilePreview profile={node} />
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

export default RootIndex;

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulProfile(sort: {name: ASC}) {
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
            gatsbyImageData(layout: CONSTRAINED, width: 350)
          }
          featureDescription {
            childMarkdownRemark {
              rawMarkdownBody
            }
          }
        }
      }
    }
    allContentfulBlogPost(sort: {publishDate: DESC}) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          featured
          featureImage {
            gatsbyImageData(layout: CONSTRAINED, width: 350, height: 350)
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
            gatsbyImageData(layout: CONSTRAINED, width: 350, height: 350)
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
