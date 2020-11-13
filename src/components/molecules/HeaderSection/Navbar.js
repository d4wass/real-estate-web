import React, { useState } from 'react';
import { routes } from 'routes';
import { NavLink, useLocation } from 'react-router-dom';
import { breakpoints, theme } from 'theme/mainTheme';
import styled, { css } from 'styled-components';
import MenuButton from 'components/atoms/MenuButton';
import Logo from 'components/atoms/Logo';

const StyledWrapper = styled.div`
  display: flex;
  position: ${({ location }) => (location === '/offers' ? 'static' : 'absolute')};
  z-index: 1;
  align-items: center;
  padding: 20px;
  width: 100%;
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  transition: visibility 0.3s 0.1s ease-in-out;

  @media ${breakpoints.tablet} {
    visibility: visible;
    justify-content: flex-end;
    flex-direction: row;
    margin: 0;
    background-color: transparent;
  }

  @media ${breakpoints.desktop} {
    visibility: visible;
    justify-content: flex-end;
    flex-direction: row;
    margin: 0;
  }
`;

const StyledListItem = styled.li`
  padding: 20px 0;
  list-style: none;

  @media ${breakpoints.tablet} {
    padding: 0 30px;
  }

  @media ${breakpoints.desktop} {
    padding: 0 30px;
  }
`;

const StyledListItemLink = styled(NavLink)`
  text-decoration: none;
  font-size: ${theme.fontSize.l};
  color: #fff;

  @media ${breakpoints.tablet} {
    font-size: ${theme.fontSize.m};
    color: ${({ site }) => (site === '/offers' ? '#000' : '#fff')};
  }

  @media ${breakpoints.desktop} {
    font-size: ${theme.fontSize.s};
  }
`;

const StyledListWrapper = styled.nav`
  height: 100vh;
  width: 100vw;
  background-color: hsla(0, 0%, 0%, 0.8);
  position: ${({ isActive }) => (isActive ? 'fixed' : 'absolute')};
  z-index: 0;
  top: 0;
  left: 0;
  transform: translateY(-100vh);
  transition: all 0.3s 0.1s ease-in-out;

  @media ${breakpoints.tablet} {
    background-color: transparent;
    height: 100%;
    width: 100%;
    position: static;
    transform: none;
  }

  @media ${breakpoints.desktop} {
    background-color: transparent;
    height: 100%;
    width: 100%;
    position: static;
    transform: none;
  }

  ${({ isActive }) =>
    isActive &&
    css`
      transform: translateY(0);
    `}
`;

const Navbar = () => {
  const [isVisible, setVisible] = useState(false);
  const clickFn = () => setVisible(!isVisible);
  const location = useLocation().pathname;

  return (
    <StyledWrapper site={location}>
      <Logo color="#fff" site={location} />
      <MenuButton handleClick={clickFn} isActive={isVisible} />
      <StyledListWrapper isActive={isVisible}>
        <StyledList isVisible={isVisible}>
          <StyledListItem>
            <StyledListItemLink to={routes.home} site={location}>
              Home
            </StyledListItemLink>
          </StyledListItem>
          <StyledListItem>
            <StyledListItemLink to={routes.offers} site={location}>
              Offers
            </StyledListItemLink>
          </StyledListItem>
        </StyledList>
      </StyledListWrapper>
    </StyledWrapper>
  );
};

export default Navbar;
