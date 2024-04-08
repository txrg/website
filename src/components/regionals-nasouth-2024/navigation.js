import React from 'react';
import { Link } from 'gatsby';

const Navigation = () => {
    return (
        <section className="regionals-navigation">
            <div className="regionals-navigation-wrapper">
                <Link to="/regionals-nasouth-2024/home" activeStyle={{ color: "#ffa926", fontWeight: "bolder" }}>Home</Link>
                <Link to="/regionals-nasouth-2024/info" activeStyle={{ color: "#ffa926", fontWeight: "bolder" }}>2024 Tournament Info</Link>
                <Link to="/regionals-nasouth-2024/tickets" activeStyle={{ color: "#ffa926", fontWeight: "bolder" }}>Tickets</Link>
                <Link to="/regionals-nasouth-2024/staff-and-volunteers" activeStyle={{ color: "#ffa926", fontWeight: "bolder" }}>Staff & Volunteers</Link>
                <Link to="/regionals-nasouth-2024/sponsors-and-vendors" activeStyle={{ color: "#ffa926", fontWeight: "bolder" }}>Sponsors & Vendors</Link>
                <Link to="/regionals-nasouth-2024/hospitality" activeStyle={{ color: "#ffa926", fontWeight: "bolder" }}>Hospitality</Link>
                <Link to="/regionals-nasouth-2024/roller-derby-in-texas" activeStyle={{ color: "#ffa926", fontWeight: "bolder" }}>Roller Derby in Texas</Link>
            </div>
        </section>
    );
};

export default Navigation;