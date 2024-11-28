import styled from '@emotion/styled';

import { USER_TYPES } from '@/constants/mocks/userTypes';

import { IcMinus24, IcPlus24 } from '@/assets/svg';

interface SeatNumSelectProps {
  counts: { adult: number; teen: number; senior: number };
  handleCountChange: (type: 'adult' | 'teen' | 'senior', increment: number) => void;
}

const SeatNumSelect = ({ counts, handleCountChange }: SeatNumSelectProps) => {
  return (
    <S.Wrapper>
      {USER_TYPES.map(({ label, key }) => (
        <UserCounter
          key={key}
          userType={label}
          count={counts[key]}
          onIncrement={() => handleCountChange(key, 1)}
          onDecrement={() => handleCountChange(key, -1)}
        />
      ))}
    </S.Wrapper>
  );
};

// UserCounter 컴포넌트 분리
interface UserCounterProps {
  userType: string;
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

const UserCounter = ({ userType, count, onIncrement, onDecrement }: UserCounterProps) => (
  <S.InnerLayout>
    <S.UserType>{userType}</S.UserType>
    <S.UserCounterContainer>
      <S.CountBtn onClick={onDecrement}>
        <IcMinus24 width={24} />
      </S.CountBtn>
      <S.Count>{count}</S.Count>
      <S.CountBtn onClick={onIncrement}>
        <IcPlus24 width={24} />
      </S.CountBtn>
    </S.UserCounterContainer>
  </S.InnerLayout>
);

const S = {
  Wrapper: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: white;
    padding: 1.6rem 2.4rem 0 2.4rem;
    gap: 1.2rem;
  `,

  InnerLayout: styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  UserType: styled.p`
    ${({ theme }) => theme.typographies.n_body02_med}
  `,

  UserCounterContainer: styled.div`
    padding: 0.5rem;
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.GRAY02};
    border-radius: 4rem;
    gap: 1.7rem;
  `,

  CountBtn: styled.button`
    all: unset;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  `,

  Count: styled.p`
    ${({ theme }) => theme.typographies.n_head03_bold}
    letter-spacing: 0;
    text-align: center;
  `,
};

export default SeatNumSelect;
