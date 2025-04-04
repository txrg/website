import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Layout from '../components/layout/layout';

const FILTER_SEASON_YEARS = ['2025', '2024', '2023', '2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011', '2010', '2009', '2008', '2007', '2006', '2005', '2004', '2003'];

const ScoresPage = ({ data }) => {
    const [bouts, setBouts] = useState([]);
    const [filteredSeasons, setFilteredSeasons] = useState(FILTER_SEASON_YEARS.slice(0, 1));
    const [teamFilterValues, setTeamFilterValues] = useState([]);
    const [filteredTeams, setFilteredTeams] = useState([]);

    useEffect(() => {
        let teams = {};
        const filteredBouts = data.allContentfulScore.edges.filter(({ node }) => {
            const year = node.date.split(' ')[2];
            if (filteredSeasons.length > 0 && !filteredSeasons.includes(year)) {
                return false;
            }

            if (filteredTeams.length > 0 && !filteredTeams.includes(node.team1.name) && !filteredTeams.includes(node.team2.name)) {
                return false;
            }

            teams[node.team1.name] = teams[node.team1.name] ? teams[node.team1.name] + 1 : 1;
            teams[node.team2.name] = teams[node.team2.name] ? teams[node.team2.name] + 1 : 1;
            return true
        });

        setBouts(filteredBouts);

        filteredTeams.forEach(team => {
            if (!teams[team]) {
                teams[team] = 0;
            }
        });

        setTeamFilterValues(Object.entries(teams).sort((a, b) => {
            const difference = b[1] - a[1];
            if (difference !== 0) {
                return difference;
            }

            if (a[0] < b[0]) {
                return -1;
            } else if (a[0] > b[0]) {
                return 1;
            }

            return 0;
        }));

    }, [filteredSeasons, filteredTeams, data.allContentfulScore.edges]);

    const handleAddingSeasonFilter = event => {
        const year = event.target.value;
        if (!filteredSeasons.includes(year)) {
            setFilteredSeasons([...filteredSeasons, year]);
        }
    };

    const handleRemovingSeasonFilter = (year) => {
        const index = filteredSeasons.indexOf(year);
        if (index > -1) {
            setFilteredSeasons([...filteredSeasons.slice(0, index), ...filteredSeasons.slice(index + 1)]);
        }
    };

    const handleTeamFilterOperation = (team) => {
        const index = filteredTeams.indexOf(team);
        if (index < 0) {
            setFilteredTeams([...filteredTeams, team]);
        } else {
            setFilteredTeams([...filteredTeams.slice(0, index), ...filteredTeams.slice(index + 1)]);
        }
    };

    return (
        <Layout>
            <div className="scorespage">
                <div className="scorespage-filters">
                    <div className="scorespage-filter-seasons-container">
                        <select id="scorespage-filter-seasons" value="" onChange={handleAddingSeasonFilter}>
                            <option value="" disabled>Seasons</option>
                            {FILTER_SEASON_YEARS.map(year => <option key={year} value={year}>{year}</option>)}
                        </select>
                        <div>
                            {filteredSeasons.map(year => <button key={year} className="scorespage-filter-seasons-item-selected" onKeyDown={() => handleRemovingSeasonFilter(year)} onClick={() => handleRemovingSeasonFilter(year)}>x&nbsp;{year}</button>)}
                        </div>
                    </div>
                    <div className="scorespage-filter-teams">
                        {teamFilterValues.map(([ team, count]) => (<button
                            key={team}
                            onClick={() => handleTeamFilterOperation(team)}
                            onKeyDown={() => handleTeamFilterOperation(team)}
                            className={`scorespage-filter-teams-item${filteredTeams.includes(team) ? ' scorespage-filter-teams-item-selected' : ''}`}
                        >
                            {filteredTeams.includes(team) && 'x  '}{team}: {count}
                        </button>))}
                    </div>
                </div>
                <div className="scorespage-resultslist">
                    {bouts.map(({ node: {
                        date,
                        event,
                        footages,
                        location,
                        team1,
                        teamScore1,
                        team2,
                        teamScore2,
                    } }) => {
                        const teamLogo1 = team1.logo && team1.logo.length > 0 ? team1.logo[0] : team1.league.logo[0];
                        const teamLogo2 = team2.logo && team2.logo.length > 0 ? team2.logo[0] : team2.league.logo[0];

                        if (team1.name == "Windy City Second Wind") {
                            console.log(teamLogo1);
                        }

                        return (<div key={ event } className="scorespage-result">
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
                                <div className="scorespage-result-details-container">
                                    <div className="scorespage-result-title-wide">{ event }</div>
                                    <div className="scorespage-result-details">
                                        <div className="scorespage-result-details-team1">
                                            <div className="scorespage-result-details-team">
                                                <GatsbyImage className="scorespage-result-details-team-logo" objectFit="contain" alt={ team1.name } image={ teamLogo1.gatsbyImageData } />
                                                <div>{ team1.name }</div>
                                            </div>
                                            <div className="scorespage-result-details-score">{ teamScore1 }</div>
                                        </div>
                                        <div className="scorespage-result-details-delimiter">VS</div>
                                        <div className="scorespage-result-details-team2">
                                            <div className="scorespage-result-details-score">{ teamScore2 }</div>
                                            <div className="scorespage-result-details-team">
                                                <GatsbyImage className="scorespage-result-details-team-logo" objectFit="contain" alt={ team2.name } image={ teamLogo2.gatsbyImageData } />
                                                <div>{ team2.name }</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>);
                    })}
                </div>
            </div>
        </Layout>
    );
};

// TODO: Fix iphone view of images
export const query = graphql`
    query ScoresQuery {
        allContentfulScore(sort: { date: DESC }) {
            edges {
                node {
                    event
                    date(formatString: "MMMM Do, YYYY h:mm A")
                    location
                    footages
                    team1 {
                        name
                        league {
                            name
                            logo {
                                gatsbyImageData(layout: CONSTRAINED)
                            }
                        }
                        logo {
                            gatsbyImageData(layout: CONSTRAINED)
                        }
                    }
                    teamScore1
                    team2 {
                        name
                        league {
                            name
                            logo {
                                gatsbyImageData(layout: CONSTRAINED)
                            }
                        }
                        logo {
                            gatsbyImageData(layout: CONSTRAINED)
                        }
                    }
                    teamScore2
                }
            }
        }
    }
`;

export default ScoresPage;