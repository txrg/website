import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout/layout';
import EventList from '../components/eventList/eventList';
import Whammy from '../components/whammy/whammy';

const PageTemplate = ({ data, location }) => {
  const page = data.contentfulPage;
  const teamSlugs = data.allContentfulTeam.edges.reduce((teams, {node: {title, slug}}) => ({...teams, [title]: slug}), {});
  const navLinks = data.allContentfulPage.edges
    .filter(({node}) => page.section === node.section && page.section !== "none")
    .map(({node}) => {
      const formattedSection = node.section.toLowerCase().split(' ').join('-');
      return {
        slug: node.slug,
        title: node.title,
        link: formattedSection === node.slug ? `/${node.slug}/` : `/${formattedSection}/${node.slug}`,
      };
    });

  const DefaultNav = () => (
    <>
      {navLinks.map(({slug, title, link}) => (
        <li key={slug}>
          <Link to={link}>{title}</Link>
        </li>
      ))}
    </>
  );

  const TeamsNav = () => (
    <>
      <li><Link to={`/teams/${teamSlugs.Emeriti}`}>Emeriti</Link></li>
      <li><Link to={`/teams/retired-numbers`}>Retired Numbers</Link></li>
      <li><Link to={`/teams/${teamSlugs.Officials}`}>Officials</Link></li>
      <li><Link to={`/teams/${teamSlugs.Announcers}`}>Announcers</Link></li>
      <li><Link to={`/teams/${teamSlugs.Photographers}`}>Photographers</Link></li>
      <li><Link to={`/teams/${teamSlugs["Travel Team"]}`}>Travel team</Link></li>
      <li>
        <span>Home Teams</span>
        <ul>
          <li><Link to={`/teams/${teamSlugs["Hell Marys"]}`}>Hell Marys</Link></li>
          <li><Link to={`/teams/${teamSlugs["Honky Tonk Heartbreakers"]}`}>Honky Tonk Heartbreakers</Link></li>
          <li><Link to={`/teams/${teamSlugs["Hotrod Honeys"]}`}>Hotrod Honeys</Link></li>
          <li><Link to={`/teams/${teamSlugs.Hustlers}`}>Hustlers</Link></li>
        </ul>
      </li>
      <li><Link to={`/teams/${teamSlugs.Homies}`}>Homies</Link></li>
    </>
  );

  const subNav = page.section === 'who we are'
    ? <><DefaultNav /><TeamsNav /></>
    : <DefaultNav />;

  return (
    <Layout location={location}>
      <main className="main--page">
        <section className="content content-intro">
          <div className="row">
            <div className="col-four">
              {page.section !== 'none' &&
                <aside className="side-bar">
                  <nav>
                    <ul>{subNav}</ul>
                  </nav>
                </aside>
              }
              <div className='side-events'><EventList type="bout" pathname={`${location.pathname}`} isSide={true} /></div>
            </div>
            <div className="col-eight">
              <h1 className="intro-header">{page.title}</h1>
              {location.pathname === '/events/bouts/' && <EventList type="bout" pathname={`${location.pathname}`} />}
              <div
                className="main-content"
                dangerouslySetInnerHTML={{
                  __html: page.pageContent.childMarkdownRemark.html,
                }}
              />
              {location.pathname === '/events/community-events' && <>
                <EventList type="volunteer" pathname={`${location.pathname}`} />
                <EventList type="pep-rally" pathname={`${location.pathname}`} />
              </>}
              {location.pathname === '/who-we-are/whammys/' && <Whammy />}
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
