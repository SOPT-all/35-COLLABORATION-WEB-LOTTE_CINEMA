import styled from '@emotion/styled';

import { ImgBannerAprilMedium, ImgBannerMvssadaguMedium } from '@/assets/svg';

const SideAdvertisement = () => {
  return (
    <S.AdsContainer>
      <ImgBannerAprilMedium width="90%" />
      <ImgBannerMvssadaguMedium width="90%" />
    </S.AdsContainer>
  );
};

export default SideAdvertisement;

const S = {
  AdsContainer: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.4rem 0;
    padding: 3.2rem 0 0 0;
  `,
};
