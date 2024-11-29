import END_POINTS from '@/constants/api';

import { axiosInstance } from '../axiosInstance';

type MovieTimeType = {
  theaterCount: number;
};

const getMovieTime = async ({ theaterCount }: MovieTimeType) => {
  const res = await axiosInstance.get(END_POINTS.SCREEN_TIME(theaterCount));
  return res.data.data;
};

export default getMovieTime;
