import React, { useState, useEffect } from 'react';
import { Link, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Layout from '../../components/layout/layout';
import Score from '../../components/game/score';
import SkaterStats from '../../components/skaterStats/skaterStats';

const Game = ({ data, location }) => {
  const { 
    date,
    event,
    footages,
    totalJams,
    location: gameLocation,
    team1,
    teamScore1,
    teamRoster1,
    team2,
    teamScore2,
    teamRoster2,
  } = data.contentfulScore;

  const gameStats = data.allContentfulMemberStats.edges;
  const awards = data.allContentfulAward.edges;
  const currentTeamMembers = data.allContentfulTeamMember.edges;

  const hasGameData = (teamRoster1 && teamRoster1.length > 0) || (teamRoster2 && teamRoster2.length > 0);

  const [notification, setNotification] = useState(hasGameData ? "" : "There is no data for this game.");
  const [team, setTeam] = useState(team1.name);
  const [skater1, setSkater1] = useState(teamRoster1 && teamRoster1.length > 0 ? teamRoster1.sort((a, b) => a.name.localeCompare(b.name))[0].name : "");
  const [skater2, setSkater2] = useState(teamRoster2 && teamRoster2.length > 0 ? teamRoster2.sort((a, b) => a.name.localeCompare(b.name))[0].name : "");

  useEffect(() => {
    const teamRoster = team === team1.name ? teamRoster1 : teamRoster2;
    const teamSkaters = teamRoster ? teamRoster.map(({name}) => name) : [];
    const teamStats = gameStats.filter(({node: {skater: {member: {name}}}}) => teamSkaters.includes(name));

    if (!teamRoster || teamRoster.length === 0) {
      setNotification("There is no roster for this team.");
    } else if (teamStats.length === 0) {
      // TODO: add margin to notification
      setNotification("There are no stats for this team for this game.");
    } else {
      setNotification("");
    }
  }, [team]);

  useEffect(() => {
    const teamRoster = team === team1.name ? teamRoster1 : teamRoster2;
    const teamSkaters = teamRoster ? teamRoster.map(({name}) => name) : [];
    const teamStats = gameStats.filter(({node: {skater: {member: {name}}}}) => teamSkaters.includes(name));
    const skaterStats = gameStats.filter(({node: {skater: {member: {name}}}}) => team === team1.name ? name === skater1 : name === skater2);

    if (teamStats.length > 0 && skaterStats.length === 0) {
      setNotification("There are no stats for this skater for this game.");
    } else {
      setNotification("");
    }
  }, [skater1, skater2]);

  const teamLogo1 = team1.logo && team1.logo.length > 0 ? team1.logo[0] : team1.league.logo[0];
  const teamLogo2 = team2.logo && team2.logo.length > 0 ? team2.logo[0] : team2.league.logo[0];

  let teamRoster = team === team1.name ? teamRoster1 : teamRoster2;
  if (!teamRoster) {
    teamRoster = [];
  } else if (teamRoster.length > 0) {
    teamRoster.sort((a, b) => a.name.localeCompare(b.name));
  }

  const skaterName = team === team1.name ? skater1 : skater2;
  const skaterStats = gameStats.filter(({node: {skater: {member: {name}}}}) => name === skaterName);

  let skaterPath = teamRoster.filter(({name}) => name === skaterName);
  skaterPath = skaterPath.length > 0 ? skaterPath[0].skaterPath : null;

  let title = skaterName;
  if (skaterStats.length > 0 && skaterStats[0].node.skater.skaterNumber && skaterStats[0].node.skater.skaterNumber.length > 0) {
    let { skaterNumber } = skaterStats[0].node.skater;
    skaterNumber = skaterNumber[skaterNumber.length - 1];
    title = `${title} - #${skaterNumber}`;
  }

  let headshot;
  if (!skaterStats || skaterStats.length === 0) {
    headshot = null;
  } else if (skaterStats[0].node.skater.photo) {
    headshot = skaterStats[0].node.skater.photo.gatsbyImageData;
  } else if (skaterStats[0].node.skater.member.photos.length > 0) {
    headshot = skaterStats[0].node.skater.member.photos[skaterStats[0].node.skater.member.photos.length - 1].gatsbyImageData;
  }

  const skaterAwards = awards.filter(({node: {member: {name}}}) => team === team1.name ? skater1 === name : skater2 === name);
  const isRetired = currentTeamMembers.filter(({node: {member: {name}}}) => name === skaterName).length === 0;

  return (
    <Layout location={location} >
      <main className="gamepage">
        <section className="content content-intro">
          <div className="row about-features">
            <div className="main-content">
              <h1 className="intro-header gamepage">{event}</h1>
              <Score
                date={date} location={gameLocation} footages={footages} setTeam={setTeam}
                teamName1={team1.name} teamLogo1={teamLogo1.gatsbyImageData} teamScore1={teamScore1}
                teamName2={team2.name} teamLogo2={teamLogo2.gatsbyImageData} teamScore2={teamScore2}
              />
              {hasGameData && <h2 className="gamepage-stats-team">{team}</h2>}
              {notification && <div className="gamepage-stats-notification">{notification}</div>}
              {hasGameData &&
                <div className="gamepage-stats">
                  {teamRoster.length > 0 && <Roster roster={teamRoster} awards={awards} skater={team === team1.name ? skater1 : skater2} setSkater={team === team1.name ? setSkater1 : setSkater2} />}
                  {skaterStats.length > 0 &&
                    <div className="gamepage-skater">
                      {skaterPath ? <Link to={skaterPath}><GatsbyImage alt={team === team1.name ? skater1 : skater2} sizes={headshot.sizes} image={headshot} /></Link> : <GatsbyImage alt={team === team1.name ? skater1 : skater2} sizes={headshot.sizes} image={headshot} />}
                      <h3>{title}</h3>
                      {skaterAwards.length > 0 && skaterAwards.map(({node: {type, team: {title}}}) => <em key={`${title}-${type}`} className="gamepage-skater-award">&#127942; {title}: {type}</em>)}
                      <SkaterStats isRetired={isRetired} totalJams={totalJams} stats={skaterStats[0].node} />
                    </div>
                  }
                </div>
              }
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

const Roster = ({roster, awards, skater, setSkater }) => (
  <>
    <div className="gamepage-skater-selector">
      <select defaultValue={skater} onChange={(e) => setSkater(e.target.value)}>
        {roster.map(({ name }) => <option key={name} value={name}>{name}</option>)}
      </select>
    </div>
    <div className="gamepage-roster">
      {roster.map(({ name }) => (
        <div
          key={name} 
          className={`gamepage-roster-skater${skater === name ? " gamepage-roster-skater-selected" : ""}`}
          onClick={() => setSkater(name)}
        >
          {awards.filter(({ node: { member: { name: recipient }}}) => name === recipient).length > 0 && <span className="gamepage-roster-skater-award">&#127942;</span>}
          <span className="gamepage-roster-skater-name">{name}</span>
        </div>
      ))}
    </div>
  </>
);

export default Game;

export const gameQuery = graphql`
  query GameQuery($event: String!) {
    contentfulScore(event: {eq: $event}) {
      event
      date(formatString: "MMMM Do, YYYY h:mm A")
      location
      footages
      totalJams
      team1 {
          name
          league {
              name
              logo {
                  gatsbyImageData(layout: CONSTRAINED, height: 75, width: 75)
              }
          }
          logo {
              gatsbyImageData(layout: CONSTRAINED, height: 75, width: 75)
          }
      }
      teamRoster1 {
        name
        skaterPath: gatsbyPath(filePath: "/members/{ContentfulMember.name}")
      }
      teamScore1
      team2 {
          name
          league {
              name
              logo {
                  gatsbyImageData(layout: CONSTRAINED, height: 75, width: 75)
              }
          }
          logo {
              gatsbyImageData(layout: CONSTRAINED, height: 75, width: 75)
          }
      }
      teamScore2
      teamRoster2 {
          name
          skaterPath: gatsbyPath(filePath: "/members/{ContentfulMember.name}")
      }
    }
    allContentfulAward(filter: {score: {event: {eq: $event}}}){
      edges {
        node {
          team {
            title
          }
          type
          whammyName
          whammyYear
          member {
            name
          }
        }
      }
    }
    allContentfulTeamMember(filter: {endYear: {eq: 0}}) {
      edges {
        node {
          member {
            name
          }
        }
      }
    }
    allContentfulMemberStats(filter: {game: {event: {eq: $event}}}) {
      edges {
        node {
          skater {
            skaterNumber
            photo {
              gatsbyImageData(layout: CONSTRAINED, width: 250, height: 250)
            }
            member {
              name
              photos {
                gatsbyImageData(layout: CONSTRAINED, width: 250, height: 250)
              }
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
  }
`