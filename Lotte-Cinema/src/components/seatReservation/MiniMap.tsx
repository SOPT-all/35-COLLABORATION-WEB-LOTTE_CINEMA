import styled from '@emotion/styled';

import { RefObject } from 'react';

import { IcSeatDefaultSmall } from '@/assets/svg';

import { SEAT_INFO, SEAT_ROWS } from '@/constants';

interface MiniMapProps {
  selectedSeats: string[];
  miniMapRef: RefObject<HTMLDivElement>;
  miniMapViewportRef: RefObject<HTMLDivElement>;
  viewport: { left: number; width: number };
}

const MiniMap = ({ miniMapViewportRef, viewport, miniMapRef, selectedSeats }: MiniMapProps) => {
  return (
    <S.MiniMapWrapper ref={miniMapRef}>
      <S.ScreenWrapper>Screen</S.ScreenWrapper>
      <S.SeatTableBody>
        {SEAT_ROWS.map((row) => (
          <S.SeatRowWrapper key={row}>
            {SEAT_INFO.filter((seat) => seat.startsWith(row)).map((seat) => {
              const isSelected = selectedSeats.includes(seat);

              const marginRight = [2, 11].includes(parseInt(seat.slice(1))) ? '0.7rem' : '0';
              const commonProps = {
                width: '0.4rem',
                style: { marginRight },
              };

              return (
                <IcSeatDefaultSmall
                  key={seat}
                  fill={isSelected ? '#FF243E' : '#1EAFFD'}
                  {...commonProps}
                  style={{ ...commonProps.style, cursor: 'pointer' }}
                />
              );
            })}
          </S.SeatRowWrapper>
        ))}
      </S.SeatTableBody>
      <div
        ref={miniMapViewportRef}
        style={{
          position: 'absolute',
          top: 0,
          left: `${viewport.left}px`,
          width: `${viewport.width}px`,
          height: '100%',
          border: `1px solid red`,
          boxSizing: 'border-box',
        }}
      />
    </S.MiniMapWrapper>
  );
};

export default MiniMap;

const S = {
  MiniMapWrapper: styled.div`
    position: relative;
    top: 6rem;
    left: -15rem;
    width: 10.3rem;
    height: 6.1rem;
    background-color: ${({ theme }) => theme.colors.BLACK100};
    padding: 0rem 1rem;
  `,
  ScreenWrapper: styled.p`
    display: flex;
    justify-content: center;
    padding: 0.3rem 0rem;
    ${({ theme }) => theme.typographies.n_caption01_reg};
    color: ${({ theme }) => theme.colors.GRAY12};
    border-bottom: 1px solid ${({ theme }) => theme.colors.GRAY12};
    margin-bottom: 0.9rem;
  `,
  SeatTableBody: styled.div`
    padding: 0rem 0rem;
  `,
  SeatRowWrapper: styled.div`
    display: flex;
    column-gap: 0.1rem;
    margin-bottom: 0.1rem;
  `,
};
