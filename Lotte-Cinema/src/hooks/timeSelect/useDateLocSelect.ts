import { useState } from 'react';

import useCalendar from './useCalendar';

const useDateLocSelect = (today: Date) => {
  const [locs, setLocs] = useState<string[]>(['건대입구', '강동', '청량리']);
  const [selectTitle, setSelectTitle] = useState('청설');

  const { selectDate, handleBtnClick } = useCalendar(today);

  const handleRemoveLoc = (loctoDelete: string) => {
    if (locs.length > 1) {
      setLocs((prev) => prev.filter((loc) => loc !== loctoDelete));
    } else {
      alert('하나 이상의 상영권을 선택해주세요!');
    }
  };
  return { selectDate, handleBtnClick, selectTitle, setSelectTitle, locs, setLocs, handleRemoveLoc };
};

export default useDateLocSelect;
