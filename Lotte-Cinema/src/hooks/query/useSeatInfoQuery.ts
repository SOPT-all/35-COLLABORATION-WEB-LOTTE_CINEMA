import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { getSeatInfo } from '@/apis/seatReservation';

import { SeatListType } from '@/types/data';

export const useSeatInfoQuery = (movieId: number) => {
  const { data: seatInfoData } = useQuery<SeatListType, AxiosError>({
    queryKey: ['seatInfo', movieId],
    queryFn: () => getSeatInfo(movieId),
  });
  return seatInfoData;
};
