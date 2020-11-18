import styled, { css } from 'styled-components';
// import { theme, breakpoints } from 'theme/mainTheme';

const Paragraph = styled.p`
  font-weight: ${({ theme }) => theme.font.weight.light};
  font-size: ${({ theme }) => theme.font.size.s};
  color: ${({ theme }) => theme.colors.grey};
  line-height: 2rem;
  text-align: ${({ center }) => (center ? 'center' : 'start')};

  @media ${({ theme }) => theme.breakpoints.tablet} {
    line-height: 3rem;
  }

  @media ${({ theme }) => theme.breakpoints.desktop} {
    line-height: 3rem;
  }

  ${({ card }) =>
    card &&
    css`
      color: ${({ theme }) => theme.colors.grey};
      font-size: ${({ theme }) => theme.font.size.xs};
      text-align: center;

      @media ${({ theme }) => theme.breakpoints.tablet} {
        ${({ theme }) => theme.font.size.s};
      }
    `}
`;

export default Paragraph;
