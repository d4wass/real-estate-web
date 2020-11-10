import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import OfferFilter from 'components/atoms/OfferFilter';
import { breakpoints } from 'theme/mainTheme';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  order: ${({ order }) => order};

  @media ${breakpoints.mobile} {
    order: 0;
  }

  @media ${breakpoints.tablet} {
    padding: 20px 80px;
  }
`;

const Filters = ({ types, fnFilter, fnActive, isActive, order }) => {
  return (
    <StyledWrapper order={order}>
      {types.map((item, index) => (
        <OfferFilter
          value={item}
          key={item}
          fnFilter={fnFilter}
          handleActive={fnActive}
          isActive={isActive[index]}
          id="filter"
        />
      ))}
    </StyledWrapper>
  );
};

Filters.propTypes = {
  types: PropTypes.arrayOf(PropTypes.string).isRequired,
  fnFilter: PropTypes.func.isRequired,
  fnActive: PropTypes.func.isRequired,
  isActive: PropTypes.bool,
  order: PropTypes.number,
};

Filters.defaultProps = {
  isActive: false,
  order: 0,
};

export default Filters;
