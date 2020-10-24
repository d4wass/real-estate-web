import React from 'react';
import styled from 'styled-components';
import SocialLink from 'components/atoms/SocialLink';
import { breakpoints } from 'theme/mainTheme';

const StyledContentWrapper = styled.div`
  display: flex;
  justify-content: ${({ start }) => (start ? 'flex-start' : 'center')};
  padding: ${({ start }) => (start ? '10px 0' : '0')};
`;

const StyledList = styled.ul`
  width: 100%;
  display: flex;
  list-style: none;
  justify-content: space-around;
  align-items: center;

  @media ${breakpoints.desktop} {
    max-width: 33%;
    align-items: flex-start;
  }
`;

const SocialMenu = () => (
  <StyledContentWrapper>
    <StyledList>
      <SocialLink social="instagram" />
      <SocialLink social="facebook" />
      <SocialLink social="twitter" />
    </StyledList>
  </StyledContentWrapper>
);

export default SocialMenu;
