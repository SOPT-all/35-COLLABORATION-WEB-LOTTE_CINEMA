import { MovieListType } from '../data';

// 선택한 영화의 정보를 담은 타입
export interface SelectedMovieType {
  title: string;
  rating: string;
  showtime: number;
  movieId: number;
}

// 영화 시작 + 영화 끝 시간 타입
export interface TimeRangeType {
  beginTime: string;
  endTime: string;
}

export interface CalendarTileProperties {
  date: Date;
  view: 'month' | 'year' | 'decade' | 'century';
}

export interface CalendarPropType {
  handleBtnClick: (date: Date) => void;
  selectDate: Date;
}

// Time 내부 Info의 공통 타입 (영화관 / 선택된 영화제목 / 선택된 영화날짜 / 선택된 영화상세정보)
export interface TimeInfoBaseType {
  locs: string[];
  selectTitle?: string;
  selectDate: Date;
  selectedMovie: SelectedMovieType;
}

// TimeTable 관련 타입 (상영관별 시간과 상영관 정보)
export interface TimeTablePropType extends TimeInfoBaseType {
  num: number;
  info: {
    name: string;
    subname: string;
    description: string;
    timesList: TimeRangeType[];
  };
}

// TimeCard 관련 타입
export interface TimeCardPropType {
  timesList: TimeRangeType;
  allTimeList: TimeRangeType[];
  theater: string;
  loc: string;
  subTheaterInfo: string;
  selectDate: Date;
  selectedMovie: SelectedMovieType;
}

// MovieInfoBar 관련 타입
export interface MovieInfoBarProps {
  onDelete: (loc: string) => void;
  setSelectTitle: (value: string) => void;
  data: MovieListType[] | undefined;
  handleMovieSelect: (movie: MovieListType) => void;
  selectTitle?: string;
  selectedMovie: SelectedMovieType;
  locs: string[];
}
