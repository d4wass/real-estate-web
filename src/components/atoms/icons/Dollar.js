import { ReactComponent as Dollar } from 'assets/dollar-sign-solid.svg';
import styled from 'styled-components';

const StyledDollar = styled(Dollar)`
  height: 40px;
  width: 40px;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    height: 50px;
    width: 50px;
  }

  @media ${({ theme }) => theme.breakpoints.desktop} {
    height: 60px;
    width: 60px;
  }
`;

export default StyledDollar;
