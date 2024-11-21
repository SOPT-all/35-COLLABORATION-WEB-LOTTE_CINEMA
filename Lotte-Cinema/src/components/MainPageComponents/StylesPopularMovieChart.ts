import styled from "@emotion/styled";

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
`;

export const PopularRankingType = styled.h2`
  font-family: ${({ theme }) => theme.typographies.n_head01};
  width: 7.1rem;
`;

export const FilterScrenning = styled.div`
  width: 11.5rem;
  font-family: ${({ theme }) => theme.typographies.n_body03_med};
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const ContentWrapper = styled.div`
  display: flex;
  gap: 1.6rem;
  height: 28rem;
  margin: 1rem 0;
  overflow: scroll;

  & > :first-of-type {
    margin-left: 1.6rem;
  }

  & > :last-of-type {
    margin-right: 1.6rem;
  }

  /* width 값 주면 scroll 안 먹음 */
`;

export const EachContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.GRAY01};
  border-radius: 6px;
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
  grid-area: reservationRate;

  color: ${({ theme }) => theme.colors.GRAY10};
  font-family: ${({ theme }) => theme.typographies.n_caption02_reg};
`;

export const StarReview = styled.div`
  grid-area: starReview;

  color: ${({ theme }) => theme.colors.GRAY10};
  font-family: ${({ theme }) => theme.typographies.n_caption02_reg};
`;

export const ButtonReservation = styled.button<{ firstRankButton?: boolean }>`
  width: 11.8rem;
  height: 3.4rem;
  font-family: ${({ theme }) => theme.typographies.n_body02_bold};
  color: ${({ theme }) => theme.colors.GRAY12};
  background-color: ${({ theme }) => theme.colors.WHITE100};
  border-radius: 4px;

  ${({ firstRankButton, theme }) =>
    firstRankButton &&
    `
    background-color: ${theme.colors.RED02};
    color: ${theme.colors.WHITE100};
    `}
`;

// 광고 컴포넌트 스타일
export const AdvertisingTitle = styled.div`
  grid-area: advertisingTitle;

  color: ${({ theme }) => theme.colors.GRAY10};
  font-family: ${({ theme }) => theme.typographies.n_body02_bold};
`;

export const NoticeAdvertising = styled.div`
  grid-area: noticeAdvertising;

  color: ${({ theme }) => theme.colors.GRAY10};
  font-family: ${({ theme }) => theme.typographies.n_caption01_reg};
`;

export const ButtonAdvertising = styled.button`
  width: 11.8rem;
  height: 3.4rem;

  color: ${({ theme }) => theme.colors.GRAY08};
  font-family: ${({ theme }) => theme.typographies.n_body02_bold};
  background-color: ${({ theme }) => theme.colors.WHITE100};
`;

export const EntireMovieSelect = styled.p`
  width: 90%;
  margin: 0 auto;

  color: ${({ theme }) => theme.colors.GRAY09};
  text-align: right;
  font-family: ${({ theme }) => theme.typographies.n_body03_med};
`;
