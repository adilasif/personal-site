import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import data from '@data';
import favicon from '@assets/favicons/favicon.ico';
import appleIcon40x40 from '@assets/favicons/apple-icon-40x40@1x.png';
import appleIcon60x60 from '@assets/favicons/apple-icon-60x60@2x.png';
import appleIcon76x76 from '@assets/favicons/apple-icon-76x76@1x.png';
import appleIcon84x84 from '@assets/favicons/apple-icon-83.5x83.5@2x.png';

const Head = ({ metadata }) => (
  <Helmet>
    <html lang="en" prefix="og: http://ogp.me/ns#" />
    <title itemProp="name" lang="en">
      {metadata.title}
    </title>
    <link rel="shortcut icon" href={favicon} />
    <link rel="canonical" href="https://adilasif.com" />

    <meta name="description" content={metadata.description} />
    <meta name="keywords" content={data.siteKeywords} />
    <meta property="og:title" content={metadata.title} />
    <meta property="og:description" content={metadata.description} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={metadata.siteUrl} />
    <meta property="og:site_name" content={metadata.title} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:type" content="image/png" />
    <meta property="og:locale" content={data.siteLanguage} />
    <meta itemProp="name" content={metadata.title} />
    <meta itemProp="description" content={metadata.description} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content={metadata.siteUrl} />
    <meta name="twitter:site" content={data.twitterHandle} />
    <meta name="twitter:creator" content={data.twitterHandle} />
    <meta name="twitter:title" content={metadata.title} />
    <meta name="twitter:description" content={metadata.description} />
    <meta name="twitter:image:alt" content={metadata.title} />

    <link rel="apple-touch-icon" sizes="40x40" href={appleIcon40x40} />
    <link rel="apple-touch-icon" sizes="60x60" href={appleIcon60x60} />
    <link rel="apple-touch-icon" sizes="76x76" href={appleIcon76x76} />
    <link rel="apple-touch-icon" sizes="83.5x83.5" href={appleIcon84x84} />
    <meta name="theme-color" content={data.backgroundColor} />
  </Helmet>
);

Head.propTypes = {
  metadata: PropTypes.object.isRequired,
};

export default Head;
