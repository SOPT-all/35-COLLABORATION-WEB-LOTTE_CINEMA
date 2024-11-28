import styled from '@emotion/styled';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import EntireClickButton from '@/components/commons/EntireClickButton';

import { getPopularList } from '@/apis/movie';

import { IcAge1216, IcAge1916, IcAgeAll16, ImgPosterLargeEvent } from '@/assets/svg';
import { IcHorizontalbarGrey, IcStarGray1010 } from '@/assets/svg';

type movieList = {
  movieId: number;
  title: string;
  rating: string;
  releasedDate: Date;
  imageUrl: string;
  reservedRate: string;
};

// 전체 / 상영중 / 상영예정 -> 디폴트로 전체로 해놓고, 눌러진 부분은 검정색, 안 눌러진 부분은 회색으로 수정

// 상영중도 구현하기 !!

// 별점이랑 옆에 숫자 세로축 중앙 정렬되게 하기
// 스크롤 영역 -> 캐러셀 사용하기

// 개봉일 예정인 애들은 별 아이콘 없고 대신에 디데이 표시하게 바꾸기
const PopularMovieChart = () => {
  const [filter, setFilter] = useState('전체');
  const [FilteredItems, setFilteredItems] = useState([]);
  const todayDate = new Date();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovies = async (filter: string) => {
      try {
        const movieList = await getPopularList({ filter: filter });

        setFilteredItems(
          movieList.sort((a: movieList, b: movieList) => parseInt(b.reservedRate) - parseInt(a.reservedRate)),
        );
      } catch (err) {
        console.error('Error fetching movie list:', err);
      }
    };
    fetchMovies(filter);
  }, [filter]);

  return (
    <>
      <S.HeaderWrapper>
        <S.PopularRankingType>인기 차트</S.PopularRankingType>
        <S.FilterScrenning>
          <S.FilterMovie onClick={() => setFilter('전체')} active={filter === '전체'}>
            전체
          </S.FilterMovie>
          <IcHorizontalbarGrey width="1rem" />
          <S.FilterMovie onClick={() => setFilter('상영중')} active={filter === '상영중'}>
            상영중
          </S.FilterMovie>
          <IcHorizontalbarGrey width="1rem" />
          <S.FilterMovie onClick={() => setFilter('상영예정')} active={filter === '상영예정'}>
            상영예정
          </S.FilterMovie>
        </S.FilterScrenning>
      </S.HeaderWrapper>

      <S.ContentWrapper>
        {FilteredItems.map(({ movieId, title, rating, releasedDate, imageUrl, reservedRate }, index) => {
          // 6일 // 13일 // 지금 -> 15일
          const newReleasedDate = new Date(releasedDate);
          const isReleased = newReleasedDate <= todayDate;
          const dDay = Number(newReleasedDate) - Number(todayDate);
          const daysDifference = Math.floor(dDay / (1000 * 60 * 60 * 24));

          return index === 2 ? (
            <>
              <S.EachContentWrapper key={index + 'advertisement'}>
                <ImgPosterLargeEvent width="13.4rem" />
                <S.GridContainer advertiseComponent={true}>
                  <S.AdvertisingTitle>헥토네이베션</S.AdvertisingTitle>
                  <S.NoticeAdvertising>AD</S.NoticeAdvertising>
                </S.GridContainer>
                <S.ButtonAdvertising
                  type="button"
                  onClick={() => {
                    navigate('/theaters', {
                      state: {
                        title,
                      },
                    });
                  }}
                >
                  자세히 보기
                </S.ButtonAdvertising>
              </S.EachContentWrapper>

              <S.EachContentWrapper key={movieId}>
                <S.ageLimitContainer>
                  {(() => {
                    switch (rating) {
                      case '청불':
                        return <IcAge1916 height="100%" />;
                      case 'ALL':
                        return <IcAgeAll16 height="100%" />;
                      case '12':
                        return <IcAge1216 height="100%" />;
                      default:
                        return <IcAgeAll16 height="100%" />;
                    }
                  })()}
                </S.ageLimitContainer>
                <S.MovieImage src={imageUrl} />
                <S.GridContainer>
                  <S.Ranking>{index + 1}</S.Ranking>
                  <S.MovieTitle>{title}</S.MovieTitle>
                  <S.ReservationRate>예매율 {reservedRate}&#37;</S.ReservationRate>
                  <S.StarReview>
                    {isReleased ? (
                      <>
                        <IcStarGray1010 width="1rem" height="1rem" />
                        4.3
                      </>
                    ) : (
                      `D-${daysDifference}`
                    )}
                  </S.StarReview>
                </S.GridContainer>
                <S.ButtonReservation type="button">예매하기</S.ButtonReservation>
              </S.EachContentWrapper>
            </>
          ) : (
            <S.EachContentWrapper key={movieId}>
              <S.ageLimitContainer>
                {(() => {
                  switch (rating) {
                    case '청불':
                      return <IcAge1916 height="100%" />;
                    case 'ALL':
                      return <IcAgeAll16 height="100%" />;
                    case '12':
                      return <IcAge1216 height="100%" />;
                    default:
                      return <IcAgeAll16 height="100%" />;
                  }
                })()}
              </S.ageLimitContainer>
              <S.MovieImage src={imageUrl} />
              <S.GridContainer>
                <S.Ranking>{index + 1}</S.Ranking>
                <S.MovieTitle>{title}</S.MovieTitle>
                <S.ReservationRate>예매율 {reservedRate}&#37;</S.ReservationRate>
                <S.StarReview>
                  {isReleased ? (
                    <>
                      <IcStarGray1010 width="1rem" height="1rem" />
                      4.3
                    </>
                  ) : (
                    `D-${daysDifference}`
                  )}
                </S.StarReview>
              </S.GridContainer>
              <S.ButtonReservation
                type="button"
                onClick={() => {
                  navigate('/theaters', {
                    state: {
                      title,
                    },
                  });
                }}
              >
                예매하기
              </S.ButtonReservation>
            </S.EachContentWrapper>
          );
        })}
      </S.ContentWrapper>
      <EntireClickButton />
    </>
  );
};

