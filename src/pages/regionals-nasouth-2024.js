import React from 'react';
import Layout from '../components/layout/layout';
import imageParticipants001 from '../images/regionals-nasouth-2024/main-participants-001.jpeg';
import imageParticipants002 from '../images/regionals-nasouth-2024/main-participants-002.jpeg';
import imageSponsors001 from '../images/regionals-nasouth-2024/main-sponsors-001.png';
import imageSponsors002 from '../images/regionals-nasouth-2024/main-sponsors-002.png';
import imageSponsors003 from '../images/regionals-nasouth-2024/main-sponsors-003.png';
import imageParticipants003 from '../images/regionals-nasouth-2024/main-participants-003.jpeg';
import imageParticipants004 from '../images/regionals-nasouth-2024/main-participants-004.jpeg';
import { Link } from 'gatsby';

const RegionalsMain = () => {
    return (
        <Layout>
            <main className="regionals">
                <section className="regionals-top">
                    <div className="regionals-top-image"></div>
                </section>
                <section className="regionals-navigation">
                    <div className="regionals-navigation-wrapper">
                        <Link to="/regionals-nasouth-2024">Home</Link>
                        <Link to="/regionals-nasouth-2024">2024 Tournament Info</Link>
                        <Link to="/regionals-nasouth-2024">Tickets</Link>
                        <Link to="/regionals-nasouth-2024">Staff & Volunteers</Link>
                        <Link to="/regionals-nasouth-2024">Sponsors & Vendors</Link>
                        <Link to="/regionals-nasouth-2024">Hospitality</Link>
                        <Link to="/regionals-nasouth-2024">Roller Derby in Austin, TX</Link>
                    </div>
                </section>
                <section className="regionals-overview regionals-theme-1">
                    <div className="regionals-overview-title">COME ONE, COME Y'ALL</div>
                    <div className="regionals-overview-description">
                        The <b>Y'Allstars Southern Skate Showdown</b> is rolling into Thibodaux, Louisiana, from <b>February 22-25, 2024!</b> Now in its second year, this international roller derby tournament will pit high-level roller derby teams against each other over four action-packed days. We can't wait to see y'all on the track!
                    </div>
                    <button className="regionals-overview-tickets">Purchase Tickets</button>
                    <img src={imageParticipants001} />
                    <img src={imageParticipants002} />
                </section>
                <section className="regionals-sponsors regionals-theme-1">
                    <div className="regionals-sponsors-title">Y'Allstars is made possible with the support of our wonderful sponsors...</div>
                    <img src={imageSponsors001} />
                    <img src={imageSponsors002} />
                    <img src={imageSponsors003} />
                </section>
                <section className="regionals-about regionals-theme-2">
                    <img src={imageParticipants003} />
                    <img src={imageParticipants004} />
                    <div className="regionals-about-title">ABOUT THE TOURNAMENT</div>
                    <div className="regionals-about-details">
                        <p>Y'Allstars is a pro-bowl style tournament, showcasing top-tier roller derby athletes and teams from across the US and beyond. Competing teams are made up of highly-talented skaters from different cities and leagues, ultimately forming "superteams" that represent a dedicated region, cultural group or cause.</p>
                        <p>The tournament will feature a total of 20 teams competing within three divisions: Adult Women's, Adult Open, and Juniors (aka kids' roller derby). Local teams Red Stick Roller Derby Juniors and Team Louisiana will be competing at the event, representing the Pelican State with pride!</p>
                        <p>Y'Allstars marks the only event of its kind here in Louisiana, one that we are very proud to see in its second year! For more details about venue, schedule, teams and more, visit our Tournament Info page.</p>
                    </div>
                    <button className="regionals-about-info"> 2024 Tournament Info</button>
                </section>
                <section className="regionals-divisions regionals-theme-1">
                    <div className="regionals-divisions-title">2024 COMPETING TEAMS</div>
                    <div className="regionals-divisions-women">
                        <div className="regionals-divisions-women-name">WOMEN'S DIVISION</div>
                        <div className="regionals-divisions-women-teams">
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
                    <div className="regionals-divisions-open">
                        <div className="regionals-divisions-open-name">OPEN DIVISION</div>
                        <div className="regionals-divisions-open-teams">
                            <div>Beast Side Roller Derby</div>
                            <div>Chicago Roller Derby</div>
                            <div>Team Florida Roller Derby</div>
                            <div>Trans Roller United</div>
                        </div>
                    </div>
                    <div className="regionals-divisions-junior">
                        <div className="regionals-divisions-junior-name">JUNIOR DIVISION</div>
                        <div className="regionals-divisions-junior-teams">
                            <div>Red Stick Juniors</div>
                            <div>Druid City Daredevils</div>
                            <div>MARS Junior Beasts</div>
                            <div>Conoe Scallywags</div>
                        </div>
                    </div>
                </section>
                <section className="regionals-volunteer regionals-theme-3">
                    <div className="regionals-volunteer-title">JOIN OUR STAFF</div>
                    <div className="regionals-volunteer-details">We're seeking volunteers to join us for the tournament weekend in a number of different roles. Apply now at the links below!</div>
                    <div className="regionals-volunteer-type">Photo & Videographers</div>
                    <button>Apply Here</button>
                    <div className="regionals-volunteer-type">Volunteers</div>
                    <button>Apply Here</button>
                    <div className="regionals-volunteer-type">Medics</div>
                    <button>Apply Here</button>
                </section>
                <section className="regionals-vendorsponsor regionals-theme-1">
                    <div className="regionals-vendorsponsor-title">BECOME A VENDOR OR SPONSOR!</div>
                    <div className="regionals-vendorsponsor-details">
                        <p>So many regional businesses were involved in making Y'Allstars come to life in 2023 as a new community event. We were also thrilled to connect with many roller derby businesses who gave us a boost for the event's first year.</p>
                        <p>We are beginning to seek out <a href="#">sponsors and vendors</a> for 2024. If you are interested in being involved with Y'Allstars 2024, we would love to talk with you about what a potential team or event sponsorship (or other arrangement) could look like!</p>
                        <p>Please reach out via <a href="mailto:interleague@texasrollergirls.org">email</a> and we will be in touch. We greatly appreciate your support!</p>
                    </div>
                </section>
                <section className="regionals-contact regionals-theme-2">
                    <div className="regionals-contact-title">GET IN TOUCH</div>
                    <div className="regionals-contact-details">Questions? Fill out the contact form below and we'll follow up with you directly!</div>
                </section>
            </main>
            <footer>
              <div>Y'Allstars Southern Skte Showdown</div>
              <div>February 22-25, 2024 | Thibodaux, LA</div>
              <div>Questions? Send us an <a href="mailto:interleague@texasrollergirls.org">email</a>.</div>
              <div>@2023 Team Louisiana Roller Derby / Red Stick Roller Derby Juniors</div>
            </footer>
        </Layout>
    );
};

export default RegionalsMain;