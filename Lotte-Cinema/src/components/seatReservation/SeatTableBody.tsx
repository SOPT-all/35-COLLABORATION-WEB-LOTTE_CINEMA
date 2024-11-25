import styled from '@emotion/styled';

import { BtnSeatDefaultLarge } from '@/assets/svg';

import { SEAT_INFO } from '@/constants';

const SeatTableBody = () => {
  const rows = ['B', 'C', 'D', 'E', 'F', 'G'];

  return (
    <S.SeatTableWrapper>
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
          <div>
            {rows.map((row) => (
              <S.SeatRowWrapper key={row}>
                {SEAT_INFO.filter((seat) => seat.startsWith(row)).map((seat) => (
                  <BtnSeatDefaultLarge
                    key={seat}
                    width={'2.8rem'}
                    seat={seat}
                    style={{
                      marginRight: [2, 11].includes(parseInt(seat.slice(1))) ? '2.8rem' : '0',
                      cursor: 'pointer',
                    }}
                  />
                ))}
              </S.SeatRowWrapper>
            ))}
          </div>
        </S.SeatTableBody>
      </S.SeatTableContainer>
    </S.SeatTableWrapper>
  );
};

export default SeatTableBody;

const S = {
  SeatTableWrapper: styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    /* overflow: scroll; */

    background-color: ${({ theme }) => theme.colors.BG_THEATER};
  `,
  SeatTableContainer: styled.div`
    display: flex;
    flex-direction: column;
    width: 65rem;

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
