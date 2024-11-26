import styled from '@emotion/styled';

import AgeInfo from '@/components/InfoCheck/AgeInfo';
import MovieInfoBanner from '@/components/InfoCheck/MovieInfoBanner';
import NextButton from '@/components/InfoCheck/NextButton';
import SeatInfo from '@/components/InfoCheck/SeatInfo';
import SeatNumSelect from '@/components/InfoCheck/SeatNumSelect';
import TimeInfoList from '@/components/InfoCheck/TimeInfoList';
import Header from '@/components/commons/header/Header';
import MobileLayout from '@/components/mobileLayout/MobileLayout';

const InfoCheck = () => {
  return (
    <MobileLayout>
      <Header title="인원 선택" />
      <S.Wrapper>
        <MovieInfoBanner />

        <S.InnerContainer>
          <TimeInfoList />
          <AgeInfo />
          <SeatInfo />
        </S.InnerContainer>

        <SeatNumSelect />
        <S.ButtonContainer>
          <NextButton>다음</NextButton>
        </S.ButtonContainer>
      </S.Wrapper>
    </MobileLayout>
  );
};

const S = {
  Wrapper: styled.div`
    width: 100%;
    height: 100%;
  `,
  InnerContainer: styled.div`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.GRAY02};
  `,
  ButtonContainer: styled.div`
    width: 100%;
    padding: 2rem 1.8rem;
    /* position: absolute; // 디자이너 질문
    bottom: 0; */
  `,
};
export default InfoCheck;
