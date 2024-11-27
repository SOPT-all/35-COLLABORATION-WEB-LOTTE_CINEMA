import styled from '@emotion/styled';

import { useState } from 'react';

import AgeInfo from '@/components/InfoCheck/AgeInfo';
import MovieInfoBanner from '@/components/InfoCheck/MovieInfoBanner';
import NextButton from '@/components/InfoCheck/NextButton';
import SeatInfo from '@/components/InfoCheck/SeatInfo';
import SeatNumSelect from '@/components/InfoCheck/SeatNumSelect';
import TimeInfoList from '@/components/InfoCheck/TimeInfoList';
import Header from '@/components/commons/header/Header';
import MobileLayout from '@/components/mobileLayout/MobileLayout';

import { SeatNum } from '@/types/infoCheckType';

const InfoCheck = () => {
  const [isBtnActive, setIsBtnActive] = useState(false);

  // 다음 버튼 활성화 여부 판단 함수
  const handleBtnActive = (counts: SeatNum) => {
    setIsBtnActive(counts.adult > 0 || counts.teen > 0 || counts.senior > 0);
  };

  return (
    <MobileLayout>
      <Header title="인원 선택" />
      <S.Wrapper>
        <MovieInfoBanner />

        <S.MidContainer>
          <TimeInfoList />
          <AgeInfo />
          <SeatInfo />
        </S.MidContainer>

        <S.BottomContainer>
          <SeatNumSelect onCountChange={handleBtnActive} />
          <S.ButtonContainer>
            <NextButton isActive={isBtnActive}>다음</NextButton>
          </S.ButtonContainer>
        </S.BottomContainer>
      </S.Wrapper>
    </MobileLayout>
  );
};

const S = {
  Wrapper: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  `,

  MidContainer: styled.div`
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.GRAY02};
  `,

  ButtonContainer: styled.div`
    width: 100%;
    padding: 2rem 1.8rem;
  `,

  BottomContainer: styled.div`
    width: 100%;
    margin-top: auto;
  `,
};
export default InfoCheck;
