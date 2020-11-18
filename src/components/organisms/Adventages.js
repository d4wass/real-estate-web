import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Adventage from 'components/molecules/AdventageSection/Adventage';
import SectionTitle from 'components/atoms/SectionTitle';
import villa from 'assets/apartment2.jpg';

const StyledWrapper = styled.div`
  display: ${({ image }) => (image ? 'none' : 'flex')};
  flex-direction: ${({ row }) => (row ? 'row' : 'column')};
  padding: 0;

  @media ${({ theme }) => theme.breakpoints.mobile} {
    display: ${({ image }) => image && 'flex'};
    padding: 0 20px;
    height: ${({ row }) => row && '70vh'};
    justify-content: ${({ row }) => (row ? 'center' : 'flex-start')};
    align-items: ${({ row }) => (row ? 'center' : 'flex-start')};
  }

  @media ${({ theme }) => theme.breakpoints.tablet} {
    justify-content: ${({ row }) => (row ? 'center' : 'flex-start')};
    align-items: ${({ row }) => (row ? 'center' : 'flex-start')};
  }

  @media ${({ theme }) => theme.breakpoints.desktop} {
    display: flex;
    height: 100vh;
    justify-content: space-evenly;
    padding: ${({ row }) => (row ? '0' : '50px 20px')};
  }
`;

const StyledContentWrapper = styled(StyledWrapper)`
  padding: 0 20px;

  @media ${({ theme }) => theme.breakpoints.mobile} {
    padding: 0;
    justify-content: flex-start;
    align-items: flex-start;
  }

  @media ${({ theme }) => theme.breakpoints.desktop} {
    justify-content: center;
    padding: 0;
  }
`;

const StyledImage = styled.img`
  display: none;

  @media ${({ theme }) => theme.breakpoints.mobile} {
    display: block;
    border-radius: 10px;
    height: 500px;
    width: 300px;
    object-fit: cover;
  }

  @media ${({ theme }) => theme.breakpoints.desktop} {
    display: block;
    width: 40vw;
    height: 100%;
    border-radius: 15px;
  }
`;

const StyledTitle = styled(SectionTitle)`
  @media ${({ theme }) => theme.breakpoints.mobile} {
    width: 100%;
    align-self: center;
  }

  @media ${({ theme }) => theme.breakpoints.desktop} {
    max-width: 550px;
    align-self: flex-start;
  }
`;

const Adventages = ({ className }) => (
  <StyledWrapper row className={className}>
    <StyledWrapper>
      <StyledTitle services>Why choose Us?</StyledTitle>
      <StyledContentWrapper>
        <Adventage color="#38719B" icon="home" title="Property Insurance" />
        <Adventage color="#F78057" icon="percent" title="Tax Adventage" />
        <Adventage color="#006767" icon="docs" title="Lowest Commissions" />
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
