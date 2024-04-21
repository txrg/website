import React, { useState } from 'react';
import Layout from '../../components/layout/layout';
import Navigation from '../../components/regionals-nasouth-2024/navigation';
import Footer from '../../components/regionals-nasouth-2024/footer';
import imageAbout01 from '../../images/regionals-nasouth-2024/info-about-01.jpeg'
import imageScheduleEurope from '../../images/regionals-nasouth-2024/info-bracket-europe.png'
import imageScheduleNaNortheast from '../../images/regionals-nasouth-2024/info-bracket-nanortheast.png'
import imageScheduleNaSouth from '../../images/regionals-nasouth-2024/info-bracket-nasouth.png'
import imageScheduleNaWest from '../../images/regionals-nasouth-2024/info-bracket-nawest.png'

const InfoPage = () => {
    const [selectedScheduleNav, setSelectedScheduleNav] = useState('nasouth');

    return (
        <Layout>
            <main className="regionals regionals-info">
                <section className='regionals-info-header'>
                    <div className="regionals-info-header-image"></div>
                    <div className="regionals-info-header-title">2024 Tournament Info</div>
                </section>
                <Navigation />
                <section className='regionals-info-about theme-1'>
                    <div className='regionals-info-about-title'>ABOUT THE EVENT</div>
                    <div className="regionals-info-about-subtitle">
                        DEEP IN THE HEART OF DERBY<br />
                        JUNE 28-30, 2024
                    </div>
                    <p>
                        Join us for the WFTDA Regionals North America South Roller Derby Tournament, a thrilling three-day event that will bring together roller derby enthusiasts, athletes, and spectators.<br /><br/>
                        Hosted by the Texas Rollergirls, celebrating our 20th year as the originators of flat track roller derby, the high-level WFTDA tournament brings together the top 12 teams in the North American South Region to compete for a spot in the worldwide Global Championships. This tournament promises an electrifying atmosphere filled with fierce competition, sportsmanship, and entertainment and includes social events for the whole family, exhibition and regulation roller derby, a vendor village and more. Every penny that we make through this event advances this revolutionary sport and makes it possible for us to provide access, maintain and expand roller derby. <a target="_blank" rel="noopener noreferrer" href="https://www.brownpapertickets.com/event/6236214">Tickets</a> are on sale now -- gets yours today!
                    </p>
                    <img src={imageAbout01} alt="skaters"/>
                </section>
                <section className='regionals-info-event theme-2'>
                    <div className='regionals-info-event-title'>EVENT DATES & LOCATION</div>
                    <div className='regionals-info-event-dates'>
                        <div className='regionals-info-event-dates-subtitle'>June 28 - 30, 2024</div>
                        <div className='regionals-info-event-dates-day1'>
                            <div className='regionals-info-event-dates-day1-date'>Friday, June 28th</div>
                            <p className='regionals-info-event-dates-day1-details'>
                                TODO: Update <br/>
                                Catch 4 games in the Women's Division, featuring the top 4 seeds. Doors open to the public at 4:00 PM with games at 4:15, 5:30, 6:45 and 8:00 PM.
                            </p>
                        </div>
                        <div className='regionals-info-event-dates-day2'>
                            <div className='regionals-info-event-dates-day2-date'>Saturday, June 29th</div>
                            <p className='regionals-info-event-dates-day2-details'>
                                TODO: Update <br/>
                                A full day of roller derby, featuring all divisions, concluding with the Mardi Brawl costume expo game and Second Line, led by the Young Fellaz Brass Band. Doors open at 8:00 AM. First game starts at 8:30 AM. Games continue throughout the day, with the Mardi Brawl starting at 8:00 PM.
                            </p>
                        </div>
                        <div className='regionals-info-event-dates-day3'>
                            <div className='regionals-info-event-dates-day3-date'>Sunday, June 30th</div>
                            <p className='regionals-info-event-dates-day3-details'>
                                TODO: Update <br/>
                                It all comes down to this: our divisional championships and consolation games! Doors open at 8:00 AM. First game starts at 8:30 AM. Games continue throughout the day, with our last game starting at 6:00 PM.
                            </p>
                        </div>
                    </div>
                    <div className='regionals-info-event-location'>
                        <div className='regionals-info-event-location-subtitle'>Travis County Exposition Center</div>
                        <div className='regionals-info-event-location-address'>7311 Decker Ln, Austin, TX 78724</div>
                        <iframe title="Venue Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.9606099641314!2d-97.62416362363436!3d30.295182974798383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b7faa87b8613%3A0x80d8c5ce96afea92!2sTravis%20County%20Exposition%20Center!5e0!3m2!1sen!2sus!4v1713648138186!5m2!1sen!2sus" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </section>
                <section className='regionals-info-schedulescores theme-3'>
                    <div className='regionals-info-schedulescores-title'>SCHEDULE & SCORES</div>
                    <div className='regionals-info-schedulescores-details'>
                        <div className='regionals-info-schedulescores-details-nav'>
                            <button
                                className={`regionals-info-schedulescores-details-nav-item${selectedScheduleNav === 'nasouth' ? ' regionals-info-schedulescores-details-nav-item-selected' : ''}`}
                                onClick={() => setSelectedScheduleNav('nasouth')}
                                onKeyDown={() => setSelectedScheduleNav('nasouth')}
                            >North America South</button>
                            <button
                                className={`regionals-info-schedulescores-details-nav-item${selectedScheduleNav === 'nanortheast' ? ' regionals-info-schedulescores-details-nav-item-selected' : ''}`}
                                onClick={() => setSelectedScheduleNav('nanortheast')}
                            >North America Northeast</button>
                            <button
                                className={`regionals-info-schedulescores-details-nav-item${selectedScheduleNav === 'europe' ? ' regionals-info-schedulescores-details-nav-item-selected' : ''}`}
                                onClick={() => setSelectedScheduleNav('europe')}
                            >Europe</button>
                            <button
                                className={`regionals-info-schedulescores-details-nav-item${selectedScheduleNav === 'oceania' ? ' regionals-info-schedulescores-details-nav-item-selected' : ''}`}
                                onClick={() => setSelectedScheduleNav('oceania')}
                            >Oceania</button>
                            <button
                                className={`regionals-info-schedulescores-details-nav-item${selectedScheduleNav === 'nawest' ? ' regionals-info-schedulescores-details-nav-item-selected' : ''}`}
                                onClick={() => setSelectedScheduleNav('nawest')}
                            >North America West</button>
                            <button
                                className={`regionals-info-schedulescores-details-nav-item${selectedScheduleNav === 'globalchamps' ? ' regionals-info-schedulescores-details-nav-item-selected' : ''}`}
                                onClick={() => setSelectedScheduleNav('globalchamps')}
                            >Global Championships</button>
                        </div>
                        <div className='regionals-info-schedulescores-details-bracket'>
                            { selectedScheduleNav === "nasouth" && <img className='regionals-info-schedulescores-details-bracket-img' src={imageScheduleNaSouth} alt="North America South Bracket" /> }
                            { selectedScheduleNav === "nanortheast" && <img className='regionals-info-schedulescores-details-bracket-img' src={imageScheduleNaNortheast} alt="North America East Bracket" /> }
                            { selectedScheduleNav === "europe" && <img className='regionals-info-schedulescores-details-bracket-img' src={imageScheduleEurope} alt="Europe Bracket" /> }
                            { selectedScheduleNav === "oceania" &&
                                <div className='regionals-info-schedulescores-details-bracket-img'>
                                    June 8-10 2024<br />
                                    Wayville, South Australia<br />
                                    Hosted at The Great Southern Slam by Adelaide Roller Derby<br />
                                    Bracket TBD
                                </div>
                            }
                            { selectedScheduleNav === "nawest" && <img className='regionals-info-schedulescores-details-bracket-img' src={imageScheduleNaWest} alt="North America West Bracket" /> }
                            { selectedScheduleNav === "globalchamps" &&
                                <div className='regionals-info-schedulescores-details-bracket-img'>
                                    November 1-3, 2024<br />
                                    Portland, OR, USA<br />
                                    Hosted by Rose City Rollers<br />
                                    Bracket TBD
                                </div>
                            }
                        </div>
                    </div>
                </section>
                <section className='regionals-info-bids theme-2'>
                    <div className='regionals-info-bids-title'>GLOBAL CHAMPIONSHIP TEAMS</div>
                    <div className='regionals-info-bids-details'>
                        <div className='regionals-info-bids-subtitle'>Europe</div>
                        <ol>
                            <li>TBD</li>
                            <li>TBD</li>
                            <li>TBD</li>
                        </ol>
                    </div>
                    <div className='regionals-info-bids-details'>
                        <div className='regionals-info-bids-subtitle'>North America Northeast</div>
                        <ol>
                            <li>TBD</li>
                            <li>TBD</li>
                            <li>TBD</li>
                        </ol>
                    </div>
                    <div className='regionals-info-bids-details'>
                        <div className='regionals-info-bids-subtitle'>North America South</div>
                        <ol>
                            <li>TBD</li>
                            <li>TBD</li>
                        </ol>
                    </div>
                    <div className='regionals-info-bids-details'>
                        <div className='regionals-info-bids-subtitle'>North America West</div>
                        <ol>
                            <li>TBD</li>
                            <li>TBD</li>
                            <li>TBD</li>
                        </ol>
                    </div>
                    <div className='regionals-info-bids-details'>
                        <div className='regionals-info-bids-subtitle'>Oceania</div>
                        <ol>
                            <li>TBD</li>
                            <li>TBD</li>
                        </ol>
                    </div>
                </section>
                <section className='regionals-info-more theme-1'>
                    <div className='regionals-info-more-title'>TODO: MORE EVENT DETAILS</div>
                    <div className='regionals-info-more-details'>
                        <div className='regionals-info-more-details-column1'>
                            <div className='regionals-info-more-details-topic'>
                                <div className='regionals-info-more-details-topic-subtitle'>Entertainment</div>
                                <p>In addition to the bouts, we'll have plenty of fun activities for the whole family throughout the weekend, including halftime games and performers. We'll also have drawings for prizes throughout the weekend!</p>
                            </div>
                            <div className='regionals-info-more-details-topic'>
                                <div className='regionals-info-more-details-topic-subtitle'>Vendors</div>
                                <p>We will have a small <a target="_blank" rel="noopener noreferrer" href="#">vendor market</a> set up during the full tournament weekend. Check out local makers and organizations, as well as derby gear suppliers.</p>
                            </div>
                            <div className='regionals-info-more-details-topic'>
                                <div className='regionals-info-more-details-topic-subtitle'>Seating</div>
                                <p>Harang Auditorium has tiered stadium seating for up to 3,000 spectators. All seating is general admission. Floor seating can be made available for those that require special accommodations.</p>
                                </div>
                        </div>
                        <div className='regionals-info-more-details-column2'>
                            <div className='regionals-info-more-details-topic'>
                                <div className='regionals-info-more-details-topic-subtitle'>Tickets</div>
                                <p>Single-day and weekend passes will be available for purchase through the venue's Ticketmaster portal. A full breakdown of ticket types can be found <a target="_blank" rel="noopener noreferrer" href="#">here</a>. Seating is general admission.</p>
                            </div>
                            <div className='regionals-info-more-details-topic'>
                                <div className='regionals-info-more-details-topic-subtitle'>Food</div>
                                <p>A variety of concessions will be sold on-site, along with both alcoholic and non-alcoholic drinks. Concessions are cash-on</p>
                            </div>
                            <div className='regionals-info-more-details-topic'>
                                <div className='regionals-info-more-details-topic-subtitle'>Parking</div>
                                <p>Free parking is available at the venue, with space for up to 500 vehicles.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </Layout>
    );
}

export default InfoPage;