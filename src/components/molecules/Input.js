import React, { useState } from 'react';
import styled from 'styled-components';
import Button from 'components/atoms/Button';
import { ReactComponent as PaperPlane } from 'assets/paper-plane-solid.svg';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 10px;
  padding: 10px;

  @media ${({ theme }) => theme.breakpoints.mobile} {
    flex-direction: row;
    align-items: center;
  }
`;

const StyledInputWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 30px;
`;

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  position: absolute;
  top: calc(50% - 10px);
  left: 15px;
  font-size: 13px;
  color: #707070;
  transition: 0.3s;
`;

const StyledPaperPlane = styled(PaperPlane)`
  height: 20px;
  width: 20px;
  margin-right: 20px;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  position: absolute;
  border: none;
  padding: 10px;

  &:focus + ${StyledLabel} {
    opacity: 0;
  }

  &:valid + ${StyledLabel} {
    opacity: 0;
  }
`;

const StyledButton = styled(Button)`
  margin-top: 10px;

  @media ${({ theme }) => theme.breakpoints.mobile} {
    margin-top: 0;
  }
`;

const Input = () => {
  const [email, setEmail] = useState('');

  return (
    <StyledWrapper>
      <StyledInputWrapper>
        <StyledInput value={email} onChange={(e) => setEmail(e.target.value)} required />
        <StyledLabel>
          <StyledPaperPlane />
          example@gmail.com
        </StyledLabel>
      </StyledInputWrapper>
      <StyledButton subscribe>Subscribe</StyledButton>
    </StyledWrapper>
  );
};

export default Input;
