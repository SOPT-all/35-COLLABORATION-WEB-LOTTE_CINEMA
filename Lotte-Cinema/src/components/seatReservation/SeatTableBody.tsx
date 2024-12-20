import styled from '@emotion/styled';

import { MutableRefObject, useLayoutEffect, useRef } from 'react';

import { useSeatInfoQuery } from '@/hooks/query/SeatReservation';

import { BtnSeatDefaultLarge, BtnSeatDisabledLarge, BtnSeatSoldoutLarge } from '@/assets/svg';

import { SEAT_INFO, SEAT_ROWS } from '@/constants';

interface MovieType {
  movieId: number;
  name: string;
  format: string;
}

interface SeatTableBodyProps {
  handleClickSeat: (seatId: string) => void;
  selectedSeats: string[];
  reservatedNumber: number;

  largeMapRef: MutableRefObject<HTMLDivElement | null>;
  movie: MovieType;
}

const SeatTableBody = ({
  handleClickSeat,
  selectedSeats,
  reservatedNumber,
  largeMapRef,
  movie,
}: SeatTableBodyProps) => {
  const isSeatDisabled = selectedSeats.length >= reservatedNumber;
  const containerRef = useRef<HTMLDivElement | null>(null);

  // 가로 스크롤 중앙화
  useLayoutEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      const totalWidth = container.scrollWidth;
      const visibleWidth = container.clientWidth;
      container.scrollLeft = totalWidth / 2 - visibleWidth / 2;
    }
  }, []);

  const { data, isLoading, error } = useSeatInfoQuery(movie.movieId);

  const soldoutIdx = data?.data;
  const soldoutSeats = soldoutIdx?.map((idx) => SEAT_INFO[idx]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading seat info.</div>;

  return (
    <S.SeatTableWrapper
      ref={(node) => {
        largeMapRef.current = node;
        containerRef.current = node;
      }}
    >
      <S.SeatTableContainer>
        <S.ScreenComment>
          <p>S</p>
          <p>C</p>
          <p>R</p>
          <p>E</p>
          <p>E</p>
          <p>N</p>
        </S.ScreenComment>
        <S.SeatTableBody>
          {SEAT_ROWS.map((row) => (
            <S.SeatRowWrapper key={row}>
              {SEAT_INFO.filter((seat) => seat.startsWith(row)).map((seat) => {
                const isSelected = selectedSeats.includes(seat);
                const isDisabled = !isSelected && isSeatDisabled;
                const isSoldOut = soldoutSeats?.includes(seat);
                const marginRight = [2, 11].includes(parseInt(seat.slice(1))) ? '2.8rem' : '0';
                const commonProps = {
                  width: '2.8rem',
                  style: { marginRight },
                };

                if (isSoldOut) {
                  return (
                    <BtnSeatSoldoutLarge
                      {...commonProps}
                      key={seat}
                      style={{ ...commonProps.style, cursor: 'not-allowed' }}
                    />
                  );
                }

                return isDisabled ? (
                  <BtnSeatDisabledLarge
                    {...commonProps}
                    key={seat}
                    style={{ ...commonProps.style, cursor: 'not-allowed' }}
                  />
                ) : (
                  <BtnSeatDefaultLarge
                    seat={seat}
                    key={seat}
                    onClick={() => handleClickSeat(seat)}
                    fill={isSelected ? '#FF243E' : '#1EAFFD'}
                    {...commonProps}
                    style={{ ...commonProps.style, cursor: 'pointer' }}
                  />
                );
              })}
            </S.SeatRowWrapper>
          ))}
        </S.SeatTableBody>
      </S.SeatTableContainer>
    </S.SeatTableWrapper>
  );
};

export default SeatTableBody;

const S = {
  SeatTableWrapper: styled.div`
    height: 100%;
    overflow: scroll;
    background-color: ${({ theme }) => theme.colors.BG_THEATER};
  `,
  SeatTableContainer: styled.div`
    display: flex;
    flex-direction: column;
    width: 59rem;
    margin: 0 auto;
    background-color: ${({ theme }) => theme.colors.BG_THEATER};
  `,
  ScreenComment: styled.div`
    display: flex;
    justify-content: center;
    gap: 1.4rem;
    margin-top: 12rem;
    margin-bottom: 6rem;
    ${({ theme }) => theme.typographies.n_head02_reg};
    background-color: ${({ theme }) => theme.colors.BG_THEATER};
    color: ${({ theme }) => theme.colors.GRAY10};
  `,

  SeatTableBody: styled.div`
    padding: 0rem 4rem;
    background-color: ${({ theme }) => theme.colors.BG_THEATER};
  `,
  SeatRowWrapper: styled.div`
    display: flex;
    column-gap: 0.7rem;
    margin-bottom: 0.4rem;
  `,
};
