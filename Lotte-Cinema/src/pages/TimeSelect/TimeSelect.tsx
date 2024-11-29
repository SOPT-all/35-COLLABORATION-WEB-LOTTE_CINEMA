import Header from '@/components/commons/header/Header';
import MobileLayout from '@/components/mobileLayout/MobileLayout';
import { CalendarBox, MovieInfoBar, TimeInfo } from '@/components/timeSelect';

import { useDateLocSelect } from '@/hooks/timeSelect';

const TimeSelect = () => {
  const today = new Date(2024, 10, 5);
  const { selectDate, handleBtnClick, selectTitle, setSelectTitle, locs, handleRemoveLoc } = useDateLocSelect(today);

  return (
    <MobileLayout>
      <Header title="영화별 예매" />
      <main>
        <MovieInfoBar
          locs={locs}
          onDelete={handleRemoveLoc}
          selectTitle={selectTitle}
          setSelectTitle={setSelectTitle}
        />
        <CalendarBox selectDate={selectDate} handleBtnClick={handleBtnClick} />
        <TimeInfo locs={locs} selectTitle={selectTitle} selectDate={selectDate} />
      </main>
    </MobileLayout>
  );
};

export default TimeSelect;
