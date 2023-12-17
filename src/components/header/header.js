import React from 'react';
import { Link } from 'gatsby';
import TXRG20yearsLogoWhite from '../../images/TXRG20yearsLogoWhite.png'; 

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
 
            <img src ={TXRG20yearsLogoWhite} alt="TXRG" />       
            
              <span> Texas Rollergirls</span>
            </Link>
          </div>

          <nav className="header-nav-wrap">
            <ul className="header-main-nav" onClick={() => this.menuHideClick()}>
     
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
          
            <Link to="/events/tickets/"
              className="button button-primary cta">
              Buy Tickets
            </Link>
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
