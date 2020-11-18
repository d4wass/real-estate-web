import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Card from 'components/molecules/CardsSection/Card';
import styled, { css } from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionTitle from 'components/atoms/SectionTitle';
import Dollar from 'components/atoms/icons/Dollar';
import ClipBoard from 'components/atoms/icons/ClipBoard';
import Hands from 'components/atoms/icons/Hands';

gsap.registerPlugin(ScrollTrigger);

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  height: 100%;

  ${({ invert }) =>
    invert &&
    css`
      padding: 0;
    `}

  @media ${({ theme }) => theme.breakpoints.mobile} {
    justify-content: center;
    height: 70vh;

    ${({ invert }) =>
      invert &&
      css`
        max-height: 400px;
        flex-direction: row;
      `}
  }

  @media ${({ theme }) => theme.breakpoints.tablet} {
    height: 100vh;
    ${({ invert }) =>
      invert &&
      css`
        padding: 0;
        max-height: 400px;
        flex-direction: row;
      `}
  }

  @media ${({ theme }) => theme.breakpoints.desktop} {
    height: 100vh;
    ${({ invert }) =>
      invert &&
      css`
        padding: 0;
        max-height: 400px;
        flex-direction: row;
      `}
  }
`;

const Cards = ({ className }) => {
  const wrapper = useRef(null);

  useEffect(() => {
    const elements = wrapper.current.childNodes;

    gsap.set([wrapper.current.childNodes], { autoAlpha: 0 });
    const tl = gsap.timeline({
      defaults: { ease: 'power3.inOut' },
      scrollTrigger: {
        trigger: wrapper.current,
        toggleActions: 'play none none reverse',
      },
    });

    tl.fromTo(elements, { y: '-=100' }, { duration: 0.6, y: '+=100', autoAlpha: 1, stagger: 0.2 });
  });

  return (
    <StyledWrapper className={className} id="cards">
      <SectionTitle center> How it works</SectionTitle>
      <StyledWrapper invert ref={wrapper}>
        <Card
          id="card_1"
          title="Evaluate property"
          param="Evaluated is very important your property buy and sell"
          bgColor="#38719b"
        >
          <ClipBoard />
        </Card>
        <Card
          id="card_2"
          title="Meet your Agent"
          param="We are help to you get your best agent for discus"
          bgColor="#F78057"
        >
          <Hands />
        </Card>
        <Card
          id="card_3"
          title="Close the deal"
          param="Get to connect with us make your close the deal"
          bgColor="#006767"
        >
          <Dollar />
        </Card>
      </StyledWrapper>
    </StyledWrapper>
  );
};

Cards.propTypes = {
  className: PropTypes.string,
};

Cards.defaultProps = {
  className: 'section',
};

export default Cards;
