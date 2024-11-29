import styled from '@emotion/styled';

import EventAdvertising from '@/components/mainPage/EventAdvertising';
import ExclusiveChart from '@/components/mainPage/ExclusiveChart';
import Footer from '@/components/mainPage/Footer';
import MainImage from '@/components/mainPage/MainImage';
import MainPageHeader from '@/components/mainPage/MainPageHeader';
import NavFooter from '@/components/mainPage/NavFooter';
import PopularMovieChart from '@/components/mainPage/PopularMovieChart';
import SideAdvertisement from '@/components/mainPage/SideAdvertisement';
import MobileLayout from '@/components/mobileLayout/MobileLayout';

const MainPage = () => {
  return (
    <MobileLayout>
      <MainPageHeader />
      <S.Wrapper>
        <MainImage />
        <PopularMovieChart />
        <ExclusiveChart />
        <SideAdvertisement />
        <EventAdvertising />
        <Footer />
        <NavFooter />
      </S.Wrapper>
    </MobileLayout>
  );
};

export default MainPage;

const S = {
  Wrapper: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  `,
};
