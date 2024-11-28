import { UseMutationResult, UseQueryResult, useMutation, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { queryClient } from '@/hooks/queryClient';

import { getSeatInfo, postReserve } from '@/apis/seatReservation';

import { SeatListType } from '@/types/data';

export const useSeatInfoQuery = (movieId: number): UseQueryResult<SeatListType, AxiosError> => {
  return useQuery({
    queryKey: ['seatInfo', movieId],
    queryFn: () => getSeatInfo(movieId),
  });
};

export const useReserveMutation = (
  movieId: number,
  seats: number[],
): UseMutationResult<SeatListType, AxiosError, { movieId: number; seats: number[] }> => {
  return useMutation({
    mutationFn: ({ movieId, seats }) => postReserve(movieId, seats),
    onSuccess: (data) => {
      console.log('요청 성공!', data);
      //TODO: API 다 연결하고 main꺼 쿼리키 추가
      queryClient.invalidateQueries({});
    },
    onError: (error) => {
      console.error('예약 실패:', error);
    },
  });
};
