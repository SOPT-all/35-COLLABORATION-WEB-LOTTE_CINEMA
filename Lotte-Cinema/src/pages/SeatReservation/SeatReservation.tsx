import styled from '@emotion/styled';

import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import Header from '@/components/commons/header/Header';
import MobileLayout from '@/components/mobileLayout/MobileLayout';
import SeatReserveInfo from '@/components/seatReservation/SeatReserveInfo';
import SeatTableBody from '@/components/seatReservation/SeatTableBody';

const SeatReservation = () => {
  // const location = useLocation(); // build 때문에 잠시 주석처리
  const reservatedNumber = 2;
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

  const location = useLocation();
  console.log(location.state);

  const handleClickSeat = (seatId: string) => {
    setSelectedSeats((prev) => {
      if (prev.includes(seatId)) {
        return prev.filter((id) => id !== seatId);
      }

      if (prev.length < reservatedNumber) {
        return [...prev, seatId];
      }
      return prev;
    });
  };

  return (
    <MobileLayout>
      <S.SeatReserveLayout>
        <Header title="좌석 선택" />
        <SeatTableBody
          handleClickSeat={handleClickSeat}
          selectedSeats={selectedSeats}
          reservatedNumber={reservatedNumber}
        />
        <S.SeatReserveInfoWrapper>
          <SeatReserveInfo selectedSeats={selectedSeats} reservatedNumber={reservatedNumber} />
        </S.SeatReserveInfoWrapper>
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

  SeatReserveInfoWrapper: styled.div`
    position: relative;

    & > * {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
    }
  `,
};

export default SeatReservation;
