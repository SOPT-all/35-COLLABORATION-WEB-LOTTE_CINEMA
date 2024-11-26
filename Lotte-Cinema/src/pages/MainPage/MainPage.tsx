import MainImage from '@/components/mainPage/MainImage';
import MainPageHeader from '@/components/mainPage/MainPageHeader';
import PopularMovieChart from '@/components/mainPage/PopularMovieChart';
import MobileLayout from '@/components/mobileLayout/MobileLayout';

const MainPage = () => {
  return (
    <MobileLayout>
      <MainPageHeader />
      <MainImage />
      <PopularMovieChart />
    </MobileLayout>
  );
};

export default MainPage;
