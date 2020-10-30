import React from 'react';
import styled, { css } from 'styled-components';
import Title from 'components/atoms/Title';
import Paragraph from 'components/atoms/Paragraph';
import { ReactComponent as Map } from 'assets/map-marker-alt-solid.svg';

const StyledContentWrapper = styled.div`
  display: flex;
  justify-content: ${({ start }) => (start ? 'flex-start' : 'center')};
  padding: ${({ start }) => (start ? '10px 0' : '0')};
`;

const StyledTitle = styled(Title)`
  margin-bottom: 40px;
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
`;

const CompanyInfo = () => (
  <>
    <StyledContentWrapper>
      <StyledTitle>Logo</StyledTitle>
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
