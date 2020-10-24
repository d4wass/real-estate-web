import React from 'react';
import styled, { css } from 'styled-components';
import Button from 'components/atoms/Button';
import Title from 'components/atoms/Title';
import Paragraph from 'components/atoms/Paragraph';
import { breakpoints } from 'theme/mainTheme';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* padding: 0 20px; */
  padding-top: 30px;

  @media ${breakpoints.desktop} {
    width: 1460px;
  }

  @media ${breakpoints.mobile} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    ${({ column }) =>
      column &&
      css`
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
      `}
  }
`;

const StyledTitle = styled(Title)`
  margin-bottom: 20px;

  @media ${breakpoints.mobile} {
    font-size: 2.5rem;
  }
`;

const StyledParagraph = styled(Paragraph)`
  @media ${breakpoints.mobile} {
    text-align: start;
    font-size: 1.4rem;
  }
`;

const StyledButton = styled(Button)`
  @media ${breakpoints.mobile} {
    width: 20%;
  }
`;

const Register = () => (
  <StyledWrapper>
    <StyledWrapper column>
      <StyledTitle center>Become a Real-estate agent?</StyledTitle>
      <StyledParagraph center>
        Create an account and refer your Neighbor&apos;s or friend become a agent
      </StyledParagraph>
    </StyledWrapper>
    <StyledButton register>Register now</StyledButton>
  </StyledWrapper>
);

export default Register;
