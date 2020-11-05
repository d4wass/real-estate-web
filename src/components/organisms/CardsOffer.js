import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { apartments, type } from 'db';
import { routes } from 'routes/index';
import SectionTitle from 'components/atoms/SectionTitle';
import { breakpoints } from 'theme/mainTheme';
import Button from 'components/atoms/Button';
import Offers from 'components/molecules/OffersSection/Offers';
import Filters from 'components/molecules/OffersSection/Filters';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: ${({ row }) => (row ? 'row' : 'column')};
  justify-content: center;
  align-items: center;
  padding: ${({ offerBtn }) => offerBtn && '30px 0'};

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
  const initialBtnState = {
    Villa: false,
    Apartment: false,
    Studio: false,
    House: false,
  };

  const [state, setState] = useState(initialBtnState);
  const [isFilterActive, setFilter] = useState(false);
  const [filteredOffer, setFilteredOffer] = useState(apartments);
  const typesOffers = Object.values(type);
  const isTypeActive = Object.values(state);

  const handleFilter = (e) => {
    const filterValue = e.target.value;
    setFilteredOffer(apartments.filter((item) => item.type === filterValue));
    setFilter(true);
  };

  const handleActiveBtn = (e) => {
    const btn = e.target.value;

    Object.keys(state).forEach((key) => {
      state[key] = false;
    });
    Object.keys(state).filter((key) => {
      if (key === btn) {
        state[key] = true;
      }
      return state;
    });

    setState(state);
  };

  return (
    <StyledWrapper className={className}>
      <StyledWrapper row filters>
        <Filters
          types={typesOffers.slice(0, 2)}
          fnFilter={handleFilter}
          fnActive={handleActiveBtn}
          isActive={isTypeActive.slice(0, 2)}
          order={2}
        />
        <StyledTitle offers>Featured Homes</StyledTitle>
        <Filters
          types={typesOffers.slice(2, 4)}
          fnFilter={handleFilter}
          fnActive={handleActiveBtn}
          isActive={isTypeActive.slice(2, 4)}
        />
      </StyledWrapper>
      <Offers offers={filteredOffer} isFilterActive={isFilterActive} />
      <StyledWrapper offerBtn>
        <Button as={NavLink} to={routes.offers} offerBtn>
          Show all offers
        </Button>
      </StyledWrapper>
    </StyledWrapper>
  );
};

CardsOffer.propTypes = {
  className: PropTypes.string,
};

CardsOffer.defaultProps = {
  className: 'section',
};

export default CardsOffer;
