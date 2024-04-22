import React from 'react';
import { Link } from 'gatsby';

const EventDetails = () => {
    return (
        <>
            <div className='regionals-eventdetails-title'>MORE EVENT DETAILS</div>
            <div className='regionals-eventdetails-details'>
                <div className='regionals-eventdetails-details-column1'>
                    <div className='regionals-eventdetails-details-topic'>
                        <div className='regionals-eventdetails-details-topic-subtitle'>Entertainment</div>
                        <p>In addition to the bouts, we'll have plenty of fun activities for the whole family throughout the weekend, including drawings for prizes throughout the weekend!</p>
                    </div>
                    <div className='regionals-eventdetails-details-topic'>
                        <div className='regionals-eventdetails-details-topic-subtitle'>Vendors</div>
                        <p>We will have a small <Link to="/regionals/sponsors">vendor market</Link> set up during the full tournament weekend. Check out local makers and organizations, as well as derby gear suppliers.</p>
                    </div>
                    <div className='regionals-eventdetails-details-topic'>
                        <div className='regionals-eventdetails-details-topic-subtitle'>Seating</div>
                        <p>Luedecke Arena has tiered stadium seating for up to 6,500 spectators. Seating includes first come, first serve general admission seating and VIP seating, including VIP boxes. Contact <a href="mailto:sponsorship@texasrollergirls.org">sponsorship@texasrollergirls.org</a> to reserve a VIP box.</p>
                        </div>
                </div>
                <div className='regionals-eventdetails-details-column2'>
                    <div className='regionals-eventdetails-details-topic'>
                        <div className='regionals-eventdetails-details-topic-subtitle'>Entry and Re-Entry</div>
                        <p>Your tickets will be scanned and/or taken at the entrance to the arena. For same day re-entry, you will need a wristband or hand stamp. Do not leave the arena without a wristband or stamp if you wish to re-enter.</p>
                    </div>
                    <div className='regionals-eventdetails-details-topic'>
                        <div className='regionals-eventdetails-details-topic-subtitle'>Food</div>
                        <p>A variety of concessions will be sold on-site, along with both alcoholic and non-alcoholic drinks.</p>
                    </div>
                    <div className='regionals-eventdetails-details-topic'>
                        <div className='regionals-eventdetails-details-topic-subtitle'>Parking</div>
                        <p>
                            Free parking is available at the venue with
                            space for up to 4,000 vehicles. Teams,
                            volunteers, vendors and related staff
                            may park in VIP Parking – go past general
                            parking and follow the signs to the VIP area,
                            where an elevator will take you to the team
                            and volunteer hospitality areas or you can
                            proceed directly onto the Arena Floor.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
};

export default EventDetails;