import { ReactComponent as Hand } from 'assets/handshake-regular.svg';
import styled from 'styled-components';
import { breakpoints } from 'theme/mainTheme';

const StyledHand = styled(Hand)`
  height: 40px;
  width: 40px;

  @media ${breakpoints.tablet} {
    height: 50px;
    width: 50px;
  }

  @media ${breakpoints.desktop} {
    height: 60px;
    width: 60px;
  }
`;

export default StyledHand;
