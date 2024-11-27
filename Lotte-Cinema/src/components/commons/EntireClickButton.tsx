import styled from '@emotion/styled';

import { IcArrowRightGray0910 } from '@/assets/svg';

const EntireClickButton = () => {
  return (
    <S.EntireMovieSelect>
      전체 보기 <IcArrowRightGray0910 height="1rem" width="1rem" />
    </S.EntireMovieSelect>
  );
};

export default EntireClickButton;

export const S = {
  EntireMovieSelect: styled.p`
    padding-right: 1.5rem;
    margin-left: auto;
    color: ${({ theme }) => theme.colors.GRAY09};
    text-align: right;
    ${({ theme }) => theme.typographies.n_body03_med};
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 0.4rem;
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.colors.BLACK100};
    }
  `,
};
