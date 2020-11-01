import React from 'react';
import styled, { css } from 'styled-components';
import { apartments } from 'db';
import { breakpoints } from 'theme/mainTheme';
import PageTemplate from 'templates/PageTemplate';
import CardOffer from 'components/molecules/OffersSection/CardOffer';
import Title from 'components/atoms/Title';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${breakpoints.mobile} {
    ${({ offerSection }) =>
      offerSection &&
      css`
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto;
        grid-gap: 25px 25px;
        padding: 0 20px;
      `}
  }

  @media ${breakpoints.tablet} {
  }

  @media ${breakpoints.desktop} {
    ${({ offerSection }) =>
      offerSection &&
      css`
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: auto;
        grid-gap: 40px 40px;
        width: 100%;
        padding: 20px;
      `}

    ${({ titleSection }) =>
      titleSection &&
      css`
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 20px;
      `}
  }
`;

const Offers = () => (
  <PageTemplate>
    <StyledWrapper titleSection>
      <Title>All Offers</Title>
    </StyledWrapper>
    <StyledWrapper offerSection>
      {apartments.map((item) => (
        <CardOffer item={item} />
      ))}
    </StyledWrapper>
  </PageTemplate>
);

export default Offers;
