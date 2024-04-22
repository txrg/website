import React, { useState } from 'react';
import Layout from '../../components/layout/layout';
import Navigation from '../../components/regionals/navigation';
import Footer from '../../components/regionals/footer';
import EventDetails from '../../components/regionals/event-details';
import imageAbout01 from '../../images/regionals/schedule-about-01.jpeg'
import imageScheduleEurope from '../../images/regionals/schedule-bracket-europe.png'
import imageScheduleNaNortheast from '../../images/regionals/schedule-bracket-nanortheast.png'
import imageScheduleNaSouth from '../../images/regionals/schedule-bracket-nasouth.png'
import imageScheduleNaWest from '../../images/regionals/schedule-bracket-nawest.png'

const SchedulePage = () => {
    const [selectedScheduleNav, setSelectedScheduleNav] = useState('nasouth');

    return (
        <Layout>
            <main className="regionals regionals-schedule">
                <section className='regionals-schedule-header'>
                    <div className="regionals-schedule-header-image"></div>
                    <div className="regionals-schedule-header-title">Schedule & Scores</div>
                </section>
                <Navigation />
                <section className='regionals-schedule-about theme-1'>
                    <div className='regionals-schedule-about-title'>DEEP IN THE HEART OF DERBY</div>
                    <div className="regionals-schedule-about-subtitle">JUNE 28-30, 2024</div>
                    <img src={imageAbout01} alt="skaters"/>
                </section>
                <section className='regionals-schedule-event theme-2'>
                    <div className='regionals-schedule-event-title'>DATES & LOCATION</div>
                    <div className='regionals-schedule-event-dates'>
                        <div className='regionals-schedule-event-dates-subtitle'>June 28 - 30, 2024</div>
                        <div className='regionals-schedule-event-dates-day1'>
                            <div className='regionals-schedule-event-dates-day1-date'>Friday, June 28th</div>
                            <p className='regionals-schedule-event-dates-day1-details regionals-hide'>
                                TODO: Update <br/>
                                Catch 4 games in the Women's Division, featuring the top 4 seeds. Doors open to the public at 4:00 PM with games at 4:15, 5:30, 6:45 and 8:00 PM.
                            </p>
                        </div>
                        <div className='regionals-schedule-event-dates-day2'>
                            <div className='regionals-schedule-event-dates-day2-date'>Saturday, June 29th</div>
                            <p className='regionals-schedule-event-dates-day2-details regionals-hide'>
                                TODO: Update <br/>
                                A full day of roller derby, featuring all divisions, concluding with the Mardi Brawl costume expo game and Second Line, led by the Young Fellaz Brass Band. Doors open at 8:00 AM. First game starts at 8:30 AM. Games continue throughout the day, with the Mardi Brawl starting at 8:00 PM.
                            </p>
                        </div>
                        <div className='regionals-schedule-event-dates-day3'>
                            <div className='regionals-schedule-event-dates-day3-date'>Sunday, June 30th</div>
                            <p className='regionals-schedule-event-dates-day3-details regionals-hide'>
                                TODO: Update <br/>
                                It all comes down to this: our divisional championships and consolation games! Doors open at 8:00 AM. First game starts at 8:30 AM. Games continue throughout the day, with our last game starting at 6:00 PM.
                            </p>
                        </div>
                    </div>
                    <div className='regionals-schedule-event-location'>
                        <div className='regionals-schedule-event-location-subtitle'>Travis County Exposition Center</div>
                        <div className='regionals-schedule-event-location-address'>7311 Decker Ln, Austin, TX 78724</div>
                        <iframe title="Venue Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.9606099641314!2d-97.62416362363436!3d30.295182974798383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b7faa87b8613%3A0x80d8c5ce96afea92!2sTravis%20County%20Exposition%20Center!5e0!3m2!1sen!2sus!4v1713648138186!5m2!1sen!2sus" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </section>
                <section className='regionals-schedule-brackets theme-3'>
                    <div className='regionals-schedule-brackets-title'>SCHEDULE & SCORES</div>
                    <div className='regionals-schedule-brackets-details'>
                        <div className='regionals-schedule-brackets-details-nav'>
                            <button
                                className={`regionals-schedule-brackets-details-nav-item${selectedScheduleNav === 'nasouth' ? ' regionals-schedule-brackets-details-nav-item-selected' : ''}`}
                                onClick={() => setSelectedScheduleNav('nasouth')}
                                onKeyDown={() => setSelectedScheduleNav('nasouth')}
                            >North America South</button>
                            <button
                                className={`regionals-schedule-brackets-details-nav-item${selectedScheduleNav === 'nanortheast' ? ' regionals-schedule-brackets-details-nav-item-selected' : ''}`}
                                onClick={() => setSelectedScheduleNav('nanortheast')}
                            >North America Northeast</button>
                            <button
                                className={`regionals-schedule-brackets-details-nav-item${selectedScheduleNav === 'europe' ? ' regionals-schedule-brackets-details-nav-item-selected' : ''}`}
                                onClick={() => setSelectedScheduleNav('europe')}
                            >Europe</button>
                            <button
                                className={`regionals-schedule-brackets-details-nav-item${selectedScheduleNav === 'oceania' ? ' regionals-schedule-brackets-details-nav-item-selected' : ''}`}
                                onClick={() => setSelectedScheduleNav('oceania')}
                            >Oceania</button>
                            <button
                                className={`regionals-schedule-brackets-details-nav-item${selectedScheduleNav === 'nawest' ? ' regionals-schedule-brackets-details-nav-item-selected' : ''}`}
                                onClick={() => setSelectedScheduleNav('nawest')}
                            >North America West</button>
                            <button
                                className={`regionals-schedule-brackets-details-nav-item${selectedScheduleNav === 'globalchamps' ? ' regionals-schedule-brackets-details-nav-item-selected' : ''}`}
                                onClick={() => setSelectedScheduleNav('globalchamps')}
                            >Global Championships</button>
                        </div>
                        <img
                            className={`regionals-schedule-brackets-details-img${selectedScheduleNav === "nasouth" ? ' regionals-schedule-brackets-details-img-selected' : ''}`}
                            src={imageScheduleNaSouth}
                            alt="North America South Bracket"
                        />
                        <img
                            className={`regionals-schedule-brackets-details-img${selectedScheduleNav === "nanortheast" ? ' regionals-schedule-brackets-details-img-selected' : ''}`}
                            src={imageScheduleNaNortheast}
                            alt="North America East Bracket"
                        />
                        <img
                            className={`regionals-schedule-brackets-details-img${selectedScheduleNav === "europe" ? ' regionals-schedule-brackets-details-img-selected' : ''}`}
                            src={imageScheduleEurope}
                            alt="Europe Bracket"
                        />
                        <div className={`regionals-schedule-brackets-details-img${selectedScheduleNav === "oceania" ? ' regionals-schedule-brackets-details-img-selected' : ''}`}>
                            June 8-10 2024<br />
                            Wayville, South Australia<br />
                            Hosted at The Great Southern Slam by Adelaide Roller Derby<br />
                            Bracket TBD
                        </div>
                        <img
                            className={`regionals-schedule-brackets-details-img${selectedScheduleNav === "nawest" ? ' regionals-schedule-brackets-details-img-selected' : ''}`}
                            src={imageScheduleNaWest}
                            alt="North America West Bracket"
                        />
                        <div className={`regionals-schedule-brackets-details-img${selectedScheduleNav === "globalchamps" ? ' regionals-schedule-brackets-details-img-selected' : ''}`}>
                            November 1-3, 2024<br />
                            Portland, OR, USA<br />
                            Hosted by Rose City Rollers<br />
                            Bracket TBD
                        </div>
                    </div>
                </section>
                <section className='regionals-schedule-bids theme-2'>
                    <div className='regionals-schedule-bids-title'>GLOBAL CHAMPIONSHIP TEAMS</div>
                    <div className='regionals-schedule-bids-details'>
                        <div className='regionals-schedule-bids-subtitle'>Europe</div>
                        <ol>
                            <li>TBD</li>
                            <li>TBD</li>
                            <li>TBD</li>
                        </ol>
                    </div>
                    <div className='regionals-schedule-bids-details'>
                        <div className='regionals-schedule-bids-subtitle'>North America Northeast</div>
                        <ol>
                            <li>TBD</li>
                            <li>TBD</li>
                            <li>TBD</li>
                        </ol>
                    </div>
                    <div className='regionals-schedule-bids-details'>
                        <div className='regionals-schedule-bids-subtitle'>North America South</div>
                        <ol>
                            <li>TBD</li>
                            <li>TBD</li>
                        </ol>
                    </div>
                    <div className='regionals-schedule-bids-details'>
                        <div className='regionals-schedule-bids-subtitle'>North America West</div>
                        <ol>
                            <li>TBD</li>
                            <li>TBD</li>
                            <li>TBD</li>
                        </ol>
                    </div>
                    <div className='regionals-schedule-bids-details'>
                        <div className='regionals-schedule-bids-subtitle'>Oceania</div>
                        <ol>
                            <li>TBD</li>
                            <li>TBD</li>
                        </ol>
                    </div>
                </section>
                <section className='regionals-schedule-more theme-1'>
                    <EventDetails />
                </section>
            </main>
            <Footer />
        </Layout>
    );
}

export default SchedulePage;