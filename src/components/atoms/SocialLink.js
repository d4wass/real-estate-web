import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { socialColors, breakpoints } from 'theme/mainTheme';
import { ReactComponent as Twitter } from 'assets/twitter-brands.svg';
import { ReactComponent as Instagram } from 'assets/instagram-brands.svg';
import { ReactComponent as Facebook } from 'assets/facebook-f-brands.svg';

const StyledListItem = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;

  ${({ social }) =>
    social === 'facebook' &&
    css`
      background-color: ${socialColors.facebook};
    `}
  ${({ social }) =>
    social === 'instagram' &&
    css`
      background: ${socialColors.instagram};
    `};
  ${({ social }) =>
    social === 'twitter' &&
    css`
      background-color: ${socialColors.twitter};
    `};

  @media ${breakpoints.mobile} {
    padding: 12px;
  }
`;

const SocialIcon = styled(Twitter, Instagram, Facebook)`
  height: 20px;
  width: 20px;
  fill: #fff;

  @media ${breakpoints.mobile} {
    height: 25px;
    width: 25px;
  }
`;

const SocialLink = ({ social }) => (
  <li>
    <StyledListItem social={social}>
      {social === 'instagram' && <SocialIcon as={Instagram} />}
      {social === 'facebook' && <SocialIcon as={Facebook} />}
      {social === 'twitter' && <SocialIcon as={Twitter} />}
    </StyledListItem>
  </li>
);

SocialLink.propTypes = {
  social: PropTypes.string.isRequired,
};

export default SocialLink;
