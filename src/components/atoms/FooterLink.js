import React from 'react';
import styled from 'styled-components';
import { theme } from 'theme/mainTheme';
import PropTypes from 'prop-types';

const StyledListItem = styled.li`
  display: flex;
  padding: 10px 0;
`;
const StyledLink = styled.a`
  text-decoration: none;
  color: ${theme.fontParamColor};
`;

const FooterLink = ({ children }) => (
  <StyledListItem>
    <StyledLink href="#">{children}</StyledLink>
  </StyledListItem>
);

FooterLink.propTypes = {
  children: PropTypes.string.isRequired,
};

export default FooterLink;
