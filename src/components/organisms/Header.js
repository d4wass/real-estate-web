import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import styled from 'styled-components';
import Title from 'components/atoms/Title';
import Background from 'assets/Background.jpg';
import Button from 'components/atoms/Button';
import { ReactComponent as Arrow } from 'assets/arrow-down-solid.svg';

gsap.registerPlugin(ScrollToPlugin);

const StyledBackground = styled.div`
  background-image: url(${Background});
  background-size: cover;
  background-position: center center;
  height: 100vh;
  position: relative;
`;

const StyledWrapper = styled.div`
  background-color: hsla(0, 0%, 0%, 0.4);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const StyledHeadingWrapper = styled.div`
  height: 85vh;
  padding: 90px 40px 0 40px;
  display: flex;
`;

const StyledButtonWrapper = styled.div`
  align-self: center;
`;

const StyledArrow = styled(Arrow)`
  height: 20px;
  width: 20px;
`;

const StyledTitle = styled(Title)`
  opacity: 0;
`;

const Header = () => {
  const title = useRef(null);
  const button = useRef(null);

  gsap.set(title.current, { autoAlpha: 0 });
  const tl = gsap.timeline({ defaults: { ease: 'power3.easeOut' } });

  const handleClick = () => {
    tl.to(window, { duration: 0.5, scrollTo: { y: '#cards' } });
  };

  useEffect(() => {
    tl.to(title.current, { autoAlpha: 1, y: -20, duration: 1 });
  });

  return (
    <StyledBackground>
      <StyledWrapper>
        <StyledHeadingWrapper>
          <StyledTitle ref={title} header>
            Easy way to find your dream property
          </StyledTitle>
        </StyledHeadingWrapper>
        <StyledButtonWrapper>
          <Button header ref={button} onClick={handleClick}>
            <StyledArrow />
          </Button>
        </StyledButtonWrapper>
      </StyledWrapper>
    </StyledBackground>
  );
};

export default Header;
