import React from 'react';
import styled, { css } from 'styled-components';
import { theme, breakpoints } from 'theme/mainTheme';
import OfferIcon from 'components/atoms/OfferIcon';
import Title from 'components/atoms/Title';
import Button from 'components/atoms/Button';

const StyledContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 20px;

  @media ${breakpoints.desktop} {
    padding: 30px;
  }

  ${({ title }) =>
    title &&
    css`
      flex-direction: row;
      margin-bottom: 15px;
      padding: 0;

      @media ${breakpoints.desktop} {
        padding: 0;
      }
    `}

  ${({ info }) =>
    info &&
    css`
      justify-content: space-between;
      flex-direction: row;
      padding: 0;

      @media ${breakpoints.desktop} {
        padding: 0;
      }
    `}

  ${({ location }) =>
    location &&
    css`
      margin: 15px 0;
      padding: 0;

      @media ${breakpoints.desktop} {
        flex-direction: row;
        padding: 0;
      }
    `}
`;

const StyledWrapper = styled.div`
  max-width: 80vw;
  border-radius: 15px;
  box-shadow: 0px 3px 18px -10px rgba(120, 120, 120, 1);
  margin: 10px 0;
  @media ${breakpoints.desktop} {
    max-width: 380px;
    height: 630px;
  }
`;

const StyledTitle = styled(Title)`
  font-size: ${theme.fontSize.m};
  max-width: ${({ name }) => (name ? '180px' : 'auto')};
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px 15px 0 0;

  @media ${breakpoints.desktop} {
    height: 65%;
  }
`;

const CardOffer = (item) => {
  const { name, price, bedrooms, bathrooms, size, location, image } = item.item;
  // to filter type

  return (
    <StyledWrapper>
      <StyledImage src={image} alt="villa" />
      <StyledContentWrapper padding>
        <StyledContentWrapper title>
          <StyledTitle name>{name}</StyledTitle>
          <StyledTitle>{`${price} $`}</StyledTitle>
        </StyledContentWrapper>
        <StyledContentWrapper info>
          <OfferIcon bed>{bedrooms}</OfferIcon>
          <OfferIcon bath>{bathrooms}</OfferIcon>
          <OfferIcon square>{`${size} sqrt`}</OfferIcon>
        </StyledContentWrapper>
        <StyledContentWrapper location>
          <OfferIcon map>{location}</OfferIcon>
          <Button offer>View</Button>
        </StyledContentWrapper>
      </StyledContentWrapper>
    </StyledWrapper>
  );
};

export default CardOffer;
