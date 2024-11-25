import styled from '@emotion/styled';

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  padding: 0 1.8rem;
`;

export const PopularRankingType = styled.h2`
  font-family: ${({ theme }) => theme.typographies.n_head01};
  width: 7.1rem;
`;

export const FilterScrenning = styled.ul`
  width: 11.5rem;
  font-family: ${({ theme }) => theme.typographies.n_body03_med};
  color: ${({ theme }) => theme.colors.GRAY10};
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
`;

export const SelectAllMovie = styled.li<{ active: boolean }>`
  color: ${(props) => (props.active ? props.theme.colors.BLACK100 : props.theme.colors.GRAY10)};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.BLACK100};
  }
`;
export const SelectPlayingMovie = styled.li<{ active: boolean }>`
  color: ${(props) => (props.active ? props.theme.colors.BLACK100 : props.theme.colors.GRAY10)};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.BLACK100};
  }
`;
export const SelectComingSoonMovie = styled.li<{ active: boolean }>`
  color: ${(props) => (props.active ? props.theme.colors.BLACK100 : props.theme.colors.GRAY10)};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.BLACK100};
  }
`;

export const ageLimitContainer = styled.div`
  height: 1.6rem;
  position: absolute;
  top: 0.6rem;
  right: 0.6rem;
`;

export const ContentWrapper = styled.div`
  display: flex;
  gap: 1.6rem;
  width: 100%; // width 값 안 주면 스크롤이 적용되지 않는다
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
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  justify-content: space-around;

  background-color: ${({ theme }) => theme.colors.GRAY01};
  border-radius: 6px;
  position: relative;
  padding-bottom: 0.8rem;
`;

// GridContainer 스타일
export const GridContainer = styled.div<{ advertiseComponent?: boolean }>`
  width: 11.8rem;
  height: 3.2rem;
  justify-content: center;
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 2fr 2fr;
  grid-template-areas:
    'ranking movieTitle movieTitle'
    'ranking reservationRate starReview';

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

export const StarReview = styled.span`
  grid-area: starReview;

  color: ${({ theme }) => theme.colors.GRAY10};
  font-family: ${({ theme }) => theme.typographies.n_caption02_reg};
  display: flex;
  align-items: flex-start;
`;

export const ButtonReservation = styled.button`
  width: 11.8rem;
  height: 3.4rem;
  font-family: ${({ theme }) => theme.typographies.n_body02_bold};
  color: ${({ theme }) => theme.colors.GRAY12};
  background-color: ${({ theme }) => theme.colors.WHITE100};
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.GRAY07};

  &:hover {
    background-color: ${({ theme }) => theme.colors.RED02};
    color: ${({ theme }) => theme.colors.WHITE100};
  }

  &:index {
    background-color: ${({ theme }) => theme.colors.RED02};
    color: ${({ theme }) => theme.colors.WHITE100};
  }
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

export const ButtonAdvertising = styled.button<{ isFirst?: boolean }>`
  width: 11.8rem;
  height: 3.4rem;

  color: ${({ theme }) => theme.colors.GRAY08};
  font-family: ${({ theme }) => theme.typographies.n_body02_bold};
  background-color: ${({ theme }) => theme.colors.WHITE100};
  border: 1px solid ${({ theme }) => theme.colors.GRAY07};
  border-radius: 4px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.RED02};
    color: ${({ theme }) => theme.colors.WHITE100};
  }
`;

export const EntireMovieSelect = styled.p`
  width: 90%;
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.GRAY09};
  text-align: right;
  font-family: ${({ theme }) => theme.typographies.n_body03_med};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.4rem;
`;
