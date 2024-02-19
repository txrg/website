import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

class EventList extends React.Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query EventListQuery {
            allContentfulEvent(sort: {date: ASC}) {
              edges {
                node {
                  title
                  id
                  date(formatString: "MMMM Do, YYYY h:mm A")
                  location
                  googleMaps
                  ticketUrl
                }
              }
            }
          }
        `}
        render={data => (
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
                  <p class="event__location">
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
        )}
      />
    );
  }
}

export default EventList;
