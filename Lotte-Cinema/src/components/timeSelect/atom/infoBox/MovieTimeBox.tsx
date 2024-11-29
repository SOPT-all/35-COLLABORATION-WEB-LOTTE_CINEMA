import styled from '@emotion/styled';

import { useMovieTimeQuery } from '@/hooks/query/useMovieTime';

import TimeAccordion from './TimeAccordion';

type Prop = {
  locs: string[];
  selectTitle: string;
  selectDate: Date;
};

// 상영관별 시간 테이블을 담은 컴포넌트입니다.
// TODO API res 값에 따라 TimeAccordian 생성할 예정
const MovieTimeBox = ({ locs, selectTitle, selectDate }: Prop) => {
  const { data } = useMovieTimeQuery(locs.length);

  return (
    <S.Wrapper>
      {data &&
        data.map((e, i) => (
          <TimeAccordion key={i} info={e} locs={locs} num={i} selectTitle={selectTitle} selectDate={selectDate} />
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
