import styled from '@emotion/styled';

const MiniMap = () => {
  return (
    <>
      <S.MiniMapWrapper />
    </>
  );
};

export default MiniMap;

const S = {
  MiniMapWrapper: styled.div`
    width: 10.3rem;
    height: 6.1rem;
    background-color: ${({ theme }) => theme.colors.BLACK100};
  `,
};
