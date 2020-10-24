import styled, { css } from 'styled-components';
import { theme, breakpoints } from 'theme/mainTheme';

const Button = styled.button`
  cursor: pointer;

  ${({ header }) =>
    header &&
    css`
      padding: 10px;
      border-radius: 50%;
      border: 2px solid orange;
      background-color: orange;
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
      font-size: ${theme.fontSize.xxs};
      font-weight: ${theme.bold};
      padding: 10px;
      border-radius: 40px;
      background-color: ${({ color }) => (color ? `${color}` : `${theme.iconBgColors.green}`)};
      color: #fff;
      border: none;

      @media ${breakpoints.desktop} {
        width: 50px;
      }
    `}

    ${({ register }) =>
    register &&
    css`
      border-radius: 10px;
      background-color: ${theme.iconBgColors.blue};
      padding: 20px 0;
      width: 70%;
      color: #fff;
      font-weight: ${theme.bold};
      border: none;
      margin-top: 30px;
    `}

    ${({ subscribe }) =>
    subscribe &&
    css`
      border-radius: 10px;
      background-color: ${theme.subscribeBtnColor};
      padding: 15px 20px;
      color: #fff;
      font-weight: ${theme.bold};
      border: none;
    `}
`;

export default Button;
