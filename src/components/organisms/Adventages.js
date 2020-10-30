import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Adventage from 'components/molecules/AdventageSection/Adventage';
import SectionTitle from 'components/atoms/SectionTitle';
import villa from 'assets/apartment2.jpg';
import { theme, breakpoints } from 'theme/mainTheme';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: ${({ row }) => (row ? 'row' : 'column')};
  justify-content: center;
  padding: ${({ row }) => (row ? '0' : '50px 20px')};

  @media ${breakpoints.desktop} {
    height: 100vh;
    justify-content: space-evenly;
  }
`;

const StyledContentWrapper = styled(StyledWrapper)`
  padding: 0 20px;

  @media ${breakpoints.tablet} {
    padding: 0 60px 0 0;
  }

  @media ${breakpoints.desktop} {
    padding: 0;
  }
`;

const StyledImage = styled.img`
  display: none;

  @media ${breakpoints.mobile} {
    display: block;
    border-radius: 10px;
    height: 500px;
    width: 300px;
    object-fit: cover;
  }

  @media ${breakpoints.desktop} {
    display: block;
    width: 40vw;
    height: 100%;
    border-radius: 15px;
  }
`;

const StyledTitle = styled(SectionTitle)`
  @media ${breakpoints.mobile} {
    width: 100%;
    align-self: center;
  }

  @media ${breakpoints.desktop} {
    max-width: 550px;
    align-self: flex-start;
  }
`;

const Adventages = ({ className }) => (
  <StyledWrapper row className={className}>
    <StyledWrapper>
      <StyledTitle services>Why choose Us?</StyledTitle>
      <StyledContentWrapper>
        <Adventage color={theme.iconBgColors.blue} icon="home" title="Property Insurance" />
        <Adventage color={theme.iconBgColors.orange} icon="percent" title="Tax Adventage" />
        <Adventage color={theme.iconBgColors.green} icon="docs" title="Lowest Commissions" />
      </StyledContentWrapper>
    </StyledWrapper>
    <StyledWrapper image>
      <StyledImage src={villa} alt="villa" />
    </StyledWrapper>
  </StyledWrapper>
);

Adventages.propTypes = {
  className: PropTypes.string,
};

Adventages.defaultProps = {
  className: 'section',
};

export default Adventages;
