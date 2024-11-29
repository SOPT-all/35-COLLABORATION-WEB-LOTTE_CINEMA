import END_POINTS from '@/constants/api';

import { axiosInstance } from '../axiosInstance';

type getListProp = {
  filter: string;
};

const getPopularList = async ({ filter }: getListProp) => {
  const res = await axiosInstance.get(END_POINTS.POPULAR_LIST(filter));
  return res.data.data.movieList;
};

export default getPopularList;
