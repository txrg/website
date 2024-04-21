import React from 'react';
import Layout from '../../components/layout/layout';
import Navigation from '../../components/regionals-nasouth-2024/navigation';
import Footer from '../../components/regionals-nasouth-2024/footer';
import ImageSponsorsRoyal001 from '../../images/regionals-nasouth-2024/sponsors-royal-001.png';
import ImageSponsorsCaptain001 from '../../images/regionals-nasouth-2024/sponsors-captain-001.png';
import ImageSponsorsKrewe001 from '../../images/regionals-nasouth-2024/sponsors-krewe-001.png';
import ImageSponsorsCrowd001 from '../../images/regionals-nasouth-2024/sponsors-crowd-001.png';

const SponsorsAndVendorsPage = () => {
    return (
        <Layout>
            <main className="regionals regionals-sponsors">
                <section className='regionals-sponsors-header'>
                    <div className="regionals-sponsors-header-image"></div>
                </section>
                <Navigation />
                <section className='regionals-sponsors-join theme-1'>
                    <div className='regionals-sponsors-join-title'>GET INVOLVED</div>
                    <div className='regionals-sponsors-join-details'>
                        <p><b>Deep in the Heart of Derby</b> would truly not be possible without the generous contributions and involvement of our sponsors and vendors. We are currently seeking both sponsors and vendors for the 2024 event. Take a look at our Sponsorship Packet below for more information about how you or your business can support local roller derby.</p>
                        <p>Please email <a target="_blank" rel="noopener noreferrer" href="mailto:interleague@texasrollergirls.org">interleague@texasrollergirls.org</a> to become a sponsor or vendor!</p>
                        <div>
                            TODO: Update packet
                            <div className="regionals-sponsors-join-details-packet">
                                <iframe src="https://drive.google.com/file/d/1Iv58Pdyugoy3L_nYDsXsqlcOlLQJxX_F/preview" title="Sponsorship Packet"></iframe>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='regionals-sponsors-levels theme-1'>
                    <div className='regionals-sponsors-levels-item'>
                        <div className='regionals-sponsors-level-title'>TODO: Royal Sponsors</div>
                        <img className='regionals-sponsors-level-image' src={ImageSponsorsRoyal001} alt="Sponsor" />
                    </div>
                    <div className='regionals-sponsors-levels-item'>
                        <div className='regionals-sponsors-level-title'>TODO: Captain Sponsors</div>
                        <img className='regionals-sponsors-level-image' src={ImageSponsorsCaptain001} alt="Sponsor" />
                    </div>
                    <div className='regionals-sponsors-levels-item'>
                        <div className='regionals-sponsors-level-title'>TODO: Krewe Sponsors</div>
                        <img className='regionals-sponsors-level-image' src={ImageSponsorsKrewe001} alt="Sponsor"/>
                    </div>
                    <div className='regionals-sponsors-levels-item'>
                        <div className='regionals-sponsors-level-title'>TODO: Crowd Sponsors</div>
                        <img className='regionals-sponsors-level-image' src={ImageSponsorsCrowd001} alt="Sponsor"/>
                    </div>
                    <div className='regionals-sponsors-levels-item'>
                        <div className='regionals-sponsors-level-title'>TODO: Additional Supporters</div>
                        <div className='regionals-sponsors-level-details'>
                            <ul>
                                <li>Chub Club</li>
                                <li>Kajun Kidd Burgers & Wings</li>
                                <li>Louisiana Fish Fry</li>
                                <li>Roller Derby Athletics</li>
                                <li>Roller Derby Coaching</li>
                                <li>Sidewalk Side Spirits</li>
                                <li>Tabasco</li>
                                <li>Urban South Brewery</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className='regionals-sponsors-vendors theme-2'>
                    <div className='regionals-sponsors-vendors-title'>TODO: VENDORS</div>
                    <div className='regionals-sponsors-vendors-details'>
                        <p>TODO: Our Y'Allstars market will have a variety of local and derby businesses on-site, with a good mix of art, apparel, personal products, and more. Check out the list and links below! We'll continue to update as our market grows.</p>
                        <ul>
                            <li>A. Prince Massage and Healing Services</li>
                            <li><a target="_blank" rel="noopener noreferrer" href="#">Baddies with Business</a> x <a target="_blank" rel="noopener noreferrer" href="#">Paradise Candles</a></li>
                            <li><a target="_blank" rel="noopener noreferrer" href="#">Body Breakdown & CryBaby Wellness</a> - onsite wellness and preventative Care</li>
                            <li><a target="_blank" rel="noopener noreferrer" href="#">Cherry Swan Designs</a> - one-of-a-kind clothing designs</li>
                            <li><a target="_blank" rel="noopener noreferrer" href="#">Collectivum Sports</a> - dealer of MSportsWear roller derby uniforms</li>
                            <li><a target="_blank" rel="noopener noreferrer" href="#">Dye One On</a> - hand dyed apparel & accessories</li>
                            <li><a target="_blank" rel="noopener noreferrer" href="#">HitSquadTV</a> - personalized highlight reels</li>
                            <li>Kill-a-byte Carpentry</li>
                            <li><a target="_blank" rel="noopener noreferrer" href="#">Krash Course</a> - athletic training and programming</li>
                            <li><a target="_blank" rel="noopener noreferrer" href="#">Never Basic</a> - handmade soaps and personal care products</li>
                            <li><a target="_blank" rel="noopener noreferrer" href="#">Paper Snapdragon</a> - paper flower art & arrangements</li>
                            <li><a target="_blank" rel="noopener noreferrer" href="#">PhysioNOLA</a> - personalized physical therapy & dry needling</li>
                            <li><a target="_blank" rel="noopener noreferrer" href="#">Queering Uptown</a> - apparel & artwork</li>
                            <li><a target="_blank" rel="noopener noreferrer" href="#">Queer Skate Alliance</a></li>
                            <li><a target="_blank" rel="noopener noreferrer" href="#">Rocktopus Arts & Jewelry</a></li>
                            <li><a target="_blank" rel="noopener noreferrer" href="#">Roller Revival</a> - roller derby apparel & goods</li>
                            <li><a target="_blank" rel="noopener noreferrer" href="#">Sacred Roller Skate Supply</a> - skate & gear shop</li>
                            <li><a target="_blank" rel="noopener noreferrer" href="#">Strong Athletic</a> - roller derby & empowerment apparel</li>
                            <li><a target="_blank" rel="noopener noreferrer" href="#">Thibodaux Skate Space / Skatepark Advocacy</a></li>
                        </ul>
                        <p>Interested in joining us as a vendor? We'd love to talk with you! Please email <a target="_blank" rel="noopener noreferrer" href="mailto:interleague@texasrollergirls.org">interleague@texasrollergirls.org</a> and we'll be in touch!</p>
                    </div>
                </section>
            </main>
            <Footer />
        </Layout>
    );
}

export default SponsorsAndVendorsPage;
