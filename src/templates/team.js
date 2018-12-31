import React from 'react';
import Helmet from 'react-helmet';
import get from 'lodash/get';
import { graphql } from 'gatsby';
import Layout from '../components/layout/layout';
import Profile from '../components/profile-preview/profile-preview';

class PageTemplate extends React.Component {
  render() {
    const team = get(this.props, 'data.contentfulTeam');
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');
    const profiles = get(this, 'props.data.allContentfulProfile.edges');

    return (
      <Layout location={this.props.location}>
        <main className="main--team">
          <Helmet title={`${team.title} | ${siteTitle}`} />
          <section id="about">
            <div className="row about-features">
              <div className="main-content">
                <h1 class="intro-header">{team.title}</h1>
                {team.pageContent ? (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: team.pageContent.childMarkdownRemark.html,
                    }}
                  />
                ) : null}
              </div>
              <ul className="profile-list">
                {profiles.map(({ node }) => {
                  console.log(node.details);
                  return (
                    <>
                      {node.details != 'Retired' &&
                      (team.title === node.homeTeam ||
                        team.title === node.type) ? (
                        <li className="profile-list__item" key={node.id}>
                          <Profile profile={node} />
                        </li>
                      ) : null}
                    </>
                  );
                })}
              </ul>
            </div>
          </section>
        </main>
      </Layout>
    );
  }
}

export default PageTemplate;

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
            fluid(maxWidth: 350, maxHeight: 350, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;
