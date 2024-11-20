import {
  ImgPosterLargeAmazon,
  ImgPosterLargeDeadline,
  ImgPosterLargeEvent,
  ImgPosterLargeGladiator,
} from "@/assets/svg";
import * as S from "@/components/MainPageComponents/Styles";

const PopularMovieChart = () => {
  return (
    <>
      <S.HeaderWrapper>
        <S.PopularRankingType>인기 차트</S.PopularRankingType>
        <S.FilterScrenning>
          <p>전체 | 상영중 | 상영예정</p>
        </S.FilterScrenning>
      </S.HeaderWrapper>
      <S.ContentWrapper>
        <S.EachContentWrapper>
          <ImgPosterLargeAmazon width="13.4rem" />
          <S.GridContainer>
            <S.Ranking>1</S.Ranking>
            <S.MovieTitle>데드라인</S.MovieTitle>
            <S.ReservationRate>예매율 18.2%</S.ReservationRate>
            <S.StarReview>별점 4.7</S.StarReview>
          </S.GridContainer>
          <S.ButtonReservation type="button" firstRankButton={true}>
            예매하기
          </S.ButtonReservation>
        </S.EachContentWrapper>

        <S.EachContentWrapper>
          <ImgPosterLargeDeadline width="13.4rem" />
          <S.GridContainer>
            <S.Ranking>2</S.Ranking>
            <S.MovieTitle>데드라인</S.MovieTitle>
            <S.ReservationRate>예매율 18.2%</S.ReservationRate>
            <S.StarReview>별점 4.7</S.StarReview>
          </S.GridContainer>
          <S.ButtonReservation type="button">예매하기</S.ButtonReservation>
        </S.EachContentWrapper>

        <S.EachContentWrapper>
          <ImgPosterLargeEvent width="13.4rem" />
          <S.GridContainer advertiseComponent={true}>
            <S.AdvertisingTitle>헥토네이베션</S.AdvertisingTitle>
            <S.NoticeAdvertising>AD</S.NoticeAdvertising>
          </S.GridContainer>
          <S.ButtonAdvertising type="button">자세히 보기</S.ButtonAdvertising>
        </S.EachContentWrapper>

        <S.EachContentWrapper>
          <ImgPosterLargeGladiator width="13.4rem" />
          <S.GridContainer>
            <S.Ranking>3</S.Ranking>
            <S.MovieTitle>데드라인</S.MovieTitle>
            <S.ReservationRate>예매율 18.2%</S.ReservationRate>
            <S.StarReview>별점 4.7</S.StarReview>
          </S.GridContainer>
          <S.ButtonReservation type="button">예매하기</S.ButtonReservation>
        </S.EachContentWrapper>
      </S.ContentWrapper>
      <S.EntireMovieSelect>전체 보기</S.EntireMovieSelect>
    </>
  );
};

export default PopularMovieChart;
