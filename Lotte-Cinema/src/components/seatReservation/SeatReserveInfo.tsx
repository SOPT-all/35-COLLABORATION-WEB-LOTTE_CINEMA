import styled from '@emotion/styled';

import SeatReservePayment from '@/components/seatReservation/SeatReservePayment';

import { useReserveMutation } from '@/hooks/query/SeatReservation';

import { BtnXsmall, IcArrowRightWhite10, IcEntrance10, IcSeatDisabled10, IcSeatRecliner10 } from '@/assets/svg';

import { SEAT_INFO } from '@/constants';

type ReservatedNumber = {
  total: number;
  adult: number;
  teen: number;
  senior: number;
};
interface MovieType {
  movieId: number;
  name: string;
  format: string;
}

interface SeatReserveInfoProps {
  selectedSeats: string[];
  reservatedNumber: ReservatedNumber;
  movie: MovieType;
}

const SeatReserveInfo = ({ selectedSeats, reservatedNumber, movie }: SeatReserveInfoProps) => {
  const seatIndexes = selectedSeats.map((seat) => SEAT_INFO.findIndex((info) => info === seat));

  const { mutate } = useReserveMutation(movie.movieId, seatIndexes);
  const adultPrice = 14000 * reservatedNumber.adult;
  const teenPrice = 11000 * reservatedNumber.teen;
  const seniorPrice = 7000 * reservatedNumber.senior;
  const totalPrice = adultPrice + teenPrice + seniorPrice;

  const handleSubmit = () => {
    mutate({ movieId: movie.movieId, seats: seatIndexes }); // mutate 함수로 movieId와 seats 전달
  };
  return (
    <S.SeatReserveInfoWrapper>
      <S.SeatTypeInfo>
        <div>
          <IcSeatRecliner10 width={'1rem'} height={'1rem'} />
          <S.SeatTypeInfoP>리클라이너 </S.SeatTypeInfoP>
          <IcSeatDisabled10 width={'1rem'} height={'1rem'} />
          <S.SeatTypeInfoP>장애인석</S.SeatTypeInfoP>
          <IcEntrance10 width={'1rem'} height={'1rem'} />
          <S.SeatTypeInfoP>출입문</S.SeatTypeInfoP>
        </div>
        <div>
          <IcArrowRightWhite10 width={'1rem'} height={'1rem'} />
        </div>
      </S.SeatTypeInfo>
      <S.MovieInfoWrapper>
        <S.MovieInfo>
          {movie.name} {movie.format && `(${movie.format})`}
        </S.MovieInfo>
        <S.SeatInfo>
          <S.SeatInfoRow>
            <p>좌석</p>
            <p>{selectedSeats.join(',')}</p>
          </S.SeatInfoRow>
          <S.SeatInfoRow>
            <p>인원</p>
            <S.ChangeSelection>
              <div>
                {reservatedNumber.adult !== 0 && <p>성인{reservatedNumber.adult}</p>}
                {reservatedNumber.teen !== 0 && <p>청소년{reservatedNumber.teen}</p>}
                {reservatedNumber.senior !== 0 && <p>경로{reservatedNumber.senior}</p>}
              </div>
              <BtnXsmall width={'7rem'} height={'2.5rem'} />
            </S.ChangeSelection>
          </S.SeatInfoRow>
        </S.SeatInfo>
      </S.MovieInfoWrapper>
      {selectedSeats.length === reservatedNumber.total && (
        <SeatReservePayment handleSubmit={handleSubmit} totalPrice={totalPrice} />
      )}
    </S.SeatReserveInfoWrapper>
  );
};

const S = {
  SeatReserveInfoWrapper: styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;

    background-color: ${({ theme }) => theme.colors.WHITE100};
  `,
  SeatTypeInfo: styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 2.6rem;
    padding: 0.8rem 0.5rem;
    padding-left: 1.5rem;
    background-color: ${({ theme }) => theme.colors.BLACK100};
    ${({ theme }) => theme.typographies.n_caption02_reg};
    color: ${({ theme }) => theme.colors.WHITE100};

    div {
      display: flex;
    }
  `,
  SeatTypeInfoP: styled.p`
    margin-left: 0.4rem;
    margin-right: 0.5rem;
  `,
  MovieInfoWrapper: styled.div`
    width: 100%;
  `,
  MovieInfo: styled.div`
    width: 100%;
    padding: 1.6rem 1.8rem;
    margin: 0.5rem 0rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.GRAY03};
    ${({ theme }) => theme.typographies.n_head03_med};
  `,
  SeatInfo: styled.div`
    display: flex;
    flex-direction: column;
    padding: 1.6rem 1.8rem;
    margin: 0.5rem 0rem;
    height: 8.8rem;
    justify-content: space-between;
    text-align: center;
    ${({ theme }) => theme.typographies.n_body02_med};
  `,
  SeatInfoRow: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  ChangeSelection: styled.div`
    align-items: center;
    display: flex;
    gap: 0.5rem;
    div {
      display: flex;
      gap: 0.5rem;
    }
  `,
};

export default SeatReserveInfo;
