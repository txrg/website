import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import ArticlePreview from '../components/article-preview/article-preview'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    const events = get(this, 'props.data.allContentfulEvent.edges')
    const sponsors = get(this, 'props.data.allContentfulSponsor.edges')

    return (
      <div>
        <Helmet title={siteTitle} />
        <div className="wrapper">
          <h2 className="section-headline">Events</h2>      
          <div className="row">
            {events.map(({ node }) => {
              return (
                <div key={node.id} className="col-12 col-md-6 col-lg-4">
                  {node.title} | {node.date} | {node.location}
                </div>
              )
            })} 
          </div>
          <h2 className="section-headline">Featured</h2>
          <p>List of content tagged featured (news, profile, page)</p>

          
          <div className="row">
            {posts.map(({ node }) => {
              return (
                <div key={node.slug} className="col-12 col-md-6 col-lg-4">
                  <ArticlePreview article={node} />
                </div>
              )
            })}
          </div>

          <h2 className="section-headline">Sponsors</h2>
          <ul>
            {sponsors.map(({ node }) => {
              return (
                <li key={node.id} className="col-12 col-md-6 col-lg-4">
                  <a href={node.link} target="_blank">
                  <Img alt={node.name} sizes={node.photo.sizes} />
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          featureImage {
            sizes(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
             ...GatsbyContentfulSizes_withWebp
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulEvent(sort: {fields: [date], order: DESC})  {
      edges {
        node {
          title
          id
          date(formatString: "MMMM DD, YYYY")
          location
        }
      }
    }
    allContentfulHomepage {
      edges {
        node {
          featuredTiles {
            __typename
          }
        }
      }
    }
    allContentfulSponsor {
      edges {
        node {
          name
          id
          photo {
            sizes(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulSizes_withWebp
             }
          }
          link
        }
      }
    }
  }
`
