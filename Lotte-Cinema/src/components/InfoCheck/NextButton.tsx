import styled from '@emotion/styled';

import { ReactNode } from 'react';

interface NextButtonProps {
  children: ReactNode;
  isActive: boolean;
}

const NextButton = ({ children, isActive }: NextButtonProps) => {
  return <S.Button $isActive={isActive}>{children}</S.Button>;
};

const S = {
  Button: styled.button<{ $isActive: boolean }>`
    width: 100%;
    height: 4.5rem;
    ${({ theme }) => theme.typographies.n_head04}
    color: ${({ theme }) => theme.colors.WHITE100};
    background-color: ${({ theme, $isActive }) => ($isActive ? theme.colors.RED02 : theme.colors.GRAY09)};
  `,
};
export default NextButton;
