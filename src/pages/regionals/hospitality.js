import React from 'react';
import Layout from '../../components/layout/layout';
import Navigation from '../../components/regionals/navigation';
import Footer from '../../components/regionals/footer';
import TBD from '../../components/regionals/tbd';
import imageHospitality001 from '../../images/regionals/hospitality-001.png';
import imageHospitality002 from '../../images/regionals/hospitality-002.jpeg';
import imageHospitalityHotel001 from '../../images/regionals/hospitality-hotel-001.png';
import imageHospitalityHotel002 from '../../images/regionals/hospitality-hotel-002.png';
import imageHospitalityHotel003 from '../../images/regionals/hospitality-hotel-003.jpeg';
import imageHospitalityHotel004 from '../../images/regionals/hospitality-hotel-004.png';
import imageHospitalityAttractionsCoupon001 from '../../images/regionals/hospitality-attractions-coupon-001.png';

const HospitalityPage = () => {
    return (
        <Layout>
            <main className="regionals regionals-hospitality">
                <section className='regionals-hospitality-header'>
                    <div className="regionals-hospitality-header-image"></div>
                    <div className="regionals-hospitality-header-title">Hospitality</div>
                </section>
                <Navigation />
                <TBD />
                <section className="regionals-hospitality-about theme-1 regionals-hide">
                    <div className="regionals-hospitality-about-title">TODO: ABOUT THE HOST CITY</div>
                    <div className="regionals-hospitality-about-details">
                        <div className="regionals-hospitality-about-details-column1">
                            <p>Located in Central Texas on the eastern edge of the American Southwest, Austin is the capital of the state of Texas, the Lone Star State. The city dates back to the 1830s, when the first Anglo-American settlers arrived in the area, then part of Mexico. Known for its eclectic live music, the birth place of modern roller derby, and its exciting outdoor and food scenes. It is a great place to visit.</p>
                            <a>
                                <img src={imageHospitality001} alt="Austin, TX"/>
                            </a>
                        </div>
                        <div className="regionals-hospitality-about-details-column2">
                            <img src={imageHospitality002} alt="Austin, TX" />
                        </div>
                    </div>
                </section>
                <section className="regionals-hospitality-guide theme-2 regionals-hide">
                    <div className="regionals-hospitality-guide-wrapper">
                        <div className="regionals-hospitality-guide-title">TODO: HOSPITALITY GUIDE</div>
                        <div className="regionals-hospitality-guide-details">
                            <iframe src="https://drive.google.com/file/d/1vsujetmNGAiLr0Shsx7RZls9qZKwBzVN/preview" title="Hospitality Packet"></iframe>
                        </div>
                    </div>
                </section>
                <section className="regionals-hospitality-hotels theme-1 regionals-hide">
                    <div className="regionals-hospitality-hotels-title">TODO: WHERE TO STAY</div>
                    <div className="regionals-hospitality-hotels-location01">
                        <div className="regionals-hospitality-hotels-location01-subtitle">Days Inn & Suites - NEWLY ADDED</div>
                        <div className="regionals-hospitality-hotels-location01-details">
                            <img className="regionals-hospitality-hotels-location01-image" src={imageHospitalityHotel001} alt="Days Inn & Suites"></img>
                            <div>
                                <p>
                                    158 Glenwild Dr.<br/>
                                    Thibodaux, LA 70301<br/>
                                    (985) 387-8175<br/>
                                    <br/>
                                    Only 5 minutes from the venue! Free breakfast included.<br/>
                                    <br/>
                                    <b>$149/night block rate for double queen & single king studio rooms. $179/night block rate for double queen SUITES.</b><br/>
                                    <br/>
                                    <a href="#" target="_blank" rel="noopener noreferrer"> Use code "24ALLSTARS" to book.</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="regionals-hospitality-hotels-location02">
                        <div className="regionals-hospitality-hotels-location02-subtitle">Carmel Inn & Suites - SOLD OUT</div>
                        <div className="regionals-hospitality-hotels-location02-details">
                            <img className="regionals-hospitality-hotels-location02-image" src={imageHospitalityHotel002} alt="Carmel Inn & Suites"></img>
                            <div>
                                <p>
                                    400 E 1st St<br/>
                                    Thibodaux, LA 70301<br/>
                                    (985) 446-0561<br/>
                                    <br/>
                                    Only 5 minutes from the venue! Free breakfast included.<br/>
                                    <br/>
                                    <b>$99/night block rate.</b><br/>
                                    Call hotel to book directly.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="regionals-hospitality-hotels-location03">
                        <div className="regionals-hospitality-hotels-location03-subtitle">Hampton Inn & Suites - SOLD OUT</div>
                        <div className="regionals-hospitality-hotels-location03-details">
                            <img className="regionals-hospitality-hotels-location03-image" src={imageHospitalityHotel003} alt="Hampton Inn & Suites"></img>
                            <div>
                                <p>
                                    826 N Canal Blvd<br/>
                                    Thibodaux, LA 70301<br/>
                                    <br/>
                                    Only half a mile from the venue! Includes free breakfast, parking, & wifi.<br/>
                                    <br/>
                                    <b>$129/night block rate with code "YAS".</b><br/>
                                    Book <a href="#" target="_blank" rel="noopener noreferrer">online</a>.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="regionals-hospitality-hotels-location04">
                        <div className="regionals-hospitality-hotels-location04-subtitle">Holiday Inn Express - Raceland</div>
                        <div className="regionals-hospitality-hotels-location04-details">
                            <img className="regionals-hospitality-hotels-location04-image" src={imageHospitalityHotel004} alt="Holiday Inn Express - Raceland"></img>
                            <div>
                                <p>
                                    4716 Highway 1<br/>
                                    Raceland, LA 70394<br/>
                                    <br/>
                                    Halfway between Thibodaux and New Orleans, about 30 min from the venue. Includes free breakfast, parking, & wifi.<br/>
                                    <br/>
                                    <b>$105 for single king / $135 for double.</b><br/>
                                    Call to book.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="regionals-hospitality-restaurants theme-3 regionals-hide">
                    <div className="regionals-hospitality-restaurants-title">TODO: LOCAL RESTAURANTS</div>
                    <div className="regionals-hospitality-restaurants-locations">
                        <div className="regionals-hospitality-restaurants-location01">
                            <div className="regionals-hospitality-restaurants-location01-subtitle">In Thibodaux</div>
                            <ul className="regionals-hospitality-restaurants-location01-details">
                                <li><a href="#" target="_blank" rel="noopener noreferrer">Athenos Greek & Lebanese Cafe</a></li>
                                <li><a href="#" target="_blank" rel="noopener noreferrer">Big Mike's BBQ Smokehouse</a></li>
                                <li><a href="#" target="_blank" rel="noopener noreferrer">Blake's Deli</a></li>
                                <li><a href="#" target="_blank" rel="noopener noreferrer">Bourgeois Meat Market</a></li>
                                <li><a href="#" target="_blank" rel="noopener noreferrer">Bypass Fiesta Grill</a></li>
                                <li><a href="#" target="_blank" rel="noopener noreferrer">Cinclare Southern Bistro</a></li>
                                <li><a href="#" target="_blank" rel="noopener noreferrer">Cuvee</a></li>
                                <li><a href="#" target="_blank" rel="noopener noreferrer">Fremin's Restaurant</a></li>
                                <li><a href="#" target="_blank" rel="noopener noreferrer">Geaux Fish Sushi & Hibachi</a></li>
                                <li><a href="#" target="_blank" rel="noopener noreferrer">Gina's at the Legion</a></li>
                                <li><a href="#" target="_blank" rel="noopener noreferrer">Grady V's</a></li>
                                <li><a href="#" target="_blank" rel="noopener noreferrer">HEALTHe Cafe</a></li>
                                <li><a href="#" target="_blank" rel="noopener noreferrer">Mudbug Brewery</a></li>
                                <li><a href="#" target="_blank" rel="noopener noreferrer">Rotolo's Pizzeria</a></li>
                                <li><a href="#" target="_blank" rel="noopener noreferrer">Spahr’s Seafood</a></li>
                                <li><a href="#" target="_blank" rel="noopener noreferrer">The Willow Café</a></li>
                            </ul>
                        </div>
                        <div className="regionals-hospitality-restaurants-location02">
                            <div className="regionals-hospitality-restaurants-location02-subtitle">In Raceland</div>
                            <ul className="regionals-hospitality-restaurants-location02-details">
                                <li><a href="#" target="_blank" rel="noopener noreferrer">Bayou Blizzard Snoball Stand</a></li>
                                <li><a href="#" target="_blank" rel="noopener noreferrer">Beck's</a></li>
                                <li><a href="#" target="_blank" rel="noopener noreferrer">Cajun Fresh Market (produce & meat market)</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className="regionals-hospitality-attractions theme-1 regionals-hide">
                    <div className="regionals-hospitality-attractions-title">TODO: AREA ATTRACTIONS</div>
                    <div className="regionals-hospitality-atttractions-details">
                        <ul>
                            <li>Explore the <a href="#" target="_blank" rel="noopener noreferrer">Jean Lafitte National Historical Park-Wetlands Acadian Cultural Center</a>.</li>
                            <li>Have kids with you? Play and learn together at the <a href="#" target="_blank" rel="noopener noreferrer">Bayou Country Children's Museum</a>! $1 off coupon below.</li>
                            <li>Visit <a href="#" target="_blank" rel="noopener noreferrer">Purple Penguin Art Company</a> to create your very own masterpiece.</li>
                            <li>Take a paddle on the bayou with <a href="#" target="_blank" rel="noopener noreferrer">Geaux Paddle</a>.</li>
                            <li>Snap a selfie or team pic at the <a href="#" target="_blank" rel="noopener noreferrer">downtown Thibodaux rainbow mural</a>.</li>
                            <li>Check out the <a href="#" target="_blank" rel="noopener noreferrer">Louisiana's Cajun Bayou Visitor’s Guide</a> for more exciting things to do around Lafourche Parish, including restaurants, attractions, tours and more!</li>
                        </ul>
                        <img src={imageHospitalityAttractionsCoupon001} alt="Coupon"></img>
                    </div>
                </section>
            </main>
            <Footer />
        </Layout>
    );
}

export default HospitalityPage;