import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ReactComponent as Twitter } from 'assets/twitter-brands.svg';
import { ReactComponent as Instagram } from 'assets/instagram-brands.svg';
import { ReactComponent as Facebook } from 'assets/facebook-f-brands.svg';

const StyledTwitter = styled(Twitter)`
  height: 30px;
  width: 30px;
`;

const StyledInstagram = styled(Instagram)`
  height: 30px;
  width: 30px;
`;

const StyledFacebook = styled(Facebook)`
  height: 30px;
  width: 30px;
`;

const SocialLink = ({ social }) => (
  <li>
    {social === 'instagram' ? <StyledInstagram /> : null}
    {social === 'facebook' ? <StyledFacebook /> : null}
    {social === 'twitter' ? <StyledTwitter /> : null}
  </li>
);

SocialLink.propTypes = {
  social: PropTypes.string.isRequired,
};

export default SocialLink;
