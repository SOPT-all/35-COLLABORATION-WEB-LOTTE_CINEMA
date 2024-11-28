import { useState } from 'react';

import Header from '@/components/commons/header/Header';
import MobileLayout from '@/components/mobileLayout/MobileLayout';
import { CalendarBox, MovieInfoBar, TimeInfo } from '@/components/timeSelect';

import useCalendar from '@/hooks/useCalendar';

const TimeSelect = () => {
  const [locs, setLocs] = useState<string[]>(['건대입구', '강동', '청량리']);
  const [selectTitle, setSelectTitle] = useState('청설');
  const today = new Date(2024, 10, 5);

  const { selectDate, handleBtnClick } = useCalendar(today);

  const handleRemoveLoc = (loctoDelete: string) => {
    if (locs.length > 1) {
      setLocs((prev) => prev.filter((loc) => loc !== loctoDelete));
    } else {
      alert('하나 이상의 상영권을 선택해주세요!');
    }
  };

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
