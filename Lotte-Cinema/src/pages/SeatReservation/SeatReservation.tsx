import styled from '@emotion/styled';

import { useEffect, useRef, useState } from 'react';

import Header from '@/components/commons/header/Header';
import MobileLayout from '@/components/mobileLayout/MobileLayout';
import MiniMap from '@/components/seatReservation/MiniMap';
import SeatReserveInfo from '@/components/seatReservation/SeatReserveInfo';
import SeatTableBody from '@/components/seatReservation/SeatTableBody';

const SeatReservation = () => {
  const largeMapRef = useRef<HTMLDivElement>(null);
  const miniMapRef = useRef<HTMLDivElement>(null);
  const miniMapViewportRef = useRef<HTMLDivElement>(null);
  const [viewport, setViewport] = useState({ left: 0, width: 0 });

  const largeMapWidth = 430; // 큰 좌석표의 너비
  const miniMapWidth = 50; // 미니맵의 너비
  const scale = miniMapWidth / largeMapWidth;

  const updateViewport = () => {
    if (!largeMapRef.current) return;

    const largeMap = largeMapRef.current;
    const visibleWidth = largeMap.clientWidth; // 보이는 화면 크기
    const scrollLeft = largeMap.scrollLeft; // 좌우 스크롤 위치

    setViewport({
      left: scrollLeft * scale,
      width: visibleWidth * scale,
    });
  };

  useEffect(() => {
    const largeMap = largeMapRef.current;
    if (largeMap) {
      updateViewport(); // 초기 뷰포트 설정
      largeMap.addEventListener('scroll', updateViewport);
    }
    return () => {
      if (largeMap) largeMap.removeEventListener('scroll', updateViewport);
    };
  }, []);

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
        <MiniMap
          selectedSeats={selectedSeats}
          miniMapRef={miniMapRef}
          miniMapViewportRef={miniMapViewportRef}
          viewport={viewport}
        />
      </S.MiniMapWrapper>

      <S.SeatReserveLayout>
        <Header title="좌석 선택" />
        <SeatTableBody
          largeMapRef={largeMapRef}
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
