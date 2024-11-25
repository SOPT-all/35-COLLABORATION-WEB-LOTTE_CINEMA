import styled from '@emotion/styled';

import TimeAccordion from './TimeAccordion';

// 상영관별 시간 테이블을 담은 컴포넌트입니다.
// TODO API res 값에 따라 TimeAccordian 생성할 예정
const MovieTimeBox = () => {
  return (
    <S.Wrapper>
      <TimeAccordion />
      <TimeAccordion />
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
