import styled from 'styled-components';
import React from 'react';
import { breakpoints } from 'theme/mainTheme';
import PropTypes from 'prop-types';

const StyledIcon = styled.div`
  height: 80px;
  width: 80px;
  border-radius: 50%;
  background-color: ${({ bgColor }) => (bgColor ? `${bgColor}` : 'pink')};
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${breakpoints.mobile} {
    height: ${({ adventage }) => (adventage ? '80px' : '100px')};
    width: ${({ adventage }) => (adventage ? '80px' : '100px')};
    margin-bottom: ${({ adventage }) => (adventage ? '0px' : '10px')};
  }

  @media ${breakpoints.tablet} {
    height: ${({ adventage }) => (adventage ? '80px' : '120px')};
    width: ${({ adventage }) => (adventage ? '80px' : '120px')};
    margin-bottom: ${({ adventage }) => (adventage ? '0px' : '20px')};
  }

  @media ${breakpoints.desktop} {
    height: 130px;
    width: 130px;
    margin-bottom: 20px;
  }
`;

const Icon = ({ children, bgColor, adventage, id }) => (
  <StyledIcon bgColor={bgColor} adventage={adventage} id={id}>
    {children}
  </StyledIcon>
);

Icon.propTypes = {
  children: PropTypes.oneOf(['img', 'svg']).isRequired,
  bgColor: PropTypes.string,
  id: PropTypes.string,
  adventage: PropTypes.bool,
};

Icon.defaultProps = {
  adventage: false,
  id: 'icon',
};

Icon.defaultProps = {
  bgColor: '#C0C0C0',
};

export default Icon;
