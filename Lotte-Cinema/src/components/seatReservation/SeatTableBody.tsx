import styled from '@emotion/styled';

import { useEffect, useRef } from 'react';

import { BtnSeatDefaultLarge } from '@/assets/svg';

import { SEAT_INFO, SEAT_ROWS } from '@/constants';

interface SeatTableBodyProps {
  handleClickSeat: (seatId: string) => void;
  selectedSeats: string[];
}

const SeatTableBody = ({ handleClickSeat, selectedSeats }: SeatTableBodyProps) => {
  const seatTableWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = seatTableWrapperRef.current;
    if (wrapper) {
      wrapper.scrollLeft = (wrapper.scrollWidth - wrapper.clientWidth) / 2;
    }
  }, []);

  return (
    <S.SeatTableWrapper ref={seatTableWrapperRef}>
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
              {SEAT_INFO.filter((seat) => seat.startsWith(row)).map((seat) => (
                <BtnSeatDefaultLarge
                  key={seat}
                  width={'2.8rem'}
                  seat={seat}
                  onClick={() => handleClickSeat(seat)}
                  style={{
                    marginRight: [2, 11].includes(parseInt(seat.slice(1))) ? '2.8rem' : '0',
                    cursor: 'pointer',
                  }}
                />
              ))}
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
