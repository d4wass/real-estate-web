import React from 'react';
import PropTypes from 'prop-types';
import Paragraph from 'components/atoms/Paragraph';
import styled, { css } from 'styled-components';
import { theme, breakpoints } from 'theme/mainTheme';
import { ReactComponent as Bed } from 'assets/bed-solid.svg';
import { ReactComponent as Bath } from 'assets/bath-solid.svg';
import { ReactComponent as Square } from 'assets/square-regular.svg';
import { ReactComponent as Map } from 'assets/map-marker-alt-solid.svg';
import { ReactComponent as Dollar } from 'assets/dollar.svg';

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: ${({ modal }) => (modal ? '10px' : '0px')};
`;

const StyledSVG = styled(Map, Square, Bath, Bed, Dollar)`
  height: 20px;
  width: 20px;
  color: ${theme.fontParamColor};
`;

const StyledParagraph = styled(Paragraph)`
  margin-left: 10px;
  color: ${theme.fontParamColor};
  font-size: 1.4rem;

  @media ${breakpoints.tablet} {
    font-size: 1.4rem;
  }

  ${({ modal }) =>
    modal &&
    css`
      font-size: 1.4rem;

      @media ${breakpoints.tablet} {
        font-size: ${theme.fontSize.s};
      }
    `}
`;

const OfferIcon = ({ children, bed, bath, square, map, dollar, modal }) => (
  <StyledWrapper modal={modal}>
    {bed ? <StyledSVG as={Bed} /> : null}
    {bath ? <StyledSVG as={Bath} /> : null}
    {map ? <StyledSVG as={Map} /> : null}
    {square ? <StyledSVG as={Square} /> : null}
    {dollar ? <StyledSVG as={Dollar} /> : null}
    <StyledParagraph modal={modal}>{children}</StyledParagraph>
  </StyledWrapper>
);

OfferIcon.propTypes = {
  children: PropTypes.PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  bed: PropTypes.bool,
  dollar: PropTypes.bool,
  bath: PropTypes.bool,
  square: PropTypes.bool,
  map: PropTypes.bool,
  modal: PropTypes.bool,
};

OfferIcon.defaultProps = {
  bed: null,
  bath: null,
  square: null,
  map: null,
  dollar: null,
  modal: false,
};

export default OfferIcon;
