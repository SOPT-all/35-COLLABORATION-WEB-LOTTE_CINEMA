import styled from '@emotion/styled';

import { ReactNode } from 'react';

import { IcCloseGrayTemp } from '@/assets/svg';

interface PinProps {
  children: ReactNode;
}

const Pin = ({ children }: PinProps) => {
  return (
    <S.Wrapper>
      <S.Text>{children}</S.Text>
      <IcCloseGrayTemp width={14} />
    </S.Wrapper>
  );
};

const S = {
  Wrapper: styled.div`
    display: flex;
    gap: 0.4rem;
    align-items: center;
    padding: 0.6rem 1rem;

    background-color: ${({ theme }) => theme.colors.WHITE100};
    border-radius: 9.9rem;
  `,
  Text: styled.span`
    white-space: nowrap;
    ${({ theme }) => theme.typographies.n_body03_reg}
    color: ${({ theme }) => theme.colors.GRAY14};
  `,
};

export default Pin;
