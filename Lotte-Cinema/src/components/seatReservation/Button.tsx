import styled from '@emotion/styled';

import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'secondary';
  children: ReactNode;
}
const Button = ({ children, variant = 'default', ...props }: ButtonProps) => {
  return (
    <S.BtnStyle variant={variant} {...props}>
      {children}
    </S.BtnStyle>
  );
};

export default Button;

const CommonButton = styled.button`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 4.4rem;
  padding: 1.1rem 3.7rem;

  border-radius: 4px;

  ${({ theme }) => theme.typographies.n_head03_reg};
`;

const S = {
  BtnStyle: styled(CommonButton)<{ variant: 'default' | 'secondary' }>`
    color: ${({ variant, theme }) => (variant === 'default' ? theme.colors.WHITE100 : theme.colors.BLACK100)};

    background-color: ${({ variant, theme }) => (variant === 'default' ? theme.colors.RED02 : theme.colors.WHITE100)};
    border: ${({ variant, theme }) => (variant === 'secondary' ? `1px solid ${theme.colors.BLACK100}` : 'none')};
  `,
};
