import CinemaTypeBar from './atom/CinemaTypeBar';
import MovieTimeBox from './atom/MovieTimeBox';
import TimeTypeBar from './atom/TimeTypeBar';

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
