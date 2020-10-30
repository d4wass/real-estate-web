import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CardOffer from 'components/molecules/OffersSection/CardOffer';
import { breakpoints } from 'theme/mainTheme';
import { apartments } from 'db';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
    padding: 0 30px;
  }

  @media ${breakpoints.desktop} {
    grid-template-columns: 350px 350px 350px 350px;
    grid-template-rows: 670px;
  }
`;

const Offers = ({ offers, isFilterActive }) => {
  return (
    <StyledWrapper>
      <StyledContentWrapper>
        {isFilterActive ? (
          offers.map((item) => <CardOffer item={item} key={item.id} />)
        ) : (
          <>
            <CardOffer item={apartments[0]} />
            <CardOffer item={apartments[1]} />
            <CardOffer item={apartments[2]} />
            <CardOffer item={apartments[3]} />
          </>
        )}
      </StyledContentWrapper>
    </StyledWrapper>
  );
};

Offers.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object).isRequired,
  isFilterActive: PropTypes.bool,
};

Offers.defaultProps = {
  isFilterActive: false,
};

export default Offers;
