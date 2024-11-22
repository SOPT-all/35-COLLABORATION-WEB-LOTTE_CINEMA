import Header from '@/components/commons/header/Header';
import MobileLayout from '@/components/mobileLayout/MobileLayout';
import Calendar from '@/components/timeSelect/Calendar';
import MovieInfoBar from '@/components/timeSelect/MovieInfoBar';
import TimeInfo from '@/components/timeSelect/TimeInfo';

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
