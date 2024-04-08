import React from 'react';
import Layout from '../../components/layout/layout';
import Navigation from '../../components/regionals-nasouth-2024/navigation';
import Footer from '../../components/regionals-nasouth-2024/footer';
import ImageSponsorsRoyal001 from '../../images/regionals-nasouth-2024/sponsorvendor-sponsors-royal-001.png';
import ImageSponsorsCaptain001 from '../../images/regionals-nasouth-2024/sponsorvendor-sponsors-captain-001.png';
import ImageSponsorsKrewe001 from '../../images/regionals-nasouth-2024/sponsorvendor-sponsors-krewe-001.png';
import ImageSponsorsCrowd001 from '../../images/regionals-nasouth-2024/sponsorvendor-sponsors-crowd-001.png';

const SponsorsAndVendorsPage = () => {
    return (
        <Layout>
            <main className="regionals regionals-support">
                <section className='regionals-support-header'>
                    <div className="regionals-support-header-image"></div>
                    <div className="regionals-support-header-title">Sponsors & Vendors</div>
                </section>
                <Navigation />
                <section className='regionals-support-join theme-1'>
                    <div className='regionals-support-join-title'>GET INVOLVED</div>
                    <div className='regionals-support-join-details'>
                        <p>Y'Allstars would truly not be possible without the generous contributions and involvement of our sponsors and vendors. We are currently seeking both sponsors and vendors for the 2024 event. Take a look at our Sponsorship Packet below for more information about how you or your business can support <a target="_blank" rel="noopener noreferrer" href="#">one of the biggest tourism events in Lafourche Parish</a>.</p>
                        <p>Please email <a target="_blank" rel="noopener noreferrer" href="mailto:yallstarstournament@gmail.com">yallstarstournament@gmail.com</a> to become a sponsor or vendor!</p>
                        <div>
                            <div className="regionals-support-join-details-packet">
                                <iframe src="https://drive.google.com/file/d/1Iv58Pdyugoy3L_nYDsXsqlcOlLQJxX_F/preview"></iframe>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='regionals-support-sponsors theme-1'>
                    <div className='regionals-support-sponsors-level'>
                        <div className='regionals-support-sponsors-level-title'>Royal Sponsors</div>
                        <img className='regionals-support-sponsors-level-image' src={ImageSponsorsRoyal001} />
                    </div>
                    <div className='regionals-support-sponsors-level'>
                        <div className='regionals-support-sponsors-level-title'>Captain Sponsors</div>
                        <img className='regionals-support-sponsors-level-image' src={ImageSponsorsCaptain001} />
                    </div>
                    <div className='regionals-support-sponsors-level'>
                        <div className='regionals-support-sponsors-level-title'>Krewe Sponsors</div>
                        <img className='regionals-support-sponsors-level-image' src={ImageSponsorsKrewe001} />
                    </div>
                    <div className='regionals-support-sponsors-level'>
                        <div className='regionals-support-sponsors-level-title'>Crowd Sponsors</div>
                        <img className='regionals-support-sponsors-level-image' src={ImageSponsorsCrowd001} />
                    </div>
                    <div className='regionals-support-sponsors-level'>
                        <div className='regionals-support-sponsors-level-title'>Additional Supporters</div>
                        <div className='regionals-support-sponsors-level-details'>
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
                <section className='regionals-support-vendors theme-2'>
                    <div className='regionals-support-vendors-title'>VENDORS</div>
                    <div className='regionals-support-vendors-details'>
                        <p>Our Y'Allstars market will have a variety of local and derby businesses on-site, with a good mix of art, apparel, personal products, and more. Check out the list and links below! We'll continue to update as our market grows.</p>
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
                        <p>Interested in joining us as a vendor? We'd love to talk with you! Please email <a target="_blank" rel="noopener noreferrer" href="mailto:yallstarstournament@gmail.com">yallstarstournament@gmail.com</a> and we'll be in touch!</p>
                    </div>
                </section>
            </main>
            <Footer />
        </Layout>
    );
}

export default SponsorsAndVendorsPage;
