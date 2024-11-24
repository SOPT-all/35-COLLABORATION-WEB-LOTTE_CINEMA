import * as S from '@/components/mainPage/StylesPopularMovieChart';

import {
  IcAge1216,
  IcAge1916,
  IcAgeAll16,
  IcArrowRightGray0910,
  IcHorizontalbarGrey,
  IcStarGray1010,
  ImgPosterLargeAmazon,
  ImgPosterLargeDeadline,
  ImgPosterLargeEvent,
  ImgPosterLargeGladiator,
} from '@/assets/svg';

// 전체 / 상영중 / 상영예정 -> 디폴트로 전체로 해놓고, 눌러진 부분은 검정색, 안 눌러진 부분은 회색으로 수정
// 이미지 -> 배열 공부해서 배열 인덱스 같은 속성으로 prop 전달하기
// 별점이랑 옆에 숫자 세로축 중앙 정렬되게 하기
// D - 123 같은 텍스트 만들기
// 스크롤 영역 -> 캐러셀 사용하기

const PopularMovieChart = () => {
  const items = [
    {
      image: ImgPosterLargeAmazon,
      ranking: 1,
      title: '데드라인',
      reservationRate: 18.7,
      starReview: 4.3,
      decisionDay: undefined,
      ageLimit: IcAge1216,
    },
    {
      image: ImgPosterLargeDeadline,
      ranking: 2,
      title: '글래디에이터',
      reservationRate: 18.7,
      starReview: 4.3,
      decisionDay: undefined,
      ageLimit: IcAge1916,
    },
    {
      image: ImgPosterLargeEvent,
      title: '헥토이노베이션',
      description: 'AD',
      ageLimit: undefined,
    },
    {
      image: ImgPosterLargeGladiator,
      ranking: 3,
      title: '아마존 활명수',
      reservationRate: 18.7,
      starReview: 4.3,
      decisionDay: undefined,
      ageLimit: IcAgeAll16,
    },
  ];
  return (
    <>
      <S.HeaderWrapper>
        <S.PopularRankingType>인기 차트</S.PopularRankingType>
        <S.FilterScrenning>
          <p>전체</p>
          <IcHorizontalbarGrey width="1rem" />
          <p>상영중</p>
          <IcHorizontalbarGrey width="1rem" />
          <p>상영예정</p>
        </S.FilterScrenning>
      </S.HeaderWrapper>
      <S.ContentWrapper>
        {items.map((item, index) =>
          index === 2 ? (
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
                <S.ReservationRate>예매율 {item.reservationRate}</S.ReservationRate>
                <S.StarReview>
                  <IcStarGray1010 width="1rem" height="1rem" />
                  {item.starReview}
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
