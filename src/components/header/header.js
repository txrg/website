import React from 'react';
import { Link } from 'gatsby';
import runningGirl from '../../images/runninggirl-white.png';

class Header extends React.Component {
  menuToggleClick = () => {
    document.body.classList.toggle('open');
  };

  menuHideClick = () => {
    document.body.classList.remove('open');
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
            <ul className="header-main-nav" onClick={() => this.menuHideClick()}>
              <li>
                <Link to="/COVID-19/">COVID-19</Link>
              </li>
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
                <a href="https://squareup.com/market/texasrollergirls" target="_blank" rel="noopener noreferrer">Shop</a>
              </li>
            </ul>

            <a href="import React from 'react';
import { Link } from 'gatsby';
import runningGirl from '../../images/runninggirl-white.png';

class Header extends React.Component {
  menuToggleClick = () => {
    document.body.classList.toggle('open');
  };

  menuHideClick = () => {
    document.body.classList.remove('open');
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
            <ul className="header-main-nav" onClick={() => this.menuHideClick()}>
              <li>
                <Link to="/COVID-19/">COVID-19</Link>
              </li>
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
                <a href="https://squareup.com/market/texasrollergirls" target="_blank" rel="noopener noreferrer">Shop</a>
              </li>
            </ul>

            <a href="https://ticketbud.com/events/66de55f6-4c1a-11ed-8c28-42010a71701e" target="_blank" rel="noopener noreferrer"
              className="button button-primary cta">
              Buy Tickets
            </a>
          </nav>

          <button
            className="header-menu-toggle"
            onClick={() => this.menuToggleClick()}>
            <span>Menu</span>
          </button>
        </div>
      </header>
    );
  }
}

export default Header;" target="_blank" rel="noopener noreferrer"
              className="button button-primary cta">
              Buy Tickets
            </a>
          </nav>

          <button
            className="header-menu-toggle"
            onClick={() => this.menuToggleClick()}>
            <span>Menu</span>
          </button>
        </div>
      </header>
    );
  }
}

export default Header;
