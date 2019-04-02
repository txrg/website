import React from 'react';
import get from 'lodash/get';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout/layout';
import EventList from '../components/eventList/eventList';

class PageTemplate extends React.Component {
  render() {
    const page = get(this.props, 'data.contentfulPage');
    const pages = get(this, 'props.data.allContentfulPage.edges');
    //const teams = get(this, 'props.data.allContentfulTeam.edges');

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
        <li>
          <Link to="/who-we-are/founders">Founders</Link>
        </li>
        {/* hide for now until we add<li>
          <Link to="/who-we-are/retired">Retired Skaters</Link>
        </li>*/}
        <li>
          <Link to="/who-we-are/officials">Officials</Link>
        </li>
        <li>
          <Link to="/who-we-are/photographers">Photographers</Link>
        </li>
        <li>
          <Link to="/who-we-are/volunteers">Volunteers</Link>
        </li>
        <li className="side-bar__teams">
          <span>Home teams</span>
          <ul>
            <li>
              <Link to="/who-we-are/hell-marys">Hell Marys</Link>
            </li>
            <li>
              <Link to="/who-we-are/honky-tonk-heartbreakers">
                Honky Tonk Heartbreakers
              </Link>
            </li>
            <li>
              <Link to="/who-we-are/hotrod-honeys">Hotrod Honeys</Link>
            </li>
            <li>
              <Link to="/who-we-are/hustlers">Hustlers</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/who-we-are/travel-team">Travel team</Link>
        </li>
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
      <Layout location={this.props.location}>
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
                    <h2>2019 Season</h2>
                    <EventList />
                  </div>
                ) : null}
              </div>
              <div className="col-eight">
                <h1 className="intro-header">{page.title}</h1>
                {this.props.location.pathname === '/events/' ? (
                  <>
                    <h2>2019 Season</h2>
                    <EventList />
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
  }
}

export default PageTemplate;

export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
      title
      section
      slug
      pageContent {
        childMarkdownRemark {
          html
        }
      }
    }
    allContentfulPage(sort: { fields: [title], order: ASC }) {
      edges {
        node {
          title
          slug
          section
        }
      }
    }
    allContentfulTeam(sort: { fields: [order], order: ASC }) {
      edges {
        node {
          title
          order
          slug
        }
      }
    }
  }
`;
