import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import { graphql, Link } from 'gatsby'
import Layout from "../components/layout/layout"

class PageTemplate extends React.Component {
  render() {
    const page = get(this.props, 'data.contentfulPage');
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');
    const pages = get(this, 'props.data.allContentfulPage.edges');

    const subNav = (
      <>
        {pages.map(({ node }) => {
          const pageLink = node.section.toLowerCase().split(' ').join('-') === node.slug ? `/${node.slug}/` : `/${node.section}/${node.slug}/`
          return (
            <>
              {page.section === node.section ? 
                <li key={node.slug}>
                  <Link to={pageLink}>{node.title}</Link> 
                </li>
                : null
              }
            </>
          )
        })}
      </>
    );

    return (
      <Layout location={this.props.location} >
        <main>
          <Helmet title={`${page.title} | ${siteTitle}`} />
          <aside className="side-bar">
            <nav>
              <ul>
                {subNav}
              </ul>
            </nav>
          </aside>
          <div className="main-content">
            <h1>{page.title}</h1>
            <div
              dangerouslySetInnerHTML={{
                __html: page.pageContent.childMarkdownRemark.html,
              }}
            />
          </div>
        </main>
      </Layout>
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
    allContentfulPage {
      edges {
        node {
          title
          slug
          section
        }
      }
    }
  }
`
