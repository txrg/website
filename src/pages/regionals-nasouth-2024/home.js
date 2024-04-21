import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../../components/layout/layout';
import Navigation from '../../components/regionals-nasouth-2024/navigation';
import Footer from '../../components/regionals-nasouth-2024/footer';

const HomePage = () => {
    return (
        <Layout>
            <Helmet
                meta={[
                    {
                        name: 'description',
                        content: '2024 North America South WFTDA Regionals is in Austin, TX. This roller derby tournament is hosted by Texas Rollergirls.'
                    },
                    {
                        name: 'keywords',
                        content: 'roller derby, Austin, Texas, WFTDA, Regionals'
                    }
                ]}
            />
            <main className="regionals regionals-home">
                <section className="regionals-home-header">
                    <div className="regionals-home-header-image"></div>
                </section>
                <Navigation />
                <section className="regionals-home-overview theme-1">
                    <div className="regionals-home-overview-wrapper">
                        <div className="regionals-home-overview-title">WELCOME HOME, Y'ALL</div>
                        <div className="regionals-home-overview-description">
                            Texas Rollergirls and the Women's Flat Track Derby Association present the <b>2024 North American South Regionals Competition</b>, and a whole lot more in Austin, TX from <b>June 28-30, 2024</b>!
                            <br /><br />
                            The top 12 teams in the North American South come together to battle for slots at Global Champs. Athletes from all over the region come together in an unprecedented showdown.
                            This action-packed battle of the best is the perfect opportunity to come out and support your local roller derby league, or root against them. And as always, the Texas Rollergirls know how to put on a fun, family-friendly event, complete with vendors, concessions, exhibition shows and more. So mark your calendars and join in on the fun.
                        </div>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.brownpapertickets.com/event/6236214">
                            <button className="regionals-home-overview-tickets">Purchase Tickets</button>
                        </a>
                    </div>
                </section>
                <section className="regionals-home-divisions theme-2">
                    <div className="regionals-home-divisions-title">2024 COMPETING TEAMS</div>
                    <div className="regionals-home-divisions-wrapper">
                        <div className="regionals-home-divisions-women">
                            <div className="regionals-home-divisions-women-name">WOMEN'S DIVISION</div>
                            <div className="regionals-home-divisions-women-teams">
                                <div>Jacksonville Roller Derby: New Jax City Rollers</div>
                                <div>Texas Rollergirls: Texecutioners</div>
                                <div>Atlanta Roller Derby: Dirty South</div>
                                <div>Red Stick Roller Derby: All Stars</div>
                                <div>Tampa Roller Derby: Tantrums</div>
                                <div>Columbia Roller Derby Quad Squad</div>
                                <div>Chattanooga Roller Derby</div>
                                <div>Twister City Roller Derby Victory All Star Squad</div>
                                <div>Atlanta Roller Derby: Rumble Bs</div>
                                <div>Dallas Derby Devils: Army of Darkness</div>
                                <div>Rockin City Roller Derby: Greatest Hits</div>
                                <div>Texas Rollergirls: Chainsaws</div>
                            </div>
                        </div>
                        <div className="regionals-home-divisions-open">
                            <div className="regionals-home-divisions-open-name">OPEN DIVISION</div>
                            <div className="regionals-home-divisions-open-teams">
                                <div>TBD</div>
                                <div>TBD</div>
                                <div>TBD</div>
                                <div>TBD</div>
                            </div>
                        </div>
                        <div className="regionals-home-divisions-junior">
                            <div className="regionals-home-divisions-junior-name">JUNIOR DIVISION</div>
                            <div className="regionals-home-divisions-junior-teams">
                                <div>TBD</div>
                                <div>TBD</div>
                                <div>TBD</div>
                                <div>TBD</div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="regionals-home-volunteer theme-1">
                    <div className="regionals-home-volunteer-wrapper">
                        <div className="regionals-home-volunteer-title">JOIN OUR STAFF</div>
                        <div className="regionals-home-volunteer-details">We're seeking volunteers to join us for the tournament weekend in a number of different roles. Apply now at the links below!</div>
                        <div className="regionals-home-volunteer-signups">
                            <a href="https://forms.gle/94GNsiJf5c27B9LS9" target="_blank" rel="noopener noreferrer">
                                <button>Officials Sign-up</button>
                            </a>
                            <a href="https://forms.gle/94GNsiJf5c27B9LS9" target="_blank" rel="noopener noreferrer">
                                <button>Volunteers Sign-up</button>
                            </a>
                            <a href="https://forms.gle/94GNsiJf5c27B9LS9" target="_blank" rel="noopener noreferrer">
                                <button>Announcers Sign-up</button>
                            </a>
                            <a href="https://forms.gle/94GNsiJf5c27B9LS9" target="_blank" rel="noopener noreferrer">
                                <button>Medics Sign-up</button>
                            </a>
                            <a href="https://forms.gle/94GNsiJf5c27B9LS9" target="_blank" rel="noopener noreferrer">
                                <button>Photo & Videographers Sign-up</button>
                            </a>
                        </div>
                    </div>
                </section>
                <section className="regionals-home-vendorsponsor theme-3">
                    <div className="regionals-home-vendorsponsor-wrapper">
                        <div className="regionals-home-vendorsponsor-title">BECOME A VENDOR OR SPONSOR!</div>
                        <div className="regionals-home-vendorsponsor-details">
                            <p>Are you looking for a new place to sell your wares, get the word out about your business, or show your support for the women and gender expansive roller derby community? <b>Deep In The Heart of Derby</b> is now accepting applications for both vendors and sponsors!</p>
                            <p>If you are interested in being involved with NA South Regionals 2024, e-mail us at <a href="mailto:interleague@texasrollergirls.org">interleague@texasrollergirls.org</a></p>
                            <p>Thank you so much for your support. We'll talk to you soon.</p>
                        </div>
                    </div>
                </section>
                <section className="regionals-home-sponsors theme-1">
                    <div className='regionals-home-sponsors-title'>TODO: THANK YOU SPONSORS</div>
                    <div className="regionals-home-sponsors-details">
                        <p>Deep in the Heart of Derby wants to give a big thanks to our sponsors...</p>
                        <div className="regionals-home-sponsors-businesses">
                            <div className="regionals-home-sponsors-business"></div>
                            <div className="regionals-home-sponsors-business"></div>
                            <div className="regionals-home-sponsors-business"></div>
                            <div className="regionals-home-sponsors-business"></div>
                            <div className="regionals-home-sponsors-business"></div>
                            <div className="regionals-home-sponsors-business"></div>
                            <div className="regionals-home-sponsors-business"></div>
                            <div className="regionals-home-sponsors-business"></div>
                            <div className="regionals-home-sponsors-business"></div>
                            <div className="regionals-home-sponsors-business"></div>
                        </div>
                    </div>
                </section>
                <section className="regionals-home-contact theme-4">
                    <div className="regionals-home-contact-wrapper">
                        <div className="regionals-home-contact-title">GET IN TOUCH</div>
                        <div className="regionals-home-contact-details">
                            Questions? Send us an e-mail at <a href="mailto:interleague@texasrollergirls.org">interleague@texasrollergirls.org</a>.
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </Layout>
    );
};

export default HomePage;