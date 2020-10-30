import React, { useRef } from 'react';
import gsap from 'gsap';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Paragraph from 'components/atoms/Paragraph';
import Title from 'components/atoms/Title';
import Icon from 'components/atoms/Icon';
import { breakpoints, theme } from 'theme/mainTheme';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: #fff;
  box-shadow: 0px 3px 18px -10px rgba(120, 120, 120, 1);
  border-radius: 10px;
  padding: 20px;
  max-width: 75%;
  height: 290px;
  margin: 10px;
  cursor: pointer;

  @media ${breakpoints.mobile} {
    height: 300px;
    margin: 20px;
  }

  @media ${breakpoints.tablet} {
    height: 350px;
  }

  @media ${breakpoints.desktop} {
    height: 400px;
    width: 400px;
    padding: 20px 70px;
  }
`;

const Card = ({ title, param, bgColor, children, id }) => {
  const card = useRef(null);

  gsap.set(card.current, { autoAlpha: 1 });
  const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' } });

  const handleExpand = (e) => {
    const cardId = e.target.id;

    const [cardIcon, cardTitle, cardParam] = card.current.children;
    const [cardIconPath] = cardIcon.children[0].children;

    if (id === cardId) {
      tl.fromTo(
        card.current,
        { scale: 1, backgroundColor: '#fff' },
        { scale: 1.1, backgroundColor: `${bgColor}`, duration: 0.3 },
      )
        .fromTo(cardIconPath, { fill: '#fff' }, { fill: `${bgColor}`, duration: 0 })
        .fromTo(
          cardIcon,
          { backgroundColor: `${bgColor}`, borderRadius: 50 },
          { backgroundColor: '#fff', duration: 0 },
        )
        .fromTo(cardTitle, { color: `${theme.fontTitleColor}` }, { color: '#fff', duration: 0 })
        .fromTo(cardParam, { color: `${theme.fontParamColor}` }, { color: '#fff', duration: 0 });
    }
  };

  const handleShrink = (e) => {
    const cardId = e.target.id;

    const [cardIcon, cardTitle, cardParam] = card.current.children;
    const [cardIconPath] = cardIcon.children[0].children;

    if (id === cardId) {
      tl.fromTo(
        card.current,
        { scale: 1.1, backgroundColor: `${bgColor}` },
        { scale: 1, backgroundColor: '#fff', duration: 0.3 },
      )
        .fromTo(cardIconPath, { fill: `${bgColor}` }, { fill: '#fff', duration: 0 })
        .fromTo(
          cardIcon,
          { backgroundColor: '#fff', borderRadius: 50 },
          { backgroundColor: `${bgColor}`, duration: 0 },
        )
        .fromTo(cardTitle, { color: '#fff' }, { color: `${theme.fontTitleColor}`, duration: 0 })
        .fromTo(cardParam, { color: '#fff' }, { color: `${theme.fontParamColor}`, duration: 0 });
    }
  };

  return (
    <StyledWrapper
      ref={card}
      id={id}
      onMouseEnter={(e) => handleExpand(e)}
      onMouseLeave={(e) => handleShrink(e)}
    >
      <Icon bgColor={bgColor} id={id}>
        {children}
      </Icon>
      <Title card id={id}>
        {title}
      </Title>
      <Paragraph card id={id}>
        {param}
      </Paragraph>
    </StyledWrapper>
  );
};

Card.propTypes = {
  children: PropTypes.oneOf(['img', 'svg']).isRequired,
  title: PropTypes.string.isRequired,
  param: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Card;
