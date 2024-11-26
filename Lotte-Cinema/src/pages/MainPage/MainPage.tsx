import Footer from '@/components/mainPage/Footer';
import MainPageHeader from '@/components/mainPage/MainPageHeader';
import NavFooter from '@/components/mainPage/NavFooter';
import MobileLayout from '@/components/mobileLayout/MobileLayout';

const MainPage = () => {
  return (
    <MobileLayout>
      <MainPageHeader />
      <Footer />
      <NavFooter />
    </MobileLayout>
  );
};

export default MainPage;
