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
    height: 100px;
    width: 100px;
    margin-bottom: 10px;
  }

  @media ${breakpoints.tablet} {
    height: 120px;
    width: 120px;
    margin-bottom: 20px;
  }

  @media ${breakpoints.desktop} {
    height: 110px;
    width: 110px;
    margin-bottom: 20px;
  }
`;

const Icon = ({ children, bgColor, id }) => (
  <StyledIcon bgColor={bgColor} id={id}>
    {children}
  </StyledIcon>
);

Icon.propTypes = {
  children: PropTypes.oneOf(['img', 'svg']).isRequired,
  bgColor: PropTypes.string,
  id: PropTypes.string,
};

Icon.defaultProps = {
  id: 'icon',
};

Icon.defaultProps = {
  bgColor: '#C0C0C0',
};

export default Icon;
