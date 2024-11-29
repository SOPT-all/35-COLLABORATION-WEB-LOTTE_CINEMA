import styled from '@emotion/styled';

import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import AgeInfo from '@/components/InfoCheck/AgeInfo';
import MovieInfoBanner from '@/components/InfoCheck/MovieInfoBanner';
import NextButton from '@/components/InfoCheck/NextButton';
import SeatInfo from '@/components/InfoCheck/SeatInfo';
import SeatNumSelect from '@/components/InfoCheck/SeatNumSelect';
import TimeInfoList from '@/components/InfoCheck/TimeInfoList';
import Header from '@/components/commons/header/Header';
import MobileLayout from '@/components/mobileLayout/MobileLayout';

import { SeatNum } from '@/types/infoCheckType';

export interface CountsType {
  adult: number;
  teen: number;
  senior: number;
}
const InfoCheck = () => {
  const [isBtnActive, setIsBtnActive] = useState(false);
  const [counts, setCounts] = useState({
    adult: 0,
    teen: 0,
    senior: 0,
  });
  const navigate = useNavigate();
  const location = useLocation();

  const handleCountChange = (type: keyof typeof counts, increment: number) => {
    setCounts((prev) => {
      const updatedCounts = {
        ...prev,
        [type]: Math.max(0, prev[type] + increment), // 0아래로 안내려가도록
      };
      handleBtnActive(updatedCounts);
      return updatedCounts;
    });
  };

  const moveSeatSelectPage = () => {
    navigate('/tickets/seats', {
      state: counts,
    });
  };

  // 다음 버튼 활성화 여부 판단 함수
  const handleBtnActive = (counts: SeatNum) => {
    setIsBtnActive(counts.adult > 0 || counts.teen > 0 || counts.senior > 0);
  };

  return (
    <MobileLayout>
      <Header title="인원 선택" />
      <S.Wrapper>
        <MovieInfoBanner movieInfo={location.state} />
        <TimeInfoList />
        <AgeInfo />
        <SeatInfo />

        <S.BottomSheet>
          <SeatNumSelect counts={counts} handleCountChange={handleCountChange} />
          <S.ButtonContainer>
            <NextButton onClick={moveSeatSelectPage} isActive={isBtnActive}>
              다음
            </NextButton>
          </S.ButtonContainer>
        </S.BottomSheet>
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
    background-color: ${({ theme }) => theme.colors.GRAY02};
  `,

  ButtonContainer: styled.div`
    width: 100%;
    padding: 2rem 1.8rem;
    background-color: ${({ theme }) => theme.colors.WHITE100};
  `,

  BottomSheet: styled.div`
    width: 100%;
    margin-top: auto;
  `,
};
export default InfoCheck;
