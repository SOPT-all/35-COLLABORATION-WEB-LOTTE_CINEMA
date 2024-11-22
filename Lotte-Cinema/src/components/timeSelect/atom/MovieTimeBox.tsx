import styled from '@emotion/styled';

import { IcArrowTop20 } from '@/assets/svg';

import theme from '@/styles';

import TimeCard from './TimeCard';

const MovieTimeBox = () => {
  return (
    <S.Wrapper>
      <S.TitleHeader>
        <S.TitleContainer>
          <h1>건대 입구</h1>
          <IcArrowTop20 width="2rem" />
        </S.TitleContainer>
      </S.TitleHeader>
      <S.InfoAccordion>
        <S.InfoContainer>
          <S.InfoTrigger>
            <p>4관 2D</p>
            <span />
            <p>리클라이너</p>
          </S.InfoTrigger>
          <S.InfoContent>
            <TimeCard />
            <TimeCard />
            <TimeCard />
            <TimeCard />
            <TimeCard />
          </S.InfoContent>
        </S.InfoContainer>
      </S.InfoAccordion>
    </S.Wrapper>
  );
};

export default MovieTimeBox;

const S = {
  Wrapper: styled.article`
    & .black {
      background-color: black;
    }
    display: flex;
    width: 100%;
    height: 3.37rem;
    flex-direction: column;
    align-items: center;
  `,

  TitleHeader: styled.header`
    display: flex;
    height: 5.6rem;
    padding: 1.8rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    align-self: stretch;
  `,

  TitleContainer: styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    & h1 {
      ${theme.typographies.n_head02_bold}
    }
  `,

  InfoAccordion: styled.section`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
  `,

  InfoContainer: styled.section`
    width: 100%;
    padding: 0 1.8rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 1.8rem;
  `,

  InfoTrigger: styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.6rem;

    & p {
      ${({ theme }) => theme.typographies.n_body02_reg}
    }

    & span {
      background-color: ${({ theme }) => theme.colors.GRAY04};
      width: 0.1rem;
      height: 0.9rem;
    }
  `,

  InfoContent: styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0.8rem;
  `,
};
