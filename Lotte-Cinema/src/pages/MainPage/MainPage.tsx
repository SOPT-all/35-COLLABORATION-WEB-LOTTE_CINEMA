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
      <MainImage />
      <PopularMovieChart />
      <ExclusiveChart />
      <SideAdvertisement />
      <EventAdvertising />
      <Footer />
      <NavFooter />
    </MobileLayout>
  );
};

export default MainPage;
