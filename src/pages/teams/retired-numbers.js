import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../../components/layout/layout';
import { GatsbyImage } from 'gatsby-plugin-image';

const RetiredNumbers = ({ data, location }) => {
    const teams = data.allContentfulRetiredJerseyNumbers.group
    console.log({ teams });
    return (
        <Layout location={location}>
            <main className="retirednumberspage">
                <section className="content content-intro">
                    <div className="row about-features">
                        <h1 className="intro-header">Retired Jersey Numbers</h1>
                        <div className="retirednumberspage-content">
                            {teams.map(({fieldValue, edges}) => (
                                <div key={fieldValue} className="retirednumberspage-team">
                                    <h2>{fieldValue}</h2>
                                    <div className="retirednumberspage-team-skaters">{edges.map(({node: {name, jerseyNumber, skater, team: {title, logo: {gatsbyImageData}}}}) => (
                                        <Link key={name} to={skater.skaterPath}>
                                            <div className={`retirednumberspage-number ${title.split(" ").join("-")}`}>
                                                <div className="retirednumberspage-number-jerseynumber">{jerseyNumber}</div>
                                                <div><GatsbyImage alt={name} image={gatsbyImageData} /></div>
                                                <div className="retirednumberspage-number-skatername">{skater.name}</div>
                                            </div>
                                        </Link>
                                    ))}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    );
};

export default RetiredNumbers;

export const teamQuery = graphql`
  query RetiredNumbers {
    allContentfulRetiredJerseyNumbers(sort: { jerseyNumber: ASC }) {
        group(field: { team: { title: SELECT } }) {
            fieldValue
            edges {
                node {
                    name
                    skater {
                        name
                        skaterPath: gatsbyPath(filePath: "/members/{ContentfulMember.name}")
                    }
                    team {
                        title
                        logo {
                            gatsbyImageData(layout: CONSTRAINED, height: 200)
                        }
                    }
                    jerseyNumber
                }
            }
        }
    }
  }
`;

