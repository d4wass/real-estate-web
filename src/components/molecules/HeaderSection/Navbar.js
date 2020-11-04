import React, { useState } from 'react';
import { routes } from 'routes';
import { ReactComponent as Logo } from 'assets/logo.svg';
import { NavLink, useLocation } from 'react-router-dom';
import { breakpoints, theme } from 'theme/mainTheme';
import styled, { css } from 'styled-components';
import MenuButton from 'components/atoms/MenuButton';

const StyledWrapper = styled.div`
  display: flex;
  position: ${({ location }) => (location === '/offers' ? 'static' : 'absolute')};
  z-index: 1;
  align-items: center;
  padding: 20px;
  width: 100%;
`;

const StyledLogoLink = styled(NavLink)`
  display: block;
  width: 20px;
  height: 20px;
  cursor: pointer;

  &:first-child {
    color: ${({ location }) => (location === '/offers' ? '#000' : '#fff')};
  }

  @media ${breakpoints.tablet} {
    width: 25px;
    height: 25px;
  }
`;

const StyledBorder = styled.div`
  border: solid 2px;
  border-color: ${({ location }) => (location === '/offers' ? '#000' : '#fff')};
  border-radius: 20px;
  padding: 10px;
  cursor: pointer;
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')}; /*docelowo ma być hidden */
  transition: visibility 0.3s 0.1s ease-in-out;

  @media ${breakpoints.tablet} {
    visibility: visible;
    justify-content: flex-end;
    flex-direction: row;
    margin: 0;
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
  color: ${({ location }) => (location === '/offers' ? '#000' : '#fff')};

  @media ${breakpoints.tablet} {
    font-size: ${theme.fontSize.m};
  }

  @media ${breakpoints.desktop} {
    font-size: ${theme.fontSize.s};
  }
`;

const StyledListWrapper = styled.nav`
  height: 100vh;
  width: 100vw;
  background-color: #e3e3e3;
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
    <StyledWrapper location={location}>
      <StyledBorder location={location}>
        <StyledLogoLink to="/" as={Logo} location={location} />
      </StyledBorder>
      <MenuButton handleClick={clickFn} isActive={isVisible} />
      <StyledListWrapper isActive={isVisible}>
        <StyledList isVisible={isVisible}>
          <StyledListItem>
            <StyledListItemLink to={routes.home} activeClass="active" location={location}>
              Home
            </StyledListItemLink>
          </StyledListItem>
          <StyledListItem>
            <StyledListItemLink to={routes.offers} activeClass="active" location={location}>
              Offers
            </StyledListItemLink>
          </StyledListItem>
        </StyledList>
      </StyledListWrapper>
    </StyledWrapper>
  );
};

export default Navbar;
