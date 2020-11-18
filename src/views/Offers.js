import React, { useEffect } from 'react';
import Context from 'context/context';
import styled, { css } from 'styled-components';
import PageTemplate from 'templates/PageTemplate';
import CardOffer from 'components/molecules/OffersSection/CardOffer';
import Title from 'components/atoms/Title';
import CardOfferModal from 'components/molecules/OffersSection/CardsOfferModal';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${({ theme }) => theme.breakpoints.mobile} {
    ${({ offerSection }) =>
      offerSection &&
      css`
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto;
        grid-gap: 25px 25px;
        padding: 0 20px;
      `};

    ${({ titleSection }) =>
      titleSection &&
      css`
        padding: 30px 0;
      `}
  }

  @media ${({ theme }) => theme.breakpoints.desktop} {
    ${({ offerSection }) =>
      offerSection &&
      css`
        display: grid;
        grid-template-columns: 30% 30% 30%;
        grid-template-rows: auto;
        grid-gap: 40px 40px;
        width: 100%;
        padding: 20px;
        justify-content: center;
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

const Offers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Context.Consumer>
      {({ apartments, isModalOpen, selectedApartment }) => (
        <PageTemplate>
          <>
            <StyledWrapper titleSection className="offer-section">
              <Title>All Offers</Title>
            </StyledWrapper>
            <StyledWrapper offerSection>
              {apartments.map((item) => (
                <CardOffer item={item} key={item.id} />
              ))}
            </StyledWrapper>
            {isModalOpen && <CardOfferModal item={selectedApartment} />}
          </>
        </PageTemplate>
      )}
    </Context.Consumer>
  );
};

export default Offers;
