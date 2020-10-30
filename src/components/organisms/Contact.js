import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Title from 'components/atoms/Title';
import Input from 'components/molecules/Input';
import { breakpoints, theme } from 'theme/mainTheme';
import Register from 'components/molecules/Register';

const StyledWrapper = styled.div`
  padding: 20px;

  @media ${breakpoints.desktop} {
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
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

  @media ${breakpoints.desktop} {
    width: 1460px;
  }
`;

const StyledTitle = styled(Title)`
  color: ${({ orange }) => (orange ? '#F78057' : '#ffffff')};
  text-align: center;
  margin-bottom: ${({ orange }) => (orange ? '0px' : '20px')};

  @media ${breakpoints.mobile} {
    text-align: start;
    max-width: 70%;
  }
`;

const StyledSpan = styled.span`
  font-size: ${theme.fontSize.xl};
  font-weight: ${theme.bold};
  color: #f78057;
`;

const Contact = ({ className }) => (
  <StyledWrapper className={className}>
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
