import styled from '@emotion/styled';

import { ReactNode } from 'react';

interface NextButtonProps {
  children: ReactNode;
  isActive: boolean;
  onClick: () => void;
}

const NextButton = ({ children, isActive, onClick }: NextButtonProps) => {
  return (
    <S.Button onClick={onClick} $isActive={isActive} disabled={!isActive}>
      {children}
    </S.Button>
  );
};

const S = {
  Button: styled.button<{ $isActive: boolean }>`
    width: 100%;
    height: 4.5rem;
    border-radius: 0.4rem;
    ${({ theme }) => theme.typographies.n_head04}
    color: ${({ theme }) => theme.colors.WHITE100};
    background-color: ${({ theme, $isActive }) => ($isActive ? theme.colors.RED02 : theme.colors.GRAY09)};
    cursor: ${({ $isActive }) => ($isActive ? 'pointer' : 'not-allowed')};
  `,
};
export default NextButton;
