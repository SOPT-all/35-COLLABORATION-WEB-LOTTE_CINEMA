import styled from '@emotion/styled';

import { useState } from 'react';

import CINEMA_TYPE from '@/constants/mocks/cinemaType';

import Button from './Button';

const CinemaTypeBar = () => {
  const [currentTab, setCurrentTab] = useState('all');

  const handleUnderLine = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCurrentTab(e.currentTarget.value);
  };

  return (
    <S.Wrapper>
      <S.Container>
        {CINEMA_TYPE.map((type) => (
          <Button
            key={`type-${type.id}`}
            $selected={currentTab === type.value}
            onClick={handleUnderLine}
            value={type.value}
          >
            {type.label}
          </Button>
        ))}
      </S.Container>
    </S.Wrapper>
  );
};

export default CinemaTypeBar;

const S = {
  Wrapper: styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    padding: 0 1.8rem;
    gap: 1rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.GRAY03};
  `,

  Container: styled.ul`
    display: flex;
    align-items: center;
    gap: 1.9rem;
    padding-bottom: 0.1rem;
    align-self: stretch;
  `,
};
