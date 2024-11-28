import { AxiosError } from 'axios';

import END_POINTS from '@/constants/api';

import { axiosInstance } from '../axiosInstance';

type getListProp = {
  filter: string;
};

const getPopularList = async ({ filter }: getListProp) => {
  try {
    const res = await axiosInstance.get(END_POINTS.POPULAR_LIST(filter));
    console.log(res.data.data.movieList);
    return res.data.data.movieList;
  } catch (err) {
    if (err instanceof AxiosError) {
      const res = err.response;
      if (res) console.log(res);
    }
    throw err;
  }
};

export default getPopularList;
