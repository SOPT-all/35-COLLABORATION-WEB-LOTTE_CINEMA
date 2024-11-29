import styled from '@emotion/styled';

import { RefObject } from 'react';

import { SEAT_ROWS } from '@/constants';

interface MiniMapProps {
  selectedSeats: string[];
  miniMapRef: RefObject<HTMLDivElement>;
  miniMapViewportRef: RefObject<HTMLDivElement>;
  viewport: { left: number; width: number };
}

const MiniMap = ({ selectedSeats, miniMapRef, miniMapViewportRef, viewport }: MiniMapProps) => {
  return (
    <S.MiniMapWrapper ref={miniMapRef}>
      <S.ScreenWrapper>Screen</S.ScreenWrapper>

      <S.MiniMapViewport
        ref={miniMapViewportRef}
        style={{
          top: 0,
          left: `${viewport.left}px`,
          width: `${viewport.width}px`,
          height: '100%',
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
  `,

  MiniMapViewport: styled.div`
    position: absolute;
    border: 1px solid ${({ theme }) => theme.colors.RED02};
    box-sizing: border-box;
  `,
};
