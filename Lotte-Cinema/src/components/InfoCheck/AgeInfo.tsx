import styled from '@emotion/styled';

import { useGetAgeInfo } from '@/hooks/infoCheck/useGetAgeInfo';

interface AgeInfoProps {
  age: string;
}

const AgeInfo = ({ age }: AgeInfoProps) => {
  const { icon, text, color, description } = useGetAgeInfo(age);

  return (
    <S.Wrapper>
      <S.AgeTitle $color={color}>
        {icon}본 영화는
        <p>{text}관람가</p>
        영화입니다.
      </S.AgeTitle>
      <S.AgeSubTitle>{description}</S.AgeSubTitle>
    </S.Wrapper>
  );
};

const S = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: auto;
  `,

  AgeTitle: styled.div<{ $color: string }>`
    display: flex;
    ${({ theme }) => theme.typographies.n_body02_reg}
    align-items: center;
    gap: 0.2rem;

    & > p {
      ${({ theme }) => theme.typographies.n_body02_underline}
      color: ${({ $color }) => $color};
    }
  `,
  AgeSubTitle: styled.p`
    ${({ theme }) => theme.typographies.n_caption02_reg}
    color: ${({ theme }) => theme.colors.GRAY08};
    margin-top: 1.2rem;
  `,
};

export default AgeInfo;
