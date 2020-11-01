import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
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
    padding: ${({ url }) => (url === '/offers' ? '15px 50px' : '30px')};
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
        flex-direction: ${({ url }) => (url === '/offers' ? 'column' : 'row')};
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
    width: ${({ url }) => url === '/offers' && '100%'};
    max-width: ${({ url }) => (url === '/offers' ? '100%' : '380px')};
    height: ${({ url }) => (url === '/offers' ? '700px' : '630px')};
    margin: ${({ url }) => (url === '/offers' ? '0' : '10px 0')};
  }
`;

const StyledTitle = styled(Title)`
  font-size: ${theme.fontSize.m};
  max-width: ${({ name, url }) => (name && url === '/offers' ? '100%' : '180px')};
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

const CardOffer = ({ item }) => {
  const { name, price, bedrooms, bathrooms, size, location, image } = item;
  const url = useLocation().pathname;

  return (
    <StyledWrapper url={url}>
      <StyledImage src={image} alt="villa" />
      <StyledContentWrapper padding url={url}>
        <StyledContentWrapper title>
          <StyledTitle name url={url}>
            {name}
          </StyledTitle>
          <StyledTitle>{`${price} $`}</StyledTitle>
        </StyledContentWrapper>
        <StyledContentWrapper info url={url}>
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

CardOffer.propTypes = {
  item: PropTypes.objectOf(PropTypes.number, PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  bedrooms: PropTypes.number.isRequired,
  bathrooms: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.element.isRequired,
};

export default CardOffer;
