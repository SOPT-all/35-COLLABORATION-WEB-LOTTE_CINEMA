import { CinemaTypeBar, TimeTypeBar } from './atom/bar';
import MovieTimeBox from './atom/infoBox/MovieTimeBox';

// "상영관 타입바 / 상영시간 타입바 / 상영관별 시간 박스"를 담은 컴포넌트입니다.
const TimeInfo = () => {
  return (
    <>
      <CinemaTypeBar />
      <TimeTypeBar />
      <MovieTimeBox />
    </>
  );
};

export default TimeInfo;
