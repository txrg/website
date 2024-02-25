import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout/layout';
import Profile from '../components/profile-preview/profile-preview';

const TeamTemplate = ({ data, location }) => {
  const team = data.contentfulTeam;
  const profiles = data.allContentfulProfile.edges;

  return (
    <Layout location={location}>
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

                console.log(profileDetails);

                return (
                  <>
                    {(profileDetails !== 'Retired' &&
                      (team.title === node.homeTeam ||
                        team.title === profileDetails ||
                        team.title.toLowerCase() === node.type)) ||
                    (profileDetailsFounder === 'Founders' &&
                      team.title === 'Founders') ||
                    (profileDetails === 'Retired' &&
                      team.title === 'Retired Skaters') ||
                    (profileDetails === 'Homies' &&
                      team.title === 'Homies') ||
                    (profileDetails === 'Travel-team' &&
                      team.title === 'Travel team') ? (
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
};

export default TeamTemplate;

export const teamQuery = graphql`
  query TeamBySlug($slug: String!) {
    contentfulTeam(slug: {eq: $slug}) {
      title
      pageContent {
        childMarkdownRemark {
          html
        }
      }
    }
    allContentfulProfile(sort: [{title: ASC}, {name: ASC}]) {
      edges {
        node {
          name
          title
          homeTeam
          type
          details
          photo {
            gatsbyImageData(layout: CONSTRAINED, width: 400, height: 400)
          }
        }
      }
    }
  }
`;
