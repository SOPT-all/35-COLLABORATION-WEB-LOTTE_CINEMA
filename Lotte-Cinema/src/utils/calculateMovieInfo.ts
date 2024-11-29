export const formatDate = (date: Date) => {
  const dayNames = ['일', '월', '화', '수', '목', '금', '토'];
  const year = String(date.getFullYear()).slice(2);
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const dayOfWeek = dayNames[date.getDay()];

  return `${year}.${month}.${day} (${dayOfWeek})`;
};

export const calculateDuration = (beginTime: string, endTime: string): number => {
  const [beginHours, beginMinutes] = beginTime.split(':').map(Number);
  const [endHours, endMinutes] = endTime.split(':').map(Number);

  const begin = beginHours * 60 + beginMinutes;
  let end = endHours * 60 + endMinutes;

  // 다음날로 넘어가는 경우
  if (end < begin) {
    end += 24 * 60; // 24시간을 추가
  }

  return end - begin;
};
