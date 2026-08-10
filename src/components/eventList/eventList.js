import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

export default function EventList({ type, pathname, showDescription, isSide }) {
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

  if (type === 'bout') {
    return <BoutEventList pathname={pathname} events={events} isSide={isSide} />;
  } else if (type === 'volunteer' || type === 'pep-rally') {
    return <CommunityEventList type={type} pathname={pathname} events={events} isSide={isSide} />;
  }

  return null;
}

const BoutEventList = ({ pathname, events, isSide }) => {
  let header = '2026 Season';
  if (!isSide && pathname === '/events/bouts/') {
    header = '';
  }

  let showDescription = false;
  if (!isSide && pathname === '/events/bouts/') {
    showDescription = true;
  }

  return (
    <>
      {header && (
        <div className={pathname === '/' ? "col-three" : ""}>
          <h1 className={!isSide ? "intro-header" : ""}>{header}</h1>
        </div>
      )}
      <div className={pathname === '/' ? "col-nine" : ""}>
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
          {!showDescription && <Link to="/events/bouts/"><span> [More Details]</span></Link>}
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
};

const CommunityEventList = ({ type, pathname, events, isSide }) => {
  const header = type === 'volunteer' ? 'Volunteer with Us' : 'Pep Rallies';
  let showDescription = false;
  if (!isSide && pathname === '/events/community-events') {
    showDescription = true;
  }

  return (
    <>
      <div className={pathname === '/' ? "col-three" : ""}>
        <h1 className={!isSide ? "intro-header" : ""}>{header}</h1>
      </div>
      <div className={pathname === '/' ? "col-nine" : ""}>
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
          {!showDescription && <Link to="/events/community-events"><span> [More Details]</span></Link>}
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
};
