import React from 'react';
import Layout from '../../components/layout/layout';
import Navigation from '../../components/regionals-nasouth-2024/navigation';
import Footer from '../../components/regionals-nasouth-2024/footer';
import imageParticipants001 from '../../images/regionals-nasouth-2024/home-participants-001.jpeg';
import imageParticipants002 from '../../images/regionals-nasouth-2024/home-participants-002.jpeg';
import imageSponsors001 from '../../images/regionals-nasouth-2024/home-sponsors-001.png';
import imageSponsors002 from '../../images/regionals-nasouth-2024/home-sponsors-002.png';
import imageSponsors003 from '../../images/regionals-nasouth-2024/home-sponsors-003.png';

const HomePage = () => {
    return (
        <Layout>
            <main className="regionals regionals-home">
                <section className="regionals-home-header">
                    <div className="regionals-home-header-image"></div>
                </section>
                <Navigation />
                <section className="regionals-home-overview theme-1">
                    <div className="regionals-home-overview-wrapper">
                        <div className="regionals-home-overview-title">WELCOME HOME Y'ALL</div>
                        <div className="regionals-home-overview-description">
                            Texas Rollergirls and the Women's Flat Track Derby Association present the 2024 North American South Regionals Competition, and a whole lot more in Austin, TX from June 28-30, 2024!
                            <br /><br />
                            The top 12 teams in the North American South come together to battle for slots at Global Champs. Athletes from all over the region come together in an unprecedented showdown.
                            This action-packed battle of the best is the perfect opportunity to come out and support your local roller derby league, or root against them. And as always, the Texas Rollergirls know how to put on a fun, family-friendly event, complete with vendors, concessions, exhibition shows and more. So mark your calendars and join in on the fun.
                        </div>
                        <button className="regionals-home-overview-tickets">
                            <a target="_blank" rel="noopener noreferrer" href="https://www.brownpapertickets.com/event/6236214">
                                Purchase Tickets - TODO fix styling
                            </a>
                        </button>
                        <div className="regionals-home-overview-photos">
                            <img src={imageParticipants001} />
                            <img src={imageParticipants002} />
                        </div>
                    </div>
                </section>
                <section className="regionals-home-sponsors theme-1">
                    <div className="regionals-home-sponsors-wrapper">
                        <div className="regionals-home-sponsors-title">Deep in the Heart of Derby wants to give a big thanks to our sponsors...</div>
                        <div className="regionals-home-sponsors-photos">
                            <img src={imageSponsors001} />
                            <img src={imageSponsors002} />
                            <img src={imageSponsors003} />
                        </div>
                    </div>
                </section>
                <section className="regionals-home-divisions theme-1">
                    <div className="regionals-home-divisions-title">2024 COMPETING TEAMS</div>
                    <div className="regionals-home-divisions-wrapper">
                        <div className="regionals-home-divisions-women">
                            <div className="regionals-home-divisions-women-name">WOMEN'S DIVISION</div>
                            <div className="regionals-home-divisions-women-teams">
                                <div>Alberta</div>
                                <div>Arkansas</div>
                                <div>Black Diaspora Roller Derby</div>
                                <div>Fuego Latino Roller Derby</div>
                                <div>Indigenous Rising Roller Derby</div>
                                <div>Jewish Roller Derby</div>
                                <div>Louisiana</div>
                                <div>Massachusetts</div>
                                <div>Michigan</div>
                                <div>Team Philippines</div>
                                <div>Small Wonder Skate Club</div>
                                <div>Tennessee</div>
                            </div>
                        </div>
                        <div className="regionals-home-divisions-open">
                            <div className="regionals-home-divisions-open-name">OPEN DIVISION</div>
                            <div className="regionals-home-divisions-open-teams">
                                <div>Beast Side Roller Derby</div>
                                <div>Chicago Roller Derby</div>
                                <div>Team Florida Roller Derby</div>
                                <div>Trans Roller United</div>
                            </div>
                        </div>
                        <div className="regionals-home-divisions-junior">
                            <div className="regionals-home-divisions-junior-name">JUNIOR DIVISION</div>
                            <div className="regionals-home-divisions-junior-teams">
                                <div>Red Stick Juniors</div>
                                <div>Druid City Daredevils</div>
                                <div>MARS Junior Beasts</div>
                                <div>Conoe Scallywags</div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="regionals-home-volunteer theme-3">
                    <div className="regionals-home-volunteer-wrapper">
                        <div className="regionals-home-volunteer-title">JOIN OUR STAFF</div>
                        <div className="regionals-home-volunteer-details">We're seeking volunteers to join us for the tournament weekend in a number of different roles. Apply now at the links below!</div>
                        <div className="regionals-home-volunteer-sections">
                            <div className="regionals-home-volunteer-section">
                                <div className="regionals-home-volunteer-type">Officials</div>
                                <div>MRDA, JRDA, and Regulation</div>
                                <button>
                                    <a href="https://forms.gle/94GNsiJf5c27B9LS9" target="_blank" rel="noopener noreferrer">Apply Here TODO fix styling</a>
                                </button>
                            </div>
                            <div className="regionals-home-volunteer-section">
                                <div className="regionals-home-volunteer-type">Volunteers</div>
                                <button>
                                    <a href="https://forms.gle/94GNsiJf5c27B9LS9" target="_blank" rel="noopener noreferrer">Apply Here TODO fix styling</a>
                                </button>
                            </div>
                            <div className="regionals-home-volunteer-section">
                                <div className="regionals-home-volunteer-type">Announcers</div>
                                <button>
                                    <a href="https://forms.gle/94GNsiJf5c27B9LS9" target="_blank" rel="noopener noreferrer">Apply Here TODO fix styling</a>
                                </button>
                            </div>
                            <div className="regionals-home-volunteer-section">
                                <div className="regionals-home-volunteer-type">Medics</div>
                                <button>
                                    <a href="https://forms.gle/94GNsiJf5c27B9LS9" target="_blank" rel="noopener noreferrer">Apply Here TODO fix styling</a>
                                </button>
                            </div>
                            <div className="regionals-home-volunteer-type">Photo & Videographers</div>
                            <button>
                                <a href="https://forms.gle/94GNsiJf5c27B9LS9" target="_blank" rel="noopener noreferrer">Apply Here TODO fix styling</a>
                            </button>
                        </div>
                    </div>
                </section>
                <section className="regionals-home-vendorsponsor theme-1">
                    <div className="regionals-home-vendorsponsor-wrapper">
                        <div className="regionals-home-vendorsponsor-title">BECOME A VENDOR OR SPONSOR!</div>
                        <div className="regionals-home-vendorsponsor-details">
                            <p>Are you looking for a new place to sell your wares, get the word out about your business, or show your support for the women and gender expansive roller derby community? <b>Deep In The Heart of Derby</b> is now accepting applications for both vendors and sponsors!</p>
                            <p>If you are interested in being involved with NA South Regionals 2024, e-mail us at <a href="mailto:interleague@texasrollergirls.org">interleague@texasrollergirls.org</a></p>
                            <p>Thank you so much for your support. We'll talk to you soon.</p>
                        </div>
                    </div>
                </section>
                <section className="regionals-home-contact theme-2">
                    <div className="regionals-home-contact-wrapper">
                        <div className="regionals-home-contact-title">GET IN TOUCH</div>
                        <div className="regionals-home-contact-details">
                            Questions? Send us an e-mail at <a href="mailto:interleague@texasrollergirls.org">interleague@texasrollergirls.org</a>.
                            TODO FIX STYLING
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </Layout>
    );
};

export default HomePage;