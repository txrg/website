import React from 'react';
import Authorized from '../auth/authorized';

const WrappedSkaterStats = ({ isRetired, totalJams, stats }) => (<>
  {isRetired
  ? <SkaterStats totalJams={totalJams} stats={stats}/>
  : <Authorized action="View Stats"><SkaterStats totalJams={totalJams} stats={stats} /></Authorized>
  }
</>);
const SkaterStats = ({ totalJams, stats }) => {
  const {
    playTimeStats,
    jammerStats,
    points,
    penalties,
  } = getStats(stats, totalJams);

  const skaterPenalties = penalties.filter(p => p.value !== 0);

  return (
    <div className="skaterstatscomponent">
      <div className="skaterstatscomponent-stats">
        {playTimeStats.map(({stat, value, description}) => <Stat key={stat} stat={stat} value={value} description={description} />)}
        <h4 className="skaterstatscomponent-stats-section">Points</h4>
        {points.map(({stat, value, description}) => <Stat key={stat} stat={stat} value={value} description={description} />)}
        {stats.jammer > 0 && <h4 className="skaterstatscomponent-stats-section">Jammer Stats</h4>}
        {stats.jammer > 0 && jammerStats.map(({stat, value, description}) => <Stat key={stat} stat={stat} value={value} description={description} />)}
        <h4 className="skaterstatscomponent-stats-section">Penalties</h4>
        {skaterPenalties.length === 0 && <div>No Penalties</div>}
        {skaterPenalties.map(({stat, value, description}) => <Stat key={stat} stat={stat} value={value} description={description} />)}
      </div>
    </div>
  );
};

const Stat = ({ stat, value, description }) => {
  const style = description ? "skaterstatscomponent-stat-key-tooltip" : "skaterstatscomponent-stat-key";
  return (
    <div className="skaterstatscomponent-stat">
      <div className={style}>
        {stat}{description && <span className="skaterstatscomponent-stat-key-tooltiptext">{description}</span>}
      </div>
      <div className="skaterstatscomponent-stat-value">{value}</div>
    </div>
  );
}

function getStats(stats, totalJams) {
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
    ...(stats.leadPercentage ? [{ stat: "Lead Percentage", value: `${stats.leadPercentage}%`, description: "Percentage of jams awarded lead when fielded as a jammer." }] : []),
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

  return {
    playTimeStats,
    jammerStats,
    points,
    penalties,
  };
}

export default WrappedSkaterStats;