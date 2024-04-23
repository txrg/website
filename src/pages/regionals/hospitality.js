import React from 'react';
import Layout from '../../components/layout/layout';
import Navigation from '../../components/regionals/navigation';
import Footer from '../../components/regionals/footer';
import imageHotelSleepInn from '../../images/regionals/hospitality-hotel-sleepinn.jpeg';
import imageHotelMicrotelInn from '../../images/regionals/hospitality-hotel-microtelinn.jpeg';
import imageHotelResidenceInn from '../../images/regionals/hospitality-hotel-residenceinn.jpeg';
import imageHotelTowneplaceSuites from '../../images/regionals/hospitality-hotel-towneplacesuites.jpeg';
import imageHotelHiltonGardenInn from '../../images/regionals/hospitality-hotel-hiltongardeninn.jpeg';

const HospitalityPage = () => {
    return (
        <Layout>
            <main className="regionals regionals-hospitality">
                <section className='regionals-hospitality-header'>
                    <div className="regionals-hospitality-header-image"></div>
                    <div className="regionals-hospitality-header-title">Hospitality</div>
                </section>
                <Navigation />
                <section className="regionals-hospitality-about theme-1">
                    <div className="regionals-hospitality-about-title">ABOUT THE HOST CITY</div>
                    <div className="regionals-hospitality-about-details">
                        <p>Located in Central Texas on the eastern edge of the American Southwest, Austin is the capital of the state of Texas, the Lone Star State. The city dates back to the 1830s, when the first Anglo-American settlers arrived in the area, then part of Mexico. Known for its eclectic live music, the birth place of modern roller derby, and its exciting outdoor and food scenes. It is a great place to visit.</p>
                    </div>
                </section>
                <section className="regionals-hospitality-hotels theme-2">
                    <div className="regionals-hospitality-hotels-title">WHERE TO STAY</div>
                    <div className="regionals-hospitality-hotels-location">
                        <div className="regionals-hospitality-hotels-location-details">
                            <img className="regionals-hospitality-hotels-location-image" src={imageHotelSleepInn} alt="Sleep Inn & Suites Austin - Northeast"></img>
                            <div className="regionals-hospitality-hotels-location-description">
                                <div className="regionals-hospitality-hotels-location-subtitle">Sleep Inn & Suites Austin - Northeast</div>
                                <p>
                                    8410 Highway 290 East<br/>
                                    Austin,TX 78724<br/>
                                    (737) 295-1738
                                </p>
                                <p>11 minutes from the venue!<br/>Includes breakfast, WiFi, and parking.</p>
                                <p><b>$105/night<br/>1-4 people<br/>Single king with pull-out sofa<br/>OR double (2 queens)</b></p>
                                <p>Book <a href="https://www.choicehotels.com/texas/austin/sleep-inn-hotels/txd33/rates?hotel=TXD33&pu=no&ratePlanCode=LROLLE&checkInDate=2024-06-27&checkOutDate=2024-06-30" target="_blank" rel="noopener noreferrer">ONLINE</a> before June 13th, 2024.</p>
                            </div>
                        </div>
                    </div>
                    <div className="regionals-hospitality-hotels-location">
                        <div className="regionals-hospitality-hotels-location-details">
                            <img className="regionals-hospitality-hotels-location-image" src={imageHotelMicrotelInn} alt="Microtel Inn & Suites by Wyndham Austin Airport"></img>
                            <div className="regionals-hospitality-hotels-location-description">
                                <div className="regionals-hospitality-hotels-location-subtitle">Microtel Inn & Suites by Wyndham Austin Airport</div>
                                <p>
                                    7705 Metro Center Drive<br/>
                                    Austin, TX 78744<br/>
                                    (512) 634-8372
                                </p>
                                <p>
                                    15 minutes from the venue!<br/>
                                    Includes breakfast. Restaurants within walking distance. Corner Kitchen Vending machine on site.
                                </p>
                                <p><b>$104-$130/night<br/>1-4 people<br/>2 double beds and Suites available</b></p>
                                <p>Book <a href="https://www.wyndhamhotels.com/hotels/32007?checkInDate=06/27/2024&checkOutDate=06/29/2024&groupCode=JMNKFMH2SL5" target="_blank" rel="noopener noreferrer">ONLINE</a>.</p>
                            </div>
                        </div>
                    </div>
                    <div className="regionals-hospitality-hotels-location">
                        <div className="regionals-hospitality-hotels-location-details">
                            <img className="regionals-hospitality-hotels-location-image" src={imageHotelResidenceInn} alt="Residence Inn Austin Northwest/The Domain Area"></img>
                            <div className="regionals-hospitality-hotels-location-description">
                                <div className="regionals-hospitality-hotels-location-subtitle">Residence Inn Austin Northwest/The Domain Area</div>
                                <p>
                                    11301 Burnet Road<br/>
                                    Austin, Texas 78758<br/>
                                    (512) 719-7055
                                </p>
                                <p>13 miles from the venue!<br/>All rooms are equipped with full kitchens and includes hot breakfast, WiFi, and parking.</p>
                                <p><b>$169/night<br/>1-4 people<br/>King Studio Suites</b></p>
                                <p>
                                    Book <a href="https://www.marriott.com/events/start.mi?id=1712591837774&key=GRP" target="_blank" rel="noopener noreferrer">ONLINE</a> by May 28th, 2024.<br/>
                                    Group rate is valid two days pre and post arrival.<br/>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="regionals-hospitality-hotels-location">
                        <div className="regionals-hospitality-hotels-location-details">
                            <img className="regionals-hospitality-hotels-location-image" src={imageHotelTowneplaceSuites} alt="TownePlace Suites Austin Northwest/The Domain Area"></img>
                            <div className="regionals-hospitality-hotels-location-description">
                                <div className="regionals-hospitality-hotels-location-subtitle">TownePlace Suites Austin Northwest/The Domain Area</div>
                                <p>
                                    2237 West Braker Lane<br/>
                                    Austin, Texas 78758<br/>
                                    (512) 835-6000
                                </p>
                                <p>14 miles from the venue.<br/>All rooms are equipped with full kitchens and includes hot breakfast, WiFi, and parking.</p>
                                <p><b>$159/night<br/>1-4 people<br/>King Studio Suites</b></p>
                                <p>
                                    Book <a href="https://www.marriott.com/events/start.mi?id=1712592107827&key=GRP" target="_blank" rel="noopener noreferrer">ONLINE</a> by May 28th, 2024.<br/>
                                    Group rate is valid two days pre and post arrival.<br/>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="regionals-hospitality-hotels-location">
                        <div className="regionals-hospitality-hotels-location-details">
                            <img className="regionals-hospitality-hotels-location-image" src={imageHotelHiltonGardenInn} alt="Hilton Garden Inn Austin North/The Domain Area"></img>
                            <div className="regionals-hospitality-hotels-location-description">
                                <div className="regionals-hospitality-hotels-location-subtitle">Hilton Garden Inn Austin North/The Domain Area</div>
                                <p>
                                    2600 Brockton Dr<br/>
                                    Austin, Texas 78758<br/>
                                    (737) 484-0975
                                </p>
                                <p>11 miles from the venue.<br/>All rooms are equipped with mini fridge and microwave, and includes cooked to order breakfast, full restaurant menu with dinner, WiFi, fitness center, parking, and electric car charging stations.</p>
                                <p><b>$159/night<br/>1-4 people<br/>Singles and Double Queens</b></p>
                                <p>
                                    Book <a href="https://www.hilton.com/en/attend-my-event/2024wftdasouthernregionals/" target="_blank" rel="noopener noreferrer">ONLINE</a> by June 6th, 2024.<br/>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="regionals-hospitality-sightseeing theme-1">
                    <div className="regionals-hospitality-sightseeing-title">Sightseeing</div>
                    <div>
                        <div className="regionals-hospitality-sightseeing-subtitle">Congress Bridge Bats</div>
                        <p>
                            Each evening around sunset the Congress Avenue bats emerge like a black cloud from the crevices
                            of the bridge, covering the area in search of food. You can view them for free by standing on the
                            bridge and also in a bat viewing area located on the southeast corner of Congress Bridge and Lady
                            Bird Lake. You can also take a river boat cruise. More information is available here: <a href="https://www.austincityguide.com/listings/congress-bridge-bats" target="_blank" rel="noopener noreferrer">https://www.austincityguide.com/listings/congress-bridge-bats</a>
                        </p>
                    </div>
                    <div>
                        <div className="regionals-hospitality-sightseeing-subtitle">Texas State Capitol</div>
                        <p>
                            Taller than the US Capitol, the Texas State Capitol and Capitol Grounds are one of the most
                            popular tourist attractions in Austin and a favorite spot for the locals as well.
                            The Texas State Capitol looks South down Congress Avenue. 11th Street runs East-West past the
                            front gates. Colorado and San Jacinto Streets border it to the West and East. Grounds are free and
                            tour information is available here: <a href="https://tspb.texas.gov/prop/tc/tc/capitol.html" target="_blank" rel="noopener noreferrer">https://tspb.texas.gov/prop/tc/tc/capitol.html</a>
                        </p>
                    </div>
                    <div>
                        <div className="regionals-hospitality-sightseeing-subtitle">Bullock Texas State History Museum</div>
                        <p>
                            The Bullock Texas State History Museum includes three floors of exhibitions and displays original
                            historical artifacts and produces dynamic exhibitions that illuminate and celebrate Texas history and
                            culture. Named for the state's 38th Lieutenant Governor Bob Bullock, the Museum's iconic building
                            is located in downtown Austin, three blocks north of the Capitol. <a href="https://tspb.texas.gov/prop/tshm/tshm/tshm.html" target="_blank" rel="noopener noreferrer">https://tspb.texas.gov/prop/tshm/tshm/tshm.html</a>
                        </p>
                    </div>
                    <div>
                        <div className="regionals-hospitality-sightseeing-subtitle">Blanton Museum of Art</div>
                        <div>200 E Martin Luther King Jr Blvd, Austin, TX 78712</div>
                        <p>One of the foremost university art museums in the country and holds the largest public collection in Central Texas. <a href="https://blantonmuseum.org/" target="_blank" rel="noopener noreferrer">https://blantonmuseum.org/</a></p>
                    </div>
                    <div>
                        <div className="regionals-hospitality-sightseeing-subtitle">The Contemporary - Jones Center</div>
                        <div>700 Congress Ave, Austin, TX</div>
                        <p>Promotes the growth and appreciation of contemporary art and artists in Texas. <a href="https://thecontemporaryaustin.org/" target="_blank" rel="noopener noreferrer">https://thecontemporaryaustin.org/</a></p>
                    </div>
                    <div>
                        <div className="regionals-hospitality-sightseeing-subtitle">The Contemporary Austin - Laguna Gloria</div>
                        <div>3809 W 35th St, Austin, TX 78703</div>
                        <p>Entirely outdoors, this stunning lakeside sculpture park is housed along a walking path that leads visitors through an alluring circuit of contemporary art.<a href="https://thecontemporaryaustin.org/" target="_blank" rel="noopener noreferrer">https://thecontemporaryaustin.org/</a></p>
                    </div>
                    <div>
                        <div className="regionals-hospitality-sightseeing-subtitle">George Washington Carver Museum & Genealogy Center</div>
                        <div>165 Angelina Street, Austin, TX 78702</div>
                        <p>
                            Located in <a href="https://www.austintexas.org/things-to-do/entertainment-districts/east-austin/" target="_blank" rel="noopener noreferrer">East Austin</a>, one of the city's historically Black neighborhoods. The museum’s mission is
                            to celebrate and honor the global contributions of Black people to Texas and the world. <a href="https://www.austintexas.gov/department/george-washington-carver-museum-cultural-and-genealogy-center" target="_blank" rel="noopener noreferrer">https://www.austintexas.gov/department/george-washington-carver-museum-cultural-and-genealogy-center</a>
                        </p>
                    </div>
                    <div>
                        <div className="regionals-hospitality-sightseeing-subtitle">Lady Bird Johnson Wildflower Center</div>
                        <div>4801 La Crosse Ave, Austin, TX 78739</div>
                        <p>
                            Located in South West Austin across from the Velloway, the Lady Bird Johnson Wildflower Center is the
                            state botanical garden and arboretum of Texas. The center features more than 900 species of native
                            Texas plants in both garden and natural settings and is home to a breadth of educational programs and
                            events. <a href="https://www.austintexas.org/austin-insider-blog/post/lady-bird-johnson-wildflower-center/" target="_blank" rel="noopener noreferrer">https://www.austintexas.org/austin-insider-blog/post/lady-bird-johnson-wildflower-center/</a>
                        </p>
                    </div>
                    <div>
                        <div className="regionals-hospitality-sightseeing-subtitle">Mexic-Arte Museum</div>
                        <div>419 Congress Avenue, Austin, TX 78701</div>
                        <p>
                            Celebrating traditional and contemporary Mexican, Latin and Latin-American art. <a href="https://www.austintexas.org/austin-insider-blog/post/visiting-mexic-arte-museum/" target="_blank" rel="noopener noreferrer">https://www.austintexas.org/austin-insider-blog/post/visiting-mexic-arte-museum/</a>
                        </p>
                    </div>
                    <div>
                        <div className="regionals-hospitality-sightseeing-subtitle">Pioneer Farms</div>
                        <div>10621 Pioneer Farms Dr., Austin, TX 78754</div>
                        <p>
                            This living history museum is located in North Austin, and offers seven themed historic areas with
                            educational experiences for any age. Explore Texas history in real time as you venture across their
                            site of over 90 beautiful, wooded acres. <a href="https://www.austintexas.org/austin-insider-blog/post/pioneer-farms/" target="_blank" rel="noopener noreferrer">https://www.austintexas.org/austin-insider-blog/post/pioneer-farms/</a>
                        </p>
                    </div>
                    <div>
                        <div className="regionals-hospitality-sightseeing-subtitle">Umlauf Sculpture Garden + Museum</div>
                        <div>605 Azie Morton Rd., Austin, TX 78704</div>
                        <p>
                            The UMLAUF offers all visitors the unique experience of interacting with world-class art in a serene,
                            natural setting, adjacent to popular destinations like Barton Springs Pool and Zilker Park. <a href="https://www.austintexas.org/austin-insider-blog/post/umlauf-gardens/" target="_blank" rel="noopener noreferrer">https://www.austintexas.org/austin-insider-blog/post/umlauf-gardens/</a>
                        </p>
                    </div>
                    <div>
                        <div className="regionals-hospitality-sightseeing-subtitle">LBJ Library and Museum</div>
                        <div>2313 Red River St, Austin, TX 78705</div>
                        <p>
                            The LBJ Presidential Library, is the presidential library and museum of Lyndon Baines Johnson, the
                            36th president of the United States. <a href="https://www.lbjlibrary.org/" target="_blank" rel="noopener noreferrer">https://www.lbjlibrary.org/</a>
                        </p>
                    </div>
                    <div>
                        <div className="regionals-hospitality-sightseeing-subtitle">Austin Mural Tours</div>
                        <div>2313 Red River St, Austin, TX 78705</div>
                        <p>Walk or grab an e-bike or scooter and enjoy a tour of some of Austin’s iconic murals.</p>
                        <p>
                            <b>Downtown</b> - curated by the Downtown Austin Alliance Foundation as part of Writing on the
                            Walls to help you experience a collection of inspirational and iconic murals in and around
                            downtown Austin. <a href="https://downtownaustin.com/explore/downtown-mural-map/" target="_blank" rel="noopener noreferrer">https://downtownaustin.com/explore/downtown-mural-map/</a>
                        </p>
                        <p>
                            <b>East Austin</b> - This Austin Biking Adventure was originally developed for the Smart Trips
                            Austin SmartTripsAustin.org program, which served residents of the 78702 and 78722
                            neighborhoods in 2018. <a href="https://www.austintexas.gov/sites/default/files/files/Transportation/ST_DIY_Bike_Maps_2-11-2019_Mural_Tour.pdf" target="_blank" rel="noopener noreferrer">https://www.austintexas.gov/sites/default/files/files/Transportation/ST_DIY_Bike_Maps_2-11-2019_Mural_Tour.pdf</a>
                        </p>
                        <p>
                            <b>The Dougherty Arts Center's Art Is Everywhere Map</b> is your complete
                            interactive guide to art you can enjoy all over the city of Austin. From hidden
                            gems to public art installations, from sculptures to street art, this map has
                            everything you need to enjoy the free art that exists all over Austin. <a href="https://sites.google.com/view/artiseverywheremap/home" target="_blank" rel="noopener noreferrer">https://sites.google.com/view/artiseverywheremap/home</a>
                        </p>
                    </div>
                </section>
                <section className="regionals-hospitality-swimming theme-3">
                    <div className="regionals-hospitality-swimming-title">Swimming</div>
                    <p>
                        The Austin Parks and Recreation Aquatic Division operates 44 public aquatic facilities, which
                        includes 7 Regional pools, 3 Community pools, 22 Neighborhood pools, 1 Wading pool, Barton
                        Springs Pool and 10 splash pads. Most pools are free to enter, however, some pools require an
                        entry fee.
                    </p>
                    <div>
                        <div className="regionals-hospitality-swimming-subtitle">Natural Springs Swimming Pool</div>
                        <div className="regionals-hospitality-swimming-subtitle">Barton Springs Pool in Zilker Park</div>
                        <div>2201 Barton Springs Rd., Austin, TX 78746</div>
                        <p>
                            Spring fed and over 900 feet long, the pool was formed when Barton Creek was dammed up, so it
                            has a natural rock and gravel bottom. Open at 5am and 68 degrees all year around. <a href="http://www.austintexas.gov/content/barton-springs-pool" target="_blank" rel="noopener noreferrer">http://www.austintexas.gov/content/barton-springs-pool</a>
                        </p>
                    </div>
                    <div>
                        <div className="regionals-hospitality-swimming-subtitle">Austin City Pools</div>
                        <p>Scroll to the middle of the page for a map of all the city pools <a href="https://www.austintexas.gov/pools-splashpads" target="_blank" rel="noopener noreferrer">https://www.austintexas.gov/pools-splashpads</a></p>
                    </div>
                    <div>
                        <div className="regionals-hospitality-swimming-subtitle">Hamilton Pool Preserve</div>
                        <div className="regionals-hospitality-swimming-subtitle">Advance Reservations Required!</div>
                        <div>24300 Hamilton Pool Rd, Dripping Springs, TX 78620</div>
                        <p>
                            Located about an hour outside of Austin, Hamilton Pool Preserve was designated a nature preserve
                            by the Travis County Commissioner's Court in 1990. Located 3/4 mile upstream from its confluence
                            with the Pedernales River, Hamilton Creek spills out over limestone outcroppings to create a 50-foot
                            waterfall as it plunges into the head of a steep box canyon. <a href="https://parks.traviscountytx.gov/parks/hamilton-pool-preserve" target="_blank" rel="noopener noreferrer">https://parks.traviscountytx.gov/parks/hamilton-pool-preserve</a>
                        </p>
                    </div>
                    <div>
                        <div className="regionals-hospitality-swimming-subtitle">Blue Hole</div>
                        <div className="regionals-hospitality-swimming-subtitle">Advance Reservations Required!</div>
                        <div>333 Blue Hole Ln, Wimberley, TX 78676</div>
                        <p>
                            Located about an hour outside of Austin, Blue Hole Regional Park is nestled in the heart of the
                            Texas Hill Country, near the charming town of Wimberley. The park is characterized by the iconic
                            Blue Hole, a stunning natural swimming area fed by the crystal-clear waters of Cypress Creek. The
                            water’s distinct blue hue, combined with the lush surroundings, creates a serene and inviting
                            atmosphere. <a href="https://wimberleyparksandrec.com/blue-hole-regional-park/" target="_blank" rel="noopener noreferrer">https://wimberleyparksandrec.com/blue-hole-regional-park/</a>
                        </p>
                    </div>
                    <div>
                        <div className="regionals-hospitality-swimming-subtitle">Krause Springs</div>
                        <div className="regionals-hospitality-swimming-subtitle">Day Passes as well as RV and Tent Camping</div>
                        <div>424 CR 404, Spicewood, TX 78669</div>
                        <p>
                            About 30 miles West of Austin, Krause Springs is located in Spicewood Springs in the Texas Hill
                            Country. There are 32 springs on the property that feed into a man made pool. Check out their
                            website for pictures and details. <a href="https://krausesprings.net/" target="_blank" rel="noopener noreferrer">https://krausesprings.net/</a>
                        </p>
                    </div>
                </section>
                <section className="regionals-hospitality-grocery theme-1">
                    <div className='regionals-hospitality-grocery-title'>Grocery Stores</div>
                    <div>
                        <div className='regionals-hospitality-grocery-subtitle'>H-E-B</div>
                        <p>
                            Our main grocery store and there are locations throughout the city. The E. 51st street
                            location caters to a wide range of needs including gluten free folks. They also have several
                            restaurants and a bar on-site and a large grab and go section. All H-E-Bs are not created equal so
                            be sure to check the Google reviews before visiting.
                        </p>
                    </div>
                    <div>
                        <div className='regionals-hospitality-grocery-subtitle'>Whole Foods</div>
                        <p>The first flagship store is downtown. There are also addtional locations throughout the city.</p>
                    </div>
                    <div>
                        <div className='regionals-hospitality-grocery-subtitle'>Sprouts and Fresh Plus</div>
                        <p>Small health food focused options with locations across the city.</p>
                    </div>
                </section>
                <section className="regionals-hospitality-guide theme-2 regionals-hide">
                    <div className="regionals-hospitality-guide-wrapper">
                        <div className="regionals-hospitality-guide-title">HOSPITALITY GUIDE</div>
                        <div className="regionals-hospitality-guide-details">
                            <iframe src="https://drive.google.com/file/d/1Jn8cAtgXYTnPLNL9rPmOosNygylqGdGw/preview" title="Hospitality Packet"></iframe>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </Layout>
    );
}

export default HospitalityPage;