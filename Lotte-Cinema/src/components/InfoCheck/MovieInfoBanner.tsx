import styled from '@emotion/styled';

import { calculateDuration, formatDate } from '@/utils/calculateMovieInfo';

import { ImgPosterSmallAmazonhms } from '@/assets/svg';

interface MovieInfoBannerProps {
  movieInfo: {
    beginTime: string;
    endTime: string;
    selectDate: Date;
    selectTitle: string;
    subTheaterInfo: string;
    theater: string;
  };
}

const MovieInfoBanner = ({ movieInfo }: MovieInfoBannerProps) => {
  const { selectTitle, selectDate, beginTime, endTime, theater, subTheaterInfo } = movieInfo;
  const [hall, format] = theater.split(' '); // "6관 2D" -> ["6관", "2D"]

  const formattedDate = formatDate(selectDate);
  const duration = calculateDuration(beginTime, endTime); // 분 계산

  return (
    <S.Wrapper>
      <ImgPosterSmallAmazonhms width={45} />
      {/* 이거랑1 */}
      <S.InfoLayout>
        <S.Title>
          {selectTitle} ({format} {subTheaterInfo})
        </S.Title>
        <S.DetailInfoContainer>
          <S.Time>
            {formattedDate} · {beginTime} ~ {endTime} ({duration}분)
          </S.Time>
          <S.Theater>
            아직 여기2 · {hall} {subTheaterInfo}
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
