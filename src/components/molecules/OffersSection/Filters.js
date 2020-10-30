import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import OfferFilter from 'components/atoms/OfferFilter';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px 80px;
`;

const Filters = ({ types, fnFilter, fnActive, isActive }) => {
  return (
    <StyledWrapper>
      {types.map((item, index) => (
        <OfferFilter
          value={item}
          key={item}
          fnFilter={fnFilter}
          handleActive={fnActive}
          isActive={isActive[index]}
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
};

Filters.defaultProps = {
  isActive: false,
};

export default Filters;
