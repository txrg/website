import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

const ProfileFeature = ({ profile }) => (
  <div className="profile__preview  service-content">
    <div className="profile__thumbnail">
      <GatsbyImage alt={profile.name} sizes={profile.photo.sizes} image={profile.photo.gatsbyImageData} />
    </div>
    <div className="feature__content">
      <h4 className="feature__title">Featured skater: {profile.name}</h4>
      <p className="feature__description">
        {profile.featureDescription.childMarkdownRemark.rawMarkdownBody}
      </p>
    </div>
  </div>
);

export default ProfileFeature;