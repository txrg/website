import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import wftda from '../../images/wftda-logo.svg';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const data = useStaticQuery(graphql`
    query SiteFooterQuery {
      allContentfulEvent(sort: {date: ASC}) {
        edges {
          node {
            title {
              childMarkdownRemark {
                html
              }
            }
            id
            type
            date(formatString: "MMMM DD, YYYY")
            location
          }
        }
      }
    }
  `);

  return (
    <>
      <footer>
        <div className="footer-main">
          <div className="row">
            <div className="col-four md-1-3 tab-full footer-info">
              <h4>Texas Rollergirls</h4>
              <a href="https://www.wftda.com">
                <img
                  src={wftda}
                  alt="WFTDA"
                  className="wftda-logo"
                  rel="noopener noreferrer"
                  target="_blank"
                />
              </a>
              <p>
                Texas Rollergirls are proud to be founding members of the{' '}
                <a
                  href="https://www.wftda.com"
                  rel="noopener noreferrer"
                  target="_blank">
                  Women's Flat Track Derby Association (WFTDA)
                </a>
                .
              </p>
              <p>
                Austin Texas Rollergirls Incorporated<br/>
                8120 Research Blvd Ste 105, #511<br/>
                Austin, TX 78758
              </p>
              <ul className="footer-social-list">
                <li>
                  <a
                    href="http://www.facebook.com/TexasRollergirls"
                    aria-label="Facebook">
                    <i className="fa fa-facebook-square" />
                  </a>
                </li>
                <li>
                  <a
                    href="http://twitter.com/txrollergirls"
                    aria-label="Twitter">
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
                <li>
                  <a
                    href="https://www.tiktok.com/@texasrollergirls"
                    aria-label="TikTok">
                    <i className="fa fa-tiktok" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-five md-1-3 tab-full footer-info">
              <h4>2025 Season</h4>
              <ul className="event-list">
                {data.allContentfulEvent.edges.filter(({node: {type}}) => type === "bout").map(({ node }) => {
                  return (
                    <li key={node.id} className="event-list">
                      <strong>{node.date}</strong><span
                        dangerouslySetInnerHTML={{
                          __html: node.title.childMarkdownRemark.html
                        }}></span>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="col-three md-1-3 tab-full footer-info">
              <h4>Links</h4>
              <ul className="list-links">
                <li>
                  <Link to="/contact/sponsorship/">Sponsorship</Link>
                </li>
                <li>
                  <Link to="/mission">Mission</Link>
                </li>
                <li>
                  <Link to="/code-of-conduct">Code of Conduct</Link>
                </li>
                <li>
                  <Link to="/donate">Donate</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/events/whammys">The Whammys</Link>
                </li>
                <li>
                  <Link to="/media">Media Archive</Link>
                </li>
                <li>
                  <Link to="/tulsa-fund">The Tulsa Fund</Link>
                </li>
                <li>
                  <a href="https://squareup.com/market/texasrollergirls" target="_blank" rel="noopener noreferrer">
                    Shop
                  </a>
                </li>
                 <li>
                  <a href="http://eepurl.com/i8GWq6" target="_blank" rel="noopener noreferrer">
                    Join our email list  
                  </a>
                </li>

              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="row">
            <div className="col-twelve">
              <div className="copyright">
                <span>
                  © Copyright Texas Rollergirls {currentYear}.{' '}
                  <Link to="/privacy-policy/">Privacy Policy</Link>
                  <br />
                  All photos on this web site are © 2009 - {
                    currentYear
                  }{' '}
                  the respective photographers.
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
