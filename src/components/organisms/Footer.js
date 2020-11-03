import React from 'react';
import styled, { css } from 'styled-components';
import SocialMenu from 'components/molecules/FooterSection/SocialMenu';
import CompanyInfo from 'components/molecules/FooterSection/CompanyInfo';
import Copyright from 'components/molecules/FooterSection/Copyright';
import FooterNavigation from 'components/molecules/FooterSection/FooterNavigation';
import { breakpoints } from 'theme/mainTheme';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: ${({ row }) => (row ? 'row' : 'column')};
  ${({ content }) =>
    content &&
    css`
      @media ${breakpoints.tablet} {
        width: 35%;
      }
    `}

  ${({ row }) =>
    row &&
    css`
      @media ${breakpoints.tablet} {
        width: 65%;
        justify-content: flex-end;
      }
    `}
`;

const StyledContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
  @media ${breakpoints.mobile} {
    padding: 20px 50px;
  }

  @media ${breakpoints.tablet} {
    padding: 30px 50px;
  }
  @media ${breakpoints.desktop} {
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

const Footer = () => {
  const footerNavigationItems = {
    usefulLinks: {
      title: 'Useful Links',
      links: [
        'Property type',
        'Recent Property',
        'Rental Appartment',
        'Buy Property',
        'Sell Property',
        'Top Agents',
      ],
    },
    Community: {
      title: 'Community',
      links: ['Events', 'Blog', 'Forum', 'Best Deal', 'Affilates', 'Invite a Friend'],
    },
    About: {
      title: 'About',
      links: [
        'Property type',
        'Recent Property',
        'Rental Appartment',
        'Buy Property',
        'Sell Property',
        'Top Agents',
      ],
    },
  };

  return (
    <StyledWrapper>
      <StyledSpan />
      <StyledContentWrapper>
        <StyledWrapper content>
          <CompanyInfo />
          <SocialMenu />
        </StyledWrapper>
        <StyledWrapper row>
          <FooterNavigation usefulLinks={footerNavigationItems.usefulLinks} />
          <FooterNavigation usefulLinks={footerNavigationItems.Community} />
          <FooterNavigation usefulLinks={footerNavigationItems.About} />
        </StyledWrapper>
      </StyledContentWrapper>
      <StyledSpan />
      <Copyright />
    </StyledWrapper>
  );
};

export default Footer;
