import React from 'react';
import { Link } from 'gatsby';
import runningGirl from '../../images/runninggirl-white.png';

export default () => (
  <header className="header row">
    <div className="header-logo">
      <Link className="logo" to="/">
        <img src={runningGirl} alt="" />
        <span>TXRG</span>
      </Link>
    </div>

    <nav className="header-nav-wrap">
      <ul className="header-main-nav">
        <li>
          <Link to="/about/">About</Link>
        </li>
        <li>
          <Link to="/blog/">Blog</Link>
        </li>
        <li>
          <Link to="/who-we-are/">Who we are</Link>
        </li>
        <li>
          <Link to="/events/">Events</Link>
        </li>
        <li>
          <Link to="/tickets/">Tickets</Link>
        </li>
        <li>
          <Link to="/get-involved/">Get Involved</Link>
        </li>
        <li>
          <Link to="/media/">Media</Link>
        </li>
        <li>
          <Link to="/sponsorship/">Sponsorship</Link>
        </li>
        <li>
          <a href="https://www.texasrollergirls.org/shop/">Shop</a>
        </li>
      </ul>

      <a
        href="https://www.brownpapertickets.com/event/3233212"
        title="Buy"
        className="button button-primary cta">
        Buy Tickets
      </a>
    </nav>

    <a className="header-menu-toggle" href="#">
      <span>Menu</span>
    </a>
  </header>
);
