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
    footageIsPrivate,
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
  const awards = data.allContentfulScoreMvp.edges;
  const currentTeamMembers = data.allContentfulTeamMember.edges;

  const hasGameData = (teamRoster1 && teamRoster1.length > 0) || (teamRoster2 && teamRoster2.length > 0);

  const params = new URLSearchParams(location.search);
  const initialTeam = params.get('team') || team1.name;
  const initialSkater1 = params.get('team') === team1.name && params.get('skater') ? params.get('skater') : (teamRoster1 && teamRoster1.length > 0 ? teamRoster1.sort((a, b) => a.name.localeCompare(b.name))[0].name : "");
  const initialSkater2 = params.get('team') === team2.name && params.get('skater') ? params.get('skater') : (teamRoster2 && teamRoster2.length > 0 ? teamRoster2.sort((a, b) => a.name.localeCompare(b.name))[0].name : "");

  const [team, setTeam] = useState(initialTeam);
  const [skater1, setSkater1] = useState(initialSkater1);
  const [skater2, setSkater2] = useState(initialSkater2);

  useEffect(() => {
    if (typeof window !== undefined) {
      window.history.pushState({}, "", `${location.pathname}?team=${team}`);
    }
  }, [team]);

  useEffect(() => {
    const skaterName = team === team1.name ? skater1 : skater2;

    if (typeof window !== undefined && skaterName) {
      window.history.pushState({}, "", `${location.pathname}?team=${team}&skater=${skaterName}`);
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

  const skaterDetails = teamRoster.filter(({name}) => name === skaterName);
  let { skaterPath, photos: skaterPhotos } = skaterDetails.length > 0 ? skaterDetails[0] : { skaterPath: null, photos: [] };

  let title = skaterName;
  if (skaterStats.length > 0 && skaterStats[0].node.skater.skaterNumber && skaterStats[0].node.skater.skaterNumber.length > 0) {
    let { skaterNumber } = skaterStats[0].node.skater;
    skaterNumber = skaterNumber[skaterNumber.length - 1];
    title = `${title} - #${skaterNumber}`;
  }

  let headshot;
  if ((!skaterStats || skaterStats.length === 0) && skaterPhotos.length > 0) {
    headshot = skaterPhotos[skaterPhotos.length - 1].gatsbyImageData;
  } else if (!skaterStats || skaterStats.length === 0) {
    headshot = null;
  } else if (skaterStats[0].node.skater.photo) {
    headshot = skaterStats[0].node.skater.photo.gatsbyImageData;
  } else {
    headshot = skaterPhotos[skaterPhotos.length - 1].gatsbyImageData;
  }

  const skaterAwards = awards.filter(({node: {recipient: {name}}}) => team === team1.name ? skater1 === name : skater2 === name);
  const isRetired = currentTeamMembers.filter(({node: {member: {name}}}) => name === skaterName).length === 0;

  return (
    <Layout location={location} >
      <main className="gamepage">
        <section className="content content-intro">
          <div className="row about-features">
            <div className="main-content">
              <h1 className="intro-header gamepage">{event}</h1>
              <Score
                date={date} location={gameLocation} footages={footages} footageIsPrivate={footageIsPrivate} setTeam={setTeam}
                teamName1={team1.name} teamLogo1={teamLogo1.gatsbyImageData} teamScore1={teamScore1}
                teamName2={team2.name} teamLogo2={teamLogo2.gatsbyImageData} teamScore2={teamScore2}
              />
              {hasGameData && <h2 className="gamepage-stats-team">{team}</h2>}
              {hasGameData &&
                <div className="gamepage-stats">
                  {teamRoster.length > 0 && <Roster roster={teamRoster} awards={awards} skater={team === team1.name ? skater1 : skater2} setSkater={team === team1.name ? setSkater1 : setSkater2} />}
                  {skaterName ?
                    <div className="gamepage-skater">
                      {headshot && <>{skaterPath ? <Link to={skaterPath}><GatsbyImage alt={team === team1.name ? skater1 : skater2} sizes={headshot.sizes} image={headshot} /></Link> : <GatsbyImage alt={team === team1.name ? skater1 : skater2} sizes={headshot.sizes} image={headshot} />}</>}
                      {title && <h3>{title}</h3>}
                      {skaterAwards.length > 0 && skaterAwards.map(({node: {type, team: {title}}}) => <em key={`${title}-${type}`} className="gamepage-skater-award">&#127942; {title}: {type}</em>)}
                      {skaterStats.length > 0 ? <SkaterStats isRetired={isRetired} totalJams={totalJams} stats={skaterStats[0].node} /> : <div>No Stats Available</div>}
                    </div>
                    :
                    <div className="gamepage-skater">No Data</div>
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
      <select value={skater} onChange={(e) => setSkater(e.target.value)}>
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
          {awards.filter(({ node: { recipient: { name: recipient }}}) => name === recipient).length > 0 && <span className="gamepage-roster-skater-award">&#127942;</span>}
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
      footageIsPrivate
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
        photos {
          gatsbyImageData(layout: CONSTRAINED, width: 250, height: 250)
        }
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
        photos {
          gatsbyImageData(layout: CONSTRAINED, width: 250, height: 250)
        }
      }
    }
    allContentfulScoreMvp(filter: {game: {event: {eq: $event}}}) {
      edges {
        node {
          team {
            title
          }
          category 
          recipient {
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