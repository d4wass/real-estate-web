import React from 'react';
import Context from 'context/context';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Title from 'components/atoms/Title';
import Paragraph from 'components/atoms/Paragraph';
import Button from 'components/atoms/Button';
import OfferIcon from 'components/atoms/OfferIcon';
import { theme, breakpoints } from 'theme/mainTheme';

const StyledBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: hsla(0, 0%, 0%, 0.3);
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 3;
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 20px;
  border-radius: 20px;
  width: 85%;

  @media ${breakpoints.tablet} {
    padding: 30px;
  }

  @media ${breakpoints.desktop} {
    flex-direction: column;
    height: 70%;
    width: 70%;
  }
`;

const StyledContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: ${({ description }) => (description ? '20px 0' : '0')};

  @media ${breakpoints.desktop} {
    flex-direction: ${({ column }) => (column ? 'column' : 'row')};
    justify-content: ${({ space }) => (space ? 'space-around' : 'flex-start')};
    height: ${({ height }) => (height ? `${height}` : '95%')};
    padding: ${({ description }) => (description ? '0 0 30px 0' : '0')};
  }
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 50%;

  @media ${breakpoints.mobile} {
    justify-content: center;
    max-height: 430px;
  }

  @media ${breakpoints.desktop} {
    height: 100%;
    max-height: 100%;
    padding: 30px;
  }
`;

const StyledImage = styled.img`
  object-fit: cover;
  border-radius: 20px;
  width: 100%;
  height: 65%;
  max-height: 220px;

  @media ${breakpoints.mobile} {
    max-height: 290px;
  }

  @media ${breakpoints.desktop} {
    height: 70%;
    max-height: 100%;
  }
`;

const StyledTitle = styled(Title)`
  font-size: ${theme.fontSize.m};

  @media ${breakpoints.desktop} {
    font-size: ${theme.fontSize.l};
    margin: 0 0 30px 0;
  }

  ${({ modalHeader }) =>
    modalHeader &&
    css`
      text-align: center;
      font-size: ${theme.fontSize.l};
    `}
`;

const StyledParagraph = styled(Paragraph)`
  height: 150px;
  overflow: auto;

  @media ${breakpoints.mobile} {
    height: auto;
  }

  @media ${breakpoints.desktop} {
    height: 100%;
    overflow: hidden;
  }
`;

const StyledSpan = styled.span`
  content: '';
  height: 1px;
  width: 95%;
  background-color: #cec9c9;
  align-self: center;
  margin-top: 25px;

  @media ${breakpoints.desktop} {
    display: none;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media ${breakpoints.mobile} {
    justify-content: space-around;
  }
`;

const CardsOfferModal = ({ item }) => {
  const { name, price, bedrooms, bathrooms, size, location, image, description } = item;

  return (
    <Context.Consumer>
      {({ handleModal }) => (
        <StyledBackground>
          <StyledWrapper>
            <Button closeOfferBtn onClick={(e) => handleModal(e)}>
              &times;
            </Button>
            <StyledContentWrapper>
              <StyledContent column space>
                <StyledTitle modalHeader>{name}</StyledTitle>
                <OfferIcon modal dollar>{`${price} $`}</OfferIcon>
                <OfferIcon modal map>
                  {location}
                </OfferIcon>
                <StyledImage src={image} />
                <StyledSpan />
              </StyledContent>
              <StyledContent column>
                <StyledContentWrapper height="45%" column description>
                  <StyledTitle>Property description</StyledTitle>
                  <StyledParagraph>{description}</StyledParagraph>
                </StyledContentWrapper>
                <StyledContentWrapper column height="65%">
                  <StyledTitle>Property features</StyledTitle>
                  <Wrapper>
                    <OfferIcon modal bed>
                      {bedrooms}
                    </OfferIcon>
                    <OfferIcon modal bath>
                      {bathrooms}
                    </OfferIcon>
                    <OfferIcon modal square>{`${size} sqrt`}</OfferIcon>
                  </Wrapper>
                </StyledContentWrapper>
              </StyledContent>
            </StyledContentWrapper>
          </StyledWrapper>
        </StyledBackground>
      )}
    </Context.Consumer>
  );
};

CardsOfferModal.propTypes = {
  item: PropTypes.objectOf(PropTypes.number, PropTypes.string).isRequired,
};

export default CardsOfferModal;
