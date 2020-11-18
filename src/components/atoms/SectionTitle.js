import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Paragraph from 'components/atoms/Paragraph';
import Title from 'components/atoms/Title';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: ${({ services }) => (services ? '30px' : '0px')};
  padding: 20px 0;

  @media ${({ theme }) => theme.breakpoints.mobile} {
    align-items: ${({ services }) => (services ? 'flex-start' : 'center')};
    width: ${({ offers }) => offers && '150px'};
  }

  @media ${({ theme }) => theme.breakpoints.tablet} {
    width: ${({ offers }) => offers && '30% '};
  }

  @media ${({ theme }) => theme.breakpoints.desktop} {
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
  align-self: center;

  @media ${({ theme }) => theme.breakpoints.mobile} {
    align-self: ${({ services }) => (services ? 'flex-start' : 'center')};
  }
`;

const StyledParagraph = styled(Paragraph)`
  color: orange;
  font-size: 22px;
  margin: 0;
  letter-spacing: 0.1rem;
`;

const StyledTitle = styled(Title)`
  @media ${({ theme }) => theme.breakpoints.mobile} {
    text-align: ${({ offers }) => offers && 'center'};
  }
`;

const SectionTitle = ({ services, children, offers }) => (
  <StyledWrapper services={services} offers={offers}>
    {services && <StyledParagraph>Best services</StyledParagraph>}
    <StyledTitle offers={offers}>{children}</StyledTitle>
    <StyledSpan services={services} />
  </StyledWrapper>
);

SectionTitle.propTypes = {
  services: PropTypes.bool,
  offers: PropTypes.bool,
  children: PropTypes.string.isRequired,
};

SectionTitle.defaultProps = {
  services: false,
  offers: false,
};

export default SectionTitle;
