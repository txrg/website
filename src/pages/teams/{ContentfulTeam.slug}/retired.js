import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import NotFound from '../../../pages/404';
import Layout from '../../../components/layout/layout';

const Team = ({ data, location }) => {
  let hasRetiredPage = false;
  switch (data.contentfulTeam.slug) {
    case "hell-marys":
    case "honky-tonk-heartbreakers":
    case "hotrod-honeys":
    case "hustlers":
    case "travel-team":
      hasRetiredPage = true;
      break;
    default:
      hasRetiredPage = false;
  }

  return ( hasRetiredPage ?
    <Layout location={location}>
      <main className="main--team">
        <section className="content content-intro">
          <div className="row about-features">
            <div className="main-content">
              <h1 className="intro-header">Retired {data.contentfulTeam.title}</h1>
              {data.contentfulTeam.pageContent ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: data.contentfulTeam.pageContent.childMarkdownRemark.html,
                  }}
                />
              ) : null}
            </div>
            <ul className="member-list">
              {data.allContentfulTeamMember.edges.map(({node: {member, photo}}) => <Member key={member.name} defaultPhoto={photo} details={member} />)}
            </ul>
          </div>
        </section>
      </main>
    </Layout> : <NotFound />
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
    allContentfulTeamMember(filter: {endYear: {gt: 0}, team: {slug: {eq: $slug}}}, sort: [{endYear: DESC}, {member: {name: ASC}}]) {
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
