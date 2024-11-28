import { useState } from 'react';

import Header from '@/components/commons/header/Header';
import MobileLayout from '@/components/mobileLayout/MobileLayout';
import { CalendarBox, MovieInfoBar, TimeInfo } from '@/components/timeSelect';

const TimeSelect = () => {
  const [locs, setLocs] = useState<string[]>(['건대입구', '강동', '청량리']);

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
        <MovieInfoBar locs={locs} onDelete={handleRemoveLoc} />
        <CalendarBox />
        <TimeInfo locs={locs} />
      </main>
    </MobileLayout>
  );
};

export default TimeSelect;
