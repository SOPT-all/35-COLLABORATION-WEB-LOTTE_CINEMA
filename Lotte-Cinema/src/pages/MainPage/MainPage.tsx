import MobileLayout from '@/components/mobileLayout/MobileLayout';
import Button from '@/components/seatReservation/Button';

import { IcLpayLogo } from '@/assets/svg';

const MainPage = () => {
  return (
    <MobileLayout>
      <main>메인페이지</main>
      <Button>
        <IcLpayLogo width="4.8rem" height="1.7rem" />
        결제
      </Button>
    </MobileLayout>
  );
};

export default MainPage;
