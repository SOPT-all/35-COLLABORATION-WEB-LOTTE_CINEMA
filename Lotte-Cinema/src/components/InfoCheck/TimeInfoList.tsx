import styled from '@emotion/styled';

import { TIME_SEAT_INFO_DATA } from '@/constants/mocks/TimeSeatInfoData';

const TimeInfoList = () => {
  return (
    <S.Wrapper>
      {TIME_SEAT_INFO_DATA.map(({ id, time, seat }) => (
        <S.TimeInfo key={id}>
          <S.Time>{time}</S.Time>
          <S.Seat>
            <span>{seat.selected}</span> / {seat.all}
          </S.Seat>
        </S.TimeInfo>
      ))}
    </S.Wrapper>
  );
};

const S = {
  Wrapper: styled.div`
    width: 100%;
    display: flex;
    gap: 1rem;
    padding: 2.4rem 1rem 2rem 1rem;
    overflow: auto;

    & > * {
      flex-shrink: 0;
    }
  `,

  TimeInfo: styled.div`
    width: 6.4rem;
    padding: 0.4rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.4rem;
    border-radius: 0.4rem;

    /* 스타일 분기는 이후 데이터 연결에 이후 진행 */
    outline: 1px solid ${({ theme }) => theme.colors.GRAY04};
    background-color: ${({ theme }) => theme.colors.WHITE100};

    cursor: pointer;
  `,
  Time: styled.p`
    ${({ theme }) => theme.typographies.r_body01}
  `,
  Seat: styled.p`
    ${({ theme }) => theme.typographies.r_caption}

    /* 스타일 분기는 이후 데이터 연결에 이후 진행 */
    & > span {
      color: ${({ theme }) => theme.colors.GREEN};
    }
  `,
};
export default TimeInfoList;
