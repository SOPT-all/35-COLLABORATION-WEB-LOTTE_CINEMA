import styled from '@emotion/styled';

import { RefObject } from 'react';

interface MiniMapProps {
  selectedSeats: string[];
  miniMapViewportRef: RefObject<HTMLDivElement>;
  viewport: { left: number; width: number };
}

const MiniMap = ({ selectedSeats, miniMapViewportRef, viewport }: MiniMapProps) => {
  return (
    <S.MiniMapWrapper>
      <S.ScreenWrapper>Screen</S.ScreenWrapper>
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
  `,
};
