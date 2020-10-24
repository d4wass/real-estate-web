import React, { useRef, useEffect } from 'react';
import { TweenMax, Power3 } from 'gsap';
import styled from 'styled-components';
import Title from 'components/atoms/Title';
import Background from 'assets/Background.jpg';
import Button from 'components/atoms/Button';
import { ReactComponent as Arrow } from 'assets/arrow-down-solid.svg';

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
  height: 90%;
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
  let title = useRef(null);

  useEffect(() => {
    TweenMax.to(title, 0.8, {
      opacity: 1,
      y: -20,
      ease: Power3.easeOut,
    });
  });

  return (
    <StyledBackground>
      <StyledWrapper>
        <StyledHeadingWrapper>
          <StyledTitle
            ref={(el) => {
              title = el;
            }}
            header
          >
            Easy way to find your dream property
          </StyledTitle>
        </StyledHeadingWrapper>
        <StyledButtonWrapper>
          <Button header>
            <StyledArrow />
          </Button>
        </StyledButtonWrapper>
      </StyledWrapper>
    </StyledBackground>
  );
};

export default Header;
