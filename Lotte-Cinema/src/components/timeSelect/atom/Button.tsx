import styled from '@emotion/styled';

import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  $selected: boolean;
  children: ReactNode;
}

const Button = ({ children, $selected, ...props }: ButtonProps) => {
  return (
    <S.Button $selected={$selected} {...props}>
      {children}
    </S.Button>
  );
};
export default Button;

const S = {
  Button: styled.button<{ $selected: boolean }>`
    color: ${({ theme, $selected }) => ($selected ? theme.colors.RED02 : theme.colors.GRAY09)};
    text-align: center;
    margin-botton: 0.2rem;
    border-bottom: ${({ $selected, theme }) =>
      $selected ? `2px solid ${theme.colors.RED02}` : `2px solid ${theme.colors.WHITE100}`};
    cursor: pointer;
    padding: 1.2rem 0;
  `,
};
