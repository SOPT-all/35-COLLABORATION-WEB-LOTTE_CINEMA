import ExclusiveChart from '@/components/mainPage/ExclusiveChart';
import Footer from '@/components/mainPage/Footer';
import MainImage from '@/components/mainPage/MainImage';
import MainPageHeader from '@/components/mainPage/MainPageHeader';
import NavFooter from '@/components/mainPage/NavFooter';
import PopularMovieChart from '@/components/mainPage/PopularMovieChart';
import MobileLayout from '@/components/mobileLayout/MobileLayout';

const MainPage = () => {
  return (
    <MobileLayout>
      <MainPageHeader />
      <MainImage />
      <PopularMovieChart />
      <ExclusiveChart />
      <Footer />
      <NavFooter />
    </MobileLayout>
  );
};

export default MainPage;
