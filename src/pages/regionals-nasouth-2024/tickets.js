import React from 'react';
import Layout from '../../components/layout/layout';
import Navigation from '../../components/regionals-nasouth-2024/navigation';
import Footer from '../../components/regionals-nasouth-2024/footer';
import ImagePassFriday from '../../images/regionals-nasouth-2024/tickets-pass-friday.png';
import ImagePassSaturday from '../../images/regionals-nasouth-2024/tickets-pass-saturday.png';
import ImagePassSunday from '../../images/regionals-nasouth-2024/tickets-pass-sunday.png';
import ImagePassWeekend from '../../images/regionals-nasouth-2024/tickets-pass-weekend.png';

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
                            The North America South Regionas, <b>Deep in the Heart of Derby</b>, is rolling into Austin, TX from <b>June 28-30, 2024</b>.<br />
                            Get your tickets <a href="https://www.brownpapertickets.com/event/6236214" target="_blank" rel="noopener noreferrer">HERE</a> to see 12 amazing teams fight for chance at the Global Champs!<br />
                            Ticket rates are for adults (ages 13+) and children ages 6-12. Kids 5 and under get in for free!<br /><br />
                            Questions on tickets or the tournament? Please reach out via email, <a href="mailto:interleague@texasrollergirls.org" target="_blank" rel="noopener noreferrer">interleague@texasrollergirls.org</a>.
                        </p>
                    </div>
                </section>
                <div className="regionals-tickets-overview-title">TODO: update pass images</div>
                <section className="regionals-tickets-passes theme-1">
                    <div className="regionals-tickets-passes-row">
                        <div className="regionals-tickets-passes-option">
                            <img className="regionals-tickets-passes-option-image" src={ImagePassWeekend} alt="Full Weekend - VIP Pass"></img>
                            <div className="regionals-tickets-passes-option-title">Full Weekend - VIP Pass</div>
                            <div className="regionals-tickets-passes-option-subtitle">JUNE 28-30, 2024</div>
                            <div className="regionals-tickets-passes-option-details">
                                <p>Includes all derby and entertainment on all three days of the tournament. Get VIP Seating, Merch Discount, and Trackside Food & Drink Service!</p>
                            </div>
                            <a href="https://www.brownpapertickets.com/event/6236214" target="_blank" rel="noopener noreferrer">
                                <button className="regionals-tickets-passes-option-purchase">Buy Tickets</button>
                            </a>
                        </div>
                        <div className="regionals-tickets-passes-option">
                            <img className="regionals-tickets-passes-option-image" src={ImagePassWeekend} alt="Full Weekend Pass"></img>
                            <div className="regionals-tickets-passes-option-title">Full Weekend Pass</div>
                            <div className="regionals-tickets-passes-option-subtitle">JUNE 28-30, 2024</div>
                            <div className="regionals-tickets-passes-option-details">
                                <p>Includes all derby and entertainment on all three days of the tournament.</p>
                            </div>
                            <a href="https://www.brownpapertickets.com/event/6236214" target="_blank" rel="noopener noreferrer">
                                <button className="regionals-tickets-passes-option-purchase">Buy Tickets</button>
                            </a>
                        </div>
                    </div>
                    <div className="regionals-tickets-passes-row">
                        <div className="regionals-tickets-passes-option">
                            <img className="regionals-tickets-passes-option-image" src={ImagePassWeekend} alt="2 Day Pass"></img>
                            <div className="regionals-tickets-passes-option-title">2-Day Pass</div>
                            <div className="regionals-tickets-passes-option-subtitle">JUNE 28-30, 2024</div>
                            <div className="regionals-tickets-passes-option-details">
                                <p>Includes all derby and entertainment on two days of the tournament.</p>
                            </div>
                            <a href="https://www.brownpapertickets.com/event/6236214" target="_blank" rel="noopener noreferrer">
                                <button className="regionals-tickets-passes-option-purchase">Buy Tickets</button>
                            </a>
                        </div>
                        <div className="regionals-tickets-passes-option">
                            <img className="regionals-tickets-passes-option-image" src={ImagePassFriday} alt="Friday Pass"></img>
                            <div className="regionals-tickets-passes-option-title">Friday Pass</div>
                            <div className="regionals-tickets-passes-option-subtitle">June 28, 2024</div>
                            <div className="regionals-tickets-passes-option-details">
                                <p>1-Day Ticket for Friday. Includes all derby and entertainment on June 28th.</p>
                            </div>
                            <a href="https://www.brownpapertickets.com/event/6236214" target="_blank" rel="noopener noreferrer">
                                <button className="regionals-tickets-passes-option-purchase">Buy Tickets</button>
                            </a>
                        </div>
                    </div>
                    <div className="regionals-tickets-passes-row">
                        <div className="regionals-tickets-passes-option">
                            <img className="regionals-tickets-passes-option-image" src={ImagePassSaturday} alt="Saturday Pass"></img>
                            <div className="regionals-tickets-passes-option-title">Saturday Pass</div>
                            <div className="regionals-tickets-passes-option-subtitle">June 29, 2024</div>
                            <div className="regionals-tickets-passes-option-details">
                                <p>1-Day Ticket for Saturday. Includes all derby and entertainment on June 29th.</p>
                            </div>
                            <a href="https://www.brownpapertickets.com/event/6236214" target="_blank" rel="noopener noreferrer">
                                <button className="regionals-tickets-passes-option-purchase">Buy Tickets</button>
                            </a>
                        </div>
                        <div className="regionals-tickets-passes-option">
                            <img className="regionals-tickets-passes-option-image" src={ImagePassSunday} alt="Sunday Pass"></img>
                            <div className="regionals-tickets-passes-option-title">Sunday Pass</div>
                            <div className="regionals-tickets-passes-option-subtitle">June 30, 2024</div>
                            <div className="regionals-tickets-passes-option-details">
                                <p>1-Day Ticket for Sunday. Includes all derby and entertainment on June 30th.</p>
                            </div>
                            <a href="https://www.brownpapertickets.com/event/6236214" target="_blank" rel="noopener noreferrer">
                                <button className="regionals-tickets-passes-option-purchase">Buy Tickets</button>
                            </a>
                        </div>
                    </div>
                    <div className="regionals-tickets-passes-row">
                        <div className="regionals-tickets-passes-option">
                            <img className="regionals-tickets-passes-option-image" src={ImagePassSaturday} alt="1 Day Kid Pass"></img>
                            <div className="regionals-tickets-passes-option-title">1-Day Kid Pass</div>
                            <div className="regionals-tickets-passes-option-subtitle">June 28-30, 2024</div>
                            <div className="regionals-tickets-passes-option-details">
                                <p>For ages 6-12. Includes all derby and entertainment on Friday, Saturday OR Sunday</p>
                            </div>
                            <a href="https://www.brownpapertickets.com/event/6236214" target="_blank" rel="noopener noreferrer">
                                <button className="regionals-tickets-passes-option-purchase">Buy Tickets</button>
                            </a>
                        </div>
                    </div>
                </section>
                <section className="regionals-tickets-disclaimer">
                    <small>All tickets are general admission seating.</small><br/><br/>
                    <small>Friday Pass, Saturday Pass, Sunday Pass, and Full Weekend Pass holders receive same-day re-entry privileges with their ticket purchase (must receive wristband from venue staff to re-enter the event).</small><br/><br/>
                    <small>Box office opens 15 minutes before the first game and closes 30 minutes after the start of the last game of the day. Guests can arrive and enter the venue at any point during open hours (even in the middle of games).</small><br/><br/>
                    <small>Tickets can be purchased online through Brown Paper Tickets. Online ticket purchases are subject to convenience fees.</small><br/><br/>
                    <small>Interested in group rates? We're happy to chat! Please email us at interleague@texasrollergirls.org to inquire on behalf of your group.</small><br/><br/>
                </section>
            </main>
            <Footer />
        </Layout>
    );
};

export default TicketsPage;