import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from 'components/atoms/Icon';
import Title from 'components/atoms/Title';
import Paragraph from 'components/atoms/Paragraph';
import { breakpoints, theme } from 'theme/mainTheme';
import { ReactComponent as Home } from 'assets/home-solid.svg';
import { ReactComponent as Percent } from 'assets/percent-solid.svg';
import { ReactComponent as Docs } from 'assets/copy-regular.svg';

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;

  @media ${breakpoints.mobile} {
    max-width: 350px;
  }

  @media ${breakpoints.tablet} {
    max-width: 500px;
  }
`;

const StyledIconWrapper = styled.div`
  margin-right: 20px;
`;

const StyledTitle = styled(Title)`
  font-size: 2.5rem;

  @media ${breakpoints.mobile} {
    margin-bottom: 10px;
    font-size: ${theme.fontSize.l};
  }
`;

const StyledParagraph = styled(Paragraph)`
  font-size: ${theme.fontSize.s};
  @media ${breakpoints.mobile} {
    font-size: ${theme.fontSize.m};
  }
  /* line-height: 2rem; */
`;

const StyledHome = styled(Home)`
  height: 25px;
  width: 25px;
  @media ${breakpoints.mobile} {
    height: 35px;
    width: 35px;
  }
`;

const StyledPercent = styled(Percent)`
  height: 25px;
  width: 25px;
  @media ${breakpoints.mobile} {
    height: 35px;
    width: 35px;
  }
`;

const StyledDocs = styled(Docs)`
  height: 25px;
  width: 25px;
  @media ${breakpoints.mobile} {
    height: 35px;
    width: 35px;
  }
`;

const StyledIcon = styled(Icon)`
  @media ${breakpoints.mobile} {
    height: 80px;
    width: 80px;
    margin-bottom: 0px;
  }

  @media ${breakpoints.tablet} {
    height: 80px;
    width: 80px;
    margin-bottom: 0px;
  }
`;

const Adventage = ({ color, icon, title }) => (
  <StyledWrapper>
    <StyledIconWrapper>
      <StyledIcon bgColor={color}>
        {icon === 'home' ? <StyledHome /> : null}
        {icon === 'percent' ? <StyledPercent /> : null}
        {icon === 'docs' ? <StyledDocs /> : null}
      </StyledIcon>
    </StyledIconWrapper>
    <div>
      <StyledTitle>{title}</StyledTitle>
      <StyledParagraph>
        We offer our customers for Property Insurance for their better life
      </StyledParagraph>
    </div>
  </StyledWrapper>
);

Adventage.propTypes = {
  color: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Adventage;
