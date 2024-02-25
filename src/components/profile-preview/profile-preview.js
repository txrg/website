import React from 'react';
import { GatsbyImage } from "gatsby-plugin-image";

const ProfilePreview = ({ profile }) => (
  <div className="profile__preview  service-content">
    <div className="profile__thumbnail">
      <GatsbyImage alt={profile.name} sizes={profile.photo.sizes} image={profile.photo.gatsbyImageData} />
    </div>

    <h4 className="profile__name">
      <span>{profile.title}</span>
      {profile.name}{' '}
    </h4>
  </div>
);

export default ProfilePreview;