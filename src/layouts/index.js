import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'

import '../styles/index.scss';


class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <div>
        <Header />
        <div className="main-content-wrapper section-padding-100">
          <div className="container">
            {children()}
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Template
