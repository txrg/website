import React, { useState } from 'react';
import Layout from '../../components/layout/layout';
import Navigation from '../../components/regionals/navigation';
import Footer from '../../components/regionals/footer';
import EventDetails from '../../components/regionals/event-details';
import Venue from '../../components/regionals/venue';
import imageAbout01 from '../../images/regionals/schedule-about-01.jpeg'
import imageScheduleEurope from '../../images/regionals/schedule-bracket-europe.png'
import imageScheduleNaNortheast from '../../images/regionals/schedule-bracket-nanortheast.png'
import imageScheduleNaSouth from '../../images/regionals/schedule-bracket-nasouth.png'
import imageScheduleNaWest from '../../images/regionals/schedule-bracket-nawest.png'
import imageScheduleOceania from '../../images/regionals/schedule-bracket-oceania.png'

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
                    <div className='regionals-schedule-event-break'>
                        <div className='regionals-schedule-event-subtitle'>Thursday, June 27th, 2024</div>
                        <p>
                            <span className='regionals-schedule-event-sectiontitle'>5:00 PM - 9:00 PM</span>
                            <span className='regionals-schedule-event-highlight'>Team Registration, Volunteer Orientation and Hospitality Overview</span>
                            <span className='regionals-schedule-event-emphasis'>Hopsquad Brewing Company</span>
                            <span className='regionals-schedule-event-emphasis'>2307 Kramer Ln, Austin, TX 78758</span>
                            Provided that your signup, charter, waivers and other processes are complete with
                            WFTDA and Texas Rollergirls, you can send one representative to pick up badges,
                            packets and merch presales.
                        </p>
                        <p>
                            <span className='regionals-schedule-event-sectiontitle'>OPTIONAL SPECIAL EVENTS</span>
                            <span className='regionals-schedule-event-highlight'>Hopsquad Brewing Company</span>
                            <span className='regionals-schedule-event-emphasis'>2307 Kramer Ln, Austin, TX 78758</span>
                            Hopsquad will have a wide selection of alcoholic and non-alcoholic drinks, as well as food
                            for purchase. Bring your whole team! (Not that you’re required to – but it’s a great way to
                            start your tournament.)
                            <br/><br />
                            <span className='regionals-schedule-event-highlight'>Barton Springs Pool in Zilker Park</span>
                            <span className='regionals-schedule-event-emphasis'>2201 Barton Springs Rd, Austin, TX 78746</span>
                            Carpool or convoy from Hopsquad or meet us there! $8 admission to Barton, which doesn’t allow dogs
                            or food, or free admission to Barkin’ Springs, which allows dogs and food but is usually not
                            very sanitary. Spring fed and over 900 feet long, the pool was formed when Barton Creek
                            was dammed up, so it has a natural rock and gravel bottom. 68 degrees all year around
                            with a diving board.
                        </p>
                    </div>
                    <div className='regionals-schedule-event-break'>
                        <div className='regionals-schedule-event-subtitle'>Friday, June 28th, 2024</div>
                        <p>
                            <span className='regionals-schedule-event-sectiontitle'>7:00 AM</span>
                            <span className='regionals-schedule-event-emphasis'>Travis County Expo Center</span>
                            Venue opens to officials, volunteers, and teams.
                        </p>
                        <p>
                            <span className='regionals-schedule-event-sectiontitle'>7:30 AM - 9:30 AM</span>
                            <span className='regionals-schedule-event-highlight'>Team Registration, Volunteer Orientation and Hospitality Overview</span>
                            <span className='regionals-schedule-event-emphasis'>Travis County Expo Center</span>
                            Provided that your signup, charter, waivers and other processes are complete with
                            WFTDA and Texas Rollergirls, you can send one representative to pick up badges,
                            packets and merch presales. Required of any skaters or officials that did not do
                            so on Thursday.
                        </p>
                        <p>
                            <span className='regionals-schedule-event-sectiontitle'>9:00 AM</span>
                            <span className='regionals-schedule-event-emphasis'>Travis County Expo Center</span>
                            Doors open to general public.
                        </p>
                    </div>
                    <div className='regionals-schedule-event-break'>
                        <div className='regionals-schedule-event-subtitle'>Saturday, June 29th, 2024</div>
                        <p>
                            <span className='regionals-schedule-event-sectiontitle'>9:00 AM</span>
                            <span className='regionals-schedule-event-emphasis'>Travis County Expo Center</span>
                            Doors open to general public.
                        </p>
                    </div>
                    <div>
                        <div className='regionals-schedule-event-subtitle'>Sunday, June 30th, 2024</div>
                        <p>
                            <span className='regionals-schedule-event-sectiontitle'>10:00 AM</span>
                            <span className='regionals-schedule-event-emphasis'>Travis County Expo Center</span>
                            Doors open to general public.
                        </p>
                    </div>
                    <div className='regionals-schedule-event-sectiontitle'>Want to tailgate with friends?<br/>Cool – let us know when and we’ll find a dedicated spot for your gathering.</div><br />
                </section>
                <section className="theme-1">
                    <Venue />
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
                        <img className={`regionals-schedule-brackets-details-img${selectedScheduleNav === "oceania" ? ' regionals-schedule-brackets-details-img-selected' : ''}`}
                            src={imageScheduleOceania}
                            alt="Oceania Bracket"
                        />
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
                <section className='regionals-schedule-bids theme-1'>
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
                <section className='regionals-schedule-more theme-2'>
                    <EventDetails />
                </section>
            </main>
            <Footer />
        </Layout>
    );
}

export default SchedulePage;