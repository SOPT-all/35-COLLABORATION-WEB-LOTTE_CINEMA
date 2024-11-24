import styled from '@emotion/styled';

import Button from '@/components/seatReservation/Button';

import { ImgLpayLogo } from '@/assets/svg';

const SeatReservePayment = () => {
  return (
    <S.PaymentInfoWrapper>
      <S.TotalPriceWrapper>
        <p>결제금액</p>
        <S.TotalPrice>
          총<p>28,000</p>원
        </S.TotalPrice>
      </S.TotalPriceWrapper>

      <S.PayButtonWrapper>
        <Button variant="default">결제</Button>
        <Button variant="secondary">
          <ImgLpayLogo width={'4.8rem'} />
          결제
        </Button>
      </S.PayButtonWrapper>
    </S.PaymentInfoWrapper>
  );
};

export default SeatReservePayment;

const S = {
  PaymentInfoWrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.3rem;
    width: 100%;
    height: 11.2rem;
    padding: 1.6rem 1.7rem;
    z-index: 1;
    background-color: ${({ theme }) => theme.colors.GRAY01};
  `,
  TotalPriceWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    p {
      ${({ theme }) => theme.typographies.n_body02_med};
    }
  `,

  TotalPrice: styled.div`
    display: flex;
    gap: 0.2rem;
    ${({ theme }) => theme.typographies.n_caption01_reg};
    align-items: center;
    p {
      ${({ theme }) => theme.typographies.r_head01};
    }
  `,

  PayButtonWrapper: styled.div`
    display: flex;
    gap: 1rem;
    width: 100%;
  `,
};
