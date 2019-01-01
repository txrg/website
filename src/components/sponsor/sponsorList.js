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
                    <ul className="sponsor__list">
                        {data.allContentfulSponsor.edges.map(({ node }) => {
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
          </>
        )}
      />
    );
  }
}

export default SponsorList;
