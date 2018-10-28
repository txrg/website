import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import { graphql, Link } from 'gatsby'
import Layout from "../components/layout/layout"
import Profile from '../components/profile-preview/profile-preview'

class PageTemplate extends React.Component {
  render() {
    const team = get(this.props, 'data.contentfulTeam');
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');
    const profiles = get(this, 'props.data.allContentfulProfile.edges');

    return (
      <Layout location={this.props.location} >
        <main className="main--team">
          <Helmet title={`${team.title} | ${siteTitle}`} />
        
            <h1>{team.title}</h1>
            <div
                dangerouslySetInnerHTML={{
                __html: team.pageContent.childMarkdownRemark.html,
                }}
            />

            <ul>
                {profiles.map(({ node }) => {
                    console.log(node.details);
                    return (
                        <>
                        {node.details != 'Retired' && (team.title === node.homeTeam || team.title === node.type) ? <Profile profile={node} key={node.id} /> : null }
                        </>
                    )
                })}
            </ul>
        </main>
      </Layout>
    )
  }
}

export default PageTemplate

export const teamQuery = graphql`
  query TeamBySlug($slug: String!) {
    contentfulTeam(slug: { eq: $slug }) {
      title
      pageContent {
        childMarkdownRemark {
          html
        }
      }
    }
    allContentfulProfile {
        edges {
          node {
            name
            homeTeam
            type
            details
            photo {
              fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
                ...GatsbyContentfulFluid_tracedSVG
               }
            }
          }
        }
      }
  }
`