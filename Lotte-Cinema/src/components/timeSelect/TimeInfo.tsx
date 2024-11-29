import { TimeInfoBaseType } from '@/types/timeSelect';

import { CinemaTypeBar, TimeTypeBar } from './atom/bar';
import MovieTimeBox from './atom/infoBox/MovieTimeBox';

// "상영관 타입바 / 상영시간 타입바 / 상영관별 시간 박스"를 담은 컴포넌트
const TimeInfo = ({ locs, selectTitle, selectDate, selectedMovie }: TimeInfoBaseType) => {
  return (
    <>
      <CinemaTypeBar />
      <TimeTypeBar />
      <MovieTimeBox locs={locs} selectTitle={selectTitle} selectDate={selectDate} selectedMovie={selectedMovie} />
    </>
  );
};

export default TimeInfo;
