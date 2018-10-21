import React from 'react'
import Img from 'gatsby-image'

import styles from './hero.module.css'

export default ({ data }) => (
  <div className={styles.hero}>
    <Img className={styles.featureImage} alt={data.name} sizes={data.featureImage.sizes} />
  </div>
)
