import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme, breakpoints } from 'theme/mainTheme';

const StyledButton = styled.button`
  padding: 10px 20px;
  width: 120px;
  margin: 5px;
  border-radius: 20px;
  background-color: ${({ className }) =>
    className === 'activeFilter' ? theme.iconBgColors.orange : 'transparent'};
  border: ${({ className }) =>
    className === 'activeFilter'
      ? `solid 2px ${theme.iconBgColors.orange}`
      : `solid 2px ${theme.borderOfferColor}`};
  color: ${({ className }) => (className === 'activeFilter' ? '#fff' : theme.fontParamColor)};
  font-weight: ${({ className }) => (className === 'activeFilter' ? theme.bold : theme.light)};
  outline: none;

  @media ${breakpoints.desktop} {
    display: flex;
    border-radius: 0;
    width: 140px;
    background-color: transparent;
    flex-direction: column;
    align-items: center;
    padding: 20px 80px;
    margin: 0;
    border: none;
    border-bottom: ${({ className }) =>
      className === 'activeFilter'
        ? `solid 3px ${theme.iconBgColors.orange}`
        : `solid 2px ${theme.borderOfferColor}`};
    cursor: pointer;
    color: ${({ className }) =>
      className === 'activeFilter' ? `${theme.fontTitleColor}` : `${theme.fontParamColor}`};
    font-weight: ${({ className }) => (className === 'activeFilter' ? theme.bold : theme.light)};
  }
`;

const OfferFilter = ({ fnFilter, value, isActive, handleActive }) => {
  return (
    <StyledButton
      id="filterBtn"
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