export default PopularMovieChart;
const S = {
  HeaderWrapper: styled.header`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    width: 100%;
    padding: 0 1.8rem;
  `,

  MovieImage: styled.img`
    width: 13.4rem;
    border-radius: 0.6rem;
    overflow: hidden;
  `,

  PopularRankingType: styled.h2`
    ${({ theme }) => theme.typographies.n_head01}
    width: 100%;
  `,

  FilterScrenning: styled.ul`
    width: 100%;
    ${({ theme }) => theme.typographies.n_body03_med}
    color: ${({ theme }) => theme.colors.GRAY10};
    display: flex;
    justify-content: flex-end;
    align-items: center;
    list-style: none;
  `,

  FilterMovie: styled.li<{ active: boolean }>`
    color: ${(props) => (props.active ? props.theme.colors.BLACK100 : props.theme.colors.GRAY10)};
    cursor: pointer;
    &:hover {
      color: ${({ theme }) => theme.colors.BLACK100};
    }
  `,

  ageLimitContainer: styled.div`
    width: 1.6rem;
    height: 1.6rem;
    position: absolute;
    top: 0.6rem;
    right: 0.6rem;
  `,

  ContentWrapper: styled.div`
    display: flex;
    gap: 1.6rem;
    width: 100%; // width 값 안 주면 스크롤이 적용되지 않는다
    height: 28rem;
    margin: 1rem 0;
    overflow: scroll;
    scroll-behavior: smooth;

    & > :first-of-type {
      margin-left: 1.6rem;
    }

    & > :last-of-type {
      margin-right: 1.6rem;
    }

    /* width 값 주면 scroll 안 먹음 */
  `,

  EachContentWrapper: styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
    justify-content: space-around;

    background-color: ${({ theme }) => theme.colors.GRAY01};
    border-radius: 0.6rem;
    position: relative;
    padding-bottom: 0.8rem;
  `,

  // GridContainer 스타일
  GridContainer: styled.div<{ advertiseComponent?: boolean }>`
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
  `,

  // GridContainer 하위 컴포넌트 스타일
  Ranking: styled.div`
    ${({ theme }) => theme.typographies.r_number}
    grid-area: ranking;
  `,

  MovieTitle: styled.div`
    ${({ theme }) => theme.typographies.n_body02_bold}
    grid-area: movieTitle;
  `,

  ReservationRate: styled.div`
    grid-area: reservationRate;
    white-space: nowrap;
    margin-right: 0.375rem;

    color: ${({ theme }) => theme.colors.GRAY10};
    ${({ theme }) => theme.typographies.n_caption02_reg}
  `,

  StarReview: styled.span`
    grid-area: starReview;

    color: ${({ theme }) => theme.colors.GRAY10};
    ${({ theme }) => theme.typographies.n_caption02_reg}
    display: flex;
    align-items: flex-start;
  `,

  ButtonReservation: styled.button`
    width: 11.8rem;
    height: 3.4rem;
    ${({ theme }) => theme.typographies.n_body02_bold}
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
  `,

  // 광고 컴포넌트 스타일
  AdvertisingTitle: styled.div`
    grid-area: advertisingTitle;

    color: ${({ theme }) => theme.colors.GRAY10};
    ${({ theme }) => theme.typographies.n_body02_bold}
  `,

  NoticeAdvertising: styled.div`
    grid-area: noticeAdvertising;

    color: ${({ theme }) => theme.colors.GRAY10};
    ${({ theme }) => theme.typographies.n_caption01_reg}
  `,

  ButtonAdvertising: styled.button<{ isFirst?: boolean }>`
    width: 11.8rem;
    height: 3.4rem;

    color: ${({ theme }) => theme.colors.GRAY08};
    ${({ theme }) => theme.typographies.n_body02_bold}
    background-color: ${({ theme }) => theme.colors.WHITE100};
    border: 1px solid ${({ theme }) => theme.colors.GRAY07};
    border-radius: 4px;

    &:hover {
      background-color: ${({ theme }) => theme.colors.RED02};
      color: ${({ theme }) => theme.colors.WHITE100};
    }
  `,
};
