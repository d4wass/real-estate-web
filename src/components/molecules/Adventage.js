import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from 'components/atoms/Icon';
import Title from 'components/atoms/Title';
import Paragraph from 'components/atoms/Paragraph';
import { breakpoints } from 'theme/mainTheme';
import { ReactComponent as Home } from 'assets/home-solid.svg';
import { ReactComponent as Percent } from 'assets/percent-solid.svg';
import { ReactComponent as Docs } from 'assets/copy-regular.svg';

const StyledWrapper = styled.div`
  display: flex;
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
  margin-bottom: 10px;
  font-size: 2.2rem;
`;

const StyledParagraph = styled(Paragraph)`
  font-size: 1.4rem;
  /* line-height: 2rem; */
`;

const StyledHome = styled(Home)`
  height: 35px;
  width: 35px;
`;

const StyledPercent = styled(Percent)`
  height: 35px;
  width: 35px;
`;

const StyledDocs = styled(Docs)`
  height: 35px;
  width: 35px;
`;

const Adventage = ({ color, icon }) => (
  <StyledWrapper>
    <StyledIconWrapper>
      <Icon bgColor={color} adventage>
        {icon === 'home' ? <StyledHome /> : null}
        {icon === 'percent' ? <StyledPercent /> : null}
        {icon === 'docs' ? <StyledDocs /> : null}
      </Icon>
    </StyledIconWrapper>
    <div>
      <StyledTitle>Property Insurance</StyledTitle>
      <StyledParagraph>
        We offer our customers for Property Insurance for their better life
      </StyledParagraph>
    </div>
  </StyledWrapper>
);

Adventage.propTypes = {
  color: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Adventage;
