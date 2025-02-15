import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

export default function BoutEventList() {
  const data = useStaticQuery(graphql`
    query BoutEventListQuery {
      allContentfulEvent(filter: {type: {eq: "bout"}}, sort: {date: ASC}) {
        edges {
          node {
            id
            title
            date(formatString: "MMMM Do, YYYY h:mm A")
            endDate(formatString: "h:mm A")
            location
            googleMaps
            ticketUrl
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
                  : <span>{node.date}: {node.title}</span>
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
          </div>
        );
      })}
    </>
  );
}
