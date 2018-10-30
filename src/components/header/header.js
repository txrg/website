import React from 'react';
import { Link } from 'gatsby';
import logo from '../../images/texasrollergirls.png';

export default () => (
  <header>
    <Link className="logo" to="/">
      <img src={logo} alt="Texas Rollergirls" />
    </Link>
    <nav>
      <ul className="navbar-nav">
        <li className="nav-item active">
          <Link className="nav-link" to="/blog/">
            Blog
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about/">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/who-we-are/">
            Who we are
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/events/">
            Events
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/tickets/">
            Tickets
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/get-involved/">
            Get Involved
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/media/">
            Media
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/sponsorship/">
            Sponsorship
          </Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://www.texasrollergirls.org/shop/">
            Shop
          </a>
        </li>
      </ul>
    </nav>
  </header>
);
