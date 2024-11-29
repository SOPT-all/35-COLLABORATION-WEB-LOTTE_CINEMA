import styled from '@emotion/styled';

import { useMovieTimeQuery } from '@/hooks/query/useMovieTime';

import { TimeInfoBaseType } from '@/types/timeSelect';

import TimeAccordion from './TimeAccordion';

// 상영관별 시간 테이블을 담은 컴포넌트입니다.
const MovieTimeBox = ({ locs, selectTitle, selectDate, selectedMovie }: TimeInfoBaseType) => {
  const { data } = useMovieTimeQuery(locs.length, selectTitle, selectDate);

  return (
    <S.Wrapper>
      {data &&
        data.map((e, i) => (
          <TimeAccordion
            key={i}
            info={e}
            locs={locs}
            num={i}
            selectDate={selectDate}
            selectedMovie={selectedMovie}
            selectTitle={selectTitle}
          />
        ))}
    </S.Wrapper>
  );
};

export default MovieTimeBox;

const S = {
  Wrapper: styled.article`
    & .black {
      background-color: black;
    }

    display: flex;
    width: 100%;
    height: 3.37rem;
    flex-direction: column;
    align-items: center;
  `,
};
