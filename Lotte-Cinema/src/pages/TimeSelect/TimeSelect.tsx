import Header from '@/components/commons/header/Header';
import MobileLayout from '@/components/mobileLayout/MobileLayout';
import { CalendarBox, MovieInfoBar, TimeInfo } from '@/components/timeSelect';

const TimeSelect = () => {
  const locs = ['건대입구', '강동', '청량리'];
  return (
    <MobileLayout>
      <Header title="영화별 예매" />
      <main>
        <MovieInfoBar locs={locs} />
        <CalendarBox />
        <TimeInfo />
      </main>
    </MobileLayout>
  );
};

export default TimeSelect;
