import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 10px 20px;
  width: 120px;
  margin: 5px;
  border-radius: 20px;
  background-color: ${({ className }) =>
    className === 'activeFilter' ? '#F78057' : 'transparent'};
  border: ${({ className }) =>
    className === 'activeFilter' ? `solid 2px #F78057` : `solid 2px #DFDFDF`};
  color: ${({ className }) => (className === 'activeFilter' ? '#fff' : '#707070')};
  font-weight: ${({ className }) =>
    className === 'activeFilter'
      ? `${({ theme }) => theme.font.weight.bold}`
      : `${({ theme }) => theme.font.weight.light}`};
  outline: none;

  @media ${({ theme }) => theme.breakpoints.desktop} {
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
      className === 'activeFilter' ? `solid 3px #F78057` : `solid 2px #DFDFDF`};
    cursor: pointer;
    color: ${({ className }) => (className === 'activeFilter' ? '#04004D' : '#707070')};
    font-weight: ${({ className }) => (className === 'activeFilter' ? 700 : 300)};
  }
`;

const OfferFilter = ({ handleFilter, value, isActive, handleActive }) => (
  <StyledButton
    id="filterBtn"
    className={isActive ? 'activeFilter' : 'filter'}
    onClick={(e) => {
      handleFilter(e);
      handleActive(e);
    }}
    value={value}
  >
    {value}
  </StyledButton>
);

OfferFilter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
  handleActive: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
};
OfferFilter.defaultProps = {
  isActive: false,
};

export default OfferFilter;
