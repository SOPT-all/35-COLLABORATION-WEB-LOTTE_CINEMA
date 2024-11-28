import styled from '@emotion/styled';

import { exclusiveItems } from '@/constants/mocks/exclusiveMovie';

import { IcPic2816 } from '@/assets/svg';

const ExclusiveChart = () => {
  return (
    <>
      <S.HeaderWrapper>
        <S.HeaderTitle>롯데시네마 단독상영</S.HeaderTitle>
      </S.HeaderWrapper>

      <S.ContentWrapper>
        {exclusiveItems.map((item, index) => {
          const AgeLimitIcon = item.ageLimit;
          const Image = item.image;
          const Title = item.title;

          return (
            <S.EachContentWrapper key={index}>
              <S.ImageWrapper>
                <S.CinemaPickContainer>
                  <IcPic2816 height="100%" />
                </S.CinemaPickContainer>
                <S.AgeLimitContainer>{AgeLimitIcon && <AgeLimitIcon height="100%" />}</S.AgeLimitContainer>
                <Image width="13.4rem" />
              </S.ImageWrapper>
              <S.TextWrapper>
                <S.MovieTitle>{Title}</S.MovieTitle>
                <S.ButtonReservation type="button">예매하기</S.ButtonReservation>
              </S.TextWrapper>
            </S.EachContentWrapper>
          );
        })}
      </S.ContentWrapper>
    </>
  );
};

export default ExclusiveChart;

const S = {
  HeaderWrapper: styled.header`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    width: 100%;
    padding: 0 1.8rem;
    margin-top: 2.1rem;
  `,

  HeaderTitle: styled.h2`
    ${({ theme }) => theme.typographies.n_head01};
    width: 100%;
  `,
  ContentWrapper: styled.section`
    display: flex;
    gap: 1.6rem;
    width: 100%;
    height: 28rem;
    overflow: scroll;
    scroll-behavior: smooth;
    margin: 1rem 0;

    & > :first-of-type {
      margin-left: 1.6rem;
    }

    & > :last-of-type {
      margin-right: 1.6rem;
    }
  `,
  EachContentWrapper: styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.GRAY01};
  `,
  ImageWrapper: styled.div`
    position: relative;
  `,
  CinemaPickContainer: styled.div`
    height: 1.6rem;
    position: absolute;
    top: 0.6rem;
    left: 0.6rem;
  `,
  AgeLimitContainer: styled.div`
    height: 1.6rem;
    position: absolute;
    top: 0.6rem;
    right: 0.6rem;
  `,
  ButtonReservation: styled.button`
    width: 11.8rem;
    height: 3.4rem;
    ${({ theme }) => theme.typographies.n_body02_bold};
    color: ${({ theme }) => theme.colors.GRAY12};
    background-color: ${({ theme }) => theme.colors.WHITE100};
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.colors.GRAY07};

    &:hover {
      background-color: ${({ theme }) => theme.colors.RED02};
      color: ${({ theme }) => theme.colors.WHITE100};
    }
  `,
  TextWrapper: styled.div`
    display: flex;
    flex-direction: column;
    padding: 0.8rem;
    gap: 0.8rem;
  `,
  MovieTitle: styled.h3`
    ${({ theme }) => theme.typographies.n_body02_bold};
  `,
};
