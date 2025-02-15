const Promise = require('bluebird');
const path = require('path');

exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions
  const typeDefs = [
    schema.buildObjectType({
      name: "GatsbyImage",
      fields: {
        gatsbyImageData: {
          type: "GatsbyImageData",
          resolve(source, args, context, info) {
            return source;
          }
        } 
      }
    }),
    schema.buildObjectType({
      name: "ContentfulEvent",
      fields: {
        featuredImage: {
          type: "GatsbyImage",
          resolve(source, args, context, info) {
            const node = context.nodeModel.getNodeById({ id: source.featuredImage___NODE })
            return node?.url;
          }
        },
        ticketUrl: "String",
      }
    }),
    schema.buildObjectType({
      name: "ContentfulTeamMember",
      fields: {
        endYear: {
          type: "Int!",
          resolve(source, args, context, info) {
            const { endYear } = source;
            if (source.endYear == null) {
              return 0; 
            }
            return endYear;
          },
        },
      },
    }),
    schema.buildObjectType({
      name: "ContentfulCaptain",
      fields: {
        photo: {
          type: "GatsbyImage",
          resolve(source, args, content, info) {
            if (source.photo == null) {
              return null;
            }
            return source.photo;
          }
        },
        endYear: {
          type: "Int!",
          resolve(source, args, context, info) {
            if (source.endYear == null) {
              return 0; 
            }
            return source.endYear;
          },
        },
      },
    }),
  ]
  createTypes(typeDefs)
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const teamsView = path.resolve('./src/templates/teams.js');
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

        const teams = result.data.allContentfulTeam.edges.filter(({ node: { slug }}) => slug === "travel-team" || slug === "officials" || slug === "honky-tonk-heartbreakers" || slug === "hell-marys" || slug === "hotrod-honeys" || slug === "hustlers");
        teams.forEach(team => {
          createPage({
            path: `/teams/${team.node.slug}/`,
            component: teamsView,
            context: {
              slug: team.node.slug,
            },
          });
        });
      })
    );
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

        const teams = result.data.allContentfulTeam.edges.filter(({ node: { slug }}) => slug !== "travel-team" && slug !== "officials" && slug !== "honky-tonk-heartbreakers" && slug !== "hell-marys" && slug !== "hotrod-honeys" && slug !== "hustlers");
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
