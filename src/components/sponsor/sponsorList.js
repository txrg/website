import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
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
                  <h1 className="intro-header"><Link to="/contact/sponsorship/">Sponsors</Link></h1>
                  <div className="sponsor__types">
                    
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
                   <h1 className="intro-header">Supporters</h1>
                    <ul className="supporter__list">
                      {data.allContentfulSponsor.edges.map(({ node }) => {
                        return (
                          <>
                           {node.type === 'supporter' ? (
                              <li className="sponsor__item" key={node.id}>
                                <a href={node.link} target="_blank" rel="noopener noreferrer">{node.name}</a>
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
