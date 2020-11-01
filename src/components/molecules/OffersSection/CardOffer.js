import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { theme, breakpoints } from 'theme/mainTheme';
import OfferIcon from 'components/atoms/OfferIcon';
import Title from 'components/atoms/Title';
import Button from 'components/atoms/Button';

const StyledWrapper = styled.div`
  max-width: 80vw;
  border-radius: 15px;
  box-shadow: 0px 3px 18px -10px rgba(120, 120, 120, 1);
  margin: 10px 0;
  height: 100%;

  @media ${breakpoints.mobile} {
    ${({ url }) =>
      url === '/offers' &&
      css`
        height: 630px;
        margin: 0;
      `}
  }

  @media ${breakpoints.desktop} {
    height: 100%;
    ${({ url }) =>
      url === '/offers' &&
      css`
        width: 100%;
        max-width: 100%;
        max-height: 630px;
        margin: 0;
      `}
  }
`;

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
        padding: 0;
      }
    `}

  ${({ location }) =>
    location &&
    css`
      margin-top: 20px;
      padding: 0;

      ${({ url }) =>
        url === '/offers' &&
        css`
          flex-direction: column;
          align-items: center;
        `}

      @media ${breakpoints.desktop} {
        flex-direction: row;
        margin-top: 15px;
        padding: 0;
      }
    `}

  ${({ main, url }) =>
    main &&
    url === '/offers' &&
    css`
      @media ${breakpoints.mobile} {
        height: 35%;
        padding: 20px;
      }

      @media ${breakpoints.tablet} {
        height: 40%;
        padding: 30px 40px;
      }

      @media ${breakpoints.desktop} {
        height: 30%;
      }
    `}
`;

const StyledTitle = styled(Title)`
  font-size: ${theme.fontSize.s};
  max-width: ${({ name, url }) => (name && url === '/offers' ? '100%' : '180px')};
  margin: 0;
  @media ${breakpoints.mobile} {
    font-size: ${theme.fontSize.m};
  }

  @media ${breakpoints.tablet} {
    ${({ url }) =>
      url === '/offers' &&
      css`
        font-size: ${theme.fontSize.m};
      `};
  }
  @media ${breakpoints.desktop} {
    ${({ url }) =>
      url === '/offers' &&
      css`
        font-size: ${theme.fontSize.l};
      `};
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: ${({ url }) => (url === '/offers' ? '210px' : '100%')};
  object-fit: cover;
  border-radius: 15px 15px 0 0;

  @media ${breakpoints.mobile} {
    ${({ url }) =>
      url === '/offers' &&
      css`
        height: 65%;
      `};
  }

  @media ${breakpoints.tablet} {
    ${({ url }) =>
      url === '/offers' &&
      css`
        height: 60%;
      `};
  }

  @media ${breakpoints.desktop} {
    height: 70%;
  }
`;

const StyledButton = styled(Button)`
  ${({ url }) =>
    url === '/offers' &&
    css`
      margin-top: 20px;
      width: 100%;

      @media ${breakpoints.desktop} {
        max-width: 50px;
        margin-top: 0;
      }
    `}
`;

const CardOffer = ({ item }) => {
  const { name, price, bedrooms, bathrooms, size, location, image } = item;
  const url = useLocation().pathname;

  return (
    <StyledWrapper url={url}>
      <StyledImage src={image} alt="villa" url={url} />
      <StyledContentWrapper main url={url}>
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
        <StyledContentWrapper location url={url}>
          <OfferIcon map>{location}</OfferIcon>
          <StyledButton offer url={url}>
            View
          </StyledButton>
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
