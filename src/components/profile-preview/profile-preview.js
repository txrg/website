import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

export default ({ profile }) => (
  <div className="profile__preview">
    <div className="profile__thumbnail">
      <Img alt={profile.name} fluid={profile.photo.fluid} />
    </div>
    <div className="profile__name">{profile.name}</div>
  </div>
);
