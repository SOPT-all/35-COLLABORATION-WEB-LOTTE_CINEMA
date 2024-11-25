import Header from '@/components/commons/header/Header';
import MobileLayout from '@/components/mobileLayout/MobileLayout';
import SeatTableBody from '@/components/seatReservation/SeatTableBody';

const SeatReservation = () => {
  return (
    <MobileLayout>
      <Header title="좌석 선택" />
      <SeatTableBody />
    </MobileLayout>
  );
};

export default SeatReservation;
