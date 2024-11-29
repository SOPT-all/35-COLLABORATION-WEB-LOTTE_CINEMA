import styled from '@emotion/styled';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useSeatInfoQuery } from '@/hooks/query/SeatReservation';

import { TimeCardPropType } from '@/types/timeSelect';

const TimeCard = ({
  timesList,
  theater,
  subTheaterInfo,
  allTimeList,
  selectDate,
  selectedMovie,
  loc,
}: TimeCardPropType) => {
  const navigate = useNavigate();
  const [remainSeat, setRemainSeat] = useState<number>(75);

  const { data } = useSeatInfoQuery(selectedMovie.movieId);

  useEffect(() => {
    if (data) {
      setRemainSeat(75 - data.data.length);
    }
  }, [data]);

  const handleBtnClick = () => {
    const state = {
      theater,
      subTheaterInfo,
      selectDate,
      loc,
      allTimeList,
      beginTime: timesList.beginTime,
      endTime: timesList.endTime,
      selectedMovie,
    };
    navigate('/tickets/info', { state: state });
  };
  return (
    <S.Wrapper onClick={handleBtnClick}>
      <S.TimeInfoItem>
        <span className="bold_time">{timesList.beginTime}</span>
        <span className="thin_time">{`~ ${timesList.endTime}`}</span>
      </S.TimeInfoItem>
      <S.SeatInfoItem>
        <span className="filled_seat">{remainSeat}</span>
        <span className="total_seat"> / 75</span>
      </S.SeatInfoItem>
    </S.Wrapper>
  );
};

export default TimeCard;

const InfoBasicContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.6rem 1.2rem;
  align-items: center;
  border-radius: 0.4rem;
  gap: 0.4rem;
  border: 1px solid ${({ theme }) => theme.colors.GRAY03};
`;

const S = {
  Wrapper: styled.div`
    width: 100%;
    height: 5.4rem;
    margin-bottom: 1rem;
  `,

  TimeInfoItem: styled(InfoBasicContainer)`
    background: ${({ theme }) => theme.colors.GRAY01};

    & .bold_time {
      ${({ theme }) => theme.typographies.r_body01}
    }
    & .thin_time {
      ${({ theme }) => theme.typographies.r_body03_reg}
      color: ${({ theme }) => theme.colors.GRAY08}
    }
  `,

  SeatInfoItem: styled(InfoBasicContainer)`
    border-radius: 0 0 0.4rem 0.4rem;
    ${({ theme }) => theme.typographies.r_body03_bold}
    background: ${({ theme }) => theme.colors.GRAY03};

    & .filled_seat {
      color: ${({ theme }) => theme.colors.GREEN};
    }

    & .total_seat {
      color: ${({ theme }) => theme.colors.GRAY08};
    }
  `,
};
