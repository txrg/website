import React from 'react';
import Img from 'gatsby-image';

export default ({ profile }) => (
  <div className="profile__preview  service-content">
    <div className="profile__thumbnail">
      <Img alt={profile.name} sizes={profile.photo.sizes} />
    </div>

    <h4 className="profile__name">{profile.name}</h4>
  </div>
);
