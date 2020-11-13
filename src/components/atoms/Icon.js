import styled from 'styled-components';
import React from 'react';
import { breakpoints } from 'theme/mainTheme';
import PropTypes from 'prop-types';

const StyledIcon = styled.div`
  padding: 15px;
  border-radius: 50%;
  background-color: ${({ bgColor }) => (bgColor ? `${bgColor}` : 'pink')};
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${breakpoints.mobile} {
    padding: 20px;
    margin-bottom: 10px;
  }

  @media ${breakpoints.tablet} {
    margin-bottom: 20px;
  }

  @media ${breakpoints.desktop} {
    height: ${({ adventage }) => (adventage ? '70px' : '120px;')};
    width: ${({ adventage }) => (adventage ? '70px' : '120px;')};
    padding: ${({ adventage }) => (adventage ? '20px' : '25px;')};
    margin-bottom: 20px;
  }
`;

const Icon = ({ children, bgColor, id, adventage }) => (
  <StyledIcon bgColor={bgColor} id={id} adventage={adventage}>
    {children}
  </StyledIcon>
);

Icon.propTypes = {
  children: PropTypes.element.isRequired,
  bgColor: PropTypes.string,
  id: PropTypes.string,
  adventage: PropTypes.bool,
};

Icon.defaultProps = {
  id: 'icon',
  bgColor: '#C0C0C0',
  adventage: false,
};

export default Icon;
