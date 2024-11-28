import styled from '@emotion/styled';

import { ReactNode } from 'react';

interface SelectButtonProps {
  children: ReactNode;
  selectedNum: number;
}

const SelectButton = ({ children, selectedNum }: SelectButtonProps) => {
  return (
    <S.Wrapper>
      <S.Text>{children}</S.Text>
      <S.SelectedNum>({selectedNum})</S.SelectedNum>
    </S.Wrapper>
  );
};

const S = {
  Wrapper: styled.button`
    display: flex;
    gap: 0.4rem;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 4.5rem;

    color: ${({ theme }) => theme.colors.WHITE100};

    background-color: ${({ theme }) => theme.colors.RED02};
    border-radius: 4px;
  `,
  Text: styled.span`
    ${({ theme }) => theme.typographies.n_head03_reg}
  `,
  SelectedNum: styled.span`
    ${({ theme }) => theme.typographies.r_body01}
  `,
};

export default SelectButton;
