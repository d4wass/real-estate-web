import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { breakpoints } from 'theme/mainTheme';
import Paragraph from 'components/atoms/Paragraph';
import Title from 'components/atoms/Title';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${({ services }) => (services ? 'center' : 'flex-start')};
  padding-bottom: ${({ services }) => (services ? '30px' : '0px')};
  padding: 20px 0;
  @media ${breakpoints.desktop} {
    padding-bottom: 50px;
    align-items: ${({ services }) => (services ? 'flex-start' : 'center')};
  }
`;

const StyledSpan = styled.span`
  background-color: orange;
  width: 30px;
  max-width: 40px;
  height: 5px;
  border-radius: 20px;
  ${({ center }) =>
    center &&
    css`
      align-self: center;
    `}
`;

const StyledParagraph = styled(Paragraph)`
  color: orange;
  font-size: 22px;
  margin: 0;
`;

const SectionTitle = ({ services, children }) => (
  <StyledWrapper services={services}>
    {services && <StyledParagraph>Best services</StyledParagraph>}
    <Title>{children}</Title>
    <StyledSpan />
  </StyledWrapper>
);

SectionTitle.propTypes = {
  services: PropTypes.bool,
  children: PropTypes.string.isRequired,
};

SectionTitle.defaultProps = {
  services: false,
};

export default SectionTitle;