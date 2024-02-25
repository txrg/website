import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Header from '../header/header';
import Footer from '../footer/footer';
import SponsorList from '../sponsor/sponsorList';
import Helmet from 'react-helmet';
import favicon32 from '../../images/favicon-32.png';
import '../../styles/index.scss';

export default function Template({ children }) {
  const menuHideClick = () => {
    document.body.classList.remove('open');
  };

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          {
            name: 'description',
            content:
              'Get the latest news, training tips, events &amp; other information from the Texas Rollergirls. Learn more about the godmothers of modern roller derby.',
          },
        ]}
        link={[
          {
            rel: 'shortcut icon',
            type: 'image/png',
            href: `${favicon32}`,
          },
        ]}>
        <html lang="en" />
      </Helmet>
      <Header />
      <div onClick={() => menuHideClick()}>
        {children}
        <SponsorList />
        <Footer />
      </div>
    </>
  );
}
