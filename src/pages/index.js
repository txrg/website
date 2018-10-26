import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import BlogPreview from '../components/blog-preview/blog-preview'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const blogs = get(this, 'props.data.allContentfulBlogPost.edges')
    const events = get(this, 'props.data.allContentfulEvent.edges')
    const sponsors = get(this, 'props.data.allContentfulSponsor.edges')

    return (
      <div>
        <Helmet title={siteTitle} />

        <div className="side-bar">
          <h2>Schedule</h2>      
          {events.map(({ node }) => {
            return (
              <div key={node.id}>
                {node.title} | {node.date} | {node.location}
              </div>
            )
          })}

          Add FeaturedSkater here
        </div>
        <div className="main-content">
          <section className="featured featured--blog">
            {blogs.map(({ node }) => {
              return (
                <div key={node.slug}>
                  <BlogPreview blog={node} />
                </div>
              )
            })}
          </section>
          <section className="featured featured--page">

          </section>
        </div>
         
        <section className="sponsor-list">  
          <ul>
            {sponsors.map(({ node }) => {
              return (
                <li key={node.id}>
                  <a href={node.link} target="_blank">
                  <Img alt={node.name} sizes={node.photo.sizes} />
                  </a>
                </li>
              )
            })}
          </ul>
       </section>
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
