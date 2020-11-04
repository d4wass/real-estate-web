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
  align-self: flex-start;
  margin-right: 20px;
`;

const StyledTitle = styled(Title)`
  font-size: ${theme.fontSize.m};
  margin: 0 0 10px 0;

  @media ${breakpoints.mobile} {
    margin-bottom: 10px;
    font-size: ${theme.fontSize.advenTitleMobile};
  }

  @media ${breakpoints.tablet} {
    font-size: ${theme.fontSize.l};
  }
`;

const StyledParagraph = styled(Paragraph)`
  font-size: ${theme.fontSize.xs};

  @media ${breakpoints.mobile} {
    font-size: ${theme.fontSize.s};
  }
`;

const StyledSVG = styled(Home, Percent, Docs)`
  height: 20px;
  width: 20px;

  @media ${breakpoints.mobile} {
    height: 25px;
    width: 25px;
  }

  @media ${breakpoints.tablet} {
    height: 30px;
    width: 30px;
  }
`;

const StyledIcon = styled(Icon)`
  @media ${breakpoints.mobile} {
    height: 80px;
    width: 80px;
    margin-bottom: 0px;
  }
`;

const Adventage = ({ color, icon, title }) => (
  <StyledWrapper>
    <StyledIconWrapper>
      <StyledIcon bgColor={color} adventage>
        {icon === 'home' && <StyledSVG as={Home} />}
        {icon === 'percent' && <StyledSVG as={Percent} />}
        {icon === 'docs' && <StyledSVG as={Docs} />}
      </StyledIcon>
    </StyledIconWrapper>
    <div>
      <StyledTitle>{title}</StyledTitle>
      <StyledParagraph>
        {icon === 'home' && 'We offer our customers for Property Insurance for their better life'}
        {icon === 'percent' && 'You get may type facilities specially tax adventage is one of them'}
        {icon === 'docs' && 'We give you lowest commission and many more'}
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
