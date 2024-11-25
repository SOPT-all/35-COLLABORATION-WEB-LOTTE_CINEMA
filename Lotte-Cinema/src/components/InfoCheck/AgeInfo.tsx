import styled from '@emotion/styled';

import { IcAge1216 } from '@/assets/svg';

const AgeInfo = () => {
  return (
    <S.Wrapper>
      <S.AgeTitle>
        <IcAge1216 width={16} />본 영화는
        <p>만 12세 이상관람가</p>
        영화입니다.
      </S.AgeTitle>
      <S.AgeSubTitle>
        만 12세 미만의 고객님 (영, 유아 포함)은 반드시 부모님 또는 성인 보호자의
        <br /> 동반시 관람이 가능합니다.연령 확인 불가 시 입장이 제한될 수 있습니다.
      </S.AgeSubTitle>
    </S.Wrapper>
  );
};

const S = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  AgeTitle: styled.p`
    display: flex;
    ${({ theme }) => theme.typographies.n_body02_reg}
    align-items: center;
    gap: 0.2rem;

    & > p {
      ${({ theme }) => theme.typographies.n_body02_underline}
      color: ${({ theme }) => theme.colors.YELLOW};
    }
  `,
  AgeSubTitle: styled.p`
    ${({ theme }) => theme.typographies.n_caption02_reg}
    color: ${({ theme }) => theme.colors.GRAY08};
    margin-top: 1.2rem;
  `,
};

export default AgeInfo;
