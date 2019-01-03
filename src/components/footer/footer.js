import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import wftda from '../../images/wftda-logo.svg';

class Footer extends React.Component {
  render() {
    const currentYear = new Date().getFullYear();
    return (
      <StaticQuery
        query={graphql`
          query SiteFooterQuery {
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
          }
        `}
        render={data => (
          <>
            <footer>
              <div className="footer-main">
                <div className="row">
                  <div className="col-four md-1-3 tab-full footer-info">
                    <h4>Texas Rollergirls</h4>
                    <a href="https://www.wftda.com"><img src={wftda} alt="WFTDA" className="wftda-logo" rel="noopener noreferrer" target="_blank" /></a>
                    <p>
                      Texas Rollergirls are proud to be founding members of the <a href="https://www.wftda.com" rel="noopener noreferrer" target="_blank">Women's Flat Track Derby Association (WFTDA)</a>.
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
                    </ul>
                  </div>
                  <div className="col-six md-1-3 tab-full footer-info">
                    <h4>2019 Season</h4>
                    <ul className="event-list">
                      {data.allContentfulEvent.edges.map(({ node }) => {
                        return (
                          <li key={node.id} className="event-list">
                            <strong>{node.date}</strong>: {node.title}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="col-two md-1-3 tab-full footer-info">
                    <h4>Links</h4>
                    <ul className="list-links">
                      <li>
                        <Link to="/donate">Donate</Link>
                      </li>
                      <li>
                        <Link to="/blog">Blog</Link>
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
                        © Copyright Texas Rollergirls {currentYear}. <Link to="/privacy-policy/">Privacy Policy</Link>
                        <br />
                        All photos on this web site are © 2009 - {
                          currentYear
                        }{' '}
                        the respective photographers.
                      </span>
                    </div>

                    <div id="go-top">
                      <a
                        className="smoothscroll"
                        title="Back to Top"
                        href="#top">
                        <i className="icon-arrow-up" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </>
        )}
      />
    );
  }
}

export default Footer;
