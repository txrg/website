import React from 'react';
import get from 'lodash/get';
import { graphql } from 'gatsby';
import Layout from '../components/layout/layout';
import Profile from '../components/profile-preview/profile-preview';

class TeamTemplate extends React.Component {
  render() {
    const team = get(this.props, 'data.contentfulTeam');
    const profiles = get(this, 'props.data.allContentfulProfile.edges');

    return (
      <Layout location={this.props.location}>
        <main className="main--team">
          <section className="content content-intro">
            <div className="row about-features">
              <div className="main-content">
                <h1 className="intro-header">{team.title}</h1>
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
                  let profileDetails;
                  try {
                    profileDetails = node.details[0];
                  } catch (e) {
                    profileDetails = '';
                  }
                  let profileDetailsFounder;
                  try {
                    profileDetailsFounder = node.details[1];
                  } catch (e) {
                    profileDetailsFounder = '';
                  }

                  return (
                    <>
                      {(profileDetails !== 'Retired' &&
                        (team.title === node.homeTeam ||
                          team.title === profileDetails ||
                          team.title.toLowerCase() === node.type)) ||
                      (profileDetailsFounder === 'Founders' &&
                        team.title === 'Founders') ||
                      (profileDetails === 'Retired' &&
                        team.title === 'Retired Skaters') ? (
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

export default TeamTemplate;

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
    allContentfulProfile(sort: { fields: [title, name], order: ASC }) {
      edges {
        node {
          name
          title
          homeTeam
          type
          details
          photo {
            sizes(maxWidth: 400, maxHeight: 400) {
              ...GatsbyContentfulSizes
            }
          }
        }
      }
    }
  }
`;
