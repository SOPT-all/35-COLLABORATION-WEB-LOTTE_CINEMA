import Header from '@/components/commons/header/Header';
import MobileLayout from '@/components/mobileLayout/MobileLayout';
import SeatTableBody from '@/components/seatReservation/SeatTableBody';
import SeatTableHeader from '@/components/seatReservation/SeatTableHeader';

const SeatReservation = () => {
  return (
    <MobileLayout>
      <Header title="좌석 선택" />
      <SeatTableHeader />
      <SeatTableBody />
    </MobileLayout>
  );
};

export default SeatReservation;
