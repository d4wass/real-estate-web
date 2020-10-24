import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { breakpoints } from '../../theme/mainTheme';

const StyledButton = styled.button`
  position: ${({ isActive }) => (isActive ? 'fixed' : 'absolute')};
  z-index: 1;
  right: 20px;
  border: none;
  cursor: pointer;
  background-color: transparent;
  outline: none;
  display: inline-block;

  @media ${breakpoints.tablet} {
    display: none;
  }

  @media ${breakpoints.desktop} {
    display: none;
  }
`;

const StyledBox = styled.span`
  width: 30px;
  height: 24px;
  display: inline-block;
  position: relative;
`;

const HamburgerLine = css`
  width: 100%;
  height: 3px;
  border-radius: 20px;
  background-color: orange;
  position: absolute;
`;

const StyledInner = styled.span`
  ${HamburgerLine};
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  transition: background-color 0.1s 0.2s ease-in-out;
  background-color: ${({ isActive }) => (isActive ? 'transparent' : 'orange')};
  &:after,
  &:before {
    ${HamburgerLine};
    content: '';
    left: 0;
    transition: transform 0.2s 0.2s ease-in-out;
  }
  &:before {
    width: 75%;
    top: -8px;
    ${({ isActive }) =>
      isActive &&
      css`
        width: 80%;
        transform: translateY(8px) rotate(45deg);
      `}
  }
  &:after {
    width: 80%;
    top: 8px;
    ${({ isActive }) =>
      isActive &&
      css`
        width: 80%;
        transform: translateY(-8px) rotate(-45deg);
      `}
  }

  ${({ isActive }) =>
    isActive &&
    css`
      background-color: transparent;
    `}
`;

const MenuButton = ({ isActive, handleClick }) => (
  <StyledButton isActive={isActive} onClick={handleClick}>
    <StyledBox isActive={isActive}>
      <StyledInner isActive={isActive} />
    </StyledBox>
  </StyledButton>
);

MenuButton.propTypes = {
  isActive: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default MenuButton;
