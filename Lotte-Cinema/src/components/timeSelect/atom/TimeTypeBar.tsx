import styled from '@emotion/styled';

import { useState } from 'react';

import TimeType from '@/constants/mocks/timeType';

import Button from './Button';

const TimeTypeBar = () => {
  const [currentTab, setCurrentTab] = useState('전체');

  const handleUnderLine = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCurrentTab(e.currentTarget.value);
  };

  return (
    <S.Wrapper>
      <S.Container>
        {TimeType.map((time) => (
          <Button
            key={`type-${time.id}`}
            $selected={currentTab === time.label}
            $isChip={true}
            onClick={handleUnderLine}
            value={time.label}
          >
            {time.label}
          </Button>
        ))}
      </S.Container>
    </S.Wrapper>
  );
};

export default TimeTypeBar;

const S = {
  Wrapper: styled.section`
    display: flex;
    width: 100%
    height: 5.8rem;
    padding: 1.4rem 1.8rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  `,

  Container: styled.ul`
    display: flex;
    align-items: center;
    gap: 0.6rem;
    align-self: stretch;
  `,
};
