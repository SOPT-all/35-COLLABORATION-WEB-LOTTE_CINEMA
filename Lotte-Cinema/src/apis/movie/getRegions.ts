import END_POINTS from '@/constants/api';

import { axiosInstance } from '../axiosInstance';

export const getRegions = async () => {
  const { data } = await axiosInstance.get(END_POINTS.REGION);
  return data;
};
