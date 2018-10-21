import React from 'react'
import Link from 'gatsby-link'
import styles from './navigation.module.css'

export default () => (
  <nav role="navigation">
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/blog/">Blog</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/about/">About</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/who-we-are/">Who we are</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/events/">Events</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/tickets/">Tickets</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/get-involved/">Get Involved</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/media/">Media</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/sponsorship/">Sponsorship</Link>
      </li>
      <li className={styles.navigationItem}>
        <a href="https://www.texasrollergirls.org/shop/">Shop</a>
      </li>
    </ul>
  </nav>
)
