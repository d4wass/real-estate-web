import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledListItem = styled.li`
  display: flex;
  /* justify-content: flex-end; */
  padding: 10px 0;
`;
const StyledLink = styled.a`
  text-decoration: none;
  color: #ababbb;
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
