import React from 'react'
import Link from 'gatsby-link'

export default () => (
  <header className="header-area">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <nav className="navbar navbar-expand-lg">
                   
                    <Link className="navbar-brand" to="/">TXRG</Link>
                    
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#worldNav" aria-controls="worldNav" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                   
                    <div className="collapse navbar-collapse" id="worldNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                              <Link className="nav-link" to="/blog/">Blog</Link>
                            </li>
                            <li className="nav-item">
                              <Link className="nav-link" to="/about/">About</Link>
                            </li>
                            <li className="nav-item">
                              <Link className="nav-link" to="/who-we-are/">Who we are</Link>
                            </li>
                            <li className="nav-item">
                              <Link className="nav-link" to="/events/">Events</Link>
                            </li>
                            <li className="nav-item">
                              <Link className="nav-link" to="/tickets/">Tickets</Link>
                            </li>
                            <li className="nav-item">
                              <Link className="nav-link" to="/get-involved/">Get Involved</Link>
                            </li>
                            <li className="nav-item">
                              <Link className="nav-link" to="/media/">Media</Link>
                            </li>
                            <li className="nav-item">
                              <Link className="nav-link" to="/sponsorship/">Sponsorship</Link>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="https://www.texasrollergirls.org/shop/">Shop</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </div>
  </header>
)
