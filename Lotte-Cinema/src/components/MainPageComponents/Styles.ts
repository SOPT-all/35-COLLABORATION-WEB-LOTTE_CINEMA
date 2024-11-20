import styled from "@emotion/styled";

export const HeaderWrapper = styled.header`
  display: flex;
  width: 90%;
  margin: 0 auto;
  justify-content: space-between;
  align-items: flex-end;
`;

export const PopularRankingType = styled.h2`
  font-family: ${({ theme }) => theme.typographies.n_head01};
  width: 7.1rem;
`;

export const FilterScrenning = styled.div`
  display: flex;
  width: 11.5rem;
  font-family: ${({ theme }) => theme.typographies.n_body03_med};
  /* text-align: right; 오른쪽으로 정렬해야 함 */
`;

export const ContentWrapper = styled.div`
  margin: 1rem 0;
  display: flex;
  height: 28rem;
  overflow: scroll;
  gap: 1.6rem;
  & > :first-of-type {
    margin-left: 1.6rem;
  }
  & > :last-of-type {
    margin-right: 1.6rem;
  }
  /* width 값 주면 scroll 안 먹음 */
`;

export const EachContentWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.GRAY01};
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

// GridContainer 스타일
export const GridContainer = styled.div<{ advertiseComponent?: boolean }>`
  width: 11.8rem;
  height: 3.1rem;
  justify-content: center;
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 3fr 2fr;
  grid-template-areas:
    "ranking movieTitle ."
    "ranking reservationRate starReview";

  ${({ advertiseComponent }) =>
    advertiseComponent &&
    `display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    `}
`;

// GridContainer 하위 컴포넌트 스타일
export const Ranking = styled.div`
  font-family: ${({ theme }) => theme.typographies.r_number};
  grid-area: ranking;
`;

export const MovieTitle = styled.div`
  font-family: ${({ theme }) => theme.typographies.n_body02_bold};
  grid-area: movieTitle;
`;

export const ReservationRate = styled.div`
  font-family: ${({ theme }) => theme.typographies.n_caption02_reg};
  color: ${({ theme }) => theme.colors.GRAY10};
  grid-area: reservationRate;
`;

export const StarReview = styled.div`
  font-family: ${({ theme }) => theme.typographies.n_caption02_reg};
  color: ${({ theme }) => theme.colors.GRAY10};
  grid-area: starReview;
`;

export const AdvertisingTitle = styled.div`
  font-family: ${({ theme }) => theme.typographies.n_body02_bold};
  color: ${({ theme }) => theme.colors.GRAY10};
  grid-area: advertisingTitle;
`;

export const NoticeAdvertising = styled.div`
  font-family: ${({ theme }) => theme.typographies.n_caption01_reg};
  color: ${({ theme }) => theme.colors.GRAY10};
  grid-area: noticeAdvertising;
`;

export const ButtonAdvertising = styled.button`
  width: 11.8rem;
  height: 3.4rem;
  color: ${({ theme }) => theme.colors.GRAY08};
  font-family: ${({ theme }) => theme.typographies.n_body02_bold};
`;

export const ButtonReservation = styled.button<{ firstRankButton?: boolean }>`
  width: 11.8rem;
  height: 3.4rem;
  font-family: ${({ theme }) => theme.typographies.n_body02_bold};

  ${({ firstRankButton, theme }) =>
    firstRankButton &&
    `
    background-color: ${theme.colors.RED02};
    color: ${theme.colors.WHITE100};
    border: none;
    border-radius: 4px;
    `}
`;

export const EntireMovieSelect = styled.p`
  width: 90%;
  margin: 0 auto;
  text-align: right;
  font-family: ${({ theme }) => theme.typographies.n_body03_med};
  color: ${({ theme }) => theme.colors.GRAY09};
`;
