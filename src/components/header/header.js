import React from 'react';
import { Link } from 'gatsby';
import TXRGLogoWhite from '../../images/logo-white.png';

const Header = () => { 
  const menuToggleClick = () => {
    document.body.classList.toggle('open');
  };

  const menuHideClick = () => {
    document.body.classList.remove('open');
  };

  return (
    <header className="header">
      <div className="row">
        <div className="header-logo">
          <Link className="logo" to="/" aria-label="Texas Rollergirls Home">
            <img src ={TXRGLogoWhite} alt="TXRG" />       
            <span className="header-logo-name"> Texas Rollergirls</span>
          </Link>
        </div>

        <nav className="header-nav-wrap">
          <ul className="header-main-nav" onClick={() => menuHideClick()}>
            <li>
              <Link to="/who-we-are/">Who we are</Link>
            </li>
            <li>
              <Link to="/scores/">Scores</Link>
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
        
          <Link to="/events/tickets/"
            className="button button-primary cta">
            Buy Tickets
          </Link>
        </nav>

        <button
          className="header-menu-toggle"
          onClick={() => menuToggleClick()}>
          <span>Menu</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
