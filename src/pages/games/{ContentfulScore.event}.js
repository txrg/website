import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Layout from '../../components/layout/layout';

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

  const [notification, setNotification] = useState("");
  const [team, setTeam] = useState(team1.name);
  const roster1 = teamRoster1 && teamRoster1.sort((a, b) => a.name.localeCompare(b.name));
  const roster2 = teamRoster2 && teamRoster2.sort((a, b) => a.name.localeCompare(b.name));
  const [skater1, setSkater1] = useState(roster1 ? roster1[0].name : "");
  const [skater2, setSkater2] = useState(roster2 ? roster2[0].name : "");

  const teamLogo1 = team1.logo && team1.logo.length > 0 ? team1.logo[0] : team1.league.logo[0];
  const teamLogo2 = team2.logo && team2.logo.length > 0 ? team2.logo[0] : team2.league.logo[0];

  return (
    <Layout location={location} >
      <main className="main--game">
        <section className="content content-intro">
          <div className="row about-features">
            <div className="main-content">
              <h1 className="intro-header gamepage">{event}</h1>
              <div className="gamepage-details">
                <div>{date}</div>
                <div>{gameLocation}</div>
                <div>{footages && footages.map((url, i) => <a key={i} href={url} target="_blank" rel="noopener noreferrer" aria-label="footage link">&#127909;</a>)}</div>
              </div>
              <div className="gamepage-score">
                <div className="gamepage-score-team" onClick={() => setTeam(team1.name)}>
                  <GatsbyImage objectFit="contain" alt={ team1.name } image={ teamLogo1.gatsbyImageData } />
                  <div className="gamepage-score-team-name">{team1.name}</div>
                </div>
                <div className="gamepage-score-value">{ teamScore1 }</div>
                <div>VS</div>
                <div className="gamepage-score-value">{ teamScore2 }</div>
                <div className="gamepage-score-team" onClick={() => setTeam(team2.name)}>
                  <GatsbyImage objectFit="contain" alt={ team2.name } image={ teamLogo2.gatsbyImageData } />
                  <div className="gamepage-score-team-name">{team2.name}</div>
                </div>
              </div>
              <h2 className="gamepage-stats-team">{team}</h2>
              {notification && <div className="gamepage-stats-notification">{notification}</div>}
              <div className="gamepage-stats">
                { team === team1.name && <Roster roster={roster1} skater={skater1} setSkater={setSkater1} setNotification={setNotification}/>}
                { team === team1.name && skater1 && <SkaterStats skater={skater1} totalJams={totalJams} gameStats={data.allContentfulMemberStats} setNotification={setNotification}/>}
                { team === team2.name && <Roster roster={roster2} skater={skater2} setSkater={setSkater2} setNotification={setNotification}/>}
                { team === team2.name && skater2 && <SkaterStats skater={skater2} totalJams={totalJams} gameStats={data.allContentfulMemberStats} setNotification={setNotification}/>}
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

const Roster = ({roster, skater, setSkater, setNotification }) => {
  if (!roster) {
    setNotification("There is no roster for this team.");
    return null;
  }

  setNotification("");

  return (
    <>
      <div className="gamepage-skater-selector">
        <select defaultValue={skater} onChange={(e) => setSkater(e.target.value)}>
          {roster.map(({ name }) => <option key={name} value={name}>{name}</option>)}
        </select>
      </div>
      <div className="gamepage-roster">
        {roster.map(({ name, photos }) => {
          const headshot = photos[photos.length - 1].gatsbyImageData;
          return (
            <div className="gamepage-roster-skater" key={name} onClick={() => setSkater(name)}>
              <div className={`gamepage-roster-skater-image${skater === name ? " gamepage-roster-skater-image-selected" : ""}`}><GatsbyImage alt={name} sizes={headshot.sizes} image={headshot} /></div>
              <div className={`gamepage-roster-skater-name${skater === name ? " gamepage-roster-skater-name-selected" : ""}`}>{name}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

const SkaterStats = ({ skater, totalJams, gameStats, setNotification }) => {
  if (!gameStats) {
    setNotification("There are no stats for this game.");
    return null;
  }

  let stats = gameStats.edges.filter(s => s.node.skater.member.name === skater);
  if (stats.length === 0) {
    setNotification("There are no stats for this skater.");
    return null;
  }

  setNotification("");

  stats = stats[0].node;

  const playTimeStats = [
    { stat: "Jammer", value: stats.jammer, description: "Number of times on the track as a jammer.", },
    { stat: "Blocker", value: stats.blocker, description: "Number of times on the track as a blocker." },
    { stat: "Pivot", value: stats.pivot, description: "Number of times on the track as a pivot." },
    { stat: "Total", value: stats.totalJamsPlayed, description: "Number of jams played in the game." },
    { stat: "Total Jams", value: totalJams, description: "Total number of jams in a game." },
  ];

  const jammerStats = [
    { stat: "Points", value: stats.jammerPoints, description: "Total number of points scored." },
    { stat: "Lead", value: stats.leadJammer, description: "Number of times awarded lead." },
    { stat: "No Initial Trip", value: stats.noInitialTrip, description: "Number of times did not complete an initial trip in a jam." },
    { stat: "Star Pass Received", value: stats.starPassesReceived, description: "Number of times successfully received the star." },
    { stat: "Lead Percentage", value: `${stats.leadPercentage}%`, description: "Percentage of jams awarded lead when fielded as a jammer." },
  ];

  const points = [
    { stat: "Points For", value: stats.pointsFor, description: "Number of points team received whilst on the track." },
    { stat: "Points Against", value: stats.pointsAgainst, description: "Number of points opponents received whilst on the track." },
  ];

  const penalties = [
    { stat: "Misconduct", value: stats.penaltyG, description: "(Gross), Misconduct, Insubordination" },
    { stat: "High Block", value: stats.penaltyA },
    { stat: "Back Block", value: stats.penaltyB },
    { stat: "Low Block", value: stats.penaltyL },
    { stat: "Leg Block", value: stats.penaltyE },
    { stat: "Forearms", value: stats.penaltyF },
    { stat: "Head Block", value: stats.penaltyH },
    { stat: "Multiplayer", value: stats.penaltyM },
    { stat: "Illegal Contact", value: stats.penaltyC, description: "Illegal Contact, Early/Late Hit, Out of Play Block" },
    { stat: "Direction", value: stats.penaltyD, description: "Direction, Stop Block" },
    { stat: "Illegal Position", value: stats.penaltyP, description: "Illegal Position, Destruction, Skating OOB, Failure to Reform, Failure to Return, Failure to Yield" },
    { stat: "Cut", value: stats.penaltyX, description: "Cut, Illegal Re-entry" },
    { stat: "Interference", value: stats.penaltyN, description: "Interference, Delay of Game" },
    { stat: "Illegal Procedure", value: stats.penaltyI, description: "Illegal Procedure, StarPass Violation/Interference" },
  ];

  let title = skater;
  if (stats.skater.skaterNumber && stats.skater.skaterNumber.length > 0) {
    let { skaterNumber } = stats.skater;
    skaterNumber = skaterNumber[skaterNumber.length - 1];
    title = `${skater} - #${skaterNumber}`;
  }

  const skaterPenalties = penalties.filter(p => p.value != 0);

  return (
    <div className="gamepage-skater">
      <h3>{title}</h3>
      <div className="gamepage-skater-stats">
        {playTimeStats.map(({stat, value, description}) => <Stat key={stat} stat={stat} value={value} description={description} />)}
        <h4 className="gamepage-skater-stats-section">Points</h4>
        {points.map(({stat, value, description}) => <Stat key={stat} stat={stat} value={value} description={description} />)}
        {stats.jammer > 0 && <h4 className="gamepage-skater-stats-section">Jammer Stats</h4>}
        {stats.jammer > 0 && jammerStats.map(({stat, value, description}) => <Stat key={stat} stat={stat} value={value} description={description} />)}
        <h4 className="gamepage-skater-stats-section">Penalties</h4>
        {skaterPenalties.length === 0 && <div>No Penalties</div>}
        {skaterPenalties.map(({stat, value, description}) => <Stat key={stat} stat={stat} value={value} description={description} />)}
      </div>
    </div>
  );
};

const Stat = ({ stat, value, description }) => {
  const style = description ? "gamepage-tooltip" : "gamepage";
  return (
    <div className="gamepage-skater-stats-item">
      <div className={style}>
        {stat}{description && <span className="gamepage-tooltiptext">{description}</span>}
      </div>
      <div className="gamepage-skater-stats-item-value">{value}</div>
    </div>
  );
}

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
        photos {
          gatsbyImageData(layout: CONSTRAINED, width: 100, height: 100)
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
          photos {
            gatsbyImageData(layout: CONSTRAINED, width: 100, height: 100)
          }
      }
    }
    allContentfulMemberStats(filter: {game: {event: {eq: $event}}}) {
      edges {
        node{
          skater {
            skaterNumber
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