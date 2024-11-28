import styled from '@emotion/styled';

import { useState } from 'react';

import List from '@/components/TheaterList/List';
import SelectActions from '@/components/TheaterList/SelectActions';
import TabBar from '@/components/TheaterList/TabBar';
import Header from '@/components/commons/header/Header';
import MobileLayout from '@/components/mobileLayout/MobileLayout';

const TheaterList = () => {
  const [selectedDetail, setSelectedDetail] = useState<string[]>([]);

  // detail 상태 삭제 로직 (리스트 + 핀)
  const deleteDetail = (name: string) => {
    setSelectedDetail((prev) => {
      const filterDetail = prev.filter((detail) => detail !== name);
      return filterDetail;
    });
  };

  // detail 클릭 (리스트)
  const handleDetailClick = (name: string) => {
    // 이미 선택된 세부 지역을 다시 선택한 경우 지우기
    if (selectedDetail.includes(name)) {
      deleteDetail(name);
      return;
    }

    // 3개 이상일 때 누르면 아무 동작 X
    if (selectedDetail.length >= 3) return;

    setSelectedDetail((prev) => [...prev, name]);
  };

  return (
    <MobileLayout>
      <Header title="영화관 선택" />
      <S.Wrapper>
        <TabBar />
        <List onClick={handleDetailClick} selectedDetail={selectedDetail} />
        <SelectActions selectedDetail={selectedDetail} deleteDetail={deleteDetail} />
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
