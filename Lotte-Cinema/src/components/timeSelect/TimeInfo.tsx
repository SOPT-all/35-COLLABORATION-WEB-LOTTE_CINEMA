import { CinemaTypeBar, TimeTypeBar } from './atom/bar';
import MovieTimeBox from './atom/infoBox/MovieTimeBox';

type Prop = {
  locs: string[];
};

// "상영관 타입바 / 상영시간 타입바 / 상영관별 시간 박스"를 담은 컴포넌트입니다.
const TimeInfo = ({ locs }: Prop) => {
  return (
    <>
      <CinemaTypeBar />
      <TimeTypeBar />
      <MovieTimeBox locs={locs} />
    </>
  );
};

export default TimeInfo;
