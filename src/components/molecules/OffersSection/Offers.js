import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CardOffer from 'components/molecules/OffersSection/CardOffer';
import { breakpoints } from 'theme/mainTheme';
import { apartments } from 'db';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media ${breakpoints.mobile} {
    display: grid;
    grid-template-columns: 45% 45%;
    grid-temptale-rows: auto;
    gap: 20px 20px;
  }

  @media ${breakpoints.tablet} {
    padding: 0 30px;
  }

  @media ${breakpoints.desktop} {
    grid-template-columns: 350px 350px 350px 350px;
    grid-template-rows: 630px;
  }
`;

gsap.registerPlugin(ScrollTrigger);

const Offers = ({ offers, isFilterActive }) => {
  const wrapper = useRef(null);

  useEffect(() => {
    const elements = wrapper.current.childNodes;
    const btn = document.querySelectorAll('#filter');

    gsap.set([wrapper.current.childNodes], { autoAlpha: 0 });
    const tl = gsap.timeline({
      defaults: { ease: 'power3.easeOut' },
      scrollTrigger: {
        trigger: btn,
      },
    });

    tl.fromTo(elements, { x: '-=20' }, { autoAlpha: 1, x: '+=20', duration: 0.3, stagger: 0.1 });
  });

  return (
    <StyledWrapper>
      <StyledContentWrapper ref={wrapper}>
        {isFilterActive ? (
          offers.map((item) => <CardOffer item={item} key={item.id} ref={wrapper} />)
        ) : (
          <>
            <CardOffer item={apartments[0]} />
            <CardOffer item={apartments[1]} />
            <CardOffer item={apartments[2]} />
            <CardOffer item={apartments[3]} />
          </>
        )}
      </StyledContentWrapper>
    </StyledWrapper>
  );
};

Offers.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object).isRequired,
  isFilterActive: PropTypes.bool,
};

Offers.defaultProps = {
  isFilterActive: false,
};

export default Offers;
