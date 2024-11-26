import styled from '@emotion/styled';

import { ImgPosterMainAprilcomeshewill } from '@/assets/svg';

const MainImage = () => {
  return (
    <S.MainImageContainer>
      <ImgPosterMainAprilcomeshewill width="100%" />
    </S.MainImageContainer>
  );
};

export default MainImage;

const S = {
  MainImageContainer: styled.div`
    width: 100%;
    padding: 0 1.8rem;
    margin: 5.2rem 0 1.8rem;
  `,
};
