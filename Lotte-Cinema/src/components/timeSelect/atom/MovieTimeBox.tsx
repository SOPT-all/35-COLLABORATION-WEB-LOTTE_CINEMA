import styled from '@emotion/styled';

import TimeAccordian from './TimeAccordian';

const MovieTimeBox = () => {
  return (
    <S.Wrapper>
      <TimeAccordian />
      <TimeAccordian />
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
