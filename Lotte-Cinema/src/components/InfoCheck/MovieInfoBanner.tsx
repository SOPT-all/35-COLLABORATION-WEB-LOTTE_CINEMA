import styled from '@emotion/styled';

import { calculateDuration, formatDate } from '@/utils/calculateMovieInfo';

import { MovieListType } from '@/types/data';
import { TimeListType } from '@/types/infoCheck';

interface MovieInfoBannerProps {
  movieInfo: {
    allTimeList: TimeListType[];
    beginTime: string;
    endTime: string;
    loc: string;
    selectDate: Date;
    selectedMovie: MovieListType;
    subTheaterInfo: string;
    theater: string;
  };
}

const MovieInfoBanner = ({ movieInfo }: MovieInfoBannerProps) => {
  const { beginTime, endTime, subTheaterInfo, selectedMovie, selectDate, theater, loc } = movieInfo;
  const { imageUrl, title } = selectedMovie;

  const [hall, format] = theater.split(' '); // "6관 2D" -> ["6관", "2D"]
  const formattedDate = formatDate(selectDate);
  const duration = calculateDuration(beginTime, endTime); // 분 계산

  return (
    <S.Wrapper>
      <S.PosterImg src={imageUrl} />
      <S.InfoLayout>
        <S.Title>
          {title} ({format}
          {subTheaterInfo.trim() && ` ${subTheaterInfo}`})
        </S.Title>
        <S.DetailInfoContainer>
          <S.Time>
            {formattedDate} · {beginTime} ~ {endTime} ({duration}분)
          </S.Time>
          <S.Theater>
            {loc} · {hall} {subTheaterInfo}
          </S.Theater>
        </S.DetailInfoContainer>
      </S.InfoLayout>
    </S.Wrapper>
  );
};

const S = {
  Wrapper: styled.div`
    width: 100%;
    padding: 2rem 1.8rem;
    display: flex;
    gap: 1.6rem;
    background-color: ${({ theme }) => theme.colors.BG_THEATER};
  `,

  PosterImg: styled.img`
    width: 4.5rem;
    height: 6rem;
    border-radius: 0.2rem;
  `,

  InfoLayout: styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `,

  Title: styled.p`
    ${({ theme }) => theme.typographies.n_head03_bold}
    color: ${({ theme }) => theme.colors.WHITE100};
  `,

  DetailInfoContainer: styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  `,

  Time: styled.p`
    ${({ theme }) => theme.typographies.n_body03_reg}
    color: ${({ theme }) => theme.colors.GRAY07};
  `,

  Theater: styled.p`
    ${({ theme }) => theme.typographies.n_body03_reg}
    color: ${({ theme }) => theme.colors.GRAY07};
  `,
};

export default MovieInfoBanner;
