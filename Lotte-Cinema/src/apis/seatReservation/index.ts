import { axiosInstance } from '@/apis/axiosInstance';

import END_POINTS from '@/constants/api';

export const getSeatInfo = async (movieId: number) => {
  const response = await axiosInstance.get(END_POINTS.SEAT_INFO(movieId));
  return response.data;
};

export const postReserve = async (movieId: number, seats: number[]) => {
  const response = await axiosInstance.post(END_POINTS.RESERVE, {
    movieId,
    seats,
  });
  return response.data;
};
