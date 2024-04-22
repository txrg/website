import React from 'react';
import { Link } from 'gatsby';

const Navigation = () => {
    return (
        <section className="regionals-navigation">
            <div className="regionals-navigation-wrapper">
                <Link to="/regionals" activeStyle={{ color: "rgb(195, 53, 52)", fontWeight: "bolder" }}>Home</Link>
                <Link to="/regionals/tickets" activeStyle={{ color: "rgb(195, 53, 52)", fontWeight: "bolder" }}>Tickets</Link>
                <Link to="/regionals/schedule" activeStyle={{ color: "rgb(195, 53, 52)", fontWeight: "bolder" }}>Schedule & Scores</Link>
                <Link to="/regionals/staff" activeStyle={{ color: "rgb(195, 53, 52)", fontWeight: "bolder" }}>Staff & Volunteers</Link>
                <Link to="/regionals/sponsors" activeStyle={{ color: "rgb(195, 53, 52)", fontWeight: "bolder" }}>Sponsors & Vendors</Link>
                <Link to="/regionals/hospitality" activeStyle={{ color: "rgb(195, 53, 52)", fontWeight: "bolder" }}>Hospitality</Link>
                <Link to="/regionals/texas" activeStyle={{ color: "rgb(195, 53, 52)", fontWeight: "bolder" }}>Roller Derby in Texas</Link>
            </div>
        </section>
    );
};

export default Navigation;