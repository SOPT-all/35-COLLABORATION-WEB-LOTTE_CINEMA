import styled from '@emotion/styled';

import { useState } from 'react';

import List from '@/components/TheaterList/List';
import SelectActions from '@/components/TheaterList/SelectActions';
import TabBar from '@/components/TheaterList/TabBar';
import Header from '@/components/commons/header/Header';
import MobileLayout from '@/components/mobileLayout/MobileLayout';

const TheaterList = () => {
  const [selectedDetail, setSelectedDetail] = useState<string[]>([]);

  const handleDetailClick = (name: string) => {
    // 이미 선택된 세부 지역을 다시 선택한 경우 지우기
    if (selectedDetail.includes(name)) {
      setSelectedDetail((prev) => {
        const filterDetail = prev.filter((detail) => detail !== name);
        return filterDetail;
      });
      return;
    }

    // 3개 이상일 때 누르면 아무 동작 X
    if (selectedDetail.length >= 3) return;

    setSelectedDetail((prev) => [...prev, name]);
  };

  console.log(selectedDetail);

  return (
    <MobileLayout>
      <Header title="영화관 선택" />
      <S.Wrapper>
        <TabBar />
        <List onClick={handleDetailClick} />
        <SelectActions />
      </S.Wrapper>
    </MobileLayout>
  );
};

const S = {
  Wrapper: styled.div`
    position: relative;
    width: 100%;
    height: 100%;
  `,
};

export default TheaterList;
