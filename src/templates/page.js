import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'

class PageTemplate extends React.Component {
  render() {
    const page = get(this.props, 'data.contentfulPage')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <div>
        <Helmet title={`${page.title} | ${siteTitle}`} />
        <div className="wrapper">
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
      </div>
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
