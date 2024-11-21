import styled from '@emotion/styled';

const Calendar = () => {
  return <S.Wrapper></S.Wrapper>;
};

export default Calendar;
const S = {
  Wrapper: styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    height: 8.8rem;
    padding: 0.6rem 1.8rem 1.2rem 1.8rem;
    gap: 0.4rem;
    background-color: ${({ theme }) => theme.colors.GRAY13};
  `,
};
