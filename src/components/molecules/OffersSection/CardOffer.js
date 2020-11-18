import React from 'react';
import Context from 'context/context';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';
import OfferIcon from 'components/atoms/OfferIcon';
import Title from 'components/atoms/Title';
import Button from 'components/atoms/Button';

const StyledWrapper = styled.div`
  max-width: 80vw;
  border-radius: 15px;
  box-shadow: 0px 3px 18px -10px rgba(120, 120, 120, 1);
  margin: 10px 0;
  height: 420px;
  max-height: 420px;

  @media ${({ theme }) => theme.breakpoints.mobile} {
    ${({ url }) =>
      url === '/offers' &&
      css`
        height: 630px;
        max-height: 520px;
        margin: 0;
      `}
  }

  @media ${({ theme }) => theme.breakpoints.tablet} {
    max-height: 420px;

    ${({ url }) =>
      url === '/offers' &&
      css`
        max-height: 550px;
        height: 630px;
        margin: 0;
      `}
  }

  @media ${({ theme }) => theme.breakpoints.desktop} {
    height: 100%;
    max-height: 630px;

    ${({ url }) =>
      url === '/offers' &&
      css`
        width: 100%;
        max-width: 100%;
        max-height: 600px;
        margin: 0;
      `}
  }
`;

const StyledContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 20px;

  @media ${({ theme }) => theme.breakpoints.desktop} {
    padding: ${({ url }) => (url === '/offers' ? '15px 50px' : '30px')};
  }

  ${({ title }) =>
    title === 'true' &&
    css`
      flex-direction: row;
      margin-bottom: 15px;
      padding: 0;

      @media ${({ theme }) => theme.breakpoints.desktop} {
        padding: 0;
      }
    `}

  ${({ info }) =>
    info &&
    css`
      justify-content: space-between;
      flex-direction: row;
      padding: 0;

      @media ${({ theme }) => theme.breakpoints.desktop} {
        padding: 0;
      }
    `}

  ${({ location }) =>
    location &&
    css`
      margin-top: 20px;
      padding: 0;
      align-items: center;

      ${({ url }) =>
        url === '/offers' &&
        css`
          flex-direction: column;
          align-items: center;
        `}

      @media ${({ theme }) => theme.breakpoints.desktop} {
        flex-direction: row;
        margin-top: 15px;
        padding: 0;
      }
    `}

  ${({ main, url }) =>
    main &&
    url === '/offers' &&
    css`
      @media ${({ theme }) => theme.breakpoints.mobile} {
        height: 35%;
        padding: 20px;
      }

      @media ${({ theme }) => theme.breakpoints.tablet} {
        height: 40%;
        padding: 30px 40px;
      }

      @media ${({ theme }) => theme.breakpoints.desktop} {
        height: 30%;
      }
    `}
`;

const StyledTitle = styled(Title)`
  font-size: ${({ theme }) => theme.font.size.s};
  max-width: ${({ name, url }) => (name === 'true' && url === '/offers' ? '100%' : '180px')};
  margin: 0;
  @media ${({ theme }) => theme.breakpoints.mobile} {
    font-size: 1.8rem;
  }

  @media ${({ theme }) => theme.breakpoints.tablet} {
    ${({ url }) =>
      url === '/offers' &&
      css`
        font-size: ${({ theme }) => theme.font.size.m};
      `};
  }
  @media ${({ theme }) => theme.breakpoints.desktop} {
    ${({ url }) =>
      url === '/offers' &&
      css`
        font-size: ${({ theme }) => theme.font.size.advenTitleMobile};
      `};
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: ${({ url }) => (url === '/offers' ? '210px' : '50%')};
  object-fit: cover;
  border-radius: 15px 15px 0 0;
  height: 55%;

  @media ${({ theme }) => theme.breakpoints.mobile} {
    height: 55%;
  }

  @media ${({ theme }) => theme.breakpoints.tablet} {
    height: 50%;
  }

  @media ${({ theme }) => theme.breakpoints.desktop} {
    height: 70%;
  }

  @media ${({ theme }) => theme.breakpoints.mobile} {
    ${({ url }) =>
      url === '/offers' &&
      css`
        height: 65%;
      `};
  }

  @media ${({ theme }) => theme.breakpoints.tablet} {
    ${({ url }) =>
      url === '/offers' &&
      css`
        height: 60%;
      `};
  }

  @media ${({ theme }) => theme.breakpoints.desktop} {
    ${({ url }) =>
      url === '/offers' &&
      css`
        height: 70%;
      `};
  }
`;

const StyledButton = styled(Button)`
  width: 100%;
  margin-top: 20px;

  @media ${({ theme }) => theme.breakpoints.desktop} {
    max-width: 50px;
    margin: 0;
  }

  ${({ url }) =>
    url === '/offers' &&
    css`
      margin-top: 20px;
      width: 100%;

      @media ${({ theme }) => theme.breakpoints.desktop} {
        max-width: 50px;
        margin-top: 0;
      }
    `}
`;

const CardOffer = ({ item }) => {
  const { id, name, price, bedrooms, bathrooms, size, location, image } = item;
  const url = useLocation().pathname;

  return (
    <Context.Consumer>
      {({ handleModal }) => (
        <StyledWrapper url={url}>
          <StyledImage src={image} alt={name} url={url} />
          <StyledContentWrapper main url={url}>
            <StyledContentWrapper title="true">
              <StyledTitle name="true" url={url}>
                {name}
              </StyledTitle>
              <StyledTitle url={url}>{`${price} $`}</StyledTitle>
            </StyledContentWrapper>
            <StyledContentWrapper info url={url}>
              <OfferIcon bed>{bedrooms}</OfferIcon>
              <OfferIcon bath>{bathrooms}</OfferIcon>
              <OfferIcon square>{`${size} sqrt`}</OfferIcon>
            </StyledContentWrapper>
            <StyledContentWrapper location url={url}>
              <OfferIcon map>{location}</OfferIcon>
              <StyledButton offer url={url} onClick={(e) => handleModal(e)} id={id}>
                View
              </StyledButton>
            </StyledContentWrapper>
          </StyledContentWrapper>
        </StyledWrapper>
      )}
    </Context.Consumer>
  );
};

CardOffer.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.string,
    bedrooms: PropTypes.number,
    bathrooms: PropTypes.number,
    size: PropTypes.number,
    location: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};

export default CardOffer;
