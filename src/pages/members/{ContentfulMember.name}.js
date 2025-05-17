import React from 'react';
import { graphql } from 'gatsby';
import ReactImageGallery from 'react-image-gallery';
import { GatsbyImage } from 'gatsby-plugin-image';
import Layout from '../../components/layout/layout';
import Score from '../../components/game/score';
import SkaterStats from '../../components/skaterStats/skaterStats';

const Member = ({ data, location }) => {
  const {
    allContentfulMemberStats: { edges: stats },
    allContentfulTeamLeader: { edges: positions },
    allContentfulTeamMember: { edges: teams },
    contentfulMember: member,
    scoreAwards: { edges: scoreAwards },
    whammyAwards: { group: whammyAwards },
  } = data;

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
              {stats.map(({node}) => {
                const {game: {event, date, location, footages, footageIsPrivate, gamePath, team1, team2, teamScore1, teamScore2}} = node;
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
                      {gameAwards.length > 0 && gameAwards.map(({node: {category, team: {title}}}) => <em key={`${title}-${category}`} className="memberpage-game-award">&#127942; {title}: {category}</em>)}
                      <SkaterStats isRetired={isRetired} totalJams={node.game.totalJams} stats={node} />
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
  let travelTeamHistory = [];
  let homeTeamHistory = [];

  for (let i = 0; i < teams.length; i++) {
    const team = teams[i].node;

    let teamName = team.team.title;
    if (team.travelTeam) {
      teamName += `: ${team.travelTeam}`;
    }

    const details = {
      teamName,
      startYear: team.startYear === 9999 ? "unknown": team.startYear,
      endYear: team.endYear === 9999 ? "unknown" : team.endYear,
      numbers: team.skaterNumber,
    };

    if (team.travelTeam) {
      travelTeamHistory.push(details);
    } else {
      homeTeamHistory.push(details);
    }
  }

  for (let i = 0; i < positions.length; i++) {
    const position = positions[i].node;
    let teamName = position.team.title;
    if (position.travelTeam) {
      teamName += `: ${position.travelTeam}`;
    }

    const details = {
      teamName,
      position: position.role,
      startYear: position.startYear === 9999 ? "unknown" : position.startYear,
      endYear: position.endYear === 9999 ? "unknown" : position.endYear,
    };

    if (position.travelTeam) {
      travelTeamHistory.push(details);
    } else {
      homeTeamHistory.push(details);
    }
  }

  travelTeamHistory = travelTeamHistory.sort(sortHistory)
  homeTeamHistory = homeTeamHistory.sort(sortHistory);

  return (
    <div className="memberpage-teams">
      {travelTeamHistory.map((details) => (
        <div key={`${details.teamName}${details.position && "-" + details.position}-${details.startYear}-${details.endYear}`} className="memberpage-team">
          <h2>{details.teamName}{details.position && ` - ${details.position}`}</h2>
          <div>Seasons: {details.startYear} - {details.endYear === 0 ? <>present</> : <>{details.endYear}</>}</div>
          {details.numbers && <div>Skater Numbers: {details.numbers.join(", ")}</div>}
        </div>
      ))}
      {homeTeamHistory.map((details) => (
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

  if (aEndYear && bEndYear && aEndYear !== bEndYear) {
    return bEndYear - aEndYear;
  } else if (aStartYear && bStartYear && aStartYear !== bStartYear) {
    return bStartYear - aStartYear;
  } else {
    return 0;
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
    }
`;