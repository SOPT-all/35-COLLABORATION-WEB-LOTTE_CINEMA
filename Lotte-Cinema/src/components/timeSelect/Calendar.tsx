import styled from '@emotion/styled';

// 다음 이슈에서 캘린더 넣을 예정입니다!
const Calendar = () => {
  return <S.Wrapper></S.Wrapper>;
};

export default Calendar;
const S = {
  Wrapper: styled.section`
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    align-items: flex-start;
    width: 100%;
    height: 8.8rem;
    padding: 0.6rem 1.8rem 1.2rem;

    background-color: ${({ theme }) => theme.colors.GRAY13};
  `,
};
