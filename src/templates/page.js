import React from 'react';
import Helmet from 'react-helmet';
import get from 'lodash/get';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout/layout';

class PageTemplate extends React.Component {
  render() {
    const page = get(this.props, 'data.contentfulPage');
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');
    const pages = get(this, 'props.data.allContentfulPage.edges');
    const teams = get(this, 'props.data.allContentfulTeam.edges');

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
              {page.section === node.section && page.section != 'who we are' ? (
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

    const breadcrumb = (
      <ol class="breadcrumb">
        <li>
          <a href="/">Home</a>
        </li>
        <li class="active">
          <Link to={sectionLink}>{page.section}</Link>
        </li>
        <li class="active">{page.title}</li>
      </ol>
    );

    return (
      <Layout location={this.props.location}>
        <main className="main--page">
          <Helmet title={`${page.title} | ${siteTitle}`} />
          <section id="about">

            <div class="row about-intro">

                <div class="col-four">
                    <h1 class="intro-header">{page.title}</h1>
                    <aside className="side-bar">
                      <nav>
                        <ul>
                          {subNav}
                          {subNavTeam}
                        </ul>
                      </nav>
                    </aside>
                </div>
                <div class="col-eight">
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
