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
                        <p>Luedecke Arena has tiered stadium seating for up to 6,500 spectators. Seating includes general admission seating and VIP seating, including VIP boxes. Contact <a href="mailto:sponsorship@texasrollergirls.org">sponsorship@texasrollergirls.org</a> to reserve a VIP box.</p>
                        </div>
                </div>
                <div className='regionals-eventdetails-details-column2'>
                    <div className='regionals-eventdetails-details-topic'>
                        <div className='regionals-eventdetails-details-topic-subtitle'>Tickets</div>
                        <p>Single-day and weekend passes general admission and VIP tickets will be available for purchase through Brown Paper Tickets. A full breakdown of ticket types can be found <Link to="/regionals/tickets">here</Link>.</p>
                    </div>
                    <div className='regionals-eventdetails-details-topic'>
                        <div className='regionals-eventdetails-details-topic-subtitle'>Food</div>
                        <p>A variety of concessions will be sold on-site, along with both alcoholic and non-alcoholic drinks.</p>
                    </div>
                    <div className='regionals-eventdetails-details-topic'>
                        <div className='regionals-eventdetails-details-topic-subtitle'>Parking</div>
                        <p>Free parking is available at the venue, with space for up to 4,000 vehicles.</p>
                    </div>
                </div>
            </div>
        </>
    )
};

export default EventDetails;