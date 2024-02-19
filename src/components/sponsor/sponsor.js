import React from 'react';
import { GatsbyImage } from "gatsby-plugin-image";

export default ({ sponsor }) => (
  <a
    className="sponsor__link"
    href={sponsor.link}
    target="_blank"
    rel="noopener noreferrer">
    <GatsbyImage
      image={sponsor.photo.gatsbyImageData}
      className="sponsor__img"
      alt={sponsor.name} />
  </a>
);
