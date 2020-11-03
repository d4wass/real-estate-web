import styled, { css } from 'styled-components';
import { theme, breakpoints } from 'theme/mainTheme';

const Title = styled.h1`
  font-size: ${theme.fontSize.l};
  color: ${theme.fontTitleColor};
  margin: 10px 0;
  letter-spacing: -0.025em;

  @media ${breakpoints.tablet} {
    font-size: ${theme.fontSize.xl};
  }

  ${({ header }) =>
    header &&
    css`
      font-size: ${theme.fontSize.xl};
      font-weight: ${theme.bold};
      width: 80%;
      margin: 0;
      color: #fff;
      align-self: center;

      @media ${breakpoints.tablet} {
        font-size: 8rem;
      }
    `}

  ${({ card }) =>
    card &&
    css`
      font-size: ${theme.fontSize.m};
      font-weight: ${theme.bold};
      margin: 20px 0;
      text-align: center;

      @media ${breakpoints.tablet} {
        font-size: 3rem;
      }
    `}
`;

export default Title;
