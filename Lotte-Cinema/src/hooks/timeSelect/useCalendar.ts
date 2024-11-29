import { useState } from 'react';

const useCalendar = (initialDate: Date) => {
  const [selectDate, setSelectDate] = useState<Date>(initialDate);

  const handleBtnClick = (date: Date) => {
    setSelectDate(date);
  };

  return {
    selectDate,
    handleBtnClick,
  };
};

export default useCalendar;
