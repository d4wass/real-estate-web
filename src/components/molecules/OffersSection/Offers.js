import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import CardOffer from 'components/molecules/OffersSection/CardOffer';
import { breakpoints } from 'theme/mainTheme';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Context from 'context/context';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledContentWrapper = styled.div`
  display: flex;
  visibility: hidden;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media ${breakpoints.mobile} {
    display: grid;
    grid-template-columns: 45% 45%;
    grid-temptale-rows: 630px;
    gap: 15px 15px;
  }

  @media ${breakpoints.tablet} {
    padding: 0 30px;
  }

  @media ${breakpoints.desktop} {
    grid-template-columns: 340px 340px 340px 340px;
    grid-template-rows: 630px;
    padding: 0;
  }
`;

gsap.registerPlugin(ScrollTrigger);

const Offers = () => {
  const wrapper = useRef(null);

  useEffect(() => {
    const elements = wrapper.current.childNodes;

    gsap.set([wrapper.current.childNodes], { autoAlpha: 0 });
    const tl = gsap.timeline({
      defaults: { ease: 'power3.easeOut' },
    });

    tl.to(wrapper.current, { css: { visibility: 'visible' }, duration: 0 });
    tl.fromTo(elements, { x: '-=20' }, { autoAlpha: 1, x: '+=20', duration: 0.3, stagger: 0.1 });
  });

  return (
    <Context.Consumer>
      {({ apartments, isFilterActive, filteredApartments }) => (
        <StyledWrapper>
          <StyledContentWrapper ref={wrapper} id="offerWrapper">
            {isFilterActive ? (
              filteredApartments.map((item) => <CardOffer item={item} key={item.id} />)
            ) : (
              <>
                <CardOffer item={apartments[0]} key={apartments[0].id} />
                <CardOffer item={apartments[1]} key={apartments[1].id} />
                <CardOffer item={apartments[2]} key={apartments[2].id} />
                <CardOffer item={apartments[3]} key={apartments[3].id} />
              </>
            )}
          </StyledContentWrapper>
        </StyledWrapper>
      )}
    </Context.Consumer>
  );
};

export default Offers;
