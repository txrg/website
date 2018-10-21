import React from 'react'
import Link from 'gatsby-link'
import base from './base.css'
import Navigation from '../components/navigation/navigation'
import Header from '../components/header/header'

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
      </div>
    )
  }
}

export default Template
