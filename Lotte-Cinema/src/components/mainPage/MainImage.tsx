import styled from '@emotion/styled';

import { ImgPosterMainAprilcomeshewill } from '@/assets/svg';

const MainImage = () => {
  return (
    <S.MainImageContainer>
      <ImgPosterMainAprilcomeshewill width="100%" height="100%" />
    </S.MainImageContainer>
  );
};

export default MainImage;

const S = {
  MainImageContainer: styled.div`
    margin-top: 5rem;
    width: 100%;
    padding: 0 1.8rem;
    margin-bottom: 1.8rem;
  `,
};
