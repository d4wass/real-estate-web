import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CardOffer from 'components/molecules/OffersSection/CardOffer';
import { breakpoints } from 'theme/mainTheme';
import Context from 'context/context';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledContentWrapper = styled.div`
  display: flex;
  visibility: visible;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media ${breakpoints.mobile} {
    display: grid;
    grid-template-columns: 45% 45%;
    grid-temptale-rows: 630px;
    gap: 15px 15px;
  }

  @media ${breakpoints.tablet} {
    padding: 0 30px;
  }

  @media ${breakpoints.desktop} {
    grid-template-columns: 340px 340px 340px 340px;
    grid-template-rows: 630px;
    padding: 0;
  }
`;

const Offers = ({ forwardRef }) => (
  <Context.Consumer>
    {({ apartments, isFilterActive, filteredApartments }) => (
      <StyledWrapper>
        <StyledContentWrapper ref={forwardRef}>
          {isFilterActive ? (
            filteredApartments.map((item) => <CardOffer item={item} key={item.id} />)
          ) : (
            <>
              <CardOffer item={apartments[0]} key={apartments[0].id} />
              <CardOffer item={apartments[1]} key={apartments[1].id} />
              <CardOffer item={apartments[2]} key={apartments[2].id} />
              <CardOffer item={apartments[3]} key={apartments[3].id} />
            </>
          )}
        </StyledContentWrapper>
      </StyledWrapper>
    )}
  </Context.Consumer>
);

Offers.propTypes = {
  forwardRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }).isRequired,
};

export default Offers;
