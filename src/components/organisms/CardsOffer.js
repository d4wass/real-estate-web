import React from 'react';
import Context from 'context/context';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { routes } from 'routes/index';
import SectionTitle from 'components/atoms/SectionTitle';
import { breakpoints } from 'theme/mainTheme';
import Button from 'components/atoms/Button';
import Offers from 'components/molecules/OffersSection/Offers';
import Filters from 'components/molecules/OffersSection/Filters';
import CardsOfferModal from 'components/molecules/OffersSection/CardsOfferModal';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: ${({ row }) => (row ? 'row' : 'column')};
  justify-content: center;
  align-items: center;
  padding: ${({ offerBtn }) => offerBtn && '30px 0'};
  position: relative;

  ${({ filters }) =>
    filters &&
    css`
      flex-direction: column;
      padding: 30px 0;
      @media ${breakpoints.mobile} {
        flex-direction: row;
        padding: 0;
      }

      @media ${breakpoints.tablet} {
        padding-bottom: 30px;
      }
    `}

  @media ${breakpoints.tablet} {
    /* display: grid; */
  }

  @media ${breakpoints.desktop} {
    height: 100vh;
    width: 100%;
    ${({ filters }) =>
      filters &&
      css`
        max-height: 150px;
      `}
  }
`;

const StyledTitle = styled(SectionTitle)`
  text-align: center;

  @media ${breakpoints.mobile} {
    width: 150px;
  }

  @media ${breakpoints.desktop} {
    width: 100%;
    padding-bottom: 50px;
  }
`;

const CardsOffer = ({ className }) => {
  return (
    <Context.Consumer>
      {(context) => (
        <StyledWrapper className={className}>
          <StyledWrapper row filters>
            <Filters
              types={context.filterBtnNames.slice(0, 2)}
              isActive={context.isTypeActive.slice(0, 2)}
              order={2}
            />
            <StyledTitle offers>Featured Homes</StyledTitle>
            <Filters
              types={context.filterBtnNames.slice(2, 4)}
              isActive={context.isTypeActive.slice(2, 4)}
            />
          </StyledWrapper>
          <Offers />
          <StyledWrapper offerBtn>
            <Button as={NavLink} to={routes.offers} offerBtn>
              Show all offers
            </Button>
          </StyledWrapper>
          {context.isModalOpen && <CardsOfferModal item={context.selectedApartment} />}
        </StyledWrapper>
      )}
    </Context.Consumer>
  );
};

CardsOffer.propTypes = {
  className: PropTypes.string,
};

CardsOffer.defaultProps = {
  className: 'section',
};

export default CardsOffer;
