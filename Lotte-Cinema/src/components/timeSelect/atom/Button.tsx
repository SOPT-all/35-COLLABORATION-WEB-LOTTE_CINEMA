import styled from '@emotion/styled';

import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  $selected: boolean;
  children: ReactNode;
  $isChip?: boolean;
}

const Button = ({ children, $selected, $isChip = false, ...props }: ButtonProps) => {
  return (
    <S.Button $selected={$selected} $isChip={$isChip} {...props}>
      {children}
    </S.Button>
  );
};
export default Button;

const S = {
  Button: styled.button<{ $selected: boolean; $isChip: boolean }>`
    text-align: center;
    cursor: pointer;

    ${({ $isChip, theme }) => ($isChip ? theme.typographies.n_body03_reg : theme.typographies.n_body02_reg)};

    color: ${({ theme, $selected }) => ($selected ? theme.colors.RED02 : theme.colors.GRAY09)};

    ${({ $isChip, $selected, theme }) =>
      $isChip
        ? `
          border: 1px solid ${$selected ? theme.colors.RED02 : theme.colors.GRAY03};
          border-radius: 2rem;
          padding: 0.8rem 1.2rem;
        `
        : `
          border-bottom: 2px solid ${$selected ? theme.colors.RED02 : theme.colors.WHITE100};
          padding: 1.2rem 0.2rem 1.2rem 0;
          margin-right: 0.3rem;
        `};
  `,
};
