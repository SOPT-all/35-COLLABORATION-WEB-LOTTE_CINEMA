import styled from '@emotion/styled';

import { AVAILABLE_IDX_ARRAY } from '@/constants/mocks/availableIdxData';

import { IcSeatReclinerMedium, IcSeatSoldoutMedium } from '@/assets/svg';

const SeatInfo = () => {
  const ROW = Array.from({ length: 6 }, (_, row) => row);
  const SEAT_PER_ROW = [11, 13, 13, 12, 13, 13];

  // 좌석 배치 배열을 생성하는 함수
  const generateSeatMatrix = () => {
    return ROW.map((row) => {
      const seatCount = SEAT_PER_ROW[row];
      const startIdx = SEAT_PER_ROW.slice(0, row).reduce((sum, cur) => sum + cur, 0);
      return Array.from({ length: seatCount }, (_, col) => startIdx + col);
    });
  };

  // SeatIcon 분기 함수
  const renderSeatIcon = (seatIdx: number, colIdx: number) => {
    const isAvailable = AVAILABLE_IDX_ARRAY.includes(seatIdx);
    const Icon = isAvailable ? IcSeatReclinerMedium : IcSeatSoldoutMedium;
    const marginRight = [1, 10].includes(colIdx) ? '1.1rem' : '0';

    return <Icon width={11} style={{ marginRight }} key={seatIdx} />;
  };

  return (
    <S.Wrapper>
      <S.SeatTableLayout>
        {generateSeatMatrix().map((row, rowIdx) => (
          <S.SeatRowContainer key={rowIdx}>
            {row.map((seatIdx, colIdx) => renderSeatIcon(seatIdx, colIdx))}
          </S.SeatRowContainer>
        ))}
      </S.SeatTableLayout>
      <S.SeatNum>
        잔여좌석<span>{AVAILABLE_IDX_ARRAY.length}</span>/77석
      </S.SeatNum>
    </S.Wrapper>
  );
};

const S = {
  Wrapper: styled.div`
    padding: 2.4rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.3rem;
  `,
  SeatNum: styled.p`
    ${({ theme }) => theme.typographies.n_body02_reg}

    & > span {
      ${({ theme }) => theme.typographies.n_head03_bold}
      color: ${({ theme }) => theme.colors.GREEN};
      margin-left: 0.9rem;
      margin-right: 0.2rem;
    }
  `,
  SeatTableLayout: styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  `,
  SeatRowContainer: styled.div`
    display: flex;
    gap: 0.3rem;
  `,
};

export default SeatInfo;
