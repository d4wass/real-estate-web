import { ReactComponent as Hand } from 'assets/handshake-regular.svg';
import styled from 'styled-components';

const StyledHand = styled(Hand)`
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

export default StyledHand;
