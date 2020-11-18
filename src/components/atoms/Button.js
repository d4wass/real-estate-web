import styled, { css } from 'styled-components';

const Button = styled.button`
  cursor: pointer;

  ${({ closeOfferBtn }) =>
    closeOfferBtn &&
    css`
      align-self: flex-end;
      height: 30px;
      width: 30px;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.colors.green};
      color: #fff;
      border: none;
      font-size: 1.5rem;
      font-weight: 700;
    `}

  ${({ offerbtn }) =>
    offerbtn &&
    css`
      border-radius: 20px;
      padding: 15px 20px;
      width: 250px;
      background-color: ${({ theme }) => theme.colors.green};
      color: #fff;
      border: none;
      font-weight: ${({ theme }) => theme.font.weight.bold};
      font-size: ${({ theme }) => theme.font.size.m};
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      outline: none;
    `}

  ${({ header }) =>
    header &&
    css`
      padding: 10px;
      border-radius: 50%;
      border: 2px solid ${({ theme }) => theme.colors.orange};
      background-color: ${({ theme }) => theme.colors.orange};
      font-size: 1em;
      font-weight: 700;
      color: #fff;
      display: flex;
      justify-content: center;
      outline: none;
    `}

  ${({ offer }) =>
    offer &&
    css`
      width: 50px;
      font-size: ${({ theme }) => theme.font.size.xxs};
      font-weight: ${({ theme }) => theme.font.weight.bold};
      padding: 10px;
      border-radius: 40px;
      background-color: ${({ theme }) => theme.colors.green};
      color: ${({ theme }) => theme.colors.white};
      border: none;

      @media ${({ theme }) => theme.breakpoints.desktop} {
        width: 50px;
      }
    `}

    ${({ register }) =>
    register &&
    css`
      border-radius: 10px;
      background-color: ${({ theme }) => theme.colors.blue};
      padding: 20px 0;
      width: 70%;
      color: #fff;
      font-weight: ${({ theme }) => theme.font.weight.bold};
      border: none;
      margin-top: 30px;
    `}

    ${({ subscribe }) =>
    subscribe &&
    css`
      border-radius: 10px;
      background-color: ${({ theme }) => theme.colors.orange};
      padding: 15px 20px;
      color: #fff;
      font-weight: ${({ theme }) => theme.font.weight.bold};
      border: none;
    `}
`;

export default Button;
