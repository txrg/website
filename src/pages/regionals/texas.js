import React from 'react';
import Layout from '../../components/layout/layout';
import Navigation from '../../components/regionals/navigation';
import Footer from '../../components/regionals/footer';

const RollerDerbyInAustinPage = () => {
    return (
        <Layout>
            <main className="regionals regionals-texas">
                <section className="regionals-texas-header">
                    <div className="regionals-texas-header-image"></div>
                    <div className="regionals-texas-header-title">Roller Derby in Texas</div>
                </section>
                <Navigation />
                <section className="regionals-texas-overview theme-1">
                    <p>There are plenty of derby leagues across the state of Texas, including both adult and juniors' (aka kids') leagues. Scroll down for the list of all active leagues!</p>
                    <p>Ready to lace up your skates and learn to play? Looking to stay updated on your local league's schedule? Reach out to the league closest to you!</p>
                </section>
                <section className="regionals-texas-leagues theme-1">
                    <div className="regionals-texas-leagues-adult">
                        <div className="regionals-texas-leagues-adult-title">Adult Roller Derby Leagues</div>
                        <div className="regionals-texas-leagues-adult-details">
                            <iframe title="Map of Texas Adult Roller Derby Leagues" src="https://www.google.com/maps/d/u/0/embed?mid=1aFRA2pCOFypPSMZNavbIR4ZTU4Pe8Ec&ehbc=2E312F&noprof=1"></iframe>
                        </div>
                    </div>
                    <div className="regionals-texas-leagues-junior">
                        <div className="regionals-texas-leagues-junior-title">Junior Roller Derby Leagues</div>
                        <div className="regionals-texas-leagues-junior-details">
                            <iframe title="Map of Texas Junior Roller Derby Leagues" src="https://www.google.com/maps/d/u/0/embed?mid=1tglhtT_soA9A_rvELToXwjlcq3qOCJU&ehbc=2E312F&noprof=1"></iframe>
                        </div>
                    </div>
                </section>
                <section className="regionals-texas-skating theme-3">
                    <div className='regionals-texas-skating-title'>Skating in Austin</div>
                    <div>
                        <div className='regionals-texas-skating-location-subtitle'>Bartholomew Roller Derby Track</div>
                        <div>2104 E 51st St, Austin, TX 78723</div>
                        <p>Located at the eastern end of Bartholomew park, this 15,000 sqft space offers a regulation track and plenty of room outside of track for drills. It is also used by the Austin skating community for non-derby skating. Parking is available at the track and at the Bartholomew Pool.</p>
                    </div>
                    <div>
                        <div className='regionals-texas-skating-location-subtitle'>Playland Skate Center</div>
                        <div>8822 McCann Dr, Austin, TX 78757</div>
                        <p>A true Austin original, Playland Skate Center has been Austin’s indoor skating rink destination since 1973. <a href="https://playlandskatecenter.net/" target="_blank" rel="noopener noreferrer">https://playlandskatecenter.net/</a></p>
                    </div>
                    <div>
                        <div className='regionals-texas-skating-location-subtitle'>The Veloway</div>
                        <div>4900 La Crosse Ave, Austin, TX 78739</div>
                        <p>Paved, 3-mile bicycle- & skateboard-exclusive path within Circle C Ranch Metropolitan Park. <a href="https://www.austintexas.gov/department/veloway" target="_blank" rel="noopener noreferrer">https://www.austintexas.gov/department/veloway</a></p>
                    </div>
                    <div>
                        <div className='regionals-texas-skating-location-subtitle'>Heath Eiland and Morgan Moss BMX Skate Park (known as House Skatepark)</div>
                        <div>1213 Shoal Creek Blvd, Austin, TX 7870, closes at 10pm</div>
                        <p>This 30,000-square-feet facility features a skate bowl, large plaza with streetscape elements, shade structures, unisex restroom and skateable public art piece. <a href="https://www.austintexas.gov/page/heath-eiland-and-morgan-moss-bmx-skate-park" target="_blank" rel="noopener noreferrer">https://www.austintexas.gov/page/heath-eiland-and-morgan-moss-bmx-skate-park</a></p>
                    </div>
                    <div>
                        <div className='regionals-texas-skating-location-subtitle'>Mabel Davis District Park</div>
                        <div>3427 Parker Ln, Austin, TX 78741</div>
                        <p>The 12,000 sq.ft skate park includes a skate bowl and streetscape elements. This park also features a public Olympic sized pool. <a href="https://www.austintexas.gov/department/skate-parks" target="_blank" rel="noopener noreferrer">https://www.austintexas.gov/department/skate-parks</a></p>
                    </div>
                    <div>
                        <div className='regionals-texas-skating-location-subtitle'>Mueller Southeast Greenway Skate Park and Pump Track</div>
                        <div>3730 Manor Rd, Austin, TX 78723</div>
                        <p>This 15,000 sq ft space features multiple skating areas — quarter pipes, a half-bowl, lips and 2 pump tracks. <a href="https://www.spaskateparks.com/projects/city-of-austin-mueller-skatepark/" target="_blank" rel="noopener noreferrer">https://www.spaskateparks.com/projects/city-of-austin-mueller-skatepark/</a></p>
                    </div>
                </section>
                <section className="regionals-texas-shop theme-2">
                    <div className='regionals-texas-shop-title'>Skate Shops</div>
                    <div>
                        <div className='regionals-texas-shop-location-subtitle'>Medusa Skates</div>
                        <div>
                            6005 Burnet Rd<br />
                            Austin, TX 78757<br />
                            (512) 203-7203<br/>
                        </div>
                        <p>Born out of one of Austin’s OG skaters Glitterotica “Glitter’s” love of roller skating and the skate community in 2011. Medusa Skates continues to be Austin’s premier Roller Skate Shop. <a href="https://medusaskates.com/" target="_blank" rel="noopener noreferrer">https://medusaskates.com/</a></p>
                    </div>
                </section>
            </main>
            <Footer />
        </Layout>
    );
}

export default RollerDerbyInAustinPage;