import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

const Score = ({
    title,
    date,
    location,
    gamePath,
    footages,
    setTeam,
    teamName1,
    teamLogo1,
    teamScore1,
    teamName2,
    teamLogo2,
    teamScore2
}) => {
    return (<div className="scorecomponent">
        {title && <div className="scorecomponent-title">{ title }</div>}
        <div className="scorecomponent-container">
            <div className="scorecomponent-event">
                <div>{ date }</div>
                <div>{ location }</div>
                <div className="scorecomponent-event-links">
                    {gamePath && <Link to={gamePath}>&#128203;</Link>}
                    {footages && footages.map((url, i) => <a key={i} href={url} target="_blank" rel="noopener noreferrer" aria-label="footage link">&#127909;</a>)}
                </div>
            </div>
                <div className="scorecomponent-details-container">
                    {title && <div className="scorecomponent-title-wide">{ title }</div>}
                    <div className="scorecomponent-details">
                        <div className="scorecomponent-details-team1">
                            <div className="scorecomponent-details-team" onClick={() => {setTeam && setTeam(teamName1)}}>
                                <GatsbyImage className="scorecomponent-details-team-logo" objectFit="contain" alt={ teamName1 } image={ teamLogo1 } />
                                <div>{ teamName1 }</div>
                            </div>
                            <div className="scorecomponent-details-score">{ teamScore1 }</div>
                        </div>
                        <div className="scorecomponent-details-delimiter">VS</div>
                        <div className="scorecomponent-details-team2">
                            <div className="scorecomponent-details-score">{ teamScore2 }</div>
                            <div className="scorecomponent-details-team" onClick={() => {setTeam && setTeam(teamName2)}}>
                                <GatsbyImage className="scorecomponent-details-team-logo" objectFit="contain" alt={ teamName2 } image={ teamLogo2 } />
                                <div>{ teamName2 }</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>)
};

export default Score;