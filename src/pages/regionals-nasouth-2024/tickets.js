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
                    <div className="regionals-tickets-header-title">2024 NA South Regionals Tickets</div>
                </section>
                <Navigation />
                <section className="regionals-tickets-overview theme-1">
                    <div className="regionals-tickets-overview-title">GET READY FOR ROLLER DERBY</div>
                    <div className="regionals-tickets-overview-details">
                        <p>The <b>Y'Allstars Southern Skate Showdown</b> is rolling into Thibodaux, LA from February 22-25, 2024. Get your tickets here to see <a href="#" target="_blank" rel="noopener noreferrer">20 amazing teams</a> in action, including Team Louisiana and Red Stick Roller Derby Juniors. We can't wait to see y'all just after Mardi Gras!</p>
                        <p>Ticket rates are for adults (ages 18+) and children ages 6-17. Kids 5 and under get in for free!</p>
                        <p>Questions on tickets or the tournament? Please reach out via email, <a href="mailto:interleague@texasrollergirls.org" target="_blank" rel="noopener noreferrer">interleague@texasrollergirls.org</a>.</p>
                    </div>
                </section>
                <section className="regionals-tickets-passes theme-1">
                    <div className="regionals-tickets-passes-row">
                        <div className="regionals-tickets-passes-option">
                            <img className="regionals-tickets-passes-option-image" src={ImagePassFriday}></img>
                            <div className="regionals-tickets-passes-option-title">Friday Pass</div>
                            <div className="regionals-tickets-passes-option-subtitle">FEB 23, 2024</div>
                            <div className="regionals-tickets-passes-option-details">
                                <p>Catch games all afternoon and evening, including Women's, Open, and Juniors' Divisions!</p>
                                <p>Doors open at 1:30pm, games at 1:45pm, 3:00pm, 4:15pm, 6:15pm and 8:15pm</p>
                            </div>
                            <button className="regionals-tickets-passes-option-purchase"><a href="#" target="_blank" rel="noopener noreferrer">Buy Tickets</a></button>
                        </div>
                        <div className="regionals-tickets-passes-option">
                            <img className="regionals-tickets-passes-option-image" src={ImagePassSaturday}></img>
                            <div className="regionals-tickets-passes-option-title">Saturday Pass</div>
                            <div className="regionals-tickets-passes-option-subtitle">FEB 24, 2024</div>
                            <div className="regionals-tickets-passes-option-details">
                                <p>A full day of games, including Juniors', Open, and Women's Divisions! The night concludes with the Mardi Brawl expo bout and Second Line!</p>
                                <p>Doors open at 8:00am, games at 8:30am, 10:20am, 12:20pm, 2:10pm, 4:10pm, 6:00pm and 8:00pm</p>
                            </div>
                            <button className="regionals-tickets-passes-option-purchase"><a href="#" target="_blank" rel="noopener noreferrer">Buy Tickets</a></button>
                        </div>
                    </div>
                    <div className="regionals-tickets-passes-row">
                        <div className="regionals-tickets-passes-option">
                            <img className="regionals-tickets-passes-option-image" src={ImagePassSunday}></img>
                            <div className="regionals-tickets-passes-option-title">Sunday Pass</div>
                            <div className="regionals-tickets-passes-option-subtitle">FEB 25, 2024</div>
                            <div className="regionals-tickets-passes-option-details">
                                <p>6 high-intensity games, including Juniors', Women's and Open Divisions. Don't miss our Champs games and awards ceremony!</p>
                                <p>Doors open at 8:00am, games at 8:30am, 10:20am, 12:20pm, 2:10pm, 4:10pm and 6:00pm</p>
                            </div>
                            <button className="regionals-tickets-passes-option-purchase"><a href="#" target="_blank" rel="noopener noreferrer">Buy Tickets</a></button>
                        </div>
                        <div className="regionals-tickets-passes-option">
                            <img className="regionals-tickets-passes-option-image" src={ImagePassWeekend}></img>
                            <div className="regionals-tickets-passes-option-title">Full Weekend Pass</div>
                            <div className="regionals-tickets-passes-option-subtitle">FEB 23-25, 2024</div>
                            <div className="regionals-tickets-passes-option-details">
                                <p>Get access to 22 roller derby games with our full weekend pass, our best deal!  That's 4 games on Thursday, 5 games on Friday, 7 games on Saturday, and 6 games on Sunday! Come and go as you please all weekend long to catch your favorite teams, or stick around for every single game!</p>
                                <p>Doors open on Thursday afternoon at 4:00pm.</p>
                            </div>
                            <button className="regionals-tickets-passes-option-purchase"><a href="#" target="_blank" rel="noopener noreferrer">Buy Tickets</a></button>
                        </div>
                    </div>
                </section>
                <section className="regionals-tickets-disclaimer">
                    <small>All tickets are general admission seating.</small><br/><br/>
                    <small>Friday Pass, Saturday Pass, Sunday Pass, and Full Weekend Pass holders receive same-day re-entry privileges with their ticket purchase (must receive wristband from venue staff to re-enter the event).</small><br/><br/>
                    <small>Box office opens 15 minutes before the first game and closes 30 minutes after the start of the last game of the day. Guests can arrive and enter the venue at any point during open hours (even in the middle of games).</small><br/><br/>
                    <small>Tickets can be purchased online through Ticketmaster or in-person at the Harang Auditorium box office. Online ticket purchases are subject to convenience fees. Box office purchases can occur during Harang's operating hours or at the event.</small><br/><br/>
                    <small>Interested in group rates? We're happy to chat! Please email us at yallstarstournament@gmail.com to inquire on behalf of your group.</small><br/><br/>
                </section>
            </main>
            <Footer />
        </Layout>
    );
};

export default TicketsPage;