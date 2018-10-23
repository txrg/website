import React from 'react'
import Link from 'gatsby-link'
import Navigation from '../components/navigation/navigation'
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
        <Navigation />
        {children()}
        <Footer />
      </div>
    )
  }
}

export default Template
