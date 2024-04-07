import React from 'react';
import Layout from '../../components/layout/layout';
import Navigation from '../../components/regionals-nasouth-2024/navigation';
import Footer from '../../components/regionals-nasouth-2024/footer';
import imageAbout001 from '../../images/regionals-nasouth-2024/info-about-001.jpeg';
import imageScheduleScoresBracket from '../../images/regionals-nasouth-2024/info-schedulescores-bracket.jpeg';

const InfoPage = () => {
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
                    <p>Y'Allstars is a pro-bowl style tournament, showcasing top-tier roller derby athletes and teams from across the continent. Competing teams e made up of highly-talented skaters from different cities and leagues, ultimately forming "superteams.</p>
                    <img src={imageAbout001} />
                </section>
                <section className='regionals-info-event theme-2'>
                    <div className='regionals-info-event-title'>EVENT DATES & LOCATION</div>
                    <div className='regionals-info-event-dates'>
                        <div className='regionals-info-event-dates-subtitle'>FEBRUARY 23-25, 2024</div>
                        <div className='regionals-info-event-dates-day1'>
                            <div className='regionals-info-event-dates-day1-date'>Friday, February 23</div>
                            <p className='regionals-info-event-dates-day1-details'>
                                Catch 4 games in the Women's Division, featuring the top 4 seeds. Doors open to the public at 4:00 PM with games at 4:15, 5:30, 6:45 and 8:00 PM.
                            </p>
                        </div>
                        <div className='regionals-info-event-dates-day2'>
                            <div className='regionals-info-event-dates-day2-date'>Saturday, February 24</div>
                            <p className='regionals-info-event-dates-day2-details'>
                                A full day of roller derby, featuring all divisions, concluding with the Mardi Brawl costume expo game and Second Line, led by the Young Fellaz Brass Band. Doors open at 8:00 AM. First game starts at 8:30 AM. Games continue throughout the day, with the Mardi Brawl starting at 8:00 PM.
                            </p>
                        </div>
                        <div className='regionals-info-event-dates-day3'>
                            <div className='regionals-info-event-dates-day3-date'>Sunday, February 25</div>
                            <p className='regionals-info-event-dates-day3-details'>
                            It all comes down to this: our divisional championships and consolation games! Doors open at 8:00 AM. First game starts at 8:30 AM. Games continue throughout the day, with our last game starting at 6:00 PM.
                            </p>
                        </div>
                    </div>
                    <div className='regionals-info-event-location'>
                        <div className='regionals-info-event-location-subtitle'>WARREN J. HARANG JR. MUNICIPAL AUDITORIUM</div>
                        <div className='regionals-info-event-location-address'>310 N CANAL BLVD, THIBODAUX, LA 70301</div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3462.1028780344755!2d-90.8202557236492!3d29.803572075045857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86213deee160f8eb%3A0xcdb58794164707c8!2sWarren%20J%20Harang%20Jr%20Municipal%20Auditorium!5e0!3m2!1sen!2sus!4v1712531124830!5m2!1sen!2sus" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </section>
                <section className='regionals-info-schedulescores theme-3'>
                    <div className='regionals-info-schedulescores-title'>SCHEDULE & SCORES</div>
                    <img className='regionals-info-schedulescores-bracket' src={imageScheduleScoresBracket} />
                </section>
                <section className='regionals-info-outcome theme-2'>
                    <div className='regionals-info-outcome-title'>TOURNAMENT OUTCOME</div>
                    <div className="regionals-info-outcome-teams">
                        <div className='regionals-info-outcome-teams-women'>
                            <div className='regionals-info-outcome-teams-women-subtitle'>Women's Division</div>
                            <p>Final Rankings: TBD</p>
                        </div>
                        <div className='regionals-info-outcome-teams-open'>
                            <div className='regionals-info-outcome-teams-open-subtitle'>Open Division</div>
                            <p>Final Rankings: TBD</p>
                        </div>
                        <div className='regionals-info-outcome-teams-juniors'>
                            <div className='regionals-info-outcome-teams-juniors-subtitle'>Juniors Division</div>
                            <p>Final Rankings: TBD</p>
                        </div>
                    </div>
                </section>
                <section className='regionals-info-more theme-1'>
                    <div className='regionals-info-more-title'>MORE EVENT DETAILS</div>
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