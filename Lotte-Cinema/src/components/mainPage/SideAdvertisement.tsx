import styled from '@emotion/styled';

import { ImgBannerAprilMedium, ImgBannerMvssadaguMedium } from '@/assets/svg';

const SideAdvertisement = () => {
  return (
    <S.AdsContainer>
      <ImgBannerAprilMedium width="100%" />
      <ImgBannerMvssadaguMedium width="100%" />
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
    padding: 3.2rem 1.8rem 0 1.8rem;
  `,
};
