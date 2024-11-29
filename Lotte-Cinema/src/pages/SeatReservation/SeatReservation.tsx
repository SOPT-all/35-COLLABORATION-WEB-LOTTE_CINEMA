import styled from '@emotion/styled';


import { useLayoutEffect } from 'react';
import { useRef, useState } from 'react';

import { useLocation } from 'react-router-dom';

import Header from '@/components/commons/header/Header';
import MobileLayout from '@/components/mobileLayout/MobileLayout';
import MiniMap from '@/components/seatReservation/MiniMap';
import SeatReserveInfo from '@/components/seatReservation/SeatReserveInfo';
import SeatTableBody from '@/components/seatReservation/SeatTableBody';

const SeatReservation = () => {

  const largeMapRef = useRef<HTMLDivElement>(null);
  const miniMapViewportRef = useRef<HTMLDivElement>(null);
  const miniMapRef = useRef<HTMLDivElement>(null);
  const [viewport, setViewport] = useState({ left: 0, width: 0 });

  const largeMapWidth = 230; // 큰 좌석표의 너비
  const miniMapWidth = 40; // 미니맵의 너비

  const updateViewport = () => {
    if (!largeMapRef.current) return;

    const scale = miniMapWidth / largeMapWidth;
    const viewportLeft = largeMapRef.current.scrollLeft * scale;
    const viewportWidth = largeMapRef.current.clientWidth * scale;

    setViewport({ left: viewportLeft, width: viewportWidth });
  };

  useLayoutEffect(() => {
    updateViewport();

    const largeMap = largeMapRef.current;
    if (largeMap) {
      largeMap.addEventListener('scroll', updateViewport);
    }

    return () => {
      if (largeMap) largeMap.removeEventListener('scroll', updateViewport);
    };
  }, []);


  const location = useLocation();

  const movie = {
    movieId: location.state.movieId,
    name: location.state.name,
    format: location.state.format,
  };

  const reservatedNumber = {
    total: location.state.counts.adult + location.state.counts.teen + location.state.counts.senior,
    adult: location.state.counts.adult,
    teen: location.state.counts.teen,
    senior: location.state.counts.senior,
  };


  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const handleClickSeat = (seatId: string) => {
    setSelectedSeats((prev) => {
      if (prev.includes(seatId)) {
        return prev.filter((id) => id !== seatId);
      }

      if (prev.length < reservatedNumber.total) {
        return [...prev, seatId];
      }
      return prev;
    });
  };

  return (
    <MobileLayout>
      <S.MiniMapWrapper>
        <MiniMap
          miniMapRef={miniMapRef}
          selectedSeats={selectedSeats}
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
          reservatedNumber={reservatedNumber.total}
          movie={movie}
        />
        <S.SeatReserveInfoWrapper>
          <SeatReserveInfo movie={movie} selectedSeats={selectedSeats} reservatedNumber={reservatedNumber} />
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
