import styled, { css } from 'styled-components';

const Title = styled.h1`
  font-size: ${({ theme }) => theme.font.size.l};
  color: ${({ theme }) => theme.colors.darkblue};
  margin: 10px 0;
  letter-spacing: -0.025em;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    font-size: ${({ theme }) => theme.font.size.xl};
  }

  ${({ header }) =>
    header &&
    css`
      font-size: ${({ theme }) => theme.font.size.xl};
      font-weight: ${({ theme }) => theme.font.weight.bold};
      width: 80%;
      margin: 0;
      color: ${({ theme }) => theme.colors.white};
      align-self: center;

      @media ${({ theme }) => theme.breakpoints.mobile} {
        font-size: 7rem;
      }

      @media ${({ theme }) => theme.breakpoints.tablet} {
        font-size: 9rem;
      }
    `}

  ${({ card }) =>
    card &&
    css`
      font-size: ${({ theme }) => theme.font.size.m};
      font-weight: ${({ theme }) => theme.font.weight.bold};
      margin: 20px 0;
      text-align: center;

      @media ${({ theme }) => theme.breakpoints.tablet} {
        font-size: 3rem;
      }
    `}
`;

export default Title;
