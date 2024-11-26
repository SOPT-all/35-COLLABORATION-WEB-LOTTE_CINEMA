import styled from '@emotion/styled';

import { IcArrowRightWhite10 } from '@/assets/svg';

interface BtnProps {
  label: string;
  onClick?: () => void;
}
const ArrowBtn = ({ label, onClick }: BtnProps) => {
  return (
    <S.BtnWrapper onClick={onClick}>
      <S.BtnContainer>
        {label} <IcArrowRightWhite10 width="1.4rem" />
      </S.BtnContainer>
    </S.BtnWrapper>
  );
};

export default ArrowBtn;

const S = {
  BtnWrapper: styled.button`
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    width: 7.1rem;
    padding: 0.2rem 0.5rem;
  `,

  BtnContainer: styled.div`
    ${({ theme }) => theme.typographies.n_body03_reg};
    color: ${({ theme }) => theme.colors.GRAY04};

    display: flex;
    width: 5.8rem;
    align-items: flex-start;
    justify-content: center;
    gap: 0.2rem;
  `,
};
