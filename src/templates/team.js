import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Layout from '../components/layout/layout';

const TeamTemplate = ({ data, location }) => {
  const team = data.contentfulTeam;
  const pageProfiles = data.allContentfulProfile.edges.filter(({ node }) => {
    switch(team.title) {
      case 'Founders':
        return node.details?.includes('Founders');
      case 'Retired Skaters':
        return node.details?.includes('Retired');
      case 'Officials':
        return node.type === "officials";
      case 'Photographers':
        return node.type === "photographers";
      case 'Volunteers':
        return node.type === "volunteers";
      case "Homies":
        return !(node.details && node.details.includes('Retired')) && node.details?.includes('Homies');
      case "Travel team":
        return !(node.details && node.details.includes('Retired')) && node.details?.includes('Travel-team');
      default:
        return !(node.details && node.details.includes('Retired')) && team.title === node.homeTeam;
    }
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
            <ul className="profile-list">
              {pageProfiles.map(({ node }) => <Profile key={node.name} details={node} />)}
            </ul>
          </div>
        </section>
      </main>
    </Layout>
  );
};

const Profile = ({ details }) => (
  <li className="profile-list__item">
    <div className="profile__preview  service-content">
      <div className="profile__thumbnail">
        <GatsbyImage alt={details.name} sizes={details.photo.sizes} image={details.photo.gatsbyImageData} />
      </div>

      <h4 className="profile__name">
        <span>{details.title}</span>
        {details.name}{' '}
      </h4>
    </div>
  </li>
);


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
