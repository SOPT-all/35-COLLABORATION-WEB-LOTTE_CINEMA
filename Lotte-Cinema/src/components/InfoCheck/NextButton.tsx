import styled from '@emotion/styled';

import { ReactNode } from 'react';

interface NextButtonProps {
  children: ReactNode;
}

const NextButton = ({ children }: NextButtonProps) => {
  return <S.Button>{children}</S.Button>;
};

const S = {
  Button: styled.button`
    width: 100%;
    height: 4.5rem;
    ${({ theme }) => theme.typographies.n_head04}
    color: ${({ theme }) => theme.colors.WHITE100};
    background-color: ${({ theme }) => theme.colors.GRAY09};
  `,
};
export default NextButton;
