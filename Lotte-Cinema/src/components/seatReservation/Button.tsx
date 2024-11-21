import styled from '@emotion/styled';

import { ButtonHTMLAttributes, ReactElement, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'secondary';
  children: ReactNode;
  icon?: ReactElement;
}
const Button = ({ children, icon, ...props }: ButtonProps) => {
  return (
    <S.BtnStyleSecondary {...props}>
      {icon}
      {children}
    </S.BtnStyleSecondary>
  );
};

export default Button;

const CommonButton = styled.button`
  width: 15.7rem;
  height: 4.4rem;
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  padding: 1.1rem 3.7rem;
  border-radius: 4px;

  ${({ theme }) => theme.typographies.n_head03_reg};
`;

const S = {
  BtnStyleDefault: styled(CommonButton)`
    background-color: ${({ theme }) => theme.colors.RED02};
    color: ${({ theme }) => theme.colors.WHITE100};
  `,
  BtnStyleSecondary: styled(CommonButton)`
    color: ${({ theme }) => theme.colors.BLACK100};
    border: solid 1px;
  `,
};
