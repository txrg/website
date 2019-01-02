import React from 'react';
import { Link } from 'gatsby';
import runningGirl from '../../images/runninggirl-white.png';

class Header extends React.Component {
  menuClick = () => {
    document.body.classList.toggle('open');
  };

  render() {
    return (
      <header className="header row">
        <div className="header-logo">
          <Link className="logo" to="/">
            <img src={runningGirl} alt="" />
            <span>TXRG</span>
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
              <Link to="/shop/">Shop</Link>
            </li>
          </ul>

          <a
            href="https://www.brownpapertickets.com/event/3233212"
            title="Buy"
            className="button button-primary cta">
            Buy Tickets
          </a>
        </nav>

        <button className="header-menu-toggle" onClick={() => this.menuClick()}>
          <span>Menu</span>
        </button>
      </header>
    );
  }
}

export default Header;
