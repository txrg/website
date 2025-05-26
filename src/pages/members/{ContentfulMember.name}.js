import React from 'react';
import { graphql } from 'gatsby';
import ReactImageGallery from 'react-image-gallery';
import { GatsbyImage } from 'gatsby-plugin-image';
import Layout from '../../components/layout/layout';
import Score from '../../components/game/score';
import SkaterStats from '../../components/skaterStats/skaterStats';

const getDate = (date) => {
  let [month, day, year, time, period] = date.split(" ");

  const monthMap = {
    "January": "00",
    "February": "01",
    "March": "02",
    "April": "03",
    "May": "04",
    "June": "05",
    "July": "06",
    "August": "07",
    "September": "08",
    "October": "09",
    "November": "10",
    "December": "11",
  }
  month = monthMap[month];

  day = /^\d{1,2}/.exec(day)[0];
  day = day.length === 1 ? "0" + day : day;

  let [hr, min] = time.split(":");
  if (hr === "12" && period === "AM") {
    hr = "00";
  } else if (Number(hr) < 12 && period === "PM") {
    hr = (Number(hr) + 12).toString();
  }

  return new Date(`${year}-${month}-${day}T${hr}:${min}`);
};

const Member = ({ data, location }) => {
  const {
    allContentfulMemberStats: { edges: stats },
    allContentfulTeamLeader: { edges: positions },
    allContentfulTeamMember: { edges: teams },
    contentfulMember: member,
    roster1Games: { edges: roster1Games },
    roster2Games: { edges: roster2Games },
    scoreAwards: { edges: scoreAwards },
    whammyAwards: { group: whammyAwards },
  } = data;

  let games = stats.reduce((agg, {node}) => {
    let teamName = node.skater.team.title;
    if (teamName === "Travel Team") {
      teamName = "Texas " + node.skater.travelTeam;
    }

    return {
      ...agg,
      [node.game.event]: {
        ...node,
        skater: { team: { title: teamName } },
      },
    };
  }, {});
  games = roster1Games.reduce((agg, {node}) => (
    agg[node.event] ? agg : {...agg, [node.event]: {game: node, skater: {team: {title: node.team1.name}}}}
  ), games);
  games = roster2Games.reduce((agg, {node}) => (
    agg[node.event] ? agg : {...agg, [node.event]: {game: node, skater: {team: {title: node.team2.name}}}}
  ), games);
  games = Object.values(games).sort((a, b) => {
    const dateB = getDate(b.game.date);
    const dateA = getDate(a.game.date);
    return dateB - dateA;
  });

  const isRetired = teams.filter(({node: {endYear}}) => endYear === 0).length === 0;

  return (
    <Layout location={location} >
      <main className="memberpage">
        <section className="content content-intro">
          <div className="row about-features">
              <Headshots name={member.name} photos={member.photos} />
              <div className="memberpage-league">
                <Teams teams={teams} positions={positions} />
                {whammyAwards.length > 0 && <Whammys awards={whammyAwards} />}
              </div>
              {games.map((node) => {
                const {game: {event, date, location, footages, footageIsPrivate, gamePath, team1, team2, teamScore1, teamScore2}, skater: {team}} = node;
                const teamLogo1 = team1.logo && team1.logo.length > 0 ? team1.logo[team1.logo.length - 1].gatsbyImageData : team1.league.logo[team1.league.logo.length - 1].gatsbyImageData;
                const teamLogo2 = team2.logo && team2.logo.length > 0 ? team2.logo[team2.logo.length - 1].gatsbyImageData : team2.league.logo[team2.league.logo.length - 1].gatsbyImageData;
                const gameAwards = scoreAwards.filter(({node: {game}}) => game.event === node.game.event);
                return (
                  <div key={event} className="memberpage-game">
                    <div>
                      <Score
                        title={event} date={date} location={location} footages={footages} footageIsPrivate={footageIsPrivate} gamePath={gamePath}
                        teamName1={team1.name}
                        teamLogo1={teamLogo1}
                        teamScore1={teamScore1}
                        teamName2={team2.name}
                        teamLogo2={teamLogo2}
                        teamScore2={teamScore2}
                      />
                    </div>
                    <div className="memberpage-game-stats">
                      {gameAwards.length > 0 
                        ? gameAwards.map(({node: {category, team: {title}}}) => <em key={`${title}-${category}`} className="memberpage-game-award">&#127942; {title}: {category}</em>)
                        : <em className="memberpage-game-award">{team.title}</em>
                      }
                      {node.totalJamsPlayed ? <SkaterStats isRetired={isRetired} totalJams={node.game.totalJams} stats={node} /> : <div>No Stats Available</div>}
                    </div>
                  </div>
                );
              })}
            </div>
        </section>
      </main>
    </Layout>
  );
};

const Headshots = ({ name, photos }) => {
  const items = photos.slice().reverse().map(({gatsbyImageData: {images: {fallback: {src}}}}) => ({ original: src, thumbnail: src }));
  return (
    <>
      <h1 className="intro-header">{name}</h1>
      <div className="memberpage-headshots">
        {photos.length < 2 
          ? photos.map(({ gatsbyImageData }, i) => <GatsbyImage key={`${name}-${i}`} objectFit="contain" alt={`${name} Photo`} image={gatsbyImageData} />)
          : <ReactImageGallery
              items={items}
              showFullscreenButton={false}
              showPlayButton={false}
            />
        }
      </div>
    </>
  );
};

const Teams = ({ teams, positions }) => {
  let histories = teams.map(({node}) => {
    let teamName = node.team.title;
    if (node.travelTeam) {
      teamName += `: ${node.travelTeam}`;
    } else if (node.emeritusClass) {
      teamName = node.emeritusClass === "founder" ? "Founder" : "Emeritus";
    }
    
    return {
      teamName,
      startYear: node.startYear === 9999 ? "unknown": node.startYear,
      endYear: node.endYear === 9999 ? "unknown" : node.endYear,
      numbers: node.skaterNumber,
    };
  });

  histories = histories.concat(positions.map(({node}) => {
    let teamName = node.team.title;
    if (node.travelTeam) {
      teamName += `: ${node.travelTeam}`;
    }
    
    return {
      teamName,
      position: node.role,
      startYear: node.startYear === 9999 ? "unknown" : node.startYear,
      endYear: node.endYear === 9999 ? "unknown" : node.endYear,
    }

  }));

  histories = histories.sort(sortHistory);

  return (
    <div className="memberpage-teams">
      {histories.map((details) => (
        <div key={`${details.teamName}${details.position && "-" + details.position}-${details.startYear}-${details.endYear}`} className="memberpage-team">
          <h2>{details.teamName}{details.position && ` - ${details.position}`}</h2>
          <div>Seasons: {details.startYear} - {details.endYear === 0 ? <>present</> : <>{details.endYear}</>}</div>
          {details.numbers && <div>Skater Numbers: {details.numbers.join(", ")}</div>}
        </div>
      ))}
    </div>
  );
};

function sortHistory(a, b) {
  const aEndYear = a.endYear === 0 ? Number.MAX_SAFE_INTEGER : Number(a.endYear);
  const bEndYear = b.endYear === 0 ? Number.MAX_SAFE_INTEGER : Number(b.endYear);
  const aStartYear = Number(a.startYear);
  const bStartYear = Number(b.startYear);

  if (aStartYear && bStartYear && aStartYear !== bStartYear) {
    return bStartYear - aStartYear;
  } else if (aEndYear && bEndYear && aEndYear !== bEndYear) {
    return bEndYear - aEndYear;
  } else {
    return a.teamName.localeCompare(b.teamName);
  }
}

const Whammys = ({ awards }) => (
  <div className="memberpage-whammys">
    <h2>The Whammy Awards</h2>
    <div>{awards.slice(0).reverse().map(({ fieldValue: year, edges }) => (
      <div key={`whammy-${year}`}>
        <h3>{year}</h3>
        {edges.map(({node: {category, award}}) => <div key={`whammy-${year}-${category}-${award}`}>{`${category}: ${award}`}</div>)}
      </div>
    ))}</div>
  </div>
);

export default Member;

export const memberQuery = graphql`
    query MemberQuery($name: String!) {
      contentfulMember(name: {eq: $name}) {
        name
        photos {
          gatsbyImageData(layout: CONSTRAINED, height: 400)
        }
      }
      allContentfulTeamMember(filter: {member: {name: {eq: $name}}}) {
        edges {
          node {
            team {
              title
              slug
            }
            skaterNumber
            startYear
            endYear
            travelTeam
            emeritusClass
          }
        }
      }
      allContentfulTeamLeader(filter: {member: {name: {eq: $name}}}, sort: [{startYear: DESC}]) {
        edges {
          node {
            role
            team {
              title
            }
            travelTeam
            startYear
            endYear
          }
        }
      }
      whammyAwards: allContentfulWhammy(filter: {recipient: {name: {eq: $name}}}, sort: [{category: ASC}, {award: ASC}]) {
        group(field: { year: SELECT }) {
          fieldValue
          edges {
            node {
              category
              award
            }
          }
        }
      }
      scoreAwards: allContentfulScoreMvp(filter: {recipient: {name: {eq: $name}}}, sort: [{game: {date: DESC}}]) {
        edges {
          node {
            game {
              event
            }
            team {
              title
            }
            category
          }
        }
      }
      roster1Games: allContentfulScore(filter: {teamRoster1: {elemMatch: {name: {eq: $name}}}}, sort: {date: DESC}) {
        edges {
          node {
            event
            date(formatString: "MMMM Do, YYYY h:mm A")
            location
            footages
            footageIsPrivate
            gamePath: gatsbyPath(filePath: "/games/{ContentfulScore.event}")
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
      roster2Games: allContentfulScore(filter: {teamRoster2: {elemMatch: {name: {eq: $name}}}}, sort: {date: DESC}) {
        edges {
          node {
            event
            date(formatString: "MMMM Do, YYYY h:mm A")
            location
            footages
            footageIsPrivate
            gamePath: gatsbyPath(filePath: "/games/{ContentfulScore.event}")
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
      allContentfulMemberStats(filter: {skater: {member: {name: {eq: $name}}}}, sort: {game: {date: DESC}}) {
        edges {
          node {
            game {
              event
              date(formatString: "MMMM Do, YYYY h:mm A")
              location
              footages
              footageIsPrivate
              gamePath: gatsbyPath(filePath: "/games/{ContentfulScore.event}")
              totalJams
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
            skater {
              team {
                title
              }
              travelTeam
            }
            jammer
            pivot
            blocker
            totalJamsPlayed
            jammerPoints
            leadJammer
            noInitialTrip
            starPassesReceived
            leadPercentage
            pointsFor
            pointsAgainst
            penaltyG
            penaltyA
            penaltyB
            penaltyL
            penaltyE
            penaltyF
            penaltyH
            penaltyM
            penaltyC
            penaltyD
            penaltyP
            penaltyX
            penaltyN
            penaltyI
          }
        }
      }
    }
`;