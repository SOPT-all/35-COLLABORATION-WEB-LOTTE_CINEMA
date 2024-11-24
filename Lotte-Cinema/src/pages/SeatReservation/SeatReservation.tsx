import styled from '@emotion/styled';

import Header from '@/components/commons/header/Header';
import MobileLayout from '@/components/mobileLayout/MobileLayout';
import SeatReserveInfo from '@/components/seatReservation/SeatReserveInfo';

const SeatReservation = () => {
  return (
    <MobileLayout>
      <S.SeatReserveLayout>
        <Header title={'좌석 선택'} />
        <SeatReserveInfo />
      </S.SeatReserveLayout>
    </MobileLayout>
  );
};

const S = {
  SeatReserveLayout: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
  `,
};

export default SeatReservation;
