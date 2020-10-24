import React from 'react';
import styled from 'styled-components';
import { apartments } from 'db';
import CardOffer from 'components/molecules/CardOffer';
import SectionTitle from 'components/molecules/SectionTitle';
import { breakpoints } from 'theme/mainTheme';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${breakpoints.tablet} {
    /* display: grid; */
  }

  @media ${breakpoints.desktop} {
    height: 100%;
  }
`;

const StyledContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media ${breakpoints.mobile} {
    display: grid;
    grid-template-columns: 45% 45%;
    grid-temptale-rows: auto;
    gap: 20px 20px;
  }

  @media ${breakpoints.tablet} {
    grid-template-columns: 30% 30% 30%;
    grid-template-rows: auto;
  }

  @media ${breakpoints.desktop} {
    grid-template-columns: 350px 350px 350px 350px;
    grid-template-rows: 670px;
  }
`;

const StyledTitle = styled(SectionTitle)`
  text-align: center;
  @media ${breakpoints.desktop} {
    padding-bottom: 50px;
  }
`;

const CardsOffer = () => {
  const shortCardsList = () => {
    const newCards = apartments;

    if (newCards.length >= 4) {
      newCards.length = 4;
    }

    return newCards;
  };

  const cards = shortCardsList().map((item) => <CardOffer item={item} />);

  return (
    <StyledWrapper>
      <StyledTitle>Feature Homes</StyledTitle>
      <StyledContentWrapper>
        {cards}
        {apartments.length < 4 ? null : <button type="button">Show all offers</button>}
      </StyledContentWrapper>
    </StyledWrapper>
  );
};

export default CardsOffer;
