import React from 'react';

const Venue = () => {
    return <>
        <div className="regionals-venue-title">Venue</div>
        <div className='regionals-venue'>
            <div className='regionals-venue-subtitle'>Travis County Exposition Center</div>
            <div className='regionals-venue-address'>7311 Decker Ln, Austin, TX 78724</div>
            <iframe title="Venue Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.9606099641314!2d-97.62416362363436!3d30.295182974798383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b7faa87b8613%3A0x80d8c5ce96afea92!2sTravis%20County%20Exposition%20Center!5e0!3m2!1sen!2sus!4v1713648138186!5m2!1sen!2sus" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </>;
};

export default Venue;