import styled from '@emotion/styled';

import { ImgPosterSmallAmazonhms } from '@/assets/svg';

const MovieInfoBanner = () => {
  return (
    <S.Wrapper>
      <ImgPosterSmallAmazonhms width={45} />
      <S.InfoLayout>
        <S.Title>아마존 활명수 (2D 리클라이너)</S.Title>
        <S.DetailInfoContainer>
          <S.Time>24.11.09 (수) · 16:10 ~ 18:12 (122분)</S.Time>
          <S.Theater>용산 · 4관 리클라이너(4층)</S.Theater>
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
