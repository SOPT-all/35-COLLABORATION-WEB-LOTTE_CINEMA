import styled from '@emotion/styled';

const SeatTableBody = () => {
  return (
    <S.SeatTableBodyWrapper>
      <S.SeatTableBody />
    </S.SeatTableBodyWrapper>
  );
};

export default SeatTableBody;

const S = {
  SeatTableBodyWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    overflow-x: scroll;
    background-color: ${({ theme }) => theme.colors.BG_THEATER};
  `,
  SeatTableBody: styled.div`
    width: 800px;
    height: 15rem;

    background-color: ${({ theme }) => theme.colors.RED01};
  `,
};
