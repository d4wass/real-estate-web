import React from 'react';
import styled, { css } from 'styled-components';
import Paragraph from 'components/atoms/Paragraph';
import { ReactComponent as Map } from 'assets/map-marker-alt-solid.svg';
import Logo from 'components/atoms/Logo';

const StyledContentWrapper = styled.div`
  display: flex;
  justify-content: ${({ start }) => (start ? 'flex-start' : 'center')};
  align-items: ${({ start }) => start && 'center'};
  margin-bottom: 30px;
`;

const StyledParagraph = styled(Paragraph)`
  display: flex;
  margin-left: 10px;

  ${({ reserved }) =>
    reserved &&
    css`
      justify-content: center;
      margin: 0;
      font-size: 1rem;
    `}
`;

const StyledMap = styled(Map)`
  height: 30px;
  width: 30px;
  color: #f78057;
`;

const CompanyInfo = () => (
  <>
    <StyledContentWrapper>
      <Logo color="#000" />
    </StyledContentWrapper>
    <StyledContentWrapper>
      <Paragraph>
        Logo is wonderful platform for real-eastate business, here you get easy way to find out your
        best apartment and best Agents.
      </Paragraph>
    </StyledContentWrapper>
    <StyledContentWrapper start>
      <StyledMap />
      <StyledParagraph>info.logo@gmail.com</StyledParagraph>
    </StyledContentWrapper>
    <StyledContentWrapper start>
      <StyledMap />
      <StyledParagraph>59 West 46th Street, New York City.</StyledParagraph>
    </StyledContentWrapper>
  </>
);

export default CompanyInfo;
