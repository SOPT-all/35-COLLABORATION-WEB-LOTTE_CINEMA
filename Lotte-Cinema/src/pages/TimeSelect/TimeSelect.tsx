import { useState } from 'react';

import Header from '@/components/commons/header/Header';
import MobileLayout from '@/components/mobileLayout/MobileLayout';
import { CalendarBox, MovieInfoBar, TimeInfo } from '@/components/timeSelect';

const TimeSelect = () => {
  const [locs, setLocs] = useState<string[]>(['건대입구', '강동', '청량리']);

  const handleRemoveLoc = (locToRemove: string) => {
    setLocs((prevLocs) => prevLocs.filter((loc) => loc !== locToRemove));
  };

  return (
    <MobileLayout>
      <Header title="영화별 예매" />
      <main>
        <MovieInfoBar locs={locs} onDelete={handleRemoveLoc} />
        <CalendarBox />
        <TimeInfo />
      </main>
    </MobileLayout>
  );
};

export default TimeSelect;
