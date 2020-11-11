import React from 'react';
import Context from 'context/context';
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

const Filters = ({ types, isActive, order }) => {
  return (
    <Context.Consumer>
      {(context) => (
        <StyledWrapper order={order}>
          {types.map((item, index) => (
            <OfferFilter
              value={item}
              key={item}
              fnFilter={(e) => context.handleFilter(e)}
              handleActive={(e) => context.handleActiveBtn(e)}
              isActive={isActive[index]}
              id="filter"
            />
          ))}
        </StyledWrapper>
      )}
    </Context.Consumer>
  );
};

Filters.propTypes = {
  types: PropTypes.arrayOf(PropTypes.string).isRequired,
  isActive: PropTypes.bool,
  order: PropTypes.number,
};

Filters.defaultProps = {
  isActive: false,
  order: 0,
};

export default Filters;
