import { useState } from 'react';

import * as S from '@/components/mainPage/StylesPopularMovieChart';

import { items } from '@/constants/PopularMovieChartConstant';

import { IcArrowRightGray0910, IcHorizontalbarGrey, IcStarGray1010 } from '@/assets/svg';

// 전체 / 상영중 / 상영예정 -> 디폴트로 전체로 해놓고, 눌러진 부분은 검정색, 안 눌러진 부분은 회색으로 수정

// 상영중도 구현하기 !!

// 별점이랑 옆에 숫자 세로축 중앙 정렬되게 하기
// 스크롤 영역 -> 캐러셀 사용하기

// 개봉일 예정인 애들은 별 아이콘 없고 대신에 디데이 표시하게 바꾸기
const PopularMovieChart = () => {
  const [filter, setFilter] = useState('all');
  const FilteredMovies = () => {
    switch (filter) {
      case 'comingSoon':
        return items.filter((item) => item.decisionDay !== undefined);
      case 'playing':
        return items.filter((item) => item.starReview !== undefined);
      default:
        return items;
    }
  };

  const FilteredItems = FilteredMovies();
  return (
    <>
      <S.HeaderWrapper>
        <S.PopularRankingType>인기 차트</S.PopularRankingType>
        <S.FilterScrenning>
          <S.SelectAllMovie onClick={() => setFilter('all')} active={filter === 'all'}>
            전체
          </S.SelectAllMovie>
          <IcHorizontalbarGrey width="1rem" />
          <S.SelectPlayingMovie onClick={() => setFilter('playing')} active={filter === 'playing'}>
            상영중
          </S.SelectPlayingMovie>
          <IcHorizontalbarGrey width="1rem" />
          <S.SelectComingSoonMovie onClick={() => setFilter('comingSoon')} active={filter === 'comingSoon'}>
            상영예정
          </S.SelectComingSoonMovie>
        </S.FilterScrenning>
      </S.HeaderWrapper>

      <S.ContentWrapper>
        {FilteredItems.map((item, index) =>
          item.ranking === undefined ? (
            <S.EachContentWrapper key={index}>
              <item.image width="13.4rem" />
              <S.GridContainer advertiseComponent={true}>
                <S.AdvertisingTitle>헥토네이베션</S.AdvertisingTitle>
                <S.NoticeAdvertising>AD</S.NoticeAdvertising>
              </S.GridContainer>
              <S.ButtonAdvertising type="button">자세히 보기</S.ButtonAdvertising>
            </S.EachContentWrapper>
          ) : (
            <S.EachContentWrapper key={index}>
              <S.ageLimitContainer>{item.ageLimit && <item.ageLimit height="100%" />}</S.ageLimitContainer>
              <item.image width="13.4rem" />
              <S.GridContainer>
                <S.Ranking>{item.ranking}</S.Ranking>
                <S.MovieTitle>{item.title}</S.MovieTitle>
                <S.ReservationRate>예매율 {item.reservationRate}&#37;</S.ReservationRate>
                <S.StarReview>
                  {item.starReview !== undefined ? (
                    <>
                      <IcStarGray1010 width="1rem" height="1rem" />
                      {item.starReview}
                    </>
                  ) : (
                    `D-${item.decisionDay}`
                  )}
                </S.StarReview>
              </S.GridContainer>
              <S.ButtonReservation type="button">예매하기</S.ButtonReservation>
            </S.EachContentWrapper>
          ),
        )}
      </S.ContentWrapper>
      <S.EntireMovieSelect>
        전체 보기 <IcArrowRightGray0910 height="1rem" width="1rem" />
      </S.EntireMovieSelect>
    </>
  );
};

export default PopularMovieChart;
