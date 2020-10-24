import React from 'react';
import PropTypes from 'prop-types';
import Paragraph from 'components/atoms/Paragraph';
import styled from 'styled-components';
import { theme } from 'theme/mainTheme';
import { ReactComponent as Bed } from 'assets/bed-solid.svg';
import { ReactComponent as Bath } from 'assets/bath-solid.svg';
import { ReactComponent as Square } from 'assets/square-regular.svg';
import { ReactComponent as Map } from 'assets/map-marker-alt-solid.svg';

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledBed = styled(Bed)`
  height: 20px;
  width: 20px;
`;
const StyledBath = styled(Bath)`
  height: 20px;
  width: 20px;
`;
const StyledSquare = styled(Square)`
  height: 20px;
  width: 20px;
`;
const StyledMap = styled(Map)`
  height: 20px;
  width: 20px;
`;

const StyledParagraph = styled(Paragraph)`
  margin-left: 10px;
  color: #828282;
  font-size: ${theme.fontSize.s};
`;

const OfferIcon = ({ children, bed, bath, square, map }) => (
  <StyledWrapper>
    {bed ? <StyledBed /> : null}
    {bath ? <StyledBath /> : null}
    {map ? <StyledMap /> : null}
    {square ? <StyledSquare /> : null}
    <StyledParagraph>{children}</StyledParagraph>
  </StyledWrapper>
);

OfferIcon.propTypes = {
  children: PropTypes.string.isRequired,
  bed: PropTypes.bool,
  bath: PropTypes.bool,
  square: PropTypes.bool,
  map: PropTypes.bool,
};

OfferIcon.defaultProps = {
  bed: null,
  bath: null,
  square: null,
  map: null,
};

export default OfferIcon;
