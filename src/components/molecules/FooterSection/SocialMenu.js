import React from 'react';
import styled from 'styled-components';
import SocialLink from 'components/atoms/SocialLink';

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

  @media ${({ theme }) => theme.breakpoints.desktop} {
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
