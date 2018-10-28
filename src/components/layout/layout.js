import React from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'
import '../../styles/index.scss';


class Template extends React.Component {
  render() {
    const { children } = this.props
    /*
    const { location, children } = this.props
    let header

    let rootPath = `/`
    
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }
    */

    return (
      <div>
        <Header />
        {children}
        <Footer />
      </div>
    )
  }
}

export default Template
