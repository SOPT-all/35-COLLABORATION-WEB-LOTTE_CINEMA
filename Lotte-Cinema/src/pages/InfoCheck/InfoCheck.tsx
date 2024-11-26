import styled from '@emotion/styled';

import AgeInfo from '@/components/InfoCheck/AgeInfo';
import MovieInfoBanner from '@/components/InfoCheck/MovieInfoBanner';
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
};
export default InfoCheck;
