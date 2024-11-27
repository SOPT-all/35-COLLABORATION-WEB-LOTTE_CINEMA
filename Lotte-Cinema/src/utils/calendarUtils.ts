// 날짜 블록이 오늘인지 판별하는 함수
export const isToday = (date: Date, today: Date): boolean => date.toDateString() === today.toDateString();

// 캘린더 형식을 지정하는 함수 (요일 -> 한국어로 짧게 포멧팅 )
export const getWeekday = (date: Date): string => new Intl.DateTimeFormat('ko-KR', { weekday: 'short' }).format(date);

// 토요일과 일요일에는 추가적 스타일링을 위한 클래스네임을 추가하고, 오늘인지를 판별하기 위해 "today" 클래스를 넣어주는 함수
export const getDayClassName = (date: Date, today: Date): string => {
  if (isToday(date, today)) return 'today';
  const day = date.getDay();
  if (day === 0) return 'sunday';
  if (day === 6) return 'saturday';
  return '';
};

// 날짜에 해당하는 클래스 이름을 반환하는 함수
export const getTileClassName = (date: Date, today: Date, selectDate: Date): string => {
  if (date < today) return 'hidden';

  if (selectDate && date.toDateString() === selectDate.toDateString()) {
    return 'selected';
  }

  return getDayClassName(date, today);
};
