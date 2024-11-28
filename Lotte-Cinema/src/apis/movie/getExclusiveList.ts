import END_POINTS from '@/constants/api';

import { axiosInstance } from '../axiosInstance';

const getExclusiveList = async () => {
  const res = await axiosInstance.get(END_POINTS.EXLUSIVE_LIST);
  return res.data.data.movieList;
};

export default getExclusiveList;
