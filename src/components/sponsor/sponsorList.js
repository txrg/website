import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Sponsor from './sponsor';

export default function SponsorList() {
  const data = useStaticQuery(graphql`
    query SponsorListQuery {
      allContentfulSponsor {
        edges {
          node {
            name
            type
            id
            photo {
              gatsbyImageData(layout: CONSTRAINED)
            }
            link
          }
        }
      }
    }
  `);

  return (
    <>
      <section className="sponsors">
        <div className="row">
          <div>
            <h1 className="intro-header"><Link to="/contact/sponsorship/">Sponsors</Link></h1>
            <div className="sponsor__types">
              
              <ul className="sponsor__list">
                {data.allContentfulSponsor.edges.filter(({node}) => node.type === 'sponsor').map(({ node }) => {
                  return (
                    <li className="sponsor__item" key={node.id}>
                      <Sponsor sponsor={node} />
                    </li>
                  );
                })}
              </ul>
             <h1 className="intro-header">Supporters</h1>
              <ul className="supporter__list">
                {data.allContentfulSponsor.edges.filter(({node}) => node.type === 'supporter').map(({ node }) => {
                  return (
                    <li className="sponsor__item" key={node.id}>
                      <a href={node.link} target="_blank" rel="noopener noreferrer">{node.name}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
