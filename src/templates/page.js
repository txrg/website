import React from 'react';
import get from 'lodash/get';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout/layout';
import Sponsor from '../components/sponsor/sponsor';

class PageTemplate extends React.Component {
  render() {
    const page = get(this.props, 'data.contentfulPage');
    const pages = get(this, 'props.data.allContentfulPage.edges');
    const teams = get(this, 'props.data.allContentfulTeam.edges');
    const sponsors = get(this, 'props.data.allContentfulSponsor.edges');

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
              {page.section === node.section && page.section !== 'who we are' ? (
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
                <aside className="side-bar">
                  <nav>
                    <ul>
                      {subNav}
                      {subNavTeam}
                    </ul>
                  </nav>
                </aside>
              </div>
              <div className="col-eight">
                <h1 className="intro-header">{page.title}</h1>
                <div
                  className="main-content"
                  dangerouslySetInnerHTML={{
                    __html: page.pageContent.childMarkdownRemark.html,
                  }}
                />
              </div>
            </div>
          </section>
          <section className="sponsors">
            <div className="row">
              <div className="col-full">
                <h1 className="intro-header">Sponsors</h1>
                <ul className="sponsor__list">
                  {sponsors.map(({ node }) => {
                    return (
                      <li className="sponsor__item" key={node.id}>
                        <Sponsor sponsor={node} />
                      </li>
                    );
                  })}
                </ul>
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
    allContentfulSponsor {
      edges {
        node {
          name
          id
          photo {
            fluid {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          link
        }
      }
    }
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
    allContentfulPage {
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
