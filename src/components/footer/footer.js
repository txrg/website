import React from 'react';

const currentYear = new Date().getFullYear();


export default () => (
  <footer>
    <div className="footer-main">
      <div className="row">
        <div className="col-four md-1-3 tab-full footer-info">
          <h4>Texas Rollergirls</h4>

          <p>
            Texas Rollergirls are proud to be founding members of the Women's
            Flat Track Derby Association (WFTDA).
          </p>

          <ul className="footer-social-list">
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
        </div>
        <div className="col-eight md-1-3 tab-full footer-info">
          <h4>2019 Season</h4>
        </div>
      </div>
    </div>

    <div className="footer-bottom">
      <div className="row">
        <div className="col-twelve">
          <div className="copyright">
            <span>
              © Copyright Texas Rollergirls {currentYear}.
              <br />
              All photos on this web site are © 2009 - {currentYear} the respective
              photographers.
            </span>
          </div>

          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#top">
              <i className="icon-arrow-up" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
