import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Layout from '../components/layout/layout';

const TeamTemplate = ({ data, location }) => {
  let {
    contentfulTeam: team,
    allContentfulCaptain: { edges: captains },
    allContentfulTeamMember: { edges: members },
  } = data;

  let repeatedMembers = captains.reduce((agg, {node: {member: {name}}}) => ({...agg, [name]: name}), {});
  members = members.filter(({node: {member: {name}}}) => {
    const isRepeated = repeatedMembers[name] != null;
    repeatedMembers[name] = name;
    return !isRepeated;
  });

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
            <ul className="member-list">
              {captains.map(({node: {name, role, member}}) => <Member key={name} role={role} details={member} />)}
              {members.map(({node: {name, role, member}}) => <Member key={name} role={role} details={member} />)}
            </ul>
          </div>
        </section>
      </main>
    </Layout>
  );
};

const Member = ({ role, details }) => {
  const latestPhoto = details.photos.length - 1;
  return (
    <li className="member-list__item">
      <div className="member__preview  service-content">
        <div className="member__thumbnail">
        </div>
          <GatsbyImage alt={details.name} sizes={details.photos[latestPhoto].sizes} image={details.photos[latestPhoto].gatsbyImageData} />
        <h4 className="member__name">
          <span>{role}</span>
          {details.name}{' '}
        </h4>
      </div>
    </li>
  );
};


export default TeamTemplate;

export const teamQuery = graphql`
  query TeamBySlug($slug: String! ) {
    contentfulTeam(slug: {eq: $slug}) {
      title
      pageContent {
        childMarkdownRemark {
          html
        }
      }
    }
    allContentfulCaptain(filter: {endYear: {eq: 0}, team: {slug: {eq: $slug}}}, sort: [{role: ASC}, {member: {name: ASC}}]) {
      edges {
        node {
          member {
            name
            photos {
              gatsbyImageData(layout: CONSTRAINED, width: 400, height: 400)
            }
          }
          role
          team {
            slug
          }
          startYear
          endYear
        }
      }
    }
    allContentfulTeamMember(filter: {endYear: {eq: 0}, team: {slug: {eq: $slug}}}, sort: [{member: {name: ASC}}]) {
      edges {
        node {
          member {
            name
            photos {
              gatsbyImageData(layout: CONSTRAINED, width: 400, height: 400)
            }
          }
          team {
            slug
          }
          endYear
        }
      }
    }
  }
`;
