import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ReactComponent as LogoSVG } from 'assets/logo.svg';
import { breakpoints, theme } from 'theme/mainTheme';
import Paragraph from 'components/atoms/Paragraph';
import { NavLink } from 'react-router-dom';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-decoration: none;
  @media ${breakpoints.tablet} {
    width: 220px;
  }
`;

const StyledLogo = styled.div`
  display: block;
  width: 20px;
  height: 20px;

  cursor: pointer;

  &:first-child {
    height: 20px;
    width: 20px;
    color: ${({ color, location }) => (location !== '/offers' ? color : '#000')};
  }

  @media ${breakpoints.tablet} {
    width: 25px;
    height: 25px;
  }
`;

const StyledBorder = styled.div`
  border: solid 2px;
  border-color: ${({ color, location }) => (location !== '/offers' ? color : '#000')};
  border-radius: 20px;
  padding: 10px;
  cursor: pointer;
`;

const StyledParagraph = styled(Paragraph)`
  font-weight: ${theme.bold};
  color: ${({ color, location }) => (location !== '/offers' ? color : '#000')};
  font-size: ${theme.fontSize.m};
  margin: 0 10px;
`;

const Logo = ({ location, color }) => {
  return (
    <StyledWrapper color={color} location={location} as={NavLink} to="/">
      <StyledBorder color={color} location={location}>
        <StyledLogo as={LogoSVG} color={color} location={location} />
      </StyledBorder>
      <StyledParagraph color={color} location={location}>
        Real-Estate
      </StyledParagraph>
    </StyledWrapper>
  );
};

Logo.propTypes = {
  location: PropTypes.string,
  color: PropTypes.string,
};

Logo.defaultProps = {
  location: '/',
  color: 'black',
};

export default Logo;
