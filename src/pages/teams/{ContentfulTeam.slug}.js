import React, { useState, useRef } from 'react';
import { Link, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Layout from '../../components/layout/layout';
import Search from '../../components/search/search';
import SearchIcon from '../../components/search/searchIcon';

const Team = ({ pageContext: { slug }, data, location }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [memberSearch, setMemberSearch] = useState("");

  const searchInputRef = useRef(null);

  const searchMembers = ({node: {member: {name}}}) => {
    if (memberSearch === "") {
      return true;
    }
    
    const query = new RegExp("(" + memberSearch + ")", "i");
    return query.test(name);
  };

  const team = data.contentfulTeam;
  const leaders = data.currentLeaders? data.currentLeaders.edges.filter(searchMembers) : [];
  const leaderNames = leaders.map(({node: {member: {name}}}) => name);

  const currentMembers = data.currentMembers.group.reduce((members, { fieldValue, edges }) => {
    const leaderIndex = leaderNames.indexOf(fieldValue);
    if (leaderIndex > -1) {
      return members;
    }
    return [...members, edges[0]];
  }, []).filter(searchMembers);

  const retiredMembers = data.retiredMembers ? data.retiredMembers.edges.filter(searchMembers) : [];

  let TeamPage;

  switch(slug) {
    case "emeriti":
      TeamPage = EmeritiPage;
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
    <Layout location={location}>
      <main className="main--team">
        <section className="content content-intro">
          <div className="row about-features">
            <div className="main-content">
              <h1 className="intro-header">
                {team.title}&nbsp;
                <SearchIcon className="team-search-icon" isSearchOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen} />
                <div className="team-search">
                  <Search placeholder="Member Search" inputRef={searchInputRef} isSearchOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen} setSearch={setMemberSearch} />
                </div>
              </h1>
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

const EmeritiPage = ({ retiredMembers }) => (
  <>
    <h1 className="intro-header">Founders</h1>
    <ul className="member-list">
      {retiredMembers.filter(({node: {emeritusClass}}) => emeritusClass === "founder").map(({node: {teamMember, member, photo,}}) => <Member key={teamMember} defaultPhoto={photo} details={member} />)}
    </ul>
    <h1 className="intro-header" style={{marginTop: "1em"}}>Emeriti</h1>
    <ul className="member-list">
      {retiredMembers.filter(({node: {emeritusClass}}) => emeritusClass === "emeritus").map(({node: {teamMember, member, photo,}}) => <Member key={teamMember} defaultPhoto={photo} details={member} />)}
    </ul>
  </>
);

const PhotographersPage = () => (null);
const TravelTeamPage = ({ leaders, currentMembers }) => (
  <ul className="member-list">
    {leaders.map(({node: {teamLeader, role, member, photo}}) => <Member key={teamLeader} defaultPhoto={photo} role={role} details={member} />)}
    {currentMembers.map(({node: {teamMember, member, photo}}) => <Member key={teamMember} defaultPhoto={photo} details={member} />)}
  </ul>
);
const DefaultPage = ({ leaders, currentMembers, retiredMembers }) => (
  <>
    <ul className="member-list">
      {leaders.map(({node: {teamLeader, role, member, photo}}) => <Member key={teamLeader} defaultPhoto={photo} role={role} details={member} />)}
      {currentMembers.map(({node: {teamMember, member, photo}}) => <Member key={teamMember} defaultPhoto={photo} details={member} />)}
    </ul>
    <h1 className="intro-header" style={{marginTop: "1em"}}>Retirees</h1>
    <ul className="member-list">
      {retiredMembers.map(({node: {teamMember, member, photo}}) => <Member key={teamMember} defaultPhoto={photo} details={member} />)}
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
          teamLeader
          member {
            name
            photos {
              gatsbyImageData(layout: CONSTRAINED, width: 400, height: 400)
            }
            skaterPath: gatsbyPath(filePath: "/members/{ContentfulMember.name}")
          }
          photo {
            gatsbyImageData
          }
          role
        }
      }
    }
    currentMembers: allContentfulTeamMember(filter: {endYear: {eq: 0}, team: {slug: {eq: $slug}}}, sort: [{member: {name: ASC}}, {startYear: DESC}]) {
      group(field: {member: {name: SELECT}}) {
        fieldValue
        edges {
          node {
            teamMember
            member {
              name
              photos {
                gatsbyImageData(layout: CONSTRAINED, width: 400, height: 400)
              }
              skaterPath: gatsbyPath(filePath: "/members/{ContentfulMember.name}")
            }
            photo {
              gatsbyImageData(layout: CONSTRAINED, width: 400, height: 400)
            }
          }
        }
      }
    }
    retiredMembers: allContentfulTeamMember(filter: {endYear: {gt: 0}, team: {slug: {eq: $slug}}}, sort: [{member: {name: ASC}}]) {
      edges {
        node {
          teamMember
          member {
            name
            photos {
              gatsbyImageData(layout: CONSTRAINED, width: 400, height: 400)
            }
            skaterPath: gatsbyPath(filePath: "/members/{ContentfulMember.name}")
          }
          photo {
            gatsbyImageData(layout: CONSTRAINED, width: 400, height: 400)
          }
          emeritusClass
        }
      }
    }
  }
`;
