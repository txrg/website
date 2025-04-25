import React from 'react';
import { Link, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Layout from '../../components/layout/layout';

const Team = ({ data }) => {
  const team = data.contentfulTeam;
  const leaders = data.currentLeaders? data.currentLeaders.edges : [];
  const repeatedMembers = leaders.reduce((agg, {node: {member: {name}}}) => ({...agg, [name]: name}), {});
  const currentMembers = data.currentMembers ? data.currentMembers.edges.filter(({node: {member: {name}}}) => {
    const isRepeated = repeatedMembers[name] != null;
    repeatedMembers[name] = name;
    return !isRepeated;
  }) : [];
  const retiredMembers = data.retiredMembers ? data.retiredMembers.edges : [];
  let TeamPage;

  switch(team.slug) {
    case "founders":
      TeamPage = FoundersPage;
      break;
    case "photographers":
      TeamPage = PhotographersPage;
      break;
    case "travel-team":
      TeamPage = TravelTeamPage;
      break;
    default:
      TeamPage = DefaultPage;
  }

  return (
    <Layout>
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
            <TeamPage leaders={leaders} currentMembers={currentMembers} retiredMembers={retiredMembers} />
          </div>
        </section>
      </main>
    </Layout>
  );
};

const FoundersPage = ({ retiredMembers }) => (
  <ul className="member-list">
    {retiredMembers.map(({node: {member, photo, endYear}}) => <Member key={`${member.name}-${endYear}`} defaultPhoto={photo} details={member} />)}
  </ul>
);
const PhotographersPage = () => (null);
const TravelTeamPage = ({ leaders, currentMembers }) => (
  <ul className="member-list">
    {leaders.map(({node: {role, member, photo, endYear}}) => <Member key={`${member.name}-${endYear}`} defaultPhoto={photo} role={role} details={member} />)}
    {currentMembers.map(({node: {member, photo, endYear}}) => <Member key={`${member.name}-${endYear}`} defaultPhoto={photo} details={member} />)}
  </ul>
);
const DefaultPage = ({ leaders, currentMembers, retiredMembers }) => (
  <>
    <ul className="member-list">
      {leaders.map(({node: {role, member, photo, endYear}}) => <Member key={`${member.name}-${endYear}`} defaultPhoto={photo} role={role} details={member} />)}
      {currentMembers.map(({node: {member, photo, endYear}}) => <Member key={`${member.name}-${endYear}`} defaultPhoto={photo} details={member} />)}
    </ul>
    <h1 className="intro-header" style={{marginTop: "1em"}}>Retirees</h1>
    <ul className="member-list">
      {retiredMembers.map(({node: {member, photo, endYear}}) => <Member key={`${member.name}-${endYear}`} defaultPhoto={photo} details={member} />)}
    </ul>
  </>
);

const Member = ({ defaultPhoto, role, details }) => {
  const headshot = defaultPhoto ? defaultPhoto.gatsbyImageData : details.photos[details.photos.length - 1].gatsbyImageData;
  return (
    <li className="member-list__item">
      <Link to={`${details.skaterPath}`}>
        <div className="member__preview  service-content">
          <div className="member__thumbnail">
          </div>
          <GatsbyImage alt={details.name} sizes={headshot.sizes} image={headshot} />
          <h4 className="member__name">
            <span>{role}</span>
            {details.name}{' '}
          </h4>
        </div>
      </Link>
    </li>
  );
};


export default Team;

export const teamQuery = graphql`
  query TeamBySlug($slug: String! ) {
    contentfulTeam(slug: {eq: $slug}) {
      slug
      title
      pageContent {
        childMarkdownRemark {
          html
        }
      }
    }
    currentLeaders: allContentfulTeamLeader(filter: {endYear: {eq: 0}, team: {slug: {eq: $slug}}}, sort: [{role: ASC}, {member: {name: ASC}}]) {
      edges {
        node {
          member {
            name
            photos {
              gatsbyImageData(layout: CONSTRAINED, width: 400, height: 400)
            }
            skaterPath: gatsbyPath(filePath: "/members/{ContentfulMember.name}")
          }
          role
          team {
            slug
          }
          photo {
            gatsbyImageData
          }
          startYear
          endYear
        }
      }
    }
    currentMembers: allContentfulTeamMember(filter: {endYear: {eq: 0}, team: {slug: {eq: $slug}}}, sort: [{member: {name: ASC}}]) {
      edges {
        node {
          member {
            name
            photos {
              gatsbyImageData(layout: CONSTRAINED, width: 400, height: 400)
            }
            skaterPath: gatsbyPath(filePath: "/members/{ContentfulMember.name}")
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
    retiredMembers: allContentfulTeamMember(filter: {endYear: {gt: 0}, team: {slug: {eq: $slug}}}, sort: [{member: {name: ASC}}]) {
      edges {
        node {
          member {
            name
            photos {
              gatsbyImageData(layout: CONSTRAINED, width: 400, height: 400)
            }
            skaterPath: gatsbyPath(filePath: "/members/{ContentfulMember.name}")
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
