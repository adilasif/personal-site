import React, { useState, useEffect } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Head, Loader } from '@components';
import { GlobalStyle, theme } from '@styled-components';

const { colors, fontSizes, fonts } = theme;

const SkipToContent = styled.a`
  position: absolute;
  top: auto;
  left: -999px;
  width: 1px;
  height: 1px;
  overflow: hidden;
  z-index: -99;
  &:hover {
    background-color: ${colors.darkGrey};
  }
  &:focus,
  &:active {
    outline: 0;
    color: ${colors.primary};
    background-color: ${colors.background};
    border-radius: ${theme.borderRadius};
    padding: 18px 23px;
    font-size: ${fontSizes.sm};
    font-family: ${fonts.SFMono};
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: ${theme.transition};
    top: 0;
    left: 0;
    width: auto;
    height: auto;
    overflow: auto;
    z-index: 99;
  }
`;

const Layout = ({ location }) => {
  const [isLoading, setIsLoading] = useState(location.pathname === '/');

  useEffect(() => {
    if (isLoading) {
      return;
    }
    if (location.hash) {
      const id = location.hash.substring(1); // location.hash without the '#'
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView();
        }
      }, 0);
    }
  }, [isLoading]);

  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          site {
            siteMetadata {
              title
              siteUrl
              description
            }
          }
        }
      `}
      render={({ site }) => (
        <div id="root">
          <Head metadata={site.siteMetadata} />

          <GlobalStyle />

          <SkipToContent href="#content">Skip to Content</SkipToContent>

          {isLoading ? (
            <Loader finishLoading={() => setIsLoading(false)} />
          ) : null}
        </div>
      )}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
};

export default Layout;
