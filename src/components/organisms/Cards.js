import React, { useEffect, useRef } from 'react';
import Card from 'components/molecules/Card';
import styled, { css } from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionTitle from 'components/molecules/SectionTitle';
import Dollar from 'components/atoms/icons/Dollar';
import ClipBoard from 'components/atoms/icons/ClipBoard';
import Hands from 'components/atoms/icons/Hands';
import { breakpoints, theme } from 'theme/mainTheme';

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

  @media ${breakpoints.mobile} {
    height: 100vh;
    justify-content: center;

    ${({ invert }) =>
      invert &&
      css`
        max-height: 400px;
        flex-direction: row;
      `}
  }

  @media ${breakpoints.tablet} {
    ${({ invert }) =>
      invert &&
      css`
        padding: 0;
        max-height: 400px;
        flex-direction: row;
      `}
  }

  @media ${breakpoints.desktop} {
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

const Cards = () => {
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
    <StyledWrapper className="cardsSection">
      <SectionTitle center> How it works</SectionTitle>
      <StyledWrapper invert ref={wrapper}>
        <Card
          id="card_1"
          title="Evaluate property"
          param="Evaluated is very important your property buy and sell"
          bgColor={theme.iconBgColors.blue}
        >
          <ClipBoard />
        </Card>
        <Card
          id="card_2"
          title="Meet your Agent"
          param="We are help to you get your best agent for discus"
          bgColor={theme.iconBgColors.orange}
        >
          <Hands />
        </Card>
        <Card
          id="card_3"
          title="Close the deal"
          param="Get to connect with us make your close the deal"
          bgColor={theme.iconBgColors.green}
        >
          <Dollar />
        </Card>
      </StyledWrapper>
    </StyledWrapper>
  );
};

export default Cards;
