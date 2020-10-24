import styled, { css } from 'styled-components';
import { theme, breakpoints } from 'theme/mainTheme';

const Paragraph = styled.p`
  font-weight: ${theme.light};
  font-size: ${theme.fontSize.s};
  color: ${theme.fontParamColor};
  line-height: 2rem;
  text-align: ${({ center }) => (center ? 'center' : 'start')};

  @media ${breakpoints.tablet} {
    font-size: ${theme.fontSize.s};
    line-height: 3rem;
  }

  @media ${breakpoints.desktop} {
    line-height: 3rem;
  }

  ${({ card }) =>
    card &&
    css`
      color: ${theme.fontParamColor};
      font-size: ${theme.fontSize.xs};
      text-align: center;

      @media ${breakpoints.tablet} {
        font-size: ${theme.fontSize.s};
      }
    `}
`;

export default Paragraph;
