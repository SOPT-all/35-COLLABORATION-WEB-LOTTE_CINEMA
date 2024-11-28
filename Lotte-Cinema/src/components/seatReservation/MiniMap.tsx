import styled from '@emotion/styled';

const MiniMap = () => {
  return (
    <S.MiniMapWrapper>
      <S.ScreenWrapper>Screen</S.ScreenWrapper>
    </S.MiniMapWrapper>
  );
};

export default MiniMap;

const S = {
  MiniMapWrapper: styled.div`
    width: 10.3rem;
    height: 6.1rem;
    padding: 0rem 1rem;
    background-color: ${({ theme }) => theme.colors.BLACK100};
  `,
  ScreenWrapper: styled.p`
    display: flex;
    justify-content: center;
    padding: 0.3rem 0rem;
    ${({ theme }) => theme.typographies.n_caption01_reg};
    color: ${({ theme }) => theme.colors.GRAY12};
    border-bottom: 1px solid ${({ theme }) => theme.colors.GRAY12};
  `,
};
