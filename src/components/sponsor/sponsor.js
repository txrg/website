import React from 'react';
import Img from 'gatsby-image';

export default ({ sponsor }) => (
  <a
    className="sponsor__link"
    href={sponsor.link}
    target="_blank"
    rel="noopener noreferrer">
    <Img
      className="sponsor__img"
      alt={sponsor.name}
      fluid={sponsor.photo.fluid}
    />
  </a>
);
