import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

export default ({ profile }) => (
  <div className="profile__preview">
      <div className="profile__thumbnail">
        <Img alt={profile.title} sizes={profile.featureImage.sizes} />
      </div>
      <div className="profile__name">
        {profile.title}
      </div>
  </div>
)
