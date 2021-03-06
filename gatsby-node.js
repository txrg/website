const Promise = require('bluebird');
const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const teamView = path.resolve('./src/templates/team.js');
    resolve(
      graphql(
        `
          {
            allContentfulTeam {
              edges {
                node {
                  title
                  slug
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        const teams = result.data.allContentfulTeam.edges;
        teams.forEach(team => {
          createPage({
            path: `/who-we-are/${team.node.slug}/`,
            component: teamView,
            context: {
              slug: team.node.slug,
            },
          });
        });
      })
    );
    const pageView = path.resolve('./src/templates/page.js');
    resolve(
      graphql(
        `
          {
            allContentfulPage {
              edges {
                node {
                  title
                  slug
                  section
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        const pages = result.data.allContentfulPage.edges;

        pages.forEach((page, index) => {
          const sectionName = page.node.section
            .toLowerCase()
            .split(' ')
            .join('-');
          createPage({
            path:
              sectionName === page.node.slug || sectionName === 'none'
                ? `/${page.node.slug}/`
                : `/${sectionName}/${page.node.slug}/`,
            component: pageView,
            context: {
              slug: page.node.slug,
            },
          });
        });
      })
    );
    const blogPost = path.resolve('./src/templates/blog-post.js');
    resolve(
      graphql(
        `
          {
            allContentfulBlogPost {
              edges {
                node {
                  title
                  slug
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        const posts = result.data.allContentfulBlogPost.edges;
        posts.forEach((post, index) => {
          createPage({
            path: `/blog/${post.node.slug}/`,
            component: blogPost,
            context: {
              slug: post.node.slug,
            },
          });
        });
      })
    );
  });
};
