import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

export default function PepRallyList() {
  const data = useStaticQuery(graphql`
    query PepRallyEventListQuery {
      allContentfulEvent(filter: {type: {eq: "pep-rally"}}, sort: {date: ASC}) {
        edges {
          node {
            id
            title
            featuredImage {
              gatsbyImageData
            }
            date(formatString: "MMMM Do, YYYY h:mm A")
            endDate(formatString: "h:mm A")
            location
            googleMaps
            ticketUrl
            description {
              childMarkdownRemark {
                rawMarkdownBody
              }
            }
          }
        }
      }
    }
  `)
  return (
    <>
      {data.allContentfulEvent.edges.map(({ node }) => {
        return (
          <div key={node.id} className="event">
            <h3>
              <span className="icon-calendar" aria-hidden="true" />{' '}
              {
                node.ticketUrl
                  ? <a href={node.ticketUrl} target="_blank" rel="noopener noreferrer"><span>{node.date}: {node.title}</span></a>
                  : <span>{node.date} - {node.endDate}: {node.title}</span>
              }
            </h3>
            <p className="event__location">
              <a
                href={node.googleMaps}
                target="_blank"
                rel="noopener noreferrer">
                {node.location}
              </a>
            </p>
            {node?.featuredImage?.gatsbyImageData && <div className="pep-rally-graphic">
                <img alt="pep rally banner" className="pep-rally-banner" src={`${node.featuredImage.gatsbyImageData}`}/>
            </div>}
            <p>{node.description.childMarkdownRemark.rawMarkdownBody}</p>
          </div>
        );
      })}
    </>
  );
}
