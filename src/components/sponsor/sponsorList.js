import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Sponsor from './sponsor';

class SponsorList extends React.Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query SponsorListQuery {
            allContentfulSponsor {
              edges {
                node {
                  name
                  type
                  id
                  photo {
                    fluid {
                      ...GatsbyContentfulFluid
                    }
                  }
                  link
                }
              }
            }
          }
        `}
        render={data => (
          <>
            <section className="sponsors">
              <div className="row">
                <div>
                  <h1 className="intro-header">We love our sponsors!</h1>
                  <div className="sponsor__types">
                    <h2>Sponsors</h2>
                    <ul className="sponsor__list">
                      {data.allContentfulSponsor.edges.map(({ node }) => {
                        return (
                          <>
                            {node.type === 'sponsor' ? (
                              <li className="sponsor__item" key={node.id}>
                                <Sponsor sponsor={node} />
                              </li>
                            ) : null}
                          </>
                        );
                      })}
                    </ul>
                    <h2>Supporters</h2>
                    <ul className="supporter__list">
                      {data.allContentfulSponsor.edges.map(({ node }) => {
                        return (
                          <>
                            {node.type === 'supporter' ? (
                              <li className="sponsor__item" key={node.id}>
                                <a href="{node.link}">{node.name}</a>
                              </li>
                            ) : null}
                          </>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}
      />
    );
  }
}

export default SponsorList;
