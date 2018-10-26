import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'

class PageTemplate extends React.Component {
  render() {
    const page = get(this.props, 'data.contentfulPage');
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');

    let subNav;
    if (page.section === 'about') {
      subNav = (
        <ul>
            <li>About</li>
            <li>Contact</li>
            <li>History</li>
            <li>Privacy Policy</li>
            <li>FAQs</li>
            <li>Derby 101</li>
        </ul>
      )
    } else {
        subNav = null;
    }

    return (
      <main>
        <Helmet title={`${page.title} | ${siteTitle}`} />
        <div className="wrapper">
          {subNav}
          <h1 className="section-headline">{page.title}</h1>
          <p
            style={{
              display: 'block',
            }}
          >
            {page.publishDate}
          </p>
          <div
            dangerouslySetInnerHTML={{
              __html: page.pageContent.childMarkdownRemark.html,
            }}
          />
        </div>
      </main>
    )
  }
}

export default PageTemplate

export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
      title
      section
      pageContent {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
