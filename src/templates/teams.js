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
              {captains.map(({node: {role, member, photo}}) => <Member key={member.name} defaultPhoto={photo} role={role} details={member} />)}
              {members.map(({node: {member, photo}}) => <Member key={member.name} defaultPhoto={photo} details={member} />)}
            </ul>
          </div>
        </section>
      </main>
    </Layout>
  );
};

const Member = ({ defaultPhoto, role, details }) => {
  const headshot = defaultPhoto ? defaultPhoto.gatsbyImageData : details.photos[details.photos.length - 1].gatsbyImageData;
  return (
    <li className="member-list__item">
      <div className="member__preview  service-content">
        <div className="member__thumbnail">
        </div>
          <GatsbyImage alt={details.name} sizes={headshot.sizes} image={headshot} />
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
          photo {
            gatsbyImageData(layout: CONSTRAINED, width: 400, height: 400)
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
          photo {
            gatsbyImageData(layout: CONSTRAINED, width: 400, height: 400)
          }
          endYear
        }
      }
    }
  }
`;
