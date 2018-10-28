import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

export default ({ profile }) => (
  <div className="profile__preview">
      <div className="profile__thumbnail">
        <Img alt={profile.title} fluid={profile.featureImage.fluid} />
      </div>
      <div className="profile__name">
        {profile.title}
      </div>
  </div>
)
