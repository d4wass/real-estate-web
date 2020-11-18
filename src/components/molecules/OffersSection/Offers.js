import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import gsap from 'gsap';
import styled from 'styled-components';
import CardOffer from 'components/molecules/OffersSection/CardOffer';
import Context from 'context/context';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledContentWrapper = styled.div`
  display: flex;
  visibility: visible;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media ${({ theme }) => theme.breakpoints.mobile} {
    display: grid;
    grid-template-columns: 45% 45%;
    grid-temptale-rows: 630px;
    gap: 15px 15px;
  }

  @media ${({ theme }) => theme.breakpoints.tablet} {
    padding: 0 30px;
  }

  @media ${({ theme }) => theme.breakpoints.desktop} {
    grid-template-columns: 340px 340px 340px 340px;
    grid-template-rows: 630px;
    padding: 0;
  }
`;

const Offers = ({ buttonState }) => {
  const convertedBtnState = JSON.stringify(buttonState);
  const wrapper = useRef(null);

  useEffect(() => {
    const elements = wrapper.current.childNodes;

    gsap.set(elements, { autoAlpha: 0 });
    const tl = gsap.timeline({
      defaults: { ease: 'power3.easeOut' },
    });

    tl.to(wrapper.current, { css: { visibility: 'visible' }, duration: 0 });
    tl.fromTo(elements, { x: '-=20' }, { autoAlpha: 1, x: '+=20', duration: 0.3, stagger: 0.1 });
  }, [convertedBtnState]);

  return (
    <Context.Consumer>
      {({ apartments, isFilterActive, filteredApartments }) => (
        <StyledWrapper>
          <StyledContentWrapper ref={wrapper}>
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

Offers.propTypes = {
  forwardRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }).isRequired,
  buttonState: PropTypes.objectOf(PropTypes.bool),
};

Offers.defaultProps = {
  buttonState: {
    Villa: false,
    Apartment: false,
    Studio: false,
    House: false,
  },
};

export default Offers;
