import React from 'react';
import Img from 'gatsby-image';

export default ({ profile }) => (
  <div className="profile__preview  service-content">
    <div className="profile__thumbnail">
    {profile.photo ? (
          <Img alt={profile.name} fluid={profile.photo.fluid} />
    ) : null}
    </div>
    <h3 className="profile__name">{profile.name}</h3>
  </div>
);
