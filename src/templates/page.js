import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout/layout';
import BoutEventList from '../components/eventList/bout-events';
import VolunteerEventList from '../components/eventList/volunteer-events';

const PageTemplate = ({ data, location }) => {
  const page = data.contentfulPage;
  const pages = data.allContentfulPage.edges;
  //const teams = data.allContentfulTeam.edges;

  const subNav = (
    <>
      {pages.map(({ node }) => {
        const pageLink =
          node.section
            .toLowerCase()
            .split(' ')
            .join('-') === node.slug
            ? `/${node.slug}/`
            : `/${node.section
                .toLowerCase()
                .split(' ')
                .join('-')}/${node.slug}/`;
        return (
          <>
            {page.section === node.section && page.section !== 'none' ? (
              <li key={node.slug}>
                <Link to={pageLink}>{node.title}</Link>
              </li>
            ) : null}
          </>
        );
      })}
    </>
  );

  const subNavTeam = (
    <ul>
      <li><Link to="/teams/founders">Founders</Link></li>
      <li><Link to="/teams/officials">Officials</Link></li>
      <li><Link to="/teams/announcers">Announcers</Link></li>
      <li><Link to="/teams/photographers">Photographers</Link></li>
      <li><Link to="/teams/travel-team">Travel team</Link></li>
      <li>
        <span>Home Teams</span>
        <ul>
          <li><Link to="/teams/hell-marys">Hell Marys</Link></li>
          <li><Link to="/teams/honky-tonk-heartbreakers">Honky Tonk Heartbreakers</Link></li>
          <li><Link to="/teams/hotrod-honeys">Hotrod Honeys</Link></li>
          <li><Link to="/teams/hustlers">Hustlers</Link></li>
        </ul>
      </li>
      <li><Link to="/teams/homies">Homies</Link></li>
    </ul>
  );

  /* pulls each team dynamically, hard codinnng so I can style and nest specifically 
  const subNavTeam = (
    <>
      {teams.map(({ node }) => {
        return (
          <>
            {page.section === 'who we are' ? (
              <li key={node.slug}>
                <Link to={`/who-we-are/${node.slug}`}>{node.title}</Link>
              </li>
            ) : null}
          </>
        );
      })}
    </>
  );
  */

  /* if you need to add a static link to a specific section
  const blogNav = (
    <>
      {page.section === 'about' ? (
        <li>
          <Link to="/blog/">Blog</Link>
        </li>
      ) : null}
    </>
  );
  */

  const sectionLink = `/${page.section
    .toLowerCase()
    .split(' ')
    .join('-')}/`;

  // eslint-disable-next-line
  const breadcrumb = (
    <ol className="breadcrumb">
      <li>
        <a href="/">Home</a>
      </li>
      <li className="active">
        <Link to={sectionLink}>{page.section}</Link>
      </li>
      <li className="active">{page.title}</li>
    </ol>
  );

  return (
    <Layout location={location}>
      <main className="main--page">
        <section className="content content-intro">
          <div className="row">
            <div className="col-four">
              {page.section !== 'none' ? (
                <aside className="side-bar">
                  <nav>
                    <ul>{subNav}</ul>
                    {page.section === 'who we are' ? (
                      <> {subNavTeam} </>
                    ) : null}
                  </nav>
                </aside>
              ) : null}
              {page.title !== 'Events' ? (
                <div className="side-events">
                  <h2>2025 Season</h2>
                  <BoutEventList />
                </div>
              ) : null}
            </div>
            <div className="col-eight">
              <h1 className="intro-header">{page.title}</h1>
              {location.pathname === '/events/' ? (
                <>
                  <h2>2025 Season</h2>
                  <BoutEventList />
                  <h2 style={{marginTop: "2rem"}}>Volunteer With Us</h2>
                  <VolunteerEventList />
                </>
              ) : null}
              <div
                className="main-content"
                dangerouslySetInnerHTML={{
                  __html: page.pageContent.childMarkdownRemark.html,
                }}
              />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default PageTemplate;

export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
    contentfulPage(slug: {eq: $slug}) {
      title
      section
      slug
      pageContent {
        childMarkdownRemark {
          html
        }
      }
    }
    allContentfulPage(sort: {title: ASC}) {
      edges {
        node {
          title
          slug
          section
        }
      }
    }
    allContentfulTeam {
      edges {
        node {
          title
          slug
        }
      }
    }
  }
`;
