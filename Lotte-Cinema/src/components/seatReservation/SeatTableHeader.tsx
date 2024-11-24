import styled from '@emotion/styled';

const SeatTableHeader = () => {
  return (
    <S.SeatTableWrapper>
      <S.ScreenComment>
        <p>S</p>
        <p>C</p>
        <p>R</p>
        <p>E</p>
        <p>E</p>
        <p>N</p>
      </S.ScreenComment>
    </S.SeatTableWrapper>
  );
};

export default SeatTableHeader;

const S = {
  SeatTableWrapper: styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.BG_THEATER};
  `,
  ScreenComment: styled.div`
    display: flex;
    gap: 1.4rem;
    margin-top: 12rem;
    margin-bottom: 4.4rem;
    ${({ theme }) => theme.typographies.n_head02_reg};
    color: ${({ theme }) => theme.colors.GRAY10};
  `,
};
