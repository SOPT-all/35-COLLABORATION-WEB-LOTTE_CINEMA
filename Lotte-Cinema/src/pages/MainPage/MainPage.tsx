import EventAdvertising from '@/components/mainPage/EventAdvertising';
import MainPageHeader from '@/components/mainPage/MainPageHeader';
import SideAdvertisement from '@/components/mainPage/SideAdvertisement';
import MobileLayout from '@/components/mobileLayout/MobileLayout';

const MainPage = () => {
  return (
    <MobileLayout>
      <MainPageHeader />
      <SideAdvertisement />
      <EventAdvertising />
    </MobileLayout>
  );
};

export default MainPage;
