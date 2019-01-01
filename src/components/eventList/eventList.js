import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

class EventList extends React.Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query EventListQuery {
            allContentfulEvent(sort: { fields: [date], order: ASC }) {
              edges {
                node {
                  title
                  id
                  date(formatString: "MMMM Do, YYYY h:mm A")
                  location
                  googleMaps
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
                    <span>{node.date}</span>: {node.title}
                  </h3>
                  <p class="event__location"><a href={node.googleMaps} target="_blank" rel="noopener noreferrer">{node.location}</a></p>
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
