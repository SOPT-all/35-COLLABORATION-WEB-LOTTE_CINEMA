import { useState } from 'react';

const useCalendar = (initialDate: Date) => {
  const [selectDate, setSelectDate] = useState<Date>(initialDate);

  const handleBtnClick = (date: Date) => {
    setSelectDate(date);
    console.log(date); // TODO 명세서 보고 날짜 포멧팅
  };

  return {
    selectDate,
    handleBtnClick,
  };
};

export default useCalendar;
