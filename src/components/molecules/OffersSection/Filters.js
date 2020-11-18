import React from 'react';
import Context from 'context/context';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import OfferFilter from 'components/atoms/OfferFilter';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  order: ${({ order }) => order};

  @media ${({ theme }) => theme.breakpoints.mobile} {
    order: 0;
  }

  @media ${({ theme }) => theme.breakpoints.tablet} {
    padding: 20px 80px;
  }
`;

const Filters = ({ types, isActive, order, wrapper }) => {
  return (
    <Context.Consumer>
      {({ handleFilter, handleActiveBtn, handleOfferAnimation, buttonState }) => (
        <StyledWrapper order={order}>
          {types.map((item, index) => (
            <OfferFilter
              value={item}
              key={item}
              handleFilter={handleFilter}
              handleActive={handleActiveBtn}
              handleOfferAnimation={handleOfferAnimation}
              isActive={isActive[index]}
              id="filter"
              wrapper={wrapper}
              buttonState={buttonState}
            />
          ))}
        </StyledWrapper>
      )}
    </Context.Consumer>
  );
};

Filters.propTypes = {
  types: PropTypes.arrayOf(PropTypes.string).isRequired,
  isActive: PropTypes.arrayOf(PropTypes.bool),
  order: PropTypes.number,
  wrapper: PropTypes.shape({ current: PropTypes.instanceOf(Element) }).isRequired,
};

Filters.defaultProps = {
  isActive: false,
  order: 0,
};

export default Filters;
