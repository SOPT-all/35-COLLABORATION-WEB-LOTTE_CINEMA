import styled from '@emotion/styled';

import { ImgSeatsCheckDefault } from '@/assets/svg';

const SeatInfo = () => {
  return (
    <S.Wrapper>
      <ImgSeatsCheckDefault width={204} />
      <S.Seat>
        잔여좌석<span>75</span>/77석
      </S.Seat>
    </S.Wrapper>
  );
};

const S = {
  Wrapper: styled.div`
    padding: 2.4rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.3rem;
  `,
  Seat: styled.p`
    ${({ theme }) => theme.typographies.n_body02_reg}

    & > span {
      ${({ theme }) => theme.typographies.n_head03_bold}
      color: ${({ theme }) => theme.colors.GREEN};
      margin-left: 0.9rem;
      margin-right: 0.2rem;
    }
  `,
};
export default SeatInfo;
