import React from 'react';
import Img from 'gatsby-image';

export default ({ profile }) => (
  <div className="profile__preview  service-content">
    <div className="profile__thumbnail">
      <Img alt={profile.name} sizes={profile.photo.sizes} />
    </div>

    <h4 className="feature__title">Featured skater: {profile.name}</h4>
    <p className="feature__description">{profile.featureDescription.childMarkdownRemark.rawMarkdownBody}</p>
  </div>
);
