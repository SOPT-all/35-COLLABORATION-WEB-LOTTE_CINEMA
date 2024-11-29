import styled from '@emotion/styled';

import { RefCallback } from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';

import Header from '@/components/commons/header/Header';
import MobileLayout from '@/components/mobileLayout/MobileLayout';
import MiniMap from '@/components/seatReservation/MiniMap';
import SeatReserveInfo from '@/components/seatReservation/SeatReserveInfo';
import SeatTableBody from '@/components/seatReservation/SeatTableBody';

const SeatReservation = () => {
  const largeMapRef = useRef<HTMLDivElement>(null);
  const miniMapViewportRef = useRef<HTMLDivElement>(null);
  const [viewport, setViewport] = useState({ left: 0, width: 0 });

  const largeMapWidth = 430; // 큰 좌석표의 너비
  const miniMapWidth = 50; // 미니맵의 너비

  const updateViewport = useCallback(() => {
    if (largeMapRef.current) {
      const scale = miniMapWidth / largeMapWidth;
      const viewportLeft = largeMapRef.current.scrollLeft * scale;
      const viewportWidth = largeMapRef.current.clientWidth * scale;
      setViewport({ left: viewportLeft, width: viewportWidth });
    }
  }, []);

  useEffect(() => {
    // 첫 번째 렌더링 시 viewport 초기화
    updateViewport();

    // scroll 이벤트 리스너 등록
    const largeMap = largeMapRef.current;
    if (largeMap) {
      largeMap.addEventListener('scroll', updateViewport);
    }

    return () => {
      if (largeMap) largeMap.removeEventListener('scroll', updateViewport);
    };
  }, [updateViewport]);

  const reservatedNumber = 2;
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
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
      <S.MiniMapWrapper>
        <MiniMap selectedSeats={selectedSeats} miniMapViewportRef={miniMapViewportRef} viewport={viewport} />
      </S.MiniMapWrapper>

      <S.SeatReserveLayout>
        <Header title="좌석 선택" />
        <SeatTableBody
          setLargeMapRef={largeMapRef}
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
  MiniMapWrapper: styled.div`
    position: absolute;
  `,
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
