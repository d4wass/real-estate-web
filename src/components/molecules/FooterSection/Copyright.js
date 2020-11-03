import React from 'react';
import styled from 'styled-components';
import Paragraph from 'components/atoms/Paragraph';

const StyledParagraph = styled(Paragraph)`
  display: flex;
  justify-content: center;
  font-size: 1.2rem;
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 0;
`;

const Copyright = () => (
  <StyledWrapper>
    <StyledParagraph reserved>2020. All Right Reserved by logo.com</StyledParagraph>
  </StyledWrapper>
);

export default Copyright;
