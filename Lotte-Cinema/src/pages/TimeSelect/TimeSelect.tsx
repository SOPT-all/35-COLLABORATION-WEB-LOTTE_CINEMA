import Header from '@/components/commons/header/Header';
import MobileLayout from '@/components/mobileLayout/MobileLayout';
import { Calendar, MovieInfoBar, TimeInfo } from '@/components/timeSelect';

const TimeSelect = () => {
  return (
    <MobileLayout>
      <Header title="영화별 예매" />
      <main>
        <MovieInfoBar />
        <Calendar />
        <TimeInfo />
      </main>
    </MobileLayout>
  );
};

export default TimeSelect;
