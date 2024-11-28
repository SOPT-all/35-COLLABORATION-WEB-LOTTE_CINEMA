import END_POINTS from '@/constants/api';

import { axiosInstance } from '../axiosInstance';

export const getDetailRegions = async (regionId: number) => {
  const { data } = await axiosInstance.get(END_POINTS.REGION_THEATER(regionId));
  return data;
};
