import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Layout from '../components/layout/layout';

const ScoresPage = () => {
    const data = useStaticQuery(graphql`
        query ScoreListQuery {
            allContentfulScore(sort: { date: DESC }) {
                edges {
                    node {
                        event
                        date(formatString: "MMMM Do, YYYY h:mm A")
                        location
                        footages
                        teamName1
                        teamScore1
                        teamLogo1 {
                            gatsbyImageData(layout: CONSTRAINED)
                        }
                        teamName2
                        teamScore2
                        teamLogo2 {
                            gatsbyImageData(layout: CONSTRAINED)
                        }
                    }
                }
            }
        }
    `);

    return (
        <Layout>
            <div className="scorespage">
                {data.allContentfulScore.edges.map(({ node: {
                    date,
                    event,
                    footages,
                    location,
                    teamLogo1,
                    teamLogo2,
                    teamName1,
                    teamName2,
                    teamScore1,
                    teamScore2,
                } }) => (
                    <div key={ event } className="scorespage-result">
                        <div className="scorespage-result-title">{ event }</div>
                        <div className="scorespage-result-container">
                            <div className="scorespage-result-event">
                                <div>{ date }</div>
                                <div>{ location }</div>
                                { footages && 
                                    <div className="scorespage-result-event-footage">
                                        {footages.map((url, i) => <a key={i} href={url} target="_blank" rel="noopener noreferrer" aria-label="footage link">&#127909;</a>)}
                                    </div>
                                }
                            </div>
                            <div className="scorespage-result-details">
                                <div className="scorespage-result-details-team1">
                                    <div className="scorespage-result-details-team">
                                        <GatsbyImage className="scorespage-result-details-team-logo" alt={ teamName1 } image={ teamLogo1.gatsbyImageData } />
                                        <div>{ teamName1 }</div>
                                    </div>
                                    <div className="scorespage-result-details-score">{ teamScore1 }</div>
                                </div>
                                <div className="scorespage-result-details-delimiter">VS</div>
                                <div className="scorespage-result-details-team2">
                                    <div className="scorespage-result-details-score">{ teamScore2 }</div>
                                    <div className="scorespage-result-details-team">
                                        <GatsbyImage className="scorespage-result-details-team-logo" alt={ teamName2 } image={ teamLogo2.gatsbyImageData } />
                                        <div>{ teamName2 }</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Layout>
    );
};



export default ScoresPage;