import React from 'react';
import { Link } from 'gatsby';
import runningGirl from '../../images/runninggirl-white.png';

class Header extends React.Component {
  menuClick = () => {
    document.body.classList.toggle('open');
  };

  render() {
    return (
      <header className="header">
        <div class="row">
          <div className="header-logo">
            <Link className="logo" to="/" aria-label="Texas Rollergirls Home">
              <img src={runningGirl} alt="TXRG" />
              <span>Texas Rollergirls</span>
            </Link>
          </div>

          <nav className="header-nav-wrap">
            <ul className="header-main-nav" onClick={() => this.menuClick()}>
              <li>
                <Link to="/who-we-are/">Who we are</Link>
              </li>
              <li>
                <Link to="/events/">Events</Link>
              </li>
              <li>
                <Link to="/get-involved/">Get involved</Link>
              </li>
              <li>
                <Link to="/contact/">Contact</Link>
              </li>
              <li>
                <a href="https://squareup.com/market/texasrollergirls">Shop</a>
              </li>
            </ul>

            <a
              href="/events/tickets"
              title="Buy"
              className="button button-primary cta">
              Tickets
            </a>
          </nav>

          <button
            className="header-menu-toggle"
            onClick={() => this.menuClick()}>
            <span>Menu</span>
          </button>
        </div>
      </header>
    );
  }
}

export default Header;
