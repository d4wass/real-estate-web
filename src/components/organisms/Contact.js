import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Title from 'components/atoms/Title';
import Input from 'components/molecules/Input';
import Register from 'components/molecules/Register';

const StyledWrapper = styled.div`
  padding: ${({ wrapper }) => (wrapper ? '20px' : '0')};

  @media ${({ theme }) => theme.breakpoints.desktop} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const StyledWrapperBackground = styled.div`
  border-radius: 10px;
  background-color: #38719b;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${({ theme }) => theme.breakpoints.desktop} {
    width: 95vw;
  }
`;

const StyledTitle = styled(Title)`
  color: #ffffff;
  text-align: center;
  margin-bottom: 20px;

  @media ${({ theme }) => theme.breakpoints.mobile} {
    text-align: start;
    max-width: 70%;
  }
`;

const StyledSpan = styled.span`
  font-size: ${({ theme }) => theme.font.size.l};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.colors.orange};

  @media ${({ theme }) => theme.breakpoints.tablet} {
    font-size: ${({ theme }) => theme.font.size.xl};
  }
`;

const Contact = ({ className }) => (
  <StyledWrapper className={className} wrapper>
    <StyledWrapperBackground>
      <StyledTitle>
        Subscribe <StyledSpan>Newsletter</StyledSpan> & get Company News.
      </StyledTitle>
      <Input />
    </StyledWrapperBackground>
    <StyledWrapper>
      <Register />
    </StyledWrapper>
  </StyledWrapper>
);

Contact.propTypes = {
  className: PropTypes.string,
};

Contact.defaultProps = {
  className: 'section',
};

export default Contact;
