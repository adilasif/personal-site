import React from 'react';
import PropTypes from 'prop-types';
import { IconGitHub, IconLinkedIn, IconTwitter } from '@components/icons';
import styled from 'styled-components';
import { socialMedia } from '@data';
import { theme, mixins, media } from '@styled-components';

const { colors, fontSizes, fonts } = theme;

const StyledContainer = styled.footer`
  ${mixins.flexCenter};
  flex-direction: column;
  padding: 15px;
  background-color: ${colors.darkBackground};
  color: ${colors.slate};
  text-align: center;
  height: auto;
  min-height: 70px;
`;
const StyledSocial = styled.div`
  color: ${colors.lightSlate};
  width: 100%;
  max-width: 270px;
  margin: 0 auto 10px;
  display: none;
  ${media.tablet`display: block;`};
`;
const StyledSocialList = styled.ul`
  ${mixins.flexBetween};
`;
const StyledSocialLink = styled.a`
  padding: 10px;
  svg {
    width: 20px;
    height: 20px;
  }
`;
const StyledMetadata = styled.div`
  margin: 10px 0;
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.xs};
  line-height: 1;
`;
const StyledGitHubLink = styled.a`
  color: ${colors.slate};
`;

const Footer = () => (
  <StyledContainer>
    <StyledSocial>
      <StyledSocialList>
        {socialMedia &&
          socialMedia.map(({ name, url }, i) => (
            <li key={i}>
              <StyledSocialLink
                href={url}
                target="_blank"
                rel="nofollow noopener noreferrer"
                aria-label={name}
              >
                {name === 'GitHub' ? (
                  <IconGitHub />
                ) : name === 'LinkedIn' ? (
                  <IconLinkedIn />
                ) : name === 'Twitter' ? (
                  <IconTwitter />
                ) : (
                  <IconGitHub />
                )}
              </StyledSocialLink>
            </li>
          ))}
      </StyledSocialList>
    </StyledSocial>
    <StyledMetadata>
      <StyledGitHubLink
        href="https://github.com/adilasif/"
        target="_blank"
        rel="nofollow noopener noreferrer"
      >
        <div>Made with ❤️ by Adil Asif.</div>
      </StyledGitHubLink>
    </StyledMetadata>
  </StyledContainer>
);

Footer.propTypes = {
  githubInfo: PropTypes.object,
};

export default Footer;
