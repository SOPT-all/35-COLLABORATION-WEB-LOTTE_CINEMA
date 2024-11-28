import styled from '@emotion/styled';

import { ReactNode } from 'react';

interface SelectButtonProps {
  children: ReactNode;
  selectedNum: number;
  onClick: () => void;
}

const SelectButton = ({ children, onClick, selectedNum }: SelectButtonProps) => {
  const isActive = selectedNum !== 0;

  return (
    <S.Wrapper $isActive={isActive} onClick={onClick} disabled={!isActive}>
      <S.Text>{children}</S.Text>
      <S.SelectedNum>({selectedNum})</S.SelectedNum>
    </S.Wrapper>
  );
};

const S = {
  Wrapper: styled.button<{ $isActive: boolean }>`
    display: flex;
    gap: 0.4rem;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 4.5rem;
    color: ${({ theme, $isActive }) => ($isActive ? theme.colors.WHITE100 : theme.colors.RED02)};
    background-color: ${({ theme, $isActive }) => ($isActive ? theme.colors.RED02 : theme.colors.WHITE100)};
    border-radius: 4px;
    cursor: ${({ $isActive }) => ($isActive ? 'pointer' : 'not-allowed')};
  `,
  Text: styled.span`
    ${({ theme }) => theme.typographies.n_head03_reg}
  `,
  SelectedNum: styled.span`
    ${({ theme }) => theme.typographies.r_body01}
  `,
};

export default SelectButton;
