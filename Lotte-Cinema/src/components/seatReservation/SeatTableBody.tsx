import styled from '@emotion/styled';

import { useEffect, useRef } from 'react';
import { RefCallback, RefObject } from 'react';

import { BtnSeatDefaultLarge, BtnSeatDisabledLarge } from '@/assets/svg';

import { SEAT_INFO, SEAT_ROWS } from '@/constants';

interface SeatTableBodyProps {
  handleClickSeat: (seatId: string) => void;
  selectedSeats: string[];
  reservatedNumber: number;
  setLargeMapRef: RefObject<HTMLDivElement>;
}

const SeatTableBody = ({ handleClickSeat, selectedSeats, reservatedNumber, setLargeMapRef }: SeatTableBodyProps) => {
  const setSeatTableWrapperRef = (element: HTMLDivElement | null) => {
    if (element) {
      // DOM 요소가 렌더링되거나 변경될 때 동작
      element.scrollLeft = (element.scrollWidth - element.clientWidth) / 2;
    }
  };

  const isSeatDisabled = selectedSeats.length >= reservatedNumber;

  return (
    <S.SeatTableWrapper ref={setSeatTableWrapperRef}>
      <S.SeatTableContainer>
        <S.ScreenComment>
          <p>S</p>
          <p>C</p>
          <p>R</p>
          <p>E</p>
          <p>E</p>
          <p>N</p>
        </S.ScreenComment>
        <S.SeatTableBody ref={setLargeMapRef}>
          {SEAT_ROWS.map((row) => (
            <S.SeatRowWrapper key={row}>
              {SEAT_INFO.filter((seat) => seat.startsWith(row)).map((seat) => {
                const isSelected = selectedSeats.includes(seat);
                const isDisabled = !isSelected && isSeatDisabled;
                const marginRight = [2, 11].includes(parseInt(seat.slice(1))) ? '2.8rem' : '0';
                const commonProps = {
                  width: '2.8rem',
                  style: { marginRight },
                };

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
    margin-bottom: 4.4rem;
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
