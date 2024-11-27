import styled from '@emotion/styled';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import useCalendar from '@/hooks/useCalendar';

import { getDayClassName, getTileClassName, getWeekday, isToday } from '@/utils/calendarUtils';

interface CalendarTileProperties {
  date: Date;
  view: 'month' | 'year' | 'decade' | 'century';
}

const CalendarBox = () => {
  // 서버의 값과 동기화를 위해, 오늘 날짜를 11월 5일로 설정!
  const today = new Date(2024, 10, 5);
  const { selectDate, handleBtnClick } = useCalendar(today);

  // 캘린더 하단의 요일 출력 로직 (오늘, 화, 수, .., 일)
  const tileContent = ({ date, view }: CalendarTileProperties) => {
    if (view !== 'month') return null;
    if (isToday(date, today)) return <S.Weekday className="today">오늘</S.Weekday>;
    const weekday = getWeekday(date);
    return <S.Weekday className={getDayClassName(date, today)}>{weekday}</S.Weekday>;
  };

  return (
    <S.Wrapper>
      <S.Title>11월</S.Title>
      <S.Scrollable>
        <Calendar
          calendarType="gregory"
          view="month"
          defaultValue={today}
          defaultActiveStartDate={today}
          activeStartDate={today}
          showNavigation={false}
          formatDay={(_, date) => `${date.getDate()}`} // 날짜만 출력
          tileClassName={({ date }) => getTileClassName(date, today, selectDate)}
          tileContent={tileContent} // 날짜 아래에 요일 추가
          onClickDay={handleBtnClick}
        />
      </S.Scrollable>
    </S.Wrapper>
  );
};

export default CalendarBox;

const S = {
  Wrapper: styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    height: auto;
    padding: 0 0.6rem 0.7rem 0.6rem;
    background-color: ${({ theme }) => theme.colors.GRAY13};
  `,

  Title: styled.h1`
    padding: 0.6rem 1.8rem 0.4rem 1.8rem;
    ${({ theme }) => theme.typographies.r_body03_bold}
    color: ${({ theme }) => theme.colors.WHITE100};
  `,

  Scrollable: styled.div`
    overflow-x: auto;
    width: 100%;
    height: auto;

    .react-calendar__month-view__days {
      display: flex !important;
      flex-wrap: nowrap !important; // 가로 스크롤 가능하게끔 nowrap으로 설정
    }

    .react-calendar__month-view__weekdays {
      display: none !important;
    }

    .react-calendar {
      width: auto;
      background: none;
      border: none;
    }

    .react-calendar__tile {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 6rem;
      height: 6rem;
      border-radius: 0.5rem;
      background-color: ${({ theme }) => theme.colors.GRAY01};
      flex-shrink: 0;

      &.hidden {
        display: none !important;
      }

      & abbr {
        padding: 0.4rem 0.1rem 0.6rem 0;
        border-radius: 4rem;
        width: 3rem;
        display: flex;
        justify-content: center;
      }

      &.saturday {
        color: ${({ theme }) => theme.colors.BLUE01} !important;
      }

      &.sunday {
        color: ${({ theme }) => theme.colors.RED01}!important;
      }
    }

    button {
      gap: 0.4rem;
      ${({ theme }) => theme.typographies.n_head03_bold}
      background: none !important;
      color: #fff !important;

      &.selected > abbr {
        color: ${({ theme }) => theme.colors.WHITE100};
        background-color: ${({ theme }) => theme.colors.RED02};
      }
    }
  `,

  Weekday: styled.div`
    color: ${({ theme }) => theme.colors.GRAY01};
    ${({ theme }) => theme.typographies.n_body03_reg}

    &.saturday {
      color: ${({ theme }) => theme.colors.BLUE01};
    }

    &.sunday {
      color: ${({ theme }) => theme.colors.RED01};
    }
  `,
};
