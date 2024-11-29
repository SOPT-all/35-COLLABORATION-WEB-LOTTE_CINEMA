import styled from '@emotion/styled';

import { ReactNode } from 'react';

interface MobileLayoutProps {
  children: ReactNode;
}

const MobileLayout = ({ children }: MobileLayoutProps) => {
  return (
    <S.Wrapper role="main" aria-label="모바일 뷰">
      <S.Layout>{children}</S.Layout>
    </S.Wrapper>
  );
};

export default MobileLayout;

const S = {
  Wrapper: styled.div`
    display: flex;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.GRAY03};
  `,
  Layout: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-width: 360px;
    max-width: 430px;
    min-height: 100vh;

    background-color: ${({ theme }) => theme.colors.WHITE100};

    & > main {
      width: 100%;
    }
  `,
};
