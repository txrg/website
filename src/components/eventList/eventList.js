import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

export default function EventList({showDescription, isSide, isDynamic, type}) {
  let header = '';

  switch (type) {
    case 'bout':
      header = '2025 Season';
      break;
    case 'pep-rally':
      header = 'Pep Rallies';
      break;
    case 'volunteer':
      header = 'Volunteer with Us';
      break;
    default:
      header = "Events";
  }

  const data = useStaticQuery(graphql`
    query EventListQuery {
      allContentfulEvent(sort: {date: ASC}) {
        edges {
          node {
            id
            title {
              childMarkdownRemark {
                html
              }
            }
            type
            featuredImage {
              gatsbyImageData
            }
            date(formatString: "MMMM Do, YYYY h:mm A")
            location
            googleMaps
            description {
              childMarkdownRemark {
                html
              }
            }
            ticketUrl
          }
        }
      }
    }
  `)

  const events = data.allContentfulEvent.edges.filter(({node: {type: eventType}}) => type === eventType);

  if (events.length === 0) {
    return null;
  }

  return (
    <>
      <div className={isDynamic ? "col-three" : ""}>
        <h1 className={!isSide ? "intro-header" : ""}>{header}</h1>
      </div>
      <div className={isDynamic ? "col-nine" : ""}>
      {events.map(({ node }) => (
        <div key={node.id} className="event">
          <h3>
            <span className="icon-calendar" aria-hidden="true" />{' '}
            <span>{node.date}</span>
            <span
              dangerouslySetInnerHTML={{
                __html: node.title.childMarkdownRemark.html,
              }}></span>
          </h3>
          {node.ticketUrl && <a href={node.ticketUrl} target="_blank" rel="noopener noreferrer"><span> [Tickets]</span></a>}
          {!showDescription && <Link to={type === 'bout' ? '/events/bouts/' : '/events/community-events'}><span> [More Details]</span></Link>}
          <p className="event__location">
            <i className="fa-solid fa-location-dot"></i>
            &nbsp;
            <a
              href={node.googleMaps}
              target="_blank"
              rel="noopener noreferrer">
              {node.location}
            </a>
          </p>
          {node?.featuredImage?.gatsbyImageData && <div><img alt={`${header} banner`} src={`${node.featuredImage.gatsbyImageData}`}/></div>}
          {showDescription && <span className="event-description"
            dangerouslySetInnerHTML={{
              __html: node.description.childMarkdownRemark.html,
            }}
          ></span>}
        </div>
      ))}
      </div>
    </>
  );
}
