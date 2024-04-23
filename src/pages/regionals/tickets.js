import React from 'react';
import Layout from '../../components/layout/layout';
import Navigation from '../../components/regionals/navigation';
import Footer from '../../components/regionals/footer';
import EventDetails from '../../components/regionals/event-details';
import ImagePassFriday from '../../images/regionals/tickets-pass-friday.png';
import ImagePassSaturday from '../../images/regionals/tickets-pass-saturday.png';
import ImagePassSunday from '../../images/regionals/tickets-pass-sunday.png';
import ImagePassWeekend from '../../images/regionals/tickets-pass-weekend.png';

const TicketsPage = () => {
    return (
        <Layout>
            <main className="regionals regionals-tickets">
                <section className="regionals-tickets-header">
                    <div className="regionals-tickets-header-image"></div>
                    <div className="regionals-tickets-header-title">Tickets</div>
                </section>
                <Navigation />
                <section className="regionals-tickets-overview theme-1">
                    <div className="regionals-tickets-overview-title">GET READY FOR ROLLER DERBY</div>
                    <div className="regionals-tickets-overview-details">
                        <p>
                            The North America South Regionas, <b>Deep in the Heart of Derby</b>, is rolling into Austin, TX from <b>June 28-30, 2024</b>.
                        </p>
                        <p>
                            Get your tickets <a href="https://www.brownpapertickets.com/event/6236214" target="_blank" rel="noopener noreferrer">HERE</a> to see 12 amazing teams fight for a chance at the Global Champs!<br />
                            In addition to the bouts, we'll have plenty of fun activities for the whole family throughout the weekend, including drawings for prizes throughout the weekend!
                        </p>
                        <p>
                            Ticket rates are for adults (ages 13+) and children ages 6-12. Kids 5 and under get in for free!<br />
                            Questions on tickets or the tournament? Please reach out via email, <a href="mailto:interleague@texasrollergirls.org" target="_blank" rel="noopener noreferrer">interleague@texasrollergirls.org</a>.
                        </p>
                    </div>
                </section>
                <section className="regionals-tickets-times theme-2">
                    <div className="regionals-tickets-overview-times">
                        <p><b>Friday:</b><br/>Doors open at 9:00 AM<br/>Games begin at 10:00 AM</p>
                        <p><b>Saturday:</b><br/>Doors open at 9:00 AM<br/>Games begin at 10:00 AM<br/></p>
                        <p><b>Sunday:</b><br/>Doors open at 10:00 AM<br/>Games begin at 11:00 AM<br/></p>
                    </div>
                </section>
                <div className="regionals-tickets-overview-title regionals-hide">TODO: update pass images</div>
                <section className="regionals-tickets-passes theme-1">
                    <div className="regionals-tickets-passes-row">
                        <div className="regionals-tickets-passes-option">
                            <img className="regionals-tickets-passes-option-image regionals-hide" src={ImagePassWeekend} alt="Full Weekend - VIP Pass"></img>
                            <div>
                                <div className="regionals-tickets-passes-option-title">Full Weekend - VIP Pass</div>
                                <div className="regionals-tickets-passes-option-subtitle">JUNE 28-30, 2024</div>
                            </div>
                            <div className="regionals-tickets-passes-option-details">
                                $75.00<br/>
                                Includes all derby and entertainment on all three days of the tournament. Get VIP Seating, Merch Discount, and Trackside Food & Drink Service!
                            </div>
                            <a href="https://www.brownpapertickets.com/event/6236214" target="_blank" rel="noopener noreferrer">
                                <button className="regionals-tickets-passes-option-purchase">Buy Tickets</button>
                            </a>
                        </div>
                        <div className="regionals-tickets-passes-option">
                            <img className="regionals-tickets-passes-option-image regionals-hide" src={ImagePassWeekend} alt="Full Weekend Pass"></img>
                            <div>
                                <div className="regionals-tickets-passes-option-title">Full Weekend Pass</div>
                                <div className="regionals-tickets-passes-option-subtitle">JUNE 28-30, 2024</div>
                            </div>
                            <div className="regionals-tickets-passes-option-details">
                                $60.00<br />
                                Includes all derby and entertainment on all three days of the tournament.
                            </div>
                            <a href="https://www.brownpapertickets.com/event/6236214" target="_blank" rel="noopener noreferrer">
                                <button className="regionals-tickets-passes-option-purchase">Buy Tickets</button>
                            </a>
                        </div>
                    </div>
                    <div className="regionals-tickets-passes-row">
                        <div className="regionals-tickets-passes-option">
                            <img className="regionals-tickets-passes-option-image regionals-hide" src={ImagePassWeekend} alt="2 Day Pass"></img>
                            <div>
                                <div className="regionals-tickets-passes-option-title">2-Day Pass</div>
                                <div className="regionals-tickets-passes-option-subtitle">JUNE 28-30, 2024</div>
                            </div>
                            <div className="regionals-tickets-passes-option-details">
                                $45.00<br />
                                Includes all derby and entertainment on two days of the tournament.
                            </div>
                            <a href="https://www.brownpapertickets.com/event/6236214" target="_blank" rel="noopener noreferrer">
                                <button className="regionals-tickets-passes-option-purchase">Buy Tickets</button>
                            </a>
                        </div>
                        <div className="regionals-tickets-passes-option">
                            <img className="regionals-tickets-passes-option-image regionals-hide" src={ImagePassFriday} alt="Friday Pass"></img>
                            <div>
                                <div className="regionals-tickets-passes-option-title">Friday Pass</div>
                                <div className="regionals-tickets-passes-option-subtitle">June 28, 2024</div>
                            </div>
                            <div className="regionals-tickets-passes-option-details">
                                $25.00<br/>
                                1-Day Ticket for Friday. Includes all derby and entertainment on June 28th.
                            </div>
                            <a href="https://www.brownpapertickets.com/event/6236214" target="_blank" rel="noopener noreferrer">
                                <button className="regionals-tickets-passes-option-purchase">Buy Tickets</button>
                            </a>
                        </div>
                    </div>
                    <div className="regionals-tickets-passes-row">
                        <div className="regionals-tickets-passes-option">
                            <img className="regionals-tickets-passes-option-image regionals-hide" src={ImagePassSaturday} alt="Saturday Pass"></img>
                            <div>
                                <div className="regionals-tickets-passes-option-title">Saturday Pass</div>
                                <div className="regionals-tickets-passes-option-subtitle">June 29, 2024</div>
                            </div>
                            <div className="regionals-tickets-passes-option-details">
                                $25.00<br/>
                                1-Day Ticket for Saturday. Includes all derby and entertainment on June 29th.
                            </div>
                            <a href="https://www.brownpapertickets.com/event/6236214" target="_blank" rel="noopener noreferrer">
                                <button className="regionals-tickets-passes-option-purchase">Buy Tickets</button>
                            </a>
                        </div>
                        <div className="regionals-tickets-passes-option">
                            <img className="regionals-tickets-passes-option-image regionals-hide" src={ImagePassSunday} alt="Sunday Pass"></img>
                            <div>
                                <div className="regionals-tickets-passes-option-title">Sunday Pass</div>
                                <div className="regionals-tickets-passes-option-subtitle">June 30, 2024</div>
                            </div>
                            <div className="regionals-tickets-passes-option-details">
                                $25.00<br/>
                                1-Day Ticket for Sunday. Includes all derby and entertainment on June 30th.
                            </div>
                            <a href="https://www.brownpapertickets.com/event/6236214" target="_blank" rel="noopener noreferrer">
                                <button className="regionals-tickets-passes-option-purchase">Buy Tickets</button>
                            </a>
                        </div>
                    </div>
                    <div className="regionals-tickets-passes-row">
                        <div className="regionals-tickets-passes-option">
                            <img className="regionals-tickets-passes-option-image regionals-hide" src={ImagePassSaturday} alt="1 Day Kid Pass"></img>
                            <div>
                                <div className="regionals-tickets-passes-option-title">1-Day Kid Pass</div>
                                <div className="regionals-tickets-passes-option-subtitle">June 28-30, 2024</div>
                            </div>
                            <div className="regionals-tickets-passes-option-details">
                                $15.00<br />
                                For ages 6-12. Includes all derby and entertainment on Friday, Saturday OR Sunday
                            </div>
                            <a href="https://www.brownpapertickets.com/event/6236214" target="_blank" rel="noopener noreferrer">
                                <button className="regionals-tickets-passes-option-purchase">Buy Tickets</button>
                            </a>
                        </div>
                    </div>
                </section>
                <section className='theme-2'>
                    <EventDetails />
                </section>
            </main>
            <Footer />
        </Layout>
    );
};

export default TicketsPage;