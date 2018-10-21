import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'

import heroStyles from '../components/hero/hero.module.css'

class BlogPostProfileDetailTemplateTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulBlogPost')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <div style={{ background: '#fff' }}>
        <Helmet title={`${post.title} | ${siteTitle}`} />
        <div className={heroStyles.hero}>
          <Img className={heroStyles.featureImage} alt={post.title} sizes={post.featureImage.sizes} />
        </div>
        <div className="wrapper">
          <h1 className="section-headline">{post.title}</h1>
          <p
            style={{
              display: 'block',
            }}
          >
            {post.publishDate}
          </p>
          <div
            dangerouslySetInnerHTML={{
              __html: post.body.childMarkdownRemark.html,
            }}
          />
        </div>
      </div>
    )
  }
}

export default ProfileDetailTemplate

export const pageQuery = graphql`
query ProfileQuery {
  allContentfulProfile {
  
    edges {
      node {
        __typename
        name
        type
        homeTeam
        details
        children {
          __typename
        }
        bio {
          id
          internal {
            type
            mediaType
            content
            contentDigest
            owner
          }
        }
      }
    }
  }
}