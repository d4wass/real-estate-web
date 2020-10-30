import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme } from 'theme/mainTheme';

const StyledButton = styled.button`
  display: flex;
  background-color: transparent;
  flex-direction: column;
  padding: 20px 80px;
  border: none;
  outline: none;
  border-bottom: ${({ className }) =>
    className === 'activeFilter'
      ? `solid 3px ${theme.iconBgColors.orange}`
      : `solid 2px ${theme.borderOfferColor}`};
  cursor: pointer;
  color: ${({ className }) =>
    className === 'activeFilter' ? `${theme.fontTitleColor}` : `${theme.fontParamColor}`};
  font-weight: ${({ className }) => (className === 'activeFilter' ? theme.bold : theme.light)};
`;

const OfferFilter = ({ fnFilter, value, isActive, handleActive }) => {
  return (
    <StyledButton
      className={isActive ? 'activeFilter' : 'filter'}
      onClick={(e) => {
        fnFilter(e);
        handleActive(e);
      }}
      value={value}
    >
      {value}
    </StyledButton>
  );
};

OfferFilter.propTypes = {
  fnFilter: PropTypes.func.isRequired,
  handleActive: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
};
OfferFilter.defaultProps = {
  isActive: false,
};

export default OfferFilter;
