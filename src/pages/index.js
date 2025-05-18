import React from 'react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Layout from '../components/layout/layout';
import EventList from '../components/eventList/eventList';
import skaters from '../images/homepage.png';

const RootIndex = ({ data, location }) => { 
  const featured = data.allContentfulFeatured.edges;

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
          <EventList type="bout" isDynamic={true} />
        </div>
        <div className="row content-intro" style={{marginTop: "2rem"}}>
          <EventList type="volunteer" isDynamic={true} />
        </div>
        <div className="row content-intro" style={{marginTop: "2rem"}}>
          <EventList type="pep-rally" isDynamic={true} />
        </div>

        <div className="row about-features" style={{textAlign: "center"}}>
          <div className="features-list block-1-4 block-m-1-3 block-mob-full group">
          {featured.map(({node: {title, image, link, description}}) => (
            <div key={title} className="bgrid feature">
              <div className="feature__preview service-content">
                <Link className="feature__header" to={link}>
                  <div className="feature__thumbnail">
                    <GatsbyImage alt={title} image={image.gatsbyImageData} />
                  </div>
                  <div className="feature__content">
                    <h4 className="feature__title">{title}</h4>
                    <p
                      className="feature__description"
                      dangerouslySetInnerHTML={{
                        __html: description.childMarkdownRemark.html,
                      }}
                    >
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default RootIndex;

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulFeatured {
      edges {
        node {
          title
          image {
            gatsbyImageData(layout: CONSTRAINED, width: 350)
          }
          link
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
