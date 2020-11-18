import React from 'react';
import Context from 'context/context';
import styled, { css } from 'styled-components';
import SocialMenu from 'components/molecules/FooterSection/SocialMenu';
import CompanyInfo from 'components/molecules/FooterSection/CompanyInfo';
import Copyright from 'components/molecules/FooterSection/Copyright';
import FooterNavigation from 'components/molecules/FooterSection/FooterNavigation';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: ${({ row }) => (row ? 'row' : 'column')};
  ${({ content }) =>
    content === 'true' &&
    css`
      @media ${({ theme }) => theme.breakpoints.tablet} {
        width: 35%;
      }
    `}

  ${({ row }) =>
    row &&
    css`
      @media ${({ theme }) => theme.breakpoints.tablet} {
        width: 65%;
        justify-content: flex-end;
      }
    `}
`;

const StyledContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
  @media ${({ theme }) => theme.breakpoints.mobile} {
    padding: 20px 50px;
  }

  @media ${({ theme }) => theme.breakpoints.tablet} {
    padding: 30px 50px;
  }
  @media ${({ theme }) => theme.breakpoints.desktop} {
    justify-content: space-between;
    padding: 100px;
  }
`;

const StyledSpan = styled.span`
  background-color: #ebebeb;
  height: 2px;
  width: 96vw;
  align-self: center;
  margin: 20px 0;
`;

const Footer = () => (
  <Context.Consumer>
    {({ footerNavigationItems }) => (
      <StyledWrapper>
        <StyledSpan />
        <StyledContentWrapper>
          <StyledWrapper content="true">
            <CompanyInfo />
            <SocialMenu />
          </StyledWrapper>
          <StyledWrapper row>
            <FooterNavigation navItems={footerNavigationItems.usefulLinks} />
            <FooterNavigation navItems={footerNavigationItems.Community} />
            <FooterNavigation navItems={footerNavigationItems.About} />
          </StyledWrapper>
        </StyledContentWrapper>
        <StyledSpan />
        <Copyright />
      </StyledWrapper>
    )}
  </Context.Consumer>
);

export default Footer;
